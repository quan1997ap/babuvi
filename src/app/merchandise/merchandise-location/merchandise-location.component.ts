import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from "primeng/components/common/api";
import { Merchandise } from "./../../model/ro/order-detail.model";
import { distinctUntilChanged } from "rxjs/operators";
import { debounceTime } from "rxjs/operators";
import { MerchandiseServices } from "app/services/merchandise.services";
import { AudioService } from "app/common/audio.service";
import { DialogService } from "primeng/api";
import { FormBuilder } from "@angular/forms";
import { FormGroup } from "@angular/forms";
import { Component, OnInit, ViewChild } from "@angular/core";
import { Table } from "primeng/table";
import { ConfirmationService } from "primeng/api";

@Component({
  selector: "app-merchandise-location",
  templateUrl: "./merchandise-location.component.html",
  styleUrls: ["./merchandise-location.component.scss"],
})
export class MerchandiseLocationComponent implements OnInit {
  cols = [
    { field: "merchandiseCode", header: "Mã kiện hàng" },
    { field: "shelfPosition", header: "Vị trí kệ" },
    { field: "action", header: "Action" },
  ];
  merchandises: Merchandise[] = [];
  searchForm: FormGroup;
  isCheckAll: boolean;
  countExistItem = 0;
  filterGlobalTxt = '';
  @ViewChild("dt") public dataTable: Table;

  constructor(
    private formBuilder: FormBuilder,
    public dialogService: DialogService,
    private audioService: AudioService,
    private merchandiseServices: MerchandiseServices,
    private messageService: MessageService,
    private confirm: ConfirmationService,
    private spinner: NgxSpinnerService
  ) {
    this.searchForm = this.formBuilder.group({
      shelfPosition: "",
      merchandiseId: "",
    });
  }

  ngOnInit() {
    let merchandiseIdCtrl = this.searchForm.controls["merchandiseId"];
    merchandiseIdCtrl.valueChanges
      .pipe(debounceTime(700), distinctUntilChanged())
      .subscribe(async (codeOrPosition) => {
        if (codeOrPosition) {
          this.spinner.show();
          codeOrPosition = codeOrPosition.trim();
          this.searchForm.patchValue(
            { merchandiseId: codeOrPosition },
            { emitEvent: false }
          );

          let check = this.merchandiseExistInList(codeOrPosition);

          if (check.exist) {
            this.countExistItem = check.count;
            if (check.type == "merchandiseCode") {
              this.searchForm.controls["merchandiseId"].setErrors({
                inList: true,
              });
              this.spinner.hide();
              return;
            } else if (check.type == "position") {
              let products: any[] = await this.getProduct(codeOrPosition);
              if (products && products.length) {
                let prams = {
                  target: { value: codeOrPosition },
                };
                this.filterGlobal(prams, this.dataTable);
                this.filterGlobalTxt = codeOrPosition;
                this.addProductToList(products);
              } else {
                this.searchForm.controls["merchandiseId"].setErrors({notFound: true});
              }
            }
          } else {
            let products = await this.getProduct(codeOrPosition);
            if(products && products.length ){
              this.addProductToList(products);
            } else {
              this.searchForm.controls["merchandiseId"].setErrors({notFound: true});
            }
          }
          this.spinner.hide();

        } else {
          this.searchForm.controls["merchandiseId"].setErrors(null);
          this.spinner.hide();
        }
      });
  }

  addProductToList(data) {
    data.forEach( (merchandise: Merchandise) => merchandise.selected = true );
    this.merchandises = this.merchandises.concat(data);
    this.audioService.playAudio();
    this.uniqueMerchandises();
    this.checkSelectedAll();
  }

  getProduct(codeOrPosition: string): Promise<Merchandise[]> {
    return new Promise((resolve, reject) => {
      this.merchandiseServices
        .getMerchandiseByCodeOrPosition(codeOrPosition)
        .subscribe(
          (res) => {
            // YT5404899143807
            if (
              res &&
              res.message == "successful" &&
              res.result.data &&
              res.result.data.length
            ) {
              resolve(res.result.data);
            } else {
              resolve([]);
            }
          },
          (err) => {
            resolve([]);
          }
        );
    });
  }

  filterGlobal($event, dt) {
    dt.filterGlobal($event.target.value, "contains");
  }

  uniqueMerchandises() {
    let newUniqArray = [];
    this.merchandises.forEach((merchandise: Merchandise) => {
      let newMerchandiseCodes = newUniqArray.map(
        (merchandise: Merchandise) => merchandise.merchandiseCode
      );
      if (!newMerchandiseCodes.includes(merchandise.merchandiseCode)) {
        newUniqArray.push(merchandise);
      }
    });
    this.merchandises = newUniqArray;
  }

  itemSelected() {
    this.checkSelectedAll();
  }

