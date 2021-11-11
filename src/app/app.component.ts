import { Component } from '@angular/core';

import {Form} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component
({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  onSubmit(form: Form)
  {
    // console.log(form);
  }

  data: any = [];

  viacep(cep: any)
  {
    if(cep != "")
   {
    this.http.get(`https://viacep.com.br/ws/${cep.value}/json/`).subscribe(search => {this.data = search});
   }
  }

  constructor(private http: HttpClient) { }
}
