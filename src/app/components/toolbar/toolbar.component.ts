import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { TableGenteComponent } from '../table-gente/table-gente/table-gente.component';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports:[CommonModule, MatToolbarModule, MatIconModule, MatDialogModule],
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
constructor(public dialog: MatDialog){

}
openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
  this.dialog.open(TableGenteComponent, {
    enterAnimationDuration,
    exitAnimationDuration,
  });
}
}

