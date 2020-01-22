import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { GithubServiceService } from '../github-request/github-service.service';
import { User } from '../user';
import { Repository } from '../repository';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
  user: User;
  searchItem:string;
  repos:Repository;

  findProfile() {
    // this.githubService.changeUser(this.searchItem);
    this.githubService.getUsersProfiles(this.searchItem);
    this.findRepos(this.searchItem);

    this.user = this.githubService.user;
  }

  findRepos(user) {
    const apiReposUrl = `${environment.apiUrl}${user}/repos${environment.apiKey}`;
    this.http.get(apiReposUrl).subscribe(response => {
      this.repos = response;
      console.log(this.repos);
    });
  }
  

  constructor(private githubService: GithubServiceService, private http: HttpClient) {
    // this.githubService.personalDetailsRequest();
  }



  ngOnInit() {
    
      // const apiReposUrl = `${environment.apiUrl}timothy12maisha/repos${environment.apiKey}`;
      // this.http.get(apiReposUrl).subscribe(response => {
      //   this.repos = response;
      //   console.log(this.repos);
      // });
    
    
  }

}





