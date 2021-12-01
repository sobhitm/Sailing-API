import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SchedulesComponent } from './features/schedules/schedules.component';
import { ScheduleslistComponent } from './features/schedules/scheduleslist/scheduleslist.component';

const routes: Routes = [
  { path: 'schedules', component: SchedulesComponent },
  { path: 'scheduleslist', component: ScheduleslistComponent },
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//export const routingComponents = [SchedulesComponent, ScheduleslistComponent]