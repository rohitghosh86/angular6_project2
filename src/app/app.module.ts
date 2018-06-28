import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import  {RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbProgressbar } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"

import { AppComponent } from './app.component';
import { FatherComponent } from './family/father/father.component';
import { MotherComponent } from './family/mother/mother.component';
import { SonComponent } from './family/son/son.component';
import { DaughterComponent } from './family/daughter/daughter.component';
import { TodoComponent } from './day2/todo/todo.component';
import { SortPipe } from './myPipes/sort.pipe';
import { TemplateFormComponent } from './form/template/template-form/template-form.component';
import { ModelFormComponent } from './form/model/model-form/model-form.component';
import { AutoSearchComponent } from './search/auto-search/auto-search.component';
import { SearchFilterPipe } from './myPipes/search-filter.pipe';
import { ConsumeLocalServiceComponent } from './consume/consume-local-service/consume-local-service.component';
import { ConsumeRemoteServiceComponent } from './myservices/consume-remote-service/consume-remote-service.component';
import { BasicanimationComponent } from './animation/basicanimation/basicanimation.component';
import { ParentComponent } from './parent-child/parent/parent.component';
import { ChildComponent } from './parent-child/child/child.component';
import { NuclearComponent } from './family/nuclear/nuclear.component';
import { InbuiltdirectiveComponent } from './directive/inbuiltdirective/inbuiltdirective.component';
import { UsedirectiveComponent } from './customDirective/usedirective/usedirective.component';

import { myRoutes } from "./routes/myroutes.module";

@NgModule({
  declarations: [
    AppComponent,
    FatherComponent,
    MotherComponent,
    SonComponent,
    DaughterComponent,
    TodoComponent,
    SortPipe,
    TemplateFormComponent,
    ModelFormComponent,
    AutoSearchComponent,
    SearchFilterPipe,
    ConsumeLocalServiceComponent,
    ConsumeRemoteServiceComponent,
    BasicanimationComponent,
    ParentComponent,
    ChildComponent,
    NuclearComponent,
    InbuiltdirectiveComponent,    
    UsedirectiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(myRoutes),
    NgbModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { 

}
