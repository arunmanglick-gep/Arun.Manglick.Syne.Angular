import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RootComponent } from './app.component';
import { ModelBasedFormComponent } from "./ModelBased/app.modelbased";
import { TemplateFormComponent } from "./Templated/app.templateform";
import { ReactiveFormComponent } from "./Reactive/app.reactiveform";

@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule],
    declarations: [RootComponent, ReactiveFormComponent, TemplateFormComponent, ModelBasedFormComponent],
    bootstrap: [RootComponent]
})
export class AppModule { }