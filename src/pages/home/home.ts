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
	regUsername : string;password:string;
	regPassword : string;username:string;
	cnfPassword : string;
	register(registerForm){
	if(this.regPassword == this.cnfPassword){
		localStorage.setItem('username',this.regUsername);
		localStorage.setItem('password',this.regPassword);
		localStorage.setItem('cnfPassword',this.cnfPassword);
		alert("registered success");
	}else{
		alert("Password Mismatch");
	}
}
	login(loginForm){
		// console.log(this.password);
		var tempUsername = localStorage.getItem('username');
		var tempPassword = localStorage.getItem('password');
		console.log(tempPassword);
		if(this.username == tempUsername && this.password == tempPassword){
			console.log("Login Success");
			localStorage.clear();
			this.navCtrl.push(DashboardPage);
		}else{
			alert("Please register first");
			console.log("wrong password");
			localStorage.clear();
		}
	}
}