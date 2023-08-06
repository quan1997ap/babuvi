import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { CaptureMerchandiseComponent } from './add/capture-merchandise/capture-merchandise.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { WebcamModule } from "ngx-webcam";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

@NgModule({
 imports:      [ CommonModule, WebcamModule, MatProgressSpinnerModule, FormsModule, ButtonModule],
 declarations: [ CaptureMerchandiseComponent ],
 exports:      [ CaptureMerchandiseComponent, CommonModule, MatProgressSpinnerModule ],
 entryComponents: [CaptureMerchandiseComponent]
})
export class CaptureMerchandiseShareModule { }