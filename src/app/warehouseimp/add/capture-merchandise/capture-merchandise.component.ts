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
  constructor(
    public ref: DynamicDialogRef, public config: DynamicDialogConfig
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
  public webcamImage: WebcamImage = null;
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
    console.info("received webcam image", webcamImage);
    this.webcamImage = webcamImage;
  }

  public cameraWasSwitched(deviceId: string): void {
    console.log("active device: " + deviceId);
    this.deviceId = deviceId;
  }

  // close
  close(){
    this.ref.close();
  }
}
