import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IdemoUser } from "../interfaces/interfaces";

@Injectable({
    providedIn: 'root'
})
export class DemoDataService {
    constructor(private http: HttpClient) { }
    
    getDemoData(): Observable<IdemoUser[]> {
        return this.http.get<IdemoUser[]>('https://jsonplaceholder.typicode.com/users');
    }
}