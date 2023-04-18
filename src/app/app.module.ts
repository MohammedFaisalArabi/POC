import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './header/login/login.component';
import { SignupComponent } from './header/signup/signup.component';
import { ContentdataComponent } from './contentdata/contentdata.component';
import { CartdataComponent } from './cartdata/cartdata.component'
import { CalculateService } from './calculate.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { NewtableComponent } from './newtable/newtable.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    ContentdataComponent,
    CartdataComponent,
    LandingpageComponent,
    NewtableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CalculateService,ContentdataComponent,HeaderComponent,LandingpageComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
