import { Component } from '@angular/core';
//import { CustomerListComponent } from './customer-list/customer-list.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;

constructor() {
    this.title = 'Customer Details';
}

// constructor(
//   private viewContainerRef: ViewContainerRef,
//   private cfr: ComponentFactoryResolver
// ) {
//   this.title = 'Customer Details';
// }

// async getLazy1() {
//   this.viewContainerRef.clear();
//   const { CustomerListComponent } = await import('./customer-list.component');
//   this.viewContainerRef.createComponent(
//     this.cfr.resolveComponentFactory(CustomerListComponent)
//   );
// }

// async getLazy2() {
//   this.viewContainerRef.clear();
//   const { CustomerFormComponent } = await import('./customer-form/customer-form.component');
//   this.viewContainerRef.createComponent(
//     this.cfr.resolveComponentFactory(CustomerFormComponent)
//   );
// }

}