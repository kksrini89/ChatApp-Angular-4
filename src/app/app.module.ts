import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
