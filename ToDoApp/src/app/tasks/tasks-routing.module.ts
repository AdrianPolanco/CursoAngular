import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { TasksLayoutComponent } from "./layouts/tasks-layout/tasks-layout.component";
import { TasksMainPageComponent } from "./pages/tasks-main-page/tasks-main-page.component";
import { TasksAboutPageComponent } from "./pages/tasks-about-page/tasks-about-page.component";

const routes: Route[] = [
  {
    path: '',
    component: TasksLayoutComponent,
    children: [
      {
        path: '',
        component: TasksMainPageComponent
      },
      {
        path: 'about',
        component: TasksAboutPageComponent
      },
      {
        path: '**',
        redirectTo: ''
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule{

}
