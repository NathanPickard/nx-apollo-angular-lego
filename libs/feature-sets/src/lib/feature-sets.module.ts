import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SetListComponent } from './set-list/set-list.component';
import { SetFormComponent } from './set-form/set-form.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule],
  declarations: [
    SetListComponent,
    SetFormComponent
  ],
  exports: [
    SetListComponent,
    SetFormComponent
  ],
})
export class FeatureSetsModule {}
