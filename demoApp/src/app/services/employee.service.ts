import {Injectable} from '@angular/core';
import {IEmployee} from '../interfaces/employee';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable()
export class EmployeeService{
    url = '/assets/data/employees.json';
    constructor(private _http: HttpClient){

    }
    getEmployees():Observable<IEmployee[]>{
        return this._http.get<IEmployee[]>(this.url);
    }

}
