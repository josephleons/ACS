import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { News } from '../model/News';
import { NewServicesService } from '../service/new-services.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-news',
  standalone: false,
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent implements OnInit{
  allNews:News[]=[];
  NewService:NewServicesService = inject(NewServicesService);
  // constructor(private NewService:NewServicesService){}
  
  ngOnInit(): void {
    this.NewService.getAllNews().
    subscribe((newsrepo)=>{
      this.allNews = newsrepo
      console.log(this.allNews =newsrepo )
    })
  }
  @ViewChild('userForm') form:NgForm
  
  OncreateNews(data:News){
    this.NewService.createNews(data).subscribe((data)=>{
      console.log(this.allNews = data)
    })
   
  }

}
