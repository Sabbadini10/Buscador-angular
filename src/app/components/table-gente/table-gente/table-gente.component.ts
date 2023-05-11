import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { Person } from 'src/app/models/gente.model';
import { Gente } from 'src/app/data/gente.data';
import {MatInputModule} from '@angular/material/input';


@Component({
  selector: 'app-table-gente',
  standalone: true,
  imports: [CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    MatSortModule

  ],
  templateUrl: './table-gente.component.html',
  styleUrls: ['./table-gente.component.css']
})
export class TableGenteComponent implements OnInit{

  displayedColumns: string[] = ['id', 'name', 'company', 'category','level'];

  dataSource = new MatTableDataSource<Person>;

@ViewChild(MatPaginator) paginator!: MatPaginator;

@ViewChild(MatSort) set MatSort(sort: MatSort){
  this.dataSource.sort = sort;
};

constructor(){
  this.dataSource = new MatTableDataSource(Gente)
}

ngOnInit(){}

ngAfterViewInit(){
this.dataSource.paginator = this.paginator;

}

   applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  } 
}

