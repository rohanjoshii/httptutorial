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

//
// import { Component } from '@angular/core';
// import { HttpClient, HttpErrorResponse } from '@angular/common/http';
//
// interface DataResponse {
//   birthday: string;
//   known_for_department: string;
//   id: integer;
//   name: string;
// }
//
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent implements OnInit {
//   title = 'httptutorial';
//   actors: any;
//   api_key = '1515f215f5f2eabbac12873b9540f3768ed6f1';
//   base_url = 'https://api.themoviedb.org/3/person/'
//   actor_id = 2;
//   constructor(private http: HttpClient) {
//
//   }
//
//   ngOnInit(): void {
//     // for (var actor_id = 1; actor_id < 15; actor_id++) {
//       this.http.get(this.base_url + this.actor_id + '?api_key=' + this.api_key ).subscribe(data => {
//         console.log(data);
//         // this.actors = data;
//
//       },
//
//
//         (err: HttpErrorResponse) => {
//           if (err.error instanceof Error) {
//             console.log('Client-side error occured.');
//           } else {
//             console.log('Server-side error occured.');
//           }
//         }
//       );
//
//     // }
//
//   }
//
// }
