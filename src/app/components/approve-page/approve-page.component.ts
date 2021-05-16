import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-approve-page',
  templateUrl: './approve-page.component.html',
  styleUrls: ['./approve-page.component.scss']
})
export class ApprovePageComponent implements OnInit {

  constructor() { }

  bookItems: any = [{bookTitle: 'Harry Potter', author: 'JK Rowling', category: ['fiction', 'Novel'] },
    {bookTitle: 'Harry Potter', author: 'JK Rowling', category: ['fiction', 'Novel'] }];

  ngOnInit(): void {
  }

}
