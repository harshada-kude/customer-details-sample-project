import { Component, OnInit } from '@angular/core';
	import { Customer } from '../customer';
	import { CustomerService } from '../customer-service.service';
	
	 
	@Component({
	  selector: 'app-customer-list',
	  templateUrl: './customer-list.component.html',
	  styleUrls: ['./customer-list.component.css']
	})
	export class CustomerListComponent implements OnInit {
	 
	  customers: Customer[];
	  // Pagination parameters.
  	  p: Number = 1;
  	  count: Number = 5;
	 
	  constructor(private customerService: CustomerService) {
		  console.log("customer list loaded");
	  }
	 
	  ngOnInit() {
	    this.fetchdata();
	  }

	  fetchdata() {
		this.customerService.findAll().subscribe(data => {
		this.customers = data;
	  });
	}
}