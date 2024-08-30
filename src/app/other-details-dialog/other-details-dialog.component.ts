import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IdemoUser } from "../interfaces/interfaces";

@Component({
  selector: 'app-other-details-dialog',
  templateUrl: './other-details-dialog.component.html',
  styleUrls: ['./other-details-dialog.component.css']
})
export class OtherDetailsDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:IdemoUser) {}

  ngOnInit(): void {
    
  }

}
