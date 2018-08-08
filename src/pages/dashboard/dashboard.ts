import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataServiceProvider } from '../../providers/data-service/data-service';
import { PageProvider } from '../../providers/page/page';
import 'rxjs/add/operator/debounceTime';

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
  providers : [DataServiceProvider]
})
export class DashboardPage implements OnInit {
  private users:any[];
  pagedItems:any[];
  pager:any={};
  url='assets/response.json'; 
  ngOnInit(){
    //setting data
    this.http.get(this.url)
      .map((response:Response)=>response.json())
        .subscribe(result =>{ 
        //setting data
        this.users =result;
        
        //setting to page 1
        this.setPage(1);
        });
  }
  constructor(
    public navCtrl: NavController, 
    public http:Http, 
    private dataService : DataServiceProvider,
    private pageService: PageProvider
  ) {}
  setPage(page:number){
    
    //getting page object from service
    this.pager = this.pageService.getPager(this.users.length,page);
    
    //get current page of items
    this.pagedItems = this.users.slice(this.pager.startIndex, this.pager.endIndex+1);
  }
}