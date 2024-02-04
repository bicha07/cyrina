import { NgModule } from "@angular/core";
import { RouterOutlet, Routes } from "@angular/router";
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  // ... your other route declarations
  { path: '/', component: RegistrationComponent },
  // ... any other routes
];
@NgModule({

})
export class AppRoutingModule {

 }
