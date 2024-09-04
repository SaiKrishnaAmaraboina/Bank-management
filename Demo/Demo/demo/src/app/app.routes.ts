import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { GalaryComponent } from './galary/galary.component';
import { DatabindComponent } from './databind/databind.component';
import { DirectiveComponent } from './directive/directive.component';
import { PipedemoComponent } from './pipedemo/pipedemo.component';
import { FormsdemoComponent } from './formsdemo/formsdemo.component';
import { ApisdemoComponent } from './apisdemo/apisdemo.component';
export const routes: Routes = [
{path:'login',component:LoginComponent
},
{
    path:'signup',component:SignupComponent
},
{
    path:'home',component:HomeComponent
},
{
    path:'Login',component:LoginComponent
},
{
    path:'galary',component:GalaryComponent
},
{
    path:'databind',component:DatabindComponent
},

{
    path:'dir',component:DirectiveComponent
},
{
    path:'pipe',component:PipedemoComponent
},
{
    path:'forms',component:FormsdemoComponent
},
{
    path:'apis',component:ApisdemoComponent
},

];