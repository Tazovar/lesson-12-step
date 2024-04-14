import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
constructor(@Inject(MAT_DIALOG_DATA) private dialogData:any){}
data:any

ngOnInit(): void {
  this.data = this.dialogData
}
}
