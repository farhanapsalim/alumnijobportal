import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FacultyComponent } from './faculty/faculty.component';

const routes: Routes = [
  {path:'header', component: HeaderComponent},
  {path:'footer', component: FooterComponent},
  {path:'home', component: HomeComponent},
  {path:'faculty', component: FacultyComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
