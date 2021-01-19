import { MessageService } from "primeng/components/common/api";
import { FileManagerServices } from "./../../../services/fileManager.services";
import { Observable, Subject } from "rxjs";
import { Component, OnInit } from "@angular/core";
import { DynamicDialogConfig, DynamicDialogRef } from "primeng/api";
import * as _ from "lodash";
import { WebcamImage, WebcamInitError, WebcamUtil } from "ngx-webcam";

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
  public multipleWebcamsAvailable = false;
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
    WebcamUtil.getAvailableVideoInputs().then(
      (mediaDevices: MediaDeviceInfo[]) => {
        this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
      }
    );

    if (this.config && this.config.data && this.config.data.imgLinks) {
      this.webcamImages = _.cloneDeep(this.config.data.imgLinks);
    }
    if (this.config && this.config.data && this.config.data.action) {
      // 'viewImg'
      this.currentAction = this.config.data.action;
      if (this.config.data.action == "viewImg") {
        this.zoomImg(this.config.data.imgLinks[0]);
      }
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

  public showNextWebcam(directionOrDeviceId: boolean | string): void {
    // true => move forward through devices
    // false => move backwards through devices
    // string => move to device with given deviceId
    this.nextWebcam.next(directionOrDeviceId);
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
    this.ref.close(this.webcamImages);
    this.loading = false;
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


}
