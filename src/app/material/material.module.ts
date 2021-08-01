import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

const modules = [
  MatIconModule,
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
];

@NgModule({
  imports: [...modules],
  exports: [...modules],
  providers: [],
})
export default class MaterialModule {}
