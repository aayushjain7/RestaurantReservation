import { Component, OnInit, NgZone } from "@angular/core";
import { AuthService } from "../service/auth.service";
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  submitted = false;
  submittedL = false;
  loginForm: FormGroup;
  signupForm: FormGroup;
  errMess: string;
  alert = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    public fb: FormBuilder,
    private ngZone: NgZone
  ) {
    this.createForm();
  }

  ngOnInit() {}

  createForm() {
    this.loginForm = this.fb.group({
      username: ["", [Validators.required]],
      password: ["", [Validators.required]],
    });
    this.signupForm = this.fb.group({
      firstname: ["", [Validators.required]],
      lastname: ["", [Validators.required]],
      username: ["", [Validators.required]],
      password: ["", [Validators.required]],
    });
  }

  get myForm() {
    return this.loginForm.controls;
  }
  get sForm() {
    return this.signupForm.controls;
  }

  onSubmit() {
    this.submittedL = true;
    console.log("User: ", this.loginForm.value);
    this.authService.logIn(this.loginForm.value).subscribe(
      (res) => {
        if (res.success) {
          this.router.navigate(["/reservations-list"]);
        } else {
          console.log(res);
        }
      },
      (error) => {
        console.log(error);
        this.errMess = error;
      }
    );
  }

  onSignup() {
    this.submitted = true;
    console.log("User: ", this.signupForm.value);
    this.authService.signUp(this.signupForm.value).subscribe(
      (res) => {
        if (res.success) {
          this.alert = true;
        } else {
          console.log(res);
        }
      },
      (error) => {
        console.log(error);
        this.errMess = error;
      }
    );
  }

  closeAlert() {
    this.alert = false;
  }
}
