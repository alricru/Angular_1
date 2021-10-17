import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './views/list/list.component';
import { AboutUsComponent } from './views/about-us/about-us.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { LoginComponent } from './views/login/login.component';
import { ContactUsComponent } from './views/contact-us/contact-us.component';
import { ConfirmComponent } from './Components/confirm/confirm.component';

const routes: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'us', component: AboutUsComponent },
  { path: 'login', component: LoginComponent},
  {path: 'contact', component: ContactUsComponent},
  {path: 'confirm', component: ConfirmComponent},
  { path: '', redirectTo: '/us', pathMatch:'full'},
  { path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
