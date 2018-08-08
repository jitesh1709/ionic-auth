import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataServiceProvider } from '../../providers/data-service/data-service';
import 'rxjs/add/operator/debounceTime';

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
  providers : [DataServiceProvider]
})
export class DashboardPage implements OnInit {
  items:any;
  searchTerm:string;
  searchControl:FormControl;
  searching:any=false;

  ngOnInit(){
    // this.dataService.getUsers()
    //   .subscribe(result => this.users = <any>result);
  }

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private dataService : DataServiceProvider) {
    this.searchControl = new FormControl();
  }

  ionViewDidLoad(){
    this.setFilteredItems();
    this.searchControl.valueChanges.debounceTime(700)
      .subscribe(search =>{
        this.searching = false;
        this.setFilteredItems();
      });
  }

  onSearchInput(){
    this.searching = true;
  }

  setFilteredItems(){
    this.items = this.dataService.filterUsers(this.searchTerm);
  }
}
