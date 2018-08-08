import { Component ,ViewChild } from '@angular/core';
import { FormGroup, FormControl,FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NavController } from 'ionic-angular';
import { DashboardPage } from '../dashboard/dashboard';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	constructor(public navCtrl: NavController,public formBuilder : FormBuilder) {}
	password:string;username:string;
	login(loginForm){
		if(this.username == 'jitesh' && this.password == 'jitesh'){
			alert("Navigating");
			this.navCtrl.push(DashboardPage);
		}else{
			alert("Wrong username and password");
		}
	}
}