import { Component, OnInit } from '@angular/core';
import { CovidService } from 'src/app/services/covid.service';

@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.css']
})
export class CovidComponent implements OnInit {

  paises:any;
  pais:any;
  confirmed:number;
  recovered:number;
  deaths:number;

  constructor(private covid:CovidService) { }

  ngOnInit(): void{
    this.covid.getPaises().subscribe((data)=>{
      console.log(data)
      this.paises = data
    })
  }

  getCoronaData(){ 
    this.covid.getCoronaRealtimeData(this.pais).subscribe((data)=>{
      console.log(data)
      var index = data.length - 1
      console.log(index)
      this.confirmed = data[index].Confirmed
      this.recovered = data[index].Recovered
      this.deaths = data[index].Deaths 
    },
    error => {alert("Error en la petición");}
    )
  }

  getPaises(pais:any){
    this.pais = pais;
  }

}
