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
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.filterForm = new FormGroup({
      id: new FormControl("", [Validators.required]),
      filterBy: new FormControl("", [Validators.required]),
    });
  }
  print() {}
  start() {}
  finish() {}
  stop() {}
}
