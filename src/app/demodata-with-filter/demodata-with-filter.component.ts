import { Component, OnDestroy, OnInit } from '@angular/core';
import { DemoDataService } from '../services/demo-data.service';
import { MatDialog } from '@angular/material/dialog';
import { OtherDetailsDialogComponent } from '../other-details-dialog/other-details-dialog.component';
import { HttpParams } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { IdemoUser } from '../interfaces/interfaces';

@Component({
  selector: 'app-demodata-with-filter',
  templateUrl: './demodata-with-filter.component.html',
  styleUrls: ['./demodata-with-filter.component.css']
})
export class DemodataWithFilterComponent implements OnInit, OnDestroy {

  /* store all user data */
  users: IdemoUser[] = [];
  /* store and show filtered data in ui */
  filteredUsers: IdemoUser[] = [];
  /* store filter value */
  filterTerm = '';
  /* Default sort field */
  sortField: string = 'name';
  /* Default sort direction */
  sortDirection: 'asc' | 'desc' = 'asc';
  /* subscription */
  subs: Subscription

  constructor(private demoDataService:DemoDataService,
    private dialog: MatDialog
  ) {}

  /* onInit method */
  ngOnInit(): void {
   let getData = this.demoDataService.getDemoData().subscribe(data => {
      this.users = data;
      this.filteredUsers = data;
    });
    this.subs.add(getData)
  }

  /* on filter value change */
  onFilterChange(): void {
    this.filteredUsers = this.users.filter(user =>
      user.name.toLowerCase().includes(this.filterTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(this.filterTerm.toLowerCase()) ||
      user.phone.toLowerCase().includes(this.filterTerm.toLowerCase()) ||
      user.website.toLowerCase().includes(this.filterTerm.toLowerCase())
    );
  }

  /* on Sort button click */
  onSortChange(field: string): void {
    this.sortField = field;
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc'; // Toggle sort direction
    this.filteredUsers = this.sortData(this.filteredUsers);
  }

  /* sort data logic */
  sortData(data: IdemoUser[]): IdemoUser[] {
    return data.sort((a, b) => {
      const fieldA = a[this.sortField as keyof IdemoUser];
      const fieldB = b[this.sortField as keyof IdemoUser];
      if (fieldA < fieldB) return this.sortDirection === 'asc' ? -1 : 1;
      if (fieldA > fieldB) return this.sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }

  /* on info dialog open */
  userInfoDialogOpen(user: any): void {
   this.dialog.open(OtherDetailsDialogComponent , {
      data: user,
      width: '90%',
      maxWidth: '600px',
      disableClose: true,
    });
  }

  /* on destroy call */
  ngOnDestroy(): void {
   this.subs.unsubscribe();
  }
}
