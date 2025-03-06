import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-school-project',
  templateUrl: './school-project.component.html',
  styleUrls: ['./school-project.component.css']
})
export class SchoolProjectComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('https://example.com').subscribe((response) => {
      console.log(response);
    });
  }
}
