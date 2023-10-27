import { Component } from '@angular/core';
import { MoviesService } from "../movies.service";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {

  constructor( _MoviesService:MoviesService)
  {
    // this.hService=HomeService.user;
    // this.hService.push({name: "Aya",
    // age: 22,
    // gender: "Female",
    // salary: 16850});
    _MoviesService.getTrindingMovies().subscribe({
      next:(data)=> this.trendingMovies=data.results
    })
  }
  imgPrefix:string='http://image.tmdb.org/t/p/w500';
  trendingMovies:any[]=[];
  // hService:User[]=[];

  welcome(eventInfo:Event)
  {
    console.log(eventInfo);
  }
  Carts:string="VCartisians";
  username:string="Mohamed_the1";
  userAge=26;
  ImgSrc:string="./../../assets/Wallpaper.jpg";
  ImgWidth :number=300;
}
