import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  public currentPage: number = 1;
  public itemsPerPage: number = 5;
  public totalBooks!: number ;
  books: any[] = [];
  pagedItems : any[] = []
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getBookList({}).subscribe((response) => {
      if (response.success) {
        console.log(response);
        this.books = response.data;
        this.totalBooks = this.books.length
        this.loadItems();
      }
    });
  }

  onPageChange(event : any){
    console.log("page changed" ,event)
    this.currentPage = event;
    this.loadItems();
  }


  loadItems(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    this.pagedItems = this.books.slice(
      startIndex,
      startIndex + this.itemsPerPage
    );
    console.log(this.pagedItems)
  }
}
