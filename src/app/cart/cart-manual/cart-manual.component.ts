import { Component, OnInit, } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { FileManagerServices } from 'app/services/fileManager.services';
import { CartServices } from 'app/services/cart.services';

@Component({
  selector: 'app-cart-manual',
  templateUrl: './cart-manual.component.html',
  styleUrls: ['./cart-manual.component.scss'],
  providers: [
      FileManagerServices,
      CartServices
  ]
})
export class CartManualComponent implements OnInit {
  header_mock = [
    { header: "Sản phẩm", field: "sp", placeholder: "sản phẩm", width: '50%' },
    { header: "Số lượng", field: "Quantity", placeholder: "Số lượng *", width: '12%' },
    { header: "Đơn giá", field: "ItemPriceNdt", placeholder: "Đơn giá *", width: '12%' },
    { header: "Ghi chú sản phẩm", field: "Description", placeholder: "Ghi chú cho sản phẩm", width: '26%' },
  ]
  header_sub = [
    { header: "Tên sản phẩm *", field: "ItemName", placeholder: "Nhập tên sản phẩm" },
    { header: "Link sản phẩm", field: "ItemLink", placeholder: "Link sản phẩm" },
    { header: "Màu sắc, kích thước", field: "PropetiesName", placeholder: "Màu sắc, kích thước" },
  ]
  data_mock = [1]
  columns: any;
  loading: boolean = false;
  blockScreen: boolean = false;
  constructor(
    private ConfirmationService: ConfirmationService,
    private messageService: MessageService,
    private fileManagerServices: FileManagerServices,
    private cartServices: CartServices,
  ) { }

  ngOnInit() {
    this.columns = this.header_mock;
  }

  xoaDongChon(rowValue, rowIndex) {
    let inputname = 'lsImageLink' + rowValue;
    for (let i = 0; i < this.arrayContainLink.length; i++) {
      for (let key in this.arrayContainLink[i]) {
        if (key == inputname) {
          this.arrayContainLink.splice(i, 1)
        };
      }
    }
    this.data_mock.splice(rowIndex, 1)
  }
  themSP() {
    this.data_mock.push(this.getMaxNumber(this.data_mock) + 1);
  }

  getMaxNumber(num) {
    let i = 0;
    num.forEach(element => {
      if (element > i) { i = element }
    });
    return i;
  }

  formSubmit(form) {
    //Kiểm tra xem các trường có trống không, báo gồm các trường đánh dấu * và ít nhất kèm 1 ảnh
    // let count = 0;
    // this.data_mock.forEach(data => {
    //   this.arrayContainLink.forEach(e => {
    //     for (let key in e) {
    //       if (key == `lsImageLink${data}` && e[key].length == 0) { count++ }
    //     }
    //   });
    // })
    // if (form.invalid || count > 0 || this.arrayContainLink.length != this.data_mock.length) {
    //   this.messageService.add({ key: 'taodonhang', severity: 'warn', summary: 'Thông báo', detail: "Vui lòng nhập đầy đủ thông tin!" });
    //   return;
    // };
    if (form.invalid) {
      this.messageService.add({ key: 'taodonhang', severity: 'warn', summary: 'Thông báo', detail: "Vui lòng nhập đầy đủ thông tin!" });
      return;
    };

    this.ConfirmationService.confirm({
      key: "taodonhang",
      header: "Xác nhận",
      message: 'Xác nhận tạo đơn hàng mới?',
      acceptLabel: "Có",
      rejectLabel: "Không",
      accept: () => {
        this.loading = true;
        let formValue = form.value;

        //Loại bỏ những dòng trống
        let emptyLineIndex = [];
        for (let i = 0; i < this.data_mock.length; i++) {
          let count = 0;
          this.header_mock.forEach(header => {
            let name = eval(`formValue.${header.field}${this.data_mock[i]}`);
            if (name == "" || name == undefined || name == null) { count++ }
          })
          if (count == this.header_mock.length) {
            emptyLineIndex.push(i)
          }
        }
        emptyLineIndex.forEach(e => this.data_mock.splice(e, 1));
        if (this.data_mock.length == 0) {
          this.messageService.add({ key: 'taodonhang', severity: 'error', summary: 'Thông báo', detail: "Không có dữ liệu!" });
          this.loading = false;
          return;
        };

        let listItemOrder = [];
        for (let i = 0; i < this.data_mock.length; i++) {
          let perItem = {};
          this.header_mock.forEach(header => {
            if (header.field != 'sp') {
              let value = eval(`formValue.${header.field}${this.data_mock[i]}`)
              perItem[`${header.field}`] = value;
            }
          });
          this.header_sub.forEach(header => {
            let value = eval(`formValue.${header.field}${this.data_mock[i]}`)
            perItem[`${header.field}`] = value;
          });
          this.arrayContainLink.forEach(e => {
            for (let key in e) {
              if (key == `lsImageLink${this.data_mock[i]}`) { perItem[`lsImageLink`] = e[key] }
            }
          });
          listItemOrder.push(perItem)
        };
        this.cartServices.addToCardBasic({ Items: listItemOrder }).toPromise().then(data => {
          if (data.result.success) {
            form.onReset();
            this.arrayContainLink = [];
            this.data_mock = [1]
            this.loading = false;
            this.messageService.add({ key: 'taodonhang', severity: 'success', summary: 'Thông báo', detail: "Tạo đơn hàng thành công!" });
          } else {
            this.loading = false;
            this.messageService.add({ key: 'taodonhang', severity: 'error', summary: 'Thông báo', detail: data.result.message });
            return
          }
        })
      }
    })
  }

