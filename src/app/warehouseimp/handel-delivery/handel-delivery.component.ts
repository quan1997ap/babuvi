import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-handel-delivery",
  templateUrl: "./handel-delivery.component.html",
  styleUrls: ["./handel-delivery.component.scss"],
})
export class HandelDeliveryComponent implements OnInit {
  filterByOptions = [{ label: "Theo mã phiếu", value: 1 }];
  filterForm: FormGroup;
  currentPage = 0;
  numOfItemOnPage = 5;
  requestList = [
    {
      checked: false,isCollapse: true
    },
    {
      checked: false,isCollapse: true
    },
    {
      checked: false,isCollapse: true
    },
    {
      checked: false,isCollapse: true
    },
    {
      checked: false,isCollapse: true
    },
    {
      checked: false,isCollapse: true
    },
    {
      checked: false,isCollapse: true
    },
    {
      checked: false,isCollapse: true
    },
    {
      checked: false,isCollapse: true
    },
    {
      checked: false,isCollapse: true
    },
    {
      checked: false,isCollapse: true
    },
    {
      checked: false,isCollapse: true
    },
  ];
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.filterForm = new FormGroup({
      id: new FormControl("", [Validators.required]),
      filterBy: new FormControl("", [Validators.required]),
    });
  }
  filterData(){
    console.log(this.filterForm.getRawValue())
  }
  print() {}
  start() {}
  finish() {}
  stop() {}

  onPageChange($event){
    this.currentPage = $event.page;
    window.scrollTo(0, 0);
  }
}