  checkSelectedAll(){
    if(this.merchandises.length == 0){
      this.isCheckAll = false;
      return;
    }
    let arr = this.merchandises.filter(
      (merchandise: Merchandise) => merchandise.selected == true
    );
    if (arr && arr.length && arr.length == this.merchandises.length) {
      this.isCheckAll = true;
      return;
    } else {
      this.isCheckAll = false;
      return;
    }
  }

  merchandiseExistInList(merchandiseCodeOrPosition) {
    let merchandiseCodeExist = this.merchandises.filter(
      (merchandise: any) =>
        merchandise.merchandiseCode == merchandiseCodeOrPosition
    );

    let positionExist = this.merchandises.filter(
      (merchandise: any) =>
        merchandise.shelfPosition == merchandiseCodeOrPosition
    );

    if (merchandiseCodeExist.length) {
      return {
        exist: true,
        type: "merchandiseCode",
        count: merchandiseCodeExist.length,
      };
    } else if (positionExist.length) {
      return {
        exist: true,
        type: "position",
        count: positionExist.length,
      };
    } else {
      return { exist: false };
    }
  }

  isControlHasError(controlName: string, validationType: string): boolean {
    const control = this.searchForm.controls[controlName];
    if (!control) {
      return false;
    }

    const result =
      control.hasError(validationType) && (control.dirty || control.touched);
    return result;
  }

  removeMerchandise(index) {
    this.confirm.confirm({
      message: "Are you sure that you want to perform this action?",
      accept: () => {
        this.merchandises.splice(index, 1);
        this.checkSelectedAll();
      },
    });
  }

  checkAll(checkAll: boolean) {
    this.merchandises.forEach(
      (merchandise: Merchandise) => (merchandise.selected = checkAll)
    );
  }

  saveNewPosition() {
    let merchandisesWithNewPosition = JSON.parse(JSON.stringify(this.merchandises))
    .filter((item) => item.selected)
    .map((merchandise: any) => {
      merchandise.shelfPosition = this.searchForm.controls["shelfPosition"].value;
      return merchandise;
    });

    if ( merchandisesWithNewPosition && merchandisesWithNewPosition.length == 0 ){
      this.messageService.add({
        severity: "error",
        summary: "Error",
        detail: "Bạn vui lòng chọn ít nhất 1 kiện hàng!",
      });
      this.spinner.hide();
    }
    else if (this.searchForm.controls["shelfPosition"].value !== '') {
      this.confirm.confirm({
        message: " Bạn có muốn lưu vị trí mới cho các kiện hàng này không?",
        accept: () => {
          this.saveNewMerchandisePosition(merchandisesWithNewPosition);
        },
      });

    } else {
      this.messageService.add({
        severity: "error",
        summary: "Error",
        detail: "Bạn vui lòng nhập vị trí mới!",
      });
      this.spinner.hide();
    }

  }


  saveNewMerchandisePosition(newMerchandisesShouldUpdate: Merchandise[]){

    this.spinner.show();
    this.merchandiseServices
      .changeShelfPositionMerchandise({ lsMerchandiseWarehouse : newMerchandisesShouldUpdate } )
      .subscribe(
        (res) => {
          this.messageService.add({
            severity: "success",
            summary: "Success",
            detail: "Cập nhật vị trí thành công",
          });

          this.merchandises.forEach(
            (merchandiseItem: Merchandise) => {
              merchandiseItem.selected = false;
              newMerchandisesShouldUpdate.forEach((merchandiseNewPosition: Merchandise) => {
                if(merchandiseItem.merchandiseId == merchandiseNewPosition.merchandiseId){
                  merchandiseItem.shelfPosition = merchandiseNewPosition.shelfPosition
                }
              });
            }
          )

          this.searchForm.controls["shelfPosition"].reset();
          this.checkSelectedAll();
          this.spinner.hide();
        },
        (err) => {
          this.messageService.add({
            severity: "error",
            summary: "Error",
            detail: "Cập nhật vị trí không thành công",
          });
          this.checkSelectedAll();
          this.spinner.hide();
        },
        () => {
          this.checkSelectedAll();
          this.spinner.hide();
        }
      );
  }

  saveMerchandisePosition(merchandise){
    this.confirm.confirm({
      message: " Bạn có muốn lưu vị trí mới cho kiện hàng này không?",
      accept: () => {
        this.saveNewMerchandisePosition([merchandise])
      },
    });
  }

  clearTable() {
    this.confirm.confirm({
      message: "Bạn có muốn xóa các kiện hàng khỏi bảng?",
      accept: () => {
        this.merchandises.length = 0;
        this.searchForm.reset();
        this.checkSelectedAll();
      },
    });
  }

  clearInput(controlName: string){
    this.searchForm.controls[controlName].reset();
  }
}
