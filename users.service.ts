import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {
    constructor(private http:Http) {}

    getItems(){
       return this.http.get('https://randomuser.me/api/?inc=gender,name,picture,location&results=8&nat=gb')
       .map(response => response.json().results)  
       .map(items => {
           return items.map(it => {
               return {
                   name: it.name.first + ' ' + it.name.last,
                   src: it.picture.large,
                   geo: it.location.city
               }
           })
       }) 
    }
}