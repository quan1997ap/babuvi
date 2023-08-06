import { MessageService } from "primeng/components/common/api";
import { FileManagerServices } from "./../../../services/fileManager.services";
import { Observable, Subject } from "rxjs";
import { Component, OnInit, OnDestroy, ChangeDetectorRef } from "@angular/core";
import { DynamicDialogConfig, DynamicDialogRef } from "primeng/api";
import * as _ from "lodash";
import { WebcamImage, WebcamInitError, WebcamUtil } from "ngx-webcam";

@Component({
  selector: "app-capture-merchandise",
  templateUrl: "./capture-merchandise.component.html",
  styleUrls: ["./capture-merchandise.component.scss"],
})
export class CaptureMerchandiseComponent implements OnInit, OnDestroy {
  width = screen.width < 640 ? Number(screen.width) : 640;
  height = screen.height < 550 ? Number(screen.height) : 550;
  currentAction = "capture"; // "capture" , 'viewImg' , 'viewHistoryImg'
  currentZoomImg = null;
  loading = false;
  imgUploadType = "image/jpeg";
  refreshingImg = false;
  public multipleWebcamsAvailable = false;
  
  constructor(
    public cdr: ChangeDetectorRef,
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
  public webcamImages = [];
  private trigger: Subject<void> = new Subject<void>();
  private nextWebcam: Subject<boolean | string> = new Subject<
    boolean | string
  >();

  ngOnInit() {
    // let constraints = { video: true, audio: true };
    // navigator.mediaDevices.getUserMedia(constraints)
    //   .then(stream => { console.log('get perm success')} )
    //   .catch(e => console.error(e));

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
      if (this.currentAction == "viewImg") {
        this.zoomImg(this.config.data.imgLinks[0]);
      }
      if (this.currentAction == "viewHistoryImg") {
        this.zoomImg(this.config.data.imgLinks[0], "viewHistoryImg");
      }
    }
    this.autoFocusBtnSubmit();
    this.cdr.detectChanges();
  }

  refreshImageAttachFile() {
    this.refreshingImg = true;
    if (this.config.data.imgLinks.length) {
      this.fileManagerServices
        .refreshImageAttachFile(this.config.data.imgLinks)
        .subscribe(
          (resRefreshImage) => {
            if (resRefreshImage && resRefreshImage.result.success) {
              if (
                resRefreshImage.result.data &&
                resRefreshImage.result.data.length
              ) {
                this.webcamImages = resRefreshImage.result.data;
                this.currentZoomImg = this.webcamImages[0];
              }
            }
            this.refreshingImg = false;
          },
          (err) => {
            this.refreshingImg = false;
          }
        );
    }
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
    this.cdr.detectChanges();
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
    this.cdr.detectChanges();
    this.deviceId = deviceId;
  }

  zoomImg(img: WebcamImage, action?) {
    this.currentZoomImg = img;
    if (action) {
      this.changeAction(action);
    } else {
      if (this.currentAction !== "viewHistoryImg") {
        this.changeAction("viewImg");
      }
    }
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
    var saveBtn = document.getElementById(submitBtnId);
    saveBtn.focus();
  }

  ngOnDestroy() {}

  closeViewHistoryImg() {
    this.ref.close(this.webcamImages);
  }

}
