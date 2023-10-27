import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _HttpClient:HttpClient)
   {
    
   }
   getTrindingMovies():Observable<any> {
    return this._HttpClient.get('https://api.themoviedb.org/3/trending/movie/week?api_key=f411e1dd7b15687d7f4b7ef583af56ec');
  }
}
//Our Stable URL:
// https://api.themoviedb.org/3/trending/movie/week?api_key=f411e1dd7b15687d7f4b7ef583af56ec
