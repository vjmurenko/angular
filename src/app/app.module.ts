import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { SeaarchPipe } from './user/search.pipe';
import { HoverDirective } from './hover.directive';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SeaarchPipe,
    HoverDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
   FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}



