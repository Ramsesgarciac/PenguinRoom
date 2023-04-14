import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form = this.formBuilder.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  login(){
    if(this.form.valid){
      const {email, password} = this.form.getRawValue();
      console.log(email, password);
      this.auth.login(email, password)
      .then((user)=>{
        this.router.navigate(['/homes'])
      })
      .catch(error =>{
        console.error(error);
      });
    } else{
      this.form.markAllAsTouched();
    }
  }

}
