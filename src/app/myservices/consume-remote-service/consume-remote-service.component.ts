import { Component, OnInit } from '@angular/core';
import { RemoteserviceService } from '../remoteservice.service';
//import { UserInfo } from '../../interface/user-info';
import { Observable } from 'rxjs';
import { importExpr } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-consume-remote-service',
  templateUrl: './consume-remote-service.component.html',
  styleUrls: ['./consume-remote-service.component.css']
})
export class ConsumeRemoteServiceComponent implements OnInit {

  //userInfo: UserInfo[];
  //observableUserInfo: Observable<UserInfo[]>;

  constructor(private remoteService:RemoteserviceService) { 
    console.log(remoteService.getRemoteDataFromService());    
  }

  ngOnInit() {
      this.getRemoteData();
  } 

  getRemoteData() {
    console.log('This is Remote Data');
    console.log(this.remoteService.getRemoteDataFromService());
    
    //observableUserInfo = this.remoteService.getRemoteDataFromService();
    //observableUserInfo.subscribe(
      //userInfo => {
        //this.userInfo = userInfo;
        //console.log(this.userInfo);
      //}
    //)
    console.log('______________________');
  }

}
