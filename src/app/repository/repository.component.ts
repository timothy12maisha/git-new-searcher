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
  repos: Repository;

  constructor(private githubService: GithubServiceService, private http: HttpClient) {  }

  ngOnInit() {
    this.githubService.personalDetailsRequest();

    const apiUrl = `${environment.apiUrl}LennyDennis/repos${environment.apiKey}`;
    this.http.get(apiUrl).subscribe(response => {
      this.repos = response;
    });
  }

}





