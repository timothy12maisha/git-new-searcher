
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { GithubServiceService } from './../github-request/github-service.service';
import { User } from './../user';
import { Repository } from './../repository';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  searchItem: string;
  user: User;
  repos: Repository;
  currentRoute : String = "/home"

  @Output() userName=new EventEmitter<string>();

  @Output() reposList = new EventEmitter<string>()




  findProfile(searchItem:string) {
   

    if(this.router.url == this.currentRoute) {
      this.userName.emit(searchItem)
      this.searchRequest.getUsersProfiles(this.searchItem);
  
      this.user = this.searchRequest.user;
    } else {
      this.reposList.emit(searchItem)
    }

  }

  

  constructor(private searchRequest: GithubServiceService, private http: HttpClient, private router : Router) {
  }

  ngOnInit() {
    console.log("Navbar is called")
  }



}
