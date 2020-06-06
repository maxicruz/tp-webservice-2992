import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class HoroscopoService {

  constructor(private _http: HttpClient) { }

  public getHoroscopo():Observable<any>{
    
    const httpOptions = {
      headers : new HttpHeaders({
        'X-RapidApi-Host': 'zodiac-sign.p.rapidapi.com',
        'x-rapidapi-key': '4de2b82730msha350ee7f81ab2adp19168ejsn4fba0275aa64'
      })
    }
    return this._http.get("https://zodiac-sign.p.rapidapi.com/signs?", httpOptions);
  }

}
