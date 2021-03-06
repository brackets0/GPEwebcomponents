import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { ComponentsModule, ComponentsComponent } from 'components';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ComponentsModule
  ],
  providers: [],
})
export class AppModule {
  constructor(private injector: Injector){}
  ngDoBootstrap(){
    const element = createCustomElement(ComponentsComponent, { injector: this.injector })
    customElements.define("lib-components", element);
  }
}
