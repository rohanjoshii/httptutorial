import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

interface DataResponse {
  birthday: string;
  known_for_department: string;
  id: integer;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Dank Actors';
  actors = new Array();


  constructor( private http: HttpClient ) {

  }

  ngOnInit(): void {
    for (var actor_id = 0; actor_id <= 15; actor_id++) {
    this.http.get('https://api.themoviedb.org/3/person/'+ actor_id + '?api_key=15f5f2eabbac12873b9540f3768ed6f1').subscribe(data => {
      console.log(data);
      this.actors.push(data);
    },

    (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        console.log('Client-side error occured.');
      } else {
        console.log('Server-side error occured.');
      }
    }
  );

}


  }

}
