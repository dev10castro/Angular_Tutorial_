import {Routes} from '@angular/router';
import {LoginComponent} from './pages/auth/login/login.component';
import {SigninComponent} from './pages/auth/signin/signin.component';
import {HomeComponent} from './pages/home/home.component';
import {TasksComponent} from './pages/tasks/tasks.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {NotfoundComponent} from './pages/notfound/notfound.component';
import {StatsComponent} from './components/dashboard/stats/stats.component';
import {ProfileComponent} from './components/dashboard/profile/profile.component';

export const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'tasks', component:TasksComponent},
  {path:'login', component:LoginComponent},
  {path:'signin', component:SigninComponent},
  {path:'dashboard',component:DashboardComponent,children:[
      {path:'stats',component:StatsComponent},
      {path:'profile', component:ProfileComponent}
    ]},
  {path:'notfound', component:NotfoundComponent},
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path: '**',redirectTo:'/notfound',pathMatch:'full'}
];
