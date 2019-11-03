import { AddDesrtComponent } from './admin/add-desrt/add-desrt.component';
import { AddMainCourseComponent } from './admin/add-main-course/add-main-course.component';
import { AddStaterComponent } from './admin/add-stater/add-stater.component';
import { LoginComponent } from './foodvendor/login/login.component';
import { VendorRegistrationComponent } from './foodvendor/vendor-registration/vendor-registration.component';
import { CartComponentComponent } from './cart/cart-component/cart-component.component';
import { HomeComponent } from './home/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResturentHomeComponent } from './resturent/resturent-home/resturent-home.component';
import { UserInfoComponent } from './shared/dialogcomponent/user-info/user-info.component';
import { AddResturentComponent } from './admin/add-resturent/add-resturent.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'order/cart', component: CartComponentComponent },
  { path: 'order/cart/userinfo', component: UserInfoComponent },
  { path: 'order/:resturent', component: ResturentHomeComponent },
  { path: 'edit/:resturent', component: ResturentHomeComponent },
  { path: 'registrantion', component: VendorRegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'addResturent', component: AddResturentComponent },
  { path: 'addStarter', component: AddStaterComponent },
  { path: 'addMainCourse', component: AddMainCourseComponent },
  { path: 'addDesert', component: AddDesrtComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
