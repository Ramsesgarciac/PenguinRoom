import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  resultado!: string;

  form = this.formBuilder.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required, Validators.minLength(8),  Validators.maxLength(12)]],
  })

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  register(){
    if(this.form.valid){
      const { email, password } = this.form.getRawValue();
      console.log(email, password);
      console.log(this.form.getRawValue());
      this.auth.register(email, password)
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

  submit() {
    if (this.form.valid)
      this.resultado = "Todos los datos son válidos";
    else
      this.resultado = "Hay datos inválidos en el formulario";
  }
}
