import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(private http:HttpClient) { }

  getPaises():Observable<any>{
    const url = "https://api.covid19api.com/countries"
    return this.http.get<any>(url)
  }
  getCoronaRealtimeData(pais): Observable<any>{
    const url= "https://api.covid19api.com/total/dayone/country/"+ pais
    return this.http.get<any>(url)
  }

}
