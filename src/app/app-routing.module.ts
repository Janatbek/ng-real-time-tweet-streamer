import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RulesListComponent } from './components/rules-list/rules-list.component';
import { TweetFeedComponent } from './components/tweet-feed/tweet-feed.component';
import { TweetComponent } from './components/tweet/tweet.component';

const routes: Routes = [
  {path:'', component: RulesListComponent},
  {path:'rules', component: RulesListComponent},
  {path:'tweets', component: TweetFeedComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
