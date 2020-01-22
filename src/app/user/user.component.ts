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

  constructor(private githubService: GithubServiceService, private http: HttpClient) {  }

  

  ngOnInit() {
    this.githubService.personalDetailsRequest();


    this.user = this.githubService.user;

  }

}
