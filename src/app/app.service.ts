import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private _http: Http) { }

  public getDropDownData(){
    let _url:string='src/app/dropDownData.json';
    return this._http.get(_url).toPromise().then(res=><any>res.json());
  }

}
