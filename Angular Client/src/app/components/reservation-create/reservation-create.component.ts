import { Router } from "@angular/router";
import { ApiService } from "../../service/api.service";
import { Component, OnInit, NgZone } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-reservation-create",
  templateUrl: "./reservation-create.component.html",
  styleUrls: ["./reservation-create.component.css"],
})
export class ReservationCreateComponent implements OnInit {
  submitted = false;
  reservationForm: FormGroup;
  alert = false;

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService
  ) {
    this.createForm();
  }

  ngOnInit() {}

  createForm() {
    this.reservationForm = this.fb.group({
      name: ["", [Validators.required]],
      phone: ["", [Validators.required, Validators.pattern]],
      count: ["", [Validators.required]],
      time: ["", [Validators.required]],
      table: ["", []],
    });
  }

  get myForm() {
    return this.reservationForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    this.alert = true;
    if (!this.reservationForm.valid) {
      return false;
    } else {
      this.apiService.createReservation(this.reservationForm.value).subscribe(
        (res) => {
          console.log("Reservation successfully created!");
          this.apiService.saveAlert(this.alert);
          this.ngZone.run(() =>
            this.router.navigateByUrl("/reservations-list")
          );
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
