import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { StoreModule } from '@ngrx/store';
import { listReducer } from './store/list/list.reduser';
import { AddListItemComponent } from './components/add-list-item/add-list-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ListComponent,
    AddListItemComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    StoreModule.forRoot({ list: listReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
