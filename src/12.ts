import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'School Project';

  constructor(private http: HttpClient) {}

  getData() {
    this.http.get('https://api.example.com/data').subscribe((data) => {
      console.log(data);
    });
  }
}
