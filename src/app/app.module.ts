import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserService } from './service/user.service';
import { UserComponent, MessageComponent, NewMessageComponent } from './components/index';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    MessageComponent,
    NewMessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
    // HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
