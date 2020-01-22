import { Component, OnInit, Input } from '@angular/core';
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
  repos: any;
  user:User;
  userName:string;

  @Input() reposList 
  

  constructor(private githubService: GithubServiceService, private http: HttpClient) { 
    
    // this.githubService.personalDetailsRequest();

    const apiUrl = `${environment.apiUrl}${this.userName}/repos${environment.apiKey}`;
    this.http.get(apiUrl).subscribe(response => {
      this.repos = response;
      console.log(response)
    });
  }

  findRepos(user) {
    const apiReposUrl = `${environment.apiUrl}${user}/repos${environment.apiKey}`;
    this.http.get(apiReposUrl).subscribe(response => {
      this.repos = response;
      console.log(this.repos);
    });
  }

  ngOnInit() {
    // this.githubService.personalDetailsRequest();

    // const apiUrl = `${environment.apiUrl}${this.userName}/repos${environment.apiKey}`;
    // this.http.get(apiUrl).subscribe(response => {
    //   this.repos = response;
    //   console.log(response)
    // });

    this.githubService.findRepositories().then(reply=>{
      this.repos = reply;
    });
    
    console.log(this.reposList)
    
  }

}





