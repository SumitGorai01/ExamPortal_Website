import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { AdminGuard } from './services/admin.guard';
import { NormalGuard } from './services/normal.guard';
import { ProfileComponent } from './pages/profile/profile.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';


const routes: Routes = [
  // this is for setup pages
  {
    path:'',
    component:HomeComponent,
    pathMatch:'full',
  },
  {
    path:'signup',
    component:SignupComponent,
    pathMatch:'full',
  },
  {
    path:'login',
    component:LoginComponent,
    pathMatch:'full',
  },
  {
    path:'admin',
    component:DashboardComponent,
    canActivate:[AdminGuard],

    children:[
      {
        path:'',
        component:WelcomeComponent,
      },
      {
        path:'profile',
        component:ProfileComponent,
      },
      {
        path:'add-quiz',
        component:AddQuizComponent,
      },
      {
        path:'categories',
        component:ViewCategoriesComponent,
      },
      {
        path:'add-category',
        component : AddCategoryComponent,
      }
//       {
//         path:'quizzes',
//         component: QuizzesComponent,
//       },
    ],
  },
  {
    path:'user-dashboard',
    component: UserDashboardComponent,
    pathMatch:'full',
    canActivate:[NormalGuard],
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
