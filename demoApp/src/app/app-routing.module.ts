import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employees/employee.component';
import {PageNotFoundComponent} from './pageNotFound/pageNotFound.component';
import {PracticeComponent} from './practice/practice.component';
import {StarWarsComponent} from './starWars/starWars.component';
const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'employees', component: EmployeeComponent},
  {path:'practice',component:PracticeComponent},
  {path: 'starwars', component:StarWarsComponent},
  {path: '', redirectTo:'/home', pathMatch:'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
