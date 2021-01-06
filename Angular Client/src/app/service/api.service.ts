import { Injectable } from "@angular/core";
import { Reservation } from "../model/reservation";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { ProcessHTTPMsgService } from "./process-httpmsg.service";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  baseUri: string = "http://localhost:8080";
  headers = new HttpHeaders().set("Content-Type", "application/json");
  storeAlert = false;

  constructor(
    private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService
  ) {}

  createReservation(data): Observable<any> {
    let url = `reservations/create-reservation`;
    return this.http
      .post(url, data)
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getReservations(): Observable<Reservation[]> {
    return this.http
      .get<Reservation[]>(`reservations`)
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getReservation(id): Observable<any> {
    let url = `reservations/${id}`;
    return this.http.get(url, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {};
      }),
      catchError(this.processHTTPMsgService.handleError)
    );
  }

  updateReservation(id, data): Observable<any> {
    let url = `reservations/edit-reservation/${id}`;
    return this.http
      .put(url, data, { headers: this.headers })
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  deleteReservation(id): Observable<any> {
    let url = `reservations/delete-reservation/${id}`;
    return this.http
      .delete(url, { headers: this.headers })
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  saveAlert(alert) {
    this.storeAlert = alert;
  }
  getAlert() {
    return this.storeAlert;
  }
}
