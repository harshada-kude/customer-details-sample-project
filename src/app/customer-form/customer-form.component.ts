import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule, FormControl, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../customer-service.service';
import { Customer } from '../customer';
	 
	@Component({
	  selector: 'app-customer-form',
	  templateUrl: './customer-form.component.html',
	  styleUrls: ['./customer-form.component.css']
	})
	export class CustomerFormComponent {
	 
	  customer: Customer;
	  //emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"; 
	  //email = new FormControl();
	  constructor(
	    private route: ActivatedRoute, 
	      private router: Router, 
	        private customerService: CustomerService) {
		console.log("customer form loaded");
	    this.customer = new Customer();
	  }
	 
	  onSubmit() {
	    this.customerService.save(this.customer).subscribe(result => this.gotocustomerList());
	  }
	 
	  gotocustomerList() {
	    this.router.navigate(['/users']);
	  }
	}