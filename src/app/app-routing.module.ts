import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MiniappCallbackComponent } from "./miniapp-callback/miniapp-callback.component";
import { MiniappComponent } from "./miniapp/miniapp.component";
import { TestComponent } from "./test/test.component";

const routes: Routes = [
  { path: "mini", component: MiniappComponent },
  { path: "mini-callback", component: MiniappCallbackComponent },
  { path: "test", component: TestComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
