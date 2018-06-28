import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { UserInfo } from '../interface/user-info';

@Injectable({
  providedIn: 'root'
})
export class RemoteserviceService {

  constructor(private httpClient: HttpClient) { 
    
  }

  getRemoteDataFromService() {
    //this.httpClient.get<UserInfo>('https://jsonplaceholder.typicode.com/users');
    return this.httpClient.get('https://jsonplaceholder.typicode.com/users');
  }

}
