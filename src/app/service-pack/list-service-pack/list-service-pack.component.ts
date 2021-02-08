import { ServicePackService } from './../../services/service-pack.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DetailServicePackComponent } from './../detail-service-pack/detail-service-pack.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-service-pack',
  templateUrl: './list-service-pack.component.html',
  styleUrls: ['./list-service-pack.component.scss'],
  providers: []
})
export class ListServicePackComponent implements OnInit {

  constructor(public dialog: MatDialog, public servicePackService: ServicePackService) { }

  ngOnInit() {
    this.servicePackService.getLsServicePackByUser(1, 10).subscribe( resServicePack => {
      console.log(resServicePack)
    })
  }

  viewDetailServicePack() {
    let dialogRef = this.dialog.open(DetailServicePackComponent, {
      height: '400px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
