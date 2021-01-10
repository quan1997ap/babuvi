import { FileManagerServices } from "./../../../services/fileManager.services";
import { Observable, Subject } from "rxjs";
import { WebcamImage } from "ngx-webcam";
import { Component, OnInit } from "@angular/core";
import { DynamicDialogConfig, DynamicDialogRef } from "primeng/api";

@Component({
  selector: "app-capture-merchandise",
  templateUrl: "./capture-merchandise.component.html",
  styleUrls: ["./capture-merchandise.component.scss"],
})
export class CaptureMerchandiseComponent implements OnInit {
  currentAction = "capture"; // "capture" / 'viewImg'
  currentZoomImg = null;
  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    public fileManagerServices: FileManagerServices
  ) {}

  ngOnInit() {}

  /*
    handel camera
    DEMO: https://basst314.github.io/ngx-webcam/?
    GIT: https://github.com/basst314/ngx-webcam-demo/tree/master/src/app
  */
  public showWebcam = true;
  public allowCameraSwitch = true;
  public deviceId: string;
  public errors: any[] = [];
  public webcamImages: WebcamImage[] = [];
  private trigger: Subject<void> = new Subject<void>();
  private nextWebcam: Subject<boolean | string> = new Subject<
    boolean | string
  >();

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
    // console.info("received webcam image", webcamImage);
    if (webcamImage) {
      this.webcamImages.push(webcamImage);
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
  close() {
    const formData = new FormData();
    for (const file of this.webcamImages) {
      // var imgBlob = new Blob([file.imageAsDataUrl], { type: "image/jpg" });
      const imgBlob = this.DataURIToBlob(file.imageAsDataUrl);
      formData.append("file", imgBlob, "image.jpg");
    }

    this.fileManagerServices.uploadImg(formData).subscribe((res) => {
      console.log(res);
    });
    // this.ref.close();
  }

  DataURIToBlob(dataURI: string) {
    const splitDataURI = dataURI.split(",");
    const byteString =
      splitDataURI[0].indexOf("base64") >= 0
        ? atob(splitDataURI[1])
        : decodeURI(splitDataURI[1]);
    const mimeString = splitDataURI[0].split(":")[1].split(";")[0];

    const ia = new Uint8Array(byteString.length);
    for (let i = 0; i < byteString.length; i++)
      ia[i] = byteString.charCodeAt(i);

    return new Blob([ia], { type: mimeString });
  }

  public files: any[];

  onFileChanged(event: any) {
    console.log(event.target.files);
    this.files = event.target.files;
  }

  onUpload() {
    const formData = new FormData();
    for (const file of this.files) {
      formData.append("file", file, file.name);
    }
    this.fileManagerServices.uploadImg(formData).subscribe((res) => {
      console.log(res);
    });
  }
}
