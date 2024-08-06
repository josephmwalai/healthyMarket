import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class VendorService {
  apiEndPoint = 'https://freeapi.miniprojectideas.com/api/BigBasket/';
  constructor(private http: HttpClient) {}

  getAllCategory() {
    return this.http.get(`${this.apiEndPoint}GetAllCategory`);
  }

  saveProduct(obj: any) {
    return this.http.post(`${this.apiEndPoint}CreateProduct`, obj);
  }

  updateProduct(obj: any) {
    return this.http.post(`${this.apiEndPoint}UpdateProduct`, obj);
  }

  getAllProducts() {
    return this.http.get(`${this.apiEndPoint}GetAllProducts`);
  }

  deleteProduct(id: any) {
    return this.http.get(`${this.apiEndPoint}DeleteProductById?id=0`, id);
  }
  // onLogOut(loggedInObj: any) {
  //   this.confirmationService.confirm({
  //     message: 'Are you sure that you want log out?',
  //     accept: () => {
  //       loggedInObj = {};
  //       sessionStorage.removeItem('bigBasket_user');
  //       sessionStorage.removeItem('token');
  //       this.toastr.success('You have been logged out', 'Thank you');
  //     }
  //   });
  // }
}
