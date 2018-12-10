import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

const httpOptions = {
headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class HTTPService {

    constructor(private http:HttpClient) {}


    getAllManualInfos(): Observable<JSON[]> {
        return this.http.get<JSON[]>("/api/manual" + '/return_all' );
    }

    refresh(): Observable<JSON[]> {
        return this.http.get<JSON[]>("/api/manual" + '/refresh' );
    }

}
