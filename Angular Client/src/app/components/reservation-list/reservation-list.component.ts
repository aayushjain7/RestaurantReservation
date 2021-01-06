import { Component, OnInit } from "@angular/core";
import { ApiService } from "../../service/api.service";
import { Reservation } from "../../model/reservation";

@Component({
  selector: "app-reservation-list",
  templateUrl: "./reservation-list.component.html",
  styleUrls: ["./reservation-list.component.css"],
})
export class ReservationListComponent implements OnInit {
  Reservations: Reservation[];
  alert = false;

  constructor(private apiService: ApiService) {
    this.alert = apiService.getAlert();
    this.readReservation();
  }

  ngOnInit() {
    this.apiService
      .getReservations()
      .subscribe((Reservations) => (this.Reservations = Reservations));
  }

  readReservation() {}

  removeReservation(res, index) {
    if (window.confirm("Comfirm Reservation Deletion.")) {
      this.apiService.deleteReservation(res._id).subscribe((data) => {
        this.alert = true;
        this.apiService.saveAlert(this.alert);
        this.Reservations.splice(index, 1);
      });
    }
  }

  closeAlert() {
    this.alert = false;
  }
}
