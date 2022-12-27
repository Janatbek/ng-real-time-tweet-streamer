import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TweetComponent } from './components/tweet/tweet.component';
import { TweetFeedComponent } from './components/tweet-feed/tweet-feed.component';
import { RuleComponent } from './components/rule/rule.component';
import { RulesListComponent } from './components/rules-list/rules-list.component';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TweetComponent,
    TweetFeedComponent,
    RuleComponent,
    RulesListComponent,
    ErrorMessageComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
