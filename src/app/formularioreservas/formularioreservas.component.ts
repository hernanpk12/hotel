import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HabitacionesService } from '../servicios/habitaciones.service';

@Component({
  selector: 'app-formularioreservas',
  templateUrl: './formularioreservas.component.html',
  styleUrls: ['./formularioreservas.component.css']
})
export class FormularioreservasComponent implements OnInit {

  constructor(public servicio:HabitacionesService) { }

  ngOnInit(): void {
  }

  crearReserva(datos:NgForm){

    console.log(datos.value)

    let datosEnvioAPI={
      nombre:"hernan uran",
      telefono:"3254454",
      fechaInicio:datos.value.entrada,
      fechaFin:datos.value.salida,
      numeroPersonas:Number(datos.value.adultos)+Number(datos.value.niños)
    }


    console.log(datosEnvioAPI)
    this.servicio.crearReserva(datosEnvioAPI).subscribe(respuesta=>{console.log(respuesta)})

  }

}