  xoaHetSP(form) {
    this.ConfirmationService.confirm({
      key: "taodonhang",
      header: "Xác nhận",
      message: 'Xóa hết toàn bộ sản phẩm?',
      acceptLabel: "Có",
      rejectLabel: "Không",
      accept: () => {
        form.onReset();
        this.data_mock = [1];
        this.arrayContainLink = [];
      }
    });
  }

  imgLink: string;
  arrayContainLink: any = [];
  keyUpFindHandle(e, panel) {
    if (e.keyCode == 13) {
      panel.hide();
    }
  }

  fileUpload: string = "";
  arrayContainDataForShow: any = [{ attachLink: '', attachName: '' }];
  onChangeImage(e) {
    if (e.target.files[0] == undefined) {
    } else {
      this.fileUpload = e.target.files[0];
    }
  }

  setValueWhenShow(rowValue) {
    let inputname = 'lsImageLink' + rowValue;
    let count = 0
    this.arrayContainLink.forEach(e => {
      for (let key in e) {
        if (key == inputname) {
          this.arrayContainDataForShow = e[inputname];
          count++;
        }
      }
    })
    if (count == 0) { this.arrayContainDataForShow = [{ attachLink: '', attachName: '' }]; }
  }

  AddAttachFile(panel, rowValue) {
    let inputname = 'lsImageLink' + rowValue;
    this.loading = true;
    let formdat = new FormData();
    formdat.append('file', this.fileUpload)
    this.blockScreen = true;
    this.fileManagerServices.uploadImg(formdat).toPromise().then(data => {
      if (data.result.success) {
        /* Thuât toán 
        - tạo biến đến bằng 0;
        - Kiểm tra xem trang mảng arrayContainLink đã có object chứa {lsImageLink[số hàng]} chưa
        - Chưa có thì push object { lsImageLink[số hàng] : [emptyArray] } vào mảng arrayContainlink. để sau này map link theo
        object này.
        - Nếu đã có rồi thì thôi. sau đó đẩy link +tên vào [emptyArray]*/
        let count = 0;
        this.arrayContainLink.forEach(element => {
          for (let key in element) {
            if (key == inputname) { count++ }
          }
        });
        if (count == 0) { this.arrayContainLink.push(JSON.parse(`{"${inputname}":[]}`)) }
        this.arrayContainLink.forEach(element => {
          for (let key in element) {
            if (key == inputname) {
              element[key].push( data.result.data );
            }
          }
        });
        this.arrayContainLink.forEach(e => {
          for (let key in e) {
            if (key == inputname) { this.arrayContainDataForShow = e[inputname] }
          }
        })
        this.loading = false;
        this.blockScreen = false;
        (document.getElementById("attackData") as HTMLInputElement).value = ""
      } else {
        this.blockScreen = false;
        this.loading = false;
        this.messageService.add({ key: 'taodonhang', severity: 'error', summary: 'Thông báo', detail: data.result.message });
      }
    })
  }

  deleteImage(rowValue, k) {
    let inputname = 'lsImageLink' + rowValue;
    this.arrayContainLink.forEach(e => {
      for (let key in e) {
        if (key == inputname) {
          e[inputname].splice(k, 1);
          this.arrayContainDataForShow = e[inputname]
        };
      }
    })
  }

  countImage(rowValue) {
    let inputname = 'lsImageLink' + rowValue;
    let valuereturn = 0;
    this.arrayContainLink.forEach(e => {
      for (let key in e) {
        if (key == inputname) {
          if (e[inputname].length != 0) { valuereturn = e[inputname].length }
          else { valuereturn = 0 }

        };
      }
    })
    return valuereturn;
  }

  get1stImg(rowValue) {
    let inputname = 'lsImageLink' + rowValue;
    let valuereturn = null;
    this.arrayContainLink.forEach(e => {
      for (let key in e) {
        if (key == inputname) {
          valuereturn = e[inputname][0].attachLink
        };
      }
    })
    return valuereturn;
  }

  returnName(name: string) {
    let returnValue: string;
    if (name == undefined) { return "" }
    if (name.length > 25) { returnValue = name.slice(0, 25) + '....' }
    else { returnValue = name }
    return returnValue;
  }
}