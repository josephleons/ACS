import { Component, inject, OnInit } from '@angular/core';
import { News } from '../../model/News';
import { NewServicesService } from '../../service/new-services.service';

@Component({
  selector: 'app-admin-news',
  standalone: false,
  
  templateUrl: './admin-news.component.html',
  styleUrl: './admin-news.component.css'
})
export class AdminNewsComponent implements OnInit{
  allnews:News[]=[];
  loading: boolean = true;
  noData: boolean = false;
  NewsService:NewServicesService = inject(NewServicesService);
 
  ngOnInit(): void {
   this.fetchNews();
  }

  fetchNews(): void {
    this.loading = true;
    this.NewsService.getAllNews().subscribe((resp) => {
      this.allnews = resp;
      this.loading = false;
      this.noData = this.allnews.length === 0;
    }, (error) => {
      this.loading = false;
      this.noData = true;
      console.error('Error fetching news:', error);
    });
  }
// create news 
  OncreateNews(data:News){
    this.NewsService.createNews(data).subscribe((data)=>{
      console.log(this.allnews = data)
    })
   
  }

}
