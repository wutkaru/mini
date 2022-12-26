import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MiniappCallbackComponent } from './miniapp-callback/miniapp-callback.component';
import { MiniappComponent } from './miniapp/miniapp.component';

const routes: Routes = [
  { path: 'miniapp', component: MiniappComponent },
  { path: 'miniapp-callback', component: MiniappCallbackComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
