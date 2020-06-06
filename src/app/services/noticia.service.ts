import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor(private _http: HttpClient) { }

  public listaNoticias(categoria:string):Observable<any>{
    
    const httpOptions = {
      headers : new HttpHeaders({
        'X-RapidApi-Host': 'livescore6.p.rapidapi.com',
        'x-rapidapi-key': '4de2b82730msha350ee7f81ab2adp19168ejsn4fba0275aa64'
      })
    }
    return this._http.get("https://livescore6.p.rapidapi.com/news/list?category="+categoria, httpOptions);
  }

}
