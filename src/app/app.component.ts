import { Component, OnInit } from '@angular/core';

interface Tarjeta{
  titulo:string,
  subtitulo:string,
  image:string,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'The XD momento';
  public ArregloTarjetas:Tarjeta[]=[]
  ngOnInit(): void {
    this.ArregloTarjetas=[
      {titulo:"Video 1", subtitulo:"Subtitulo video 1", image:"https://pbs.twimg.com/media/EaLV_tKWsAUWNpB?format=jpg&name=small"},
      {titulo:"Video 2", subtitulo:"Subtitulo video 2", image:"https://media.tenor.com/80ucPA_YI6cAAAAC/xddddddd.gif"},
      {titulo:"Video 3", subtitulo:"Subtitulo video 3", image:"https://media.tenor.com/thkmNH1mKXoAAAAd/trollface-xddddddd.gif"},
      {titulo:"Video 3", subtitulo:"Subtitulo video 3", image:"https://cdntube.b-cdn.net/thumbnails/aa3faafb9722161dca3b6bb16a0f3fe0069a33b0.jpg"},
    ] 
  }
}


