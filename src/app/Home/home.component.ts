import { Component} from "@angular/core";
import { MoviesService } from "../movies.service";



@Component({
  selector:'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  // providers:[UsersService]
})

export class HomeComponent
{
  test(eventInfo : Event)
  {
    console.log(eventInfo.target)
  }


}


// constructor( _MoviesService:MoviesService)
  // {
  //   // this.hService=HomeService.user;
  //   // this.hService.push({name: "Aya",
  //   // age: 22,
  //   // gender: "Female",
  //   // salary: 16850});
  //   _MoviesService.getTrindingMovies().subscribe({
  //     next:(data)=> this.trendingMovies=data.results
  //   })
  // }
  // imgPrefix:string='http://image.tmdb.org/t/p/w500';
  // trendingMovies:any[]=[];
  // // hService:User[]=[];

  // welcome(eventInfo:Event)
  // {
  //   console.log(eventInfo);
  // }
  // Carts:string="VCartisians";
  // username:string="Mohamed_the1";
  // userAge=26;
  // ImgSrc:string="./../../assets/Wallpaper.jpg";
  // ImgWidth :number=300;
