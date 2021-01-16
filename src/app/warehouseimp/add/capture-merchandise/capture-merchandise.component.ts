import { MessageService } from "primeng/components/common/api";
import { FileManagerServices } from "./../../../services/fileManager.services";
import { Observable, Subject } from "rxjs";
import { WebcamImage } from "ngx-webcam";
import { Component, OnInit } from "@angular/core";
import { DynamicDialogConfig, DynamicDialogRef } from "primeng/api";
import * as _ from "lodash";

@Component({
  selector: "app-capture-merchandise",
  templateUrl: "./capture-merchandise.component.html",
  styleUrls: ["./capture-merchandise.component.scss"],
})
export class CaptureMerchandiseComponent implements OnInit {
  currentAction = "capture"; // "capture" , 'viewImg' , 'viewHistoryImg'
  currentZoomImg = null;
  loading = false;
  imgUploadType = "image/jpeg";
  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    public messageService: MessageService,
    public fileManagerServices: FileManagerServices
  ) {}

  /*
    handel camera
    DEMO: https://basst314.github.io/ngx-webcam/?
    GIT: https://github.com/basst314/ngx-webcam-demo/tree/master/src/app
  */
  public showWebcam = true;
  public allowCameraSwitch = true;
  public deviceId: string;
  public errors: any[] = [];
  // public webcamImages: WebcamImage[] = [];
  public webcamImages = [];
  private trigger: Subject<void> = new Subject<void>();
  private nextWebcam: Subject<boolean | string> = new Subject<
    boolean | string
  >();

  ngOnInit() {
    if (this.config && this.config.data && this.config.data.imgLinks) {
      this.webcamImages = _.cloneDeep(this.config.data.imgLinks);
    }
    this.autoFocusBtnSubmit();
  }

  public handleInitError(error: any): void {
    this.errors.push(error);
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  public get nextWebcamObservable(): Observable<boolean | string> {
    return this.nextWebcam.asObservable();
  }

  public triggerSnapshot(): void {
    this.trigger.next();
  }

  public toggleWebcam(): void {
    this.showWebcam = !this.showWebcam;
  }

  public handleImage(webcamImage: WebcamImage): void {
    const img = { attachLink: webcamImage.imageAsDataUrl };
    if (webcamImage) {
      this.webcamImages.push(img);
    }
  }

  public cameraWasSwitched(deviceId: string): void {
    this.deviceId = deviceId;
  }

  zoomImg(img: WebcamImage) {
    this.currentZoomImg = img;
    this.changeAction("viewImg");
  }

  changeAction(action) {
    this.currentAction = action;
  }

  removeImg(i) {
    this.webcamImages.splice(i, 1);
  }

  // close
  async uploadImgAndClose() {
    this.loading = true;
    const formData = new FormData();
    // fileNeedUpload check xem cần upload nhũng img nào. Những img đã upload thì chỉ cần lấy linklink
    let fileDontNeedUpload = [];
    let fileNeedUpload = [];
    this.webcamImages.forEach((img: any) => {
      if (img.attachLink && img.attachLink.includes("https:")) {
        fileDontNeedUpload.push(img);
      } else {
        fileNeedUpload.push(img);
      }
    });

    let uploadAllImgSuccess = true;
    for (let i = 0; i < fileNeedUpload.length; i++) {
      const uploadImgStatus = await this.uploadOneImg(
        fileNeedUpload[i].attachLink
      );
      if (uploadImgStatus) {
        fileNeedUpload[i] = Object.assign({}, uploadImgStatus);
        fileNeedUpload[i].uploadSuccess = true;
      } else {
        fileNeedUpload[i].uploadSuccess = false;
        uploadAllImgSuccess = false;
      }
    }
    this.webcamImages = fileDontNeedUpload.concat(fileNeedUpload);
    if (uploadAllImgSuccess) {
      this.messageService.add({
        key: "notificationPopup",
        severity: "success",
        summary: "Thông báo",
        detail: "Upload image thành công.",
      });
      this.ref.close(this.webcamImages);
    } else {
      this.messageService.add({
        key: "notificationPopup",
        severity: "error",
        summary: "Thông báo",
        detail:
          "Upload image không thành công. Click upload button để upload lại.",
      });
    }

    this.loading = false;
  }

  uploadOneImg(imageAsDataUrl) {
    return new Promise((resolve, reject) => {
      const formData = new FormData();
      const imgBlob = this.DataURIToBlob(imageAsDataUrl);
      const fileName = new Date().getTime();
      formData.append("file", imgBlob, fileName.toString());
      this.fileManagerServices.uploadImg(formData).subscribe(
        (resultUploadImg) => {
          if (
            resultUploadImg &&
            resultUploadImg.result &&
            resultUploadImg.result.success &&
            resultUploadImg.result.data
          ) {
            resolve(resultUploadImg.result.data);
          } else {
            resolve(false);
          }
        },
        (uploadErr) => {
          resolve(false);
        }
      );
    });
  }

  captureAndUpload() {
    this.triggerSnapshot();
    event.preventDefault();
    if (this.webcamImages && this.webcamImages.length) {
      this.uploadImgAndClose();
    } else {
      const saveBtn = document.getElementById("save-btn") as HTMLInputElement;
      saveBtn.focus();
    }
  }

  autoFocusBtnSubmit() {
    const submitBtnId = "save-btn";
    var input = document.getElementById(submitBtnId);
    input.focus();
  }


  DataURIToBlob(dataURI: string) {
    const splitDataURI = dataURI.split(",");
    const byteString =
      splitDataURI[0].indexOf("base64") >= 0
        ? atob(splitDataURI[1])
        : decodeURI(splitDataURI[1]);

    const ia = new Uint8Array(byteString.length);
    for (let i = 0; i < byteString.length; i++)
      ia[i] = byteString.charCodeAt(i);
    // { type: mimeString }
    return new Blob([ia], { type: this.imgUploadType });
  }

  public files: any[];
}
