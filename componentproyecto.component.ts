import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({

  selector: 'app-componentproyecto',
  templateUrl: './componentproyecto.component.html',
  styleUrls: ['./componentproyecto.component.css']
})
export class ComponentproyectoComponent implements OnInit {

  conversion: any;
  rta: []; 

  constructor(private http:  HttpClient)( )


  ngOnInit() {
    this.http.get( 'https://pnny0h3cuf.execute-api.eu-west-1.amazonaws.com/dev/providers/1')
    
    .subscribe(data => { 
    conversion=data;
    rta=conversion;

    console.log ('prueba' , rta );

    });
  }

}
