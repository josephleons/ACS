import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FindComponent } from './home/find/find.component';
import { NavComponent } from './inc/nav/nav.component';
import { TopnavComponent } from './inc/topnav/topnav.component';
import { FooterComponent } from './footer/footer.component';
import { NewsComponent } from './news/news.component';
import { AdminNewsComponent } from './news/admin-news/admin-news.component';

// Define the routes
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'news', component: NewsComponent }, // Default route
  { path: 'adminnews', component: AdminNewsComponent }, // Default route
 // Default route
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FindComponent,
    NavComponent,
    TopnavComponent,
    FooterComponent,
    NewsComponent,
    AdminNewsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes), // Import RouterModule with the routes
  ],
  providers: [
    provideHttpClient(withFetch()),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
