import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryComponent } from './components/history/history.component';
import {SearchpageComponent} from './components/searchpage/searchpage.component';
const routes: Routes = [

{
    path : '',
    component: SearchpageComponent
},

{
  path : 'history',
  component: HistoryComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
