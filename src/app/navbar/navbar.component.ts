
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { GithubServiceService } from './../github-request/github-service.service';
import { User } from './../user';
import { Repository } from './../repository';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  searchItem: string;
  user: User;
  repos: Repository;


  findProfile() {
    this.searchRequest.getUsersProfiles(this.searchItem);
    this.findRepos(this.searchItem);

    this.user = this.searchRequest.user;


  }

  findRepos(user) {
    const apiReposUrl = `${environment.apiUrl}${user}/repos${environment.apiKey}`;
    this.http.get(apiReposUrl).subscribe(response => {
      this.repos = response;
      console.log(this.repos);
    });
  }


  constructor(private searchRequest: GithubServiceService, private http: HttpClient) {
  }

  ngOnInit() {
  }



}
