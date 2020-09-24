import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = "https://randomapi.com/api/9f2llkec?key=24OO-GE4H-CR87-LV0M";

  constructor(private http_client: HttpClient) { }

  getUsers() {
    return this.http_client.get(this.url);
  }
}
