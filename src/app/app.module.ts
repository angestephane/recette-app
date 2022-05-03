import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//app modules
import { ArticleModule } from './article/article.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ArticleModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
