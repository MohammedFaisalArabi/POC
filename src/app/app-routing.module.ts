import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './header/signup/signup.component';
import { LoginComponent } from './header/login/login.component';
import { ContentdataComponent } from './contentdata/contentdata.component';
import { CartdataComponent } from './cartdata/cartdata.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';

const routes: Routes = [
  {
    path: 'contentdata',
    component: ContentdataComponent,
  },
  
  {
    path: 'signup',
    component: SignupComponent,
  },

  {
    path: 'login',
    component: LoginComponent,
  },

  {
    path: 'carttable',
    component: CartdataComponent,
  },

  {
    path:'landing',
    component: LandingpageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
