import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './Components/menu/menu.component';
import { ListComponent } from './views/list/list.component';
import { EntreeComponent } from './views/entree/entree.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { AboutUsComponent } from './views/about-us/about-us.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './views/login/login.component';
import { ContactUsComponent } from './views/contact-us/contact-us.component';
import { AskComponent } from './Components/ask/ask.component';
import { ConfirmComponent } from './Components/confirm/confirm.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListComponent,
    EntreeComponent,
    PageNotFoundComponent,
    AboutUsComponent,
    LoginComponent,
    ContactUsComponent,
    AskComponent,
    ConfirmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
