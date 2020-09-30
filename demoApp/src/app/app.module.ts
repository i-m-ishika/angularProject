import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employees/employee.component';
import {PageNotFoundComponent} from './pageNotFound/pageNotFound.component';

import {HttpClientModule} from '@angular/common/http';
import {EmployeeService} from './services/employee.service';
import {MatButtonModule} from '@angular/material/button';
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import {PracticeComponent} from './practice/practice.component';
import {PrefixPipe} from './pipes/prefix.pipe';
import {StarWarsComponent} from './starWars/starWars.component';
import {StarWarsService} from './services/starWars.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeeComponent,
    PageNotFoundComponent,
    PracticeComponent,
    PrefixPipe,
    StarWarsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    MatButtonModule
  ],
  providers: [EmployeeService, StarWarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
