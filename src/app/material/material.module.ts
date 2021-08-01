import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

const modules = [MatIconModule, MatInputModule, MatFormFieldModule];

@NgModule({
  imports: [...modules],
  exports: [...modules],
  providers: [],
})
export default class MaterialModule {}
