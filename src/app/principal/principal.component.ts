import { Component, OnInit } from '@angular/core';
import { HabitacionesService } from '../servicios/habitaciones.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  public listarhabitaciones:any[]=[]

  constructor(public servicio:HabitacionesService) { 
    this.servicio.buscarHabitaciones().subscribe(respuesta=>{this.listarhabitaciones=respuesta.datos})
    

  }

  ngOnInit(): void {
  }

}
