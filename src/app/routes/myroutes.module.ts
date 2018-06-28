import  {RouterModule, Routes } from '@angular/router';

import { AppComponent } from '../app.component';
import { FatherComponent } from '../family/father/father.component';
import { MotherComponent } from '../family/mother/mother.component';
import { SonComponent } from '../family/son/son.component';
import { DaughterComponent } from '../family/daughter/daughter.component';
import { TodoComponent } from '../day2/todo/todo.component';
import { SortPipe } from '../myPipes/sort.pipe';
import { TemplateFormComponent } from '../form/template/template-form/template-form.component';
import { ModelFormComponent } from '../form/model/model-form/model-form.component';
import { AutoSearchComponent } from '../search/auto-search/auto-search.component';
import { SearchFilterPipe } from '../myPipes/search-filter.pipe';
import { ConsumeLocalServiceComponent } from '../consume/consume-local-service/consume-local-service.component';
import { ConsumeRemoteServiceComponent } from '../myservices/consume-remote-service/consume-remote-service.component';
import { BasicanimationComponent } from '../animation/basicanimation/basicanimation.component';
import { ParentComponent } from '../parent-child/parent/parent.component';
import { ChildComponent } from '../parent-child/child/child.component';
import { NuclearComponent } from '../family/nuclear/nuclear.component';
import { InbuiltdirectiveComponent } from '../directive/inbuiltdirective/inbuiltdirective.component';
import { UsedirectiveComponent } from '../customDirective/usedirective/usedirective.component';

export const myRoutes: Routes = [
  
    {
      path: 'nuclear',
      component:NuclearComponent,
      children:[      
        {
          path: 'father',
          component: FatherComponent
        },
        {
          path: 'mother',
          component: MotherComponent
        },
        {
          path: 'son',
          component: SonComponent
        },
        {
          path: 'daughter',
          component: DaughterComponent
        }
      ]
  
    },
  
    {
      path: 'todo',
      component: TodoComponent
    },
    {
      path: 'template',
      component: TemplateFormComponent
    },
    {
      path: 'model',
      component: ModelFormComponent
    },
    {
      path: 'autoSearch',
      component: AutoSearchComponent
    },
    {
      path: 'localService',
      component: ConsumeLocalServiceComponent
    },
    {
      path: 'remoteService',
      component: ConsumeRemoteServiceComponent
    },
    {
      path: 'animation',
      component: BasicanimationComponent
    },
    {
      path: 'eventBinding',
      component: ParentComponent
    },
    {
      path: '',
      redirectTo:'todo',
      pathMatch:'full'
    },
    {
      path: 'directive',
      component: InbuiltdirectiveComponent
    },
    {
      path: 'customDirective',
      component: UsedirectiveComponent
    }  
    
  ]