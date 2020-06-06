import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/models/noticia';
import { NoticiaService } from 'src/app/services/noticia.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  categoria: string;
  noticia: Noticia;
  vector_noticia: Array<Noticia>

  constructor(private noticia_servicio: NoticiaService) {
    this.noticia = new Noticia();
    this.vector_noticia = new Array<Noticia>();
   }

  ngOnInit(): void {
  }

  public cargarNoticia(){
    this.noticia_servicio.listaNoticias(this.categoria).subscribe(
    (result) => {
      console.log(result)
      this.vector_noticia = new Array<Noticia>();
        this.vector_noticia = result['arts']
      },
      error => {alert("Error en la petición"); } )   
  }

}
