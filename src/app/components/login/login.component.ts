import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = this.fb.group({
      username: this.fb.control('', Validators.required),
      password: this.fb.control('', Validators.required)
    }
  );

  constructor(private fb: FormBuilder, private router: Router, private authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.loginForm);
    if (this.loginForm.valid) {
      let credentials = this.getCredentials();
      this.authenticationService.login(credentials).subscribe((result) => {
        if (result) {
          this.router.navigate(['home']);
        } else {
          alert("Wrong credentials");
        }
      });
    }
  }

  private getCredentials(): any {
    return {
      username: this.loginForm.get('username')?.value,
      password: this.loginForm.get('password')?.value
    }
  }
}
