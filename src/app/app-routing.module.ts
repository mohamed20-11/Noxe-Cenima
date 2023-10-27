import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/home.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PeopleComponent } from './people/people.component';
import { TvComponent } from './tv/tv.component';
import { RegisterComponent } from './register/register.component';
import { MoviesComponent } from './movies/movies.component';
import { AboutComponent } from './About/about.component';
import { AuthGuardComponent } from './auth.guard';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch:'full'},
  {path:'home', component: HomeComponent, canActivate: [AuthGuardComponent]},
  {path:'people', component: PeopleComponent, canActivate: [AuthGuardComponent]},
  {path:'tv', component: TvComponent ,canActivate: [AuthGuardComponent]},
  {path:'movies', component: MoviesComponent, canActivate: [AuthGuardComponent]},
  {path:'about',  component: AboutComponent,canActivate: [AuthGuardComponent]},


  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'**',component:NotfoundComponent}
    // {path:'product/:id', component: ProductComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
