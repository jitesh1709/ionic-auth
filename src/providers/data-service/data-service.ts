import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";

import 'rxjs/add/operator/map';
@Injectable()
export class DataServiceProvider {
	result:any;	
	// url='/assets/response.json'; 
  constructor(public http: HttpClient) {}
//   getUsers(){
//   	return this.http.get(this.url)
// 		.pipe(map(result => this.result = <any>result)); 
// 	} 
}