import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent, DetailedInfoPageComponent, MainPageComponent } from './pages';
import { YoutubeComponent } from './youtube.component';

const routes: Routes = [
  {
    path: '',
    component: YoutubeComponent,
    children: [
      { path: 'search-result', component: MainPageComponent },
      { path: 'detailed-info/:id', component: DetailedInfoPageComponent },
      { path: 'admin-dashboard', component: AdminPageComponent },
      { path: 'admin-dashboard/cards', component: MainPageComponent },
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
