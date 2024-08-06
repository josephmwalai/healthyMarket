import { Component, OnInit } from '@angular/core';
import { VendorService } from '../../../masterservice/vendor.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  isSidePanelVissible: boolean = false;

  productObj: any = {
    productId: 0,
    productSku: '',
    productName: '',
    productPrice: 0,
    productShortName: '',
    productDescription: '',
    createdDate: new Date(),
    deliveryTimeSpan: '',
    categoryId: 0,
    productImageUrl: '',
  };

  categoryData: any[] = [];
  productData: any[] = [];

  constructor(private vendorSrv: VendorService) {}

  ngOnInit(): void {
    this.getAllCategories();
    this.getProducts();
  }
  getAllCategories() {
    this.vendorSrv.getAllCategory().subscribe((res: any) => {
      this.categoryData = res.data;
    });
  }

  openSidePanel() {
    this.isSidePanelVissible = true;
  }
  closeSidePanel() {
    this.isSidePanelVissible = false;
  }
  onSave() {
    this.vendorSrv.saveProduct(this.productObj).subscribe((res: any) => {
      if (res.result) {
        alert('Product Created Successfully!!!');
        this.getProducts();
      } else {
        alert(res.message);
      }
    });
  }

  onUpdate() {
    this.vendorSrv.updateProduct(this.productObj).subscribe((res: any) => {
      if (res.result) {
        alert('Product Updated Successfully!!!');
        this.getProducts();
      } else {
        alert(res.message);
      }
    });
  }

  getProducts() {
    this.vendorSrv.getAllProducts().subscribe((res: any) => {
      this.productData = res.data;
    });
  }
  onReset() {
    this.clear();
  }
  clear() {
    throw new Error('Method not implemented.');
  }
  onEdit(item: any) {
    this.productObj = item;
    this.openSidePanel();
  }
  onRemove(item: any) {
    const isdelete = confirm('Are you sure you want to delete product?');
    if (isdelete) {
      this.vendorSrv.deleteProduct(item.productId).subscribe((res: any) => {
        if (res.result) {
          alert('Product Deleted Succesfully');
          this.productData = res.data;
        } else {
          alert(res.message);
        }
      });
    }
  }
}
