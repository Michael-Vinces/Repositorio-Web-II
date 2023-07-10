import { Component } from '@angular/core';
import { RegistroService } from './services/registros.service';
import { IRegistro, IRegistros } from './interfaces/IRegistro';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {


  dataRegistros:IRegistros = { sum:0, registros:[] };
  title:string = 'Registros';

  constructor(
    private registrosService: RegistroService
  ) { 
    
  }
  ngOnInit() {
     this.registrosService.getAllData()
      .subscribe(data => {
        this.dataRegistros= data;
      })
  }
  submitData(value: IRegistro) {
    let body:IRegistro = {
      name: value.name,
      date: value.date,
      hour: value.hour,
      gradeEarned: value.gradeEarned,
      topGrade: value.topGrade,
    }

    this.registrosService.postData(body)
      .subscribe(response => {
        console.log(response)
      })
  }

}

