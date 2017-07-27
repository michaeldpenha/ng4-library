/**
 * Author : Michael Dpenha
 */
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class SidebarService {
    constructor(private http: Http){}
    public getListOfComponents() {
        return this.getListofComponentsFromLocalFile();
    }
    private getListofComponentsFromLocalFile(){
         return this.http.get(`../../assets/localJson/sidebar.component.json`).map((res:Response) => {return res.json()});
    }
}