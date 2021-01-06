import { Reservation } from "../../model/reservation";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from "../../service/api.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-reservation-edit",
  templateUrl: "./reservation-edit.component.html",
  styleUrls: ["./reservation-edit.component.css"],
})
export class ReservationEditComponent implements OnInit {
  submitted = false;
  editForm: FormGroup;
  reservationData: Reservation[];
  alert: boolean = true;

  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit() {
    this.updateReservation();
    let id = this.actRoute.snapshot.paramMap.get("id");
    this.getReservation(id);
  }

  // Getter to access form control
  get myForm() {
    return this.editForm.controls;
  }

  getReservation(id) {
    this.apiService.getReservation(id).subscribe((data) => {
      this.editForm.setValue({
        name: data["name"],
        phone: data["phone"],
        count: data["count"],
        time: data["time"],
        table: data["table"],
      });
    });
  }

  updateReservation() {
    this.editForm = this.fb.group({
      name: ["", [Validators.required]],
      phone: ["", [Validators.required]],
      count: ["", [Validators.required]],
      time: ["", [Validators.required]],
      table: ["", []],
    });
  }

  onSubmit() {
    this.submitted = true;
    this.alert = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      if (window.confirm("Confirm Reservation Updation")) {
        let id = this.actRoute.snapshot.paramMap.get("id");
        this.apiService.updateReservation(id, this.editForm.value).subscribe(
          (res) => {
            this.apiService.saveAlert(this.alert);
            this.router.navigateByUrl("/reservations-list");
            console.log("Content updated successfully!");
          },
          (error) => {
            console.log(error);
          }
        );
      }
    }
  }
}
