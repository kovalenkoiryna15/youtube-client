import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailedInfoPageComponent, MainPageComponent } from './pages';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
  },
  {
    path: 'detailed-info/:id',
    component: DetailedInfoPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YouTubeRoutingModule {}
