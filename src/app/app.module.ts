import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header/header.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { BodycontentComponent } from './home/bodycontent/bodycontent.component';
import { FooterComponent } from './home/footer/footer.component';
import { HomeComponent } from './home/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ResturentHomeComponent } from './resturent/resturent-home/resturent-home.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import { StarterCourseComponent } from './resturent/starter-course/starter-course.component';
import { MainCourseComponent } from './resturent/main-course/main-course.component';
import { DesertCourseComponent } from './resturent/desert-course/desert-course.component';
import {MatIconModule} from '@angular/material/icon';
import { CartComponentComponent } from './cart/cart-component/cart-component.component';
import {MatDialogModule} from '@angular/material/dialog';
import { UserInfoComponent } from './shared/dialogcomponent/user-info/user-info.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { VendorRegistrationComponent } from './foodvendor/vendor-registration/vendor-registration.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './foodvendor/login/login.component';
import { AddResturentComponent } from './admin/add-resturent/add-resturent.component';
import { AddStaterComponent } from './admin/add-stater/add-stater.component';
import { AddMainCourseComponent } from './admin/add-main-course/add-main-course.component';
import { AddDesrtComponent } from './admin/add-desrt/add-desrt.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent,
    BodycontentComponent,
    FooterComponent,
    HomeComponent,
    ResturentHomeComponent,
    StarterCourseComponent,
    MainCourseComponent,
    DesertCourseComponent,
    CartComponentComponent,
    UserInfoComponent,
    VendorRegistrationComponent,
    LoginComponent,
    AddResturentComponent,
    AddStaterComponent,
    AddMainCourseComponent,
    AddDesrtComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule,
    MatExpansionModule,
    MatIconModule,
    MatDialogModule,
    MatCheckboxModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
