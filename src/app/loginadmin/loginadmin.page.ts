import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginadmin',
  templateUrl: './loginadmin.page.html',
  styleUrls: ['./loginadmin.page.scss'],
})
export class LoginadminPage implements OnInit {

  form = this.formBuilder.group({
    email: ['', [Validators.email, Validators.required,Validators.pattern('penguinroomoficial@gmail.com')]],
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
        this.router.navigate(['/arrendatarioprincipal'])
      })
      .catch(error =>{
        console.error(error);
      });
    } else{
      this.form.markAllAsTouched();
    }
  }

}
