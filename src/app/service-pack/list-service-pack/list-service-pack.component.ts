import { DetailServicePackComponent } from './../detail-service-pack/detail-service-pack.component';
import { DialogService } from 'primeng/api';
import { ServicePackService } from './../../services/service-pack.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-service-pack',
  templateUrl: './list-service-pack.component.html',
  styleUrls: ['./list-service-pack.component.scss'],
  providers: []
})
export class ListServicePackComponent implements OnInit {
  pageSize= 100;
  pageIndex = 1;
  constructor(
    private servicePackService: ServicePackService,
    public dialogService: DialogService
  ) { }

  ngOnInit() {
    this.servicePackService.getLsServicePackByUser(this.pageIndex, this.pageSize).subscribe(res => {
      console.log(res)
    })
  }

  viewDetailServicePack() {
    const ref = this.dialogService.open(DetailServicePackComponent, {
      data: { },
      header: "Chi tiết gói dịch vụ",
      width: "70%",
    });
  }
}
