import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HttpClientModule } from "@angular/common/http";
import { EmployeeService } from './employee.service';
import { HttpModule } from '@angular/http';
import { HttpPostService } from './http-post.service';
import { AppErrorHandler } from './app-error-handler';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OurMemberComponent } from './our-member/our-member.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { DynamicListComponent } from './dynamic-list/dynamic-list.component';


const appRoutes: Routes = [
  { path: 'home',component: HomeComponent },
  { path: 'about-us',component: AboutUsComponent },
  { path: 'our-team',component: OurTeamComponent },
  { path: 'contact-us',component: ContactUsComponent },
  { path: 'dynamic-list',component: DynamicListComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    AboutUsComponent,
    OurTeamComponent,
    ContactUsComponent,
    OurMemberComponent,
    SpinnerComponent,
    DynamicListComponent,
  ],
  imports: [
    HttpClientModule, 
    BrowserModule, 
    RouterModule.forRoot(appRoutes),
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ 
    EmployeeService,
    HttpPostService,
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
