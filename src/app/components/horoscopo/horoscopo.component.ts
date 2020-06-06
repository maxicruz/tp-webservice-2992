import { Component, OnInit } from '@angular/core';
import { Horoscopo } from 'src/app/models/horoscopo';
import { HoroscopoService } from 'src/app/services/horoscopo.service';

@Component({
  selector: 'app-horoscopo',
  templateUrl: './horoscopo.component.html',
  styleUrls: ['./horoscopo.component.css']
})
export class HoroscopoComponent implements OnInit {

  horoscopo: Horoscopo;
  vector_horoscopo: Array<Horoscopo>

  constructor(private horoscopo_servicio: HoroscopoService) { 
    this.horoscopo = new Horoscopo();
    this.vector_horoscopo = new Array<Horoscopo>();
  }

  ngOnInit() {
    this.horoscopo_servicio.getHoroscopo()
    .subscribe(
      (data) => { 
        this.vector_horoscopo = data['results'];
      },
      (error) => {
        console.error(error);
      }
    );
  }

  cargarHoroscopo(){
    this.horoscopo_servicio.getHoroscopo().subscribe(
      (result) => {
      this.vector_horoscopo = result; 
      console.log(result)
    },
    error => {alert("Error en la petición"); } )   
  }

}