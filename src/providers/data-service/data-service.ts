import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";
import 'rxjs/add/operator/map';

@Injectable()
export class DataServiceProvider {
	items:any;	
	// url='/assets/response.json'; 
  constructor(public http: HttpClient) {
  	this.items = [
  	{title:'one'},
  	{title:'two'},
  	{title:'three'},
  	{title:'four'},
  	{title:'five'},
  	{title:'six'}
  	]
  }
 //  getUsers(){
 //  	return this.http.get(this.url)
	// 	.pipe(map(result => this.result = <any>result)); 
	// } 
	filterUsers(searchTerm){
		return this.items.filter((item)=>{
			return item.title.toLowerCase().indexOf(searchTerm.toLowerCase())>-1;
		});
	}
}