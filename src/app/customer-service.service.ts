import { Injectable } from '@angular/core';
	import { HttpClient, HttpHeaders } from '@angular/common/http';
	import { Customer } from './customer';
	import { Observable, of } from 'rxjs';
	 
	@Injectable()
	export class CustomerService {
	 
	  private usersUrl: string;
	 
	  constructor(private http: HttpClient) {
	    this.usersUrl = 'http://localhost:9092/customers';
	  }
	 
	  public findAll(): Observable<any> {
	    return this.http.get<any>(this.usersUrl);
	  }
	 
	  public save(user: Customer) {
		console.log(user);
	    return this.http.post<any>(this.usersUrl, user);
	  }
	}