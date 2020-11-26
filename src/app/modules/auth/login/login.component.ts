import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';


import {
  AuthUserSignInModel,
  CaptchaModel,
  CoreAuthService,
} from 'ntk-cms-api';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  model: AuthUserSignInModel = new AuthUserSignInModel();
  captchaModel: CaptchaModel = new CaptchaModel();


  defaultAuth: any = {
    email: 'example@cms.com',
    password: 'cms',
  };
  loginForm: FormGroup;
  hasError: boolean;
  returnUrl: string;
  isLoading$: Observable<boolean>;


  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private coreAuthService: CoreAuthService) {
  }

  ngOnInit(): void {
    this.onCaptchaOrder();
    this.initForm();
  }

  get f(): any {
    return this.loginForm.controls;
  }

  initForm(): void {
    this.loginForm = this.fb.group({
      captchaText: new FormControl(null),
      email: [
        this.defaultAuth.email,
        Validators.compose([
          Validators.required,
          Validators.email,
          Validators.minLength(3),
          Validators.maxLength(320), // https://stackoverflow.com/questions/386294/what-is-the-maximum-length-of-a-valid-email-address
        ]),
      ],
      password: [
        this.defaultAuth.password,
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100),
        ]),
      ],
    });
  }

  submit(): void {


  }

  onCaptchaOrder(): void {
    this.model.CaptchaText = '';
    this.coreAuthService.ServiceCaptcha().subscribe(
      (next) => {
        this.captchaModel = next.Item;
      },
      () => {
      }
    );
  }
}
