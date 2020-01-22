import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { GithubServiceService } from '../github-request/github-service.service';
import { User } from '../user';
import { Repository } from '../repository';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User;
  searchItem: string;
  repos: Repository;


  constructor(private githubService: GithubServiceService, private http: HttpClient) {
    // this.searchItem = "timothy12maisha";
  }
  // findProfile() {
  //   this.githubService.changeUser(this.searchItem);
  //   this.githubService.getUsersProfiles(this.searchItem);

  //   this.user = this.githubService.user;
  // }

  // findRepos(user) {
  //   const apiReposUrl = `${environment.apiUrl}${user}/repos${environment.apiKey}`;
  //   this.http.get(apiReposUrl).subscribe(response => {
  //     this.repos = response;
  //     console.log(this.repos);
  //   });
  // }


  ngOnInit() {
    this.githubService.personalDetailsRequest();
    this.user = this.githubService.user;

    const apiReposUrl = `${environment.apiUrl}timothy12maisha/repos${environment.apiKey}`;
    this.http.get(apiReposUrl).subscribe(response => {
      this.repos = response;
      console.log(this.repos);
    });


  }

}
