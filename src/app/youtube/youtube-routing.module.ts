import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailedInfoPageComponent, MainPageComponent } from './pages';
import { YoutubeComponent } from './youtube.component';

const routes: Routes = [
  {
    path: '',
    component: YoutubeComponent,
    children: [
      { path: 'search-result', component: MainPageComponent },
      { path: 'detailed-info/:id', component: DetailedInfoPageComponent },
      {
        path: '',
        redirectTo: 'search-result',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YouTubeRoutingModule {}
