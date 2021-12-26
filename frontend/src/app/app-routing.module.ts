import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
// import { FacultyComponent } from './faculty/faculty.component';

const routes: Routes = [
 {path:'home', component: HomeComponent}
  // {path:'faculty', component: FacultyComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
