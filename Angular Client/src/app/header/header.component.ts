import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { AuthService } from "../service/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  subscription: Subscription;
  username: string = undefined;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authService.loadUserCredentials();
    this.subscription = this.authService.getUsername().subscribe((name) => {
      console.log(name);
      this.username = name;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  logOut() {
    this.username = undefined;
    this.authService.logOut();
    this.router.navigate(["/auth"]);
  }
}
