import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { News } from '../model/News';

@Injectable({
  providedIn: 'root'
})
export class NewServicesService {
  allnews:News[]=[];
  private apiUrl='https://yakotds-default-rtdb.firebaseio.com/News.json';
  // Create News 
  http:HttpClient = inject(HttpClient);
    createNews(news:News):Observable<any>{
      return this.http.post('https://yakotds-default-rtdb.firebaseio.com/News.json',
        news)
     }
    // retrive user records 
      public getAllNews():Observable<any>{
        return this.http.get<{[key:string]:News}>(this.apiUrl)
        .pipe(map((response)=> {
          const news=[];
          for(const key in response){
            if(response.hasOwnProperty(key)){
              news.push({...response[key],id:key})
            }
          }
          return news;
        }))
    }
    DeleteUser(id:string | undefined){
      this.http.delete('https://yakotds-default-rtdb.firebaseio.com/News/' +id+ '.json')
      .subscribe((resp)=>{
       console.log(resp);
      });
     }
   
    
}
