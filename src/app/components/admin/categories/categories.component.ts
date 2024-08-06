import { Component, OnInit } from '@angular/core';
import { VendorService } from '../../../masterservice/vendor.service';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
})
export class CategoriesComponent implements OnInit {
  products$: Observable<any>;

  constructor(private VendorSrv: VendorService) {
    this.products$ = this.VendorSrv.getAllCategory().pipe(
      map((item: any) => {
        return item.data;
      })
    );
  }

  ngOnInit(): void {
    this.products$;
  }

  onEdit() {
    this.products$.subscribe((res: any) => {
      if (res.result) {
        this.products$ = res.data;
        alert('Product Modified Successfully!!');
      } else {
        alert(res.message);
      }
    });
  }
  onDelete() {
    const isdelete = confirm('Are you sure you want to delete Product?');
    if (isdelete) {
      alert('Product Deleted Successfully!');
      this.products$;
    } else {
      alert('server  Error');
    }
  }
}
