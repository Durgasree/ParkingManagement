import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EntriesComponent } from './entries/entries.component';
import {RouterModule,Routes} from '@angular/router';
import { EntryComponent } from './entry/entry.component';
import { ExitComponent } from './exit/exit.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {path: '',redirectTo: 'entries/entry',pathMatch: 'full'},
  {path: 'list', component: ListComponent},
  {path: 'entries',component: EntriesComponent,children: [
    {path: 'entry',component: EntryComponent},
    {path: 'exit',component: ExitComponent},
    ]
  }
]

@NgModule({
  declarations: [
    AppComponent,
    EntriesComponent,
    EntryComponent,
    ExitComponent,
    ListComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      routes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
