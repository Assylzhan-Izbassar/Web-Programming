import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array-list',
  templateUrl: './array-list.component.html',
  styleUrls: ['./array-list.component.css']
})
export class ArrayListComponent implements OnInit {

  array_list: number[];

  constructor() {
    this.array_list = [1,2,3,4,5];
  }

  ngOnInit(): void {
  }

}
