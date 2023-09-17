import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss'],
})
export class ManageComponent {
  bookForm!: FormGroup;
  isSubmitted: boolean = false;
  isEdit: boolean = false;
  bookId: any;
  constructor(
    protected route: ActivatedRoute,
    private fb: FormBuilder,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.bookForm = this.fb.group({
      name: ['', Validators.required],
      author: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
      total_pages: ['', Validators.required],
      publisher: ['', Validators.required],
    });
    this.route.params.subscribe((param) => {
      console.log('route param', param);
      if (param && param['id']) {
        // call get Book Detail api
        this.apiService.getBookDeatils(param['id']).subscribe((response) => {
          if (response.success) {
            // patch
            this.bookId = param['id'];
            this.isEdit = true;
            this.bookForm.patchValue(response.data);
          }
        });
      }
    });
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.bookForm.valid) {
      if (!this.isEdit) {
        this.apiService
          .createBook(this.bookForm.value)
          .subscribe((response) => {
            if (response.success) {
              this.bookForm.reset();
              this.router.navigateByUrl('/home');
            } else {
            }
          });
      } else {
        let data = this.bookForm.value;
        data.id = this.bookId;
        this.apiService
          .updateBook(this.bookForm.value)
          .subscribe((response) => {
            if (response.success) {
              this.bookForm.reset();
              this.router.navigateByUrl('/home');
            } else {
            }
          });
      }
    }
  }
}
