import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { ImageProcessingService } from '../image-processing.service';
import { Product } from '../_model/product.model';
import { ProductService } from '../_services/product.service';
import { ShowproductImagesDialogComponent } from '../show-product-images-dialog/show-product-images-dialog.component';

@Component({
  selector: 'app-show-product-details',
  templateUrl: './show-product-details.component.html',
  styleUrls: ['./show-product-details.component.css']
})
export class ShowProductDetailsComponent implements OnInit {

  showLoadMoreProductButton = false;
  showTable = false;
  pageNumber: number = 0;
  productDetails: Product[] = [];
  displayedColumns: string[] = ['Id', 'Product Name', 'description', 'Product Discounted Price', 'Product Actual Price', 'Actions'];

  constructor(private productService: ProductService,
    public imagesDialog: MatDialog,
    private imageProcessingService: ImageProcessingService,
    private router: Router) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  searchByKeyword(searchkeyword: string | undefined) {
    console.log(searchkeyword);
    this.pageNumber = 0;
    this.productDetails = [];
    this.getAllProducts(searchkeyword);
  }

  public getAllProducts(searchKeyword: string = "") {
    this.showTable = false;
    this.productService.getAllProducts(this.pageNumber, searchKeyword)
    .pipe(
      map((x: Product[], i) => x.map((product: Product) => this.imageProcessingService.createImages(product)))
    )
    .subscribe(
      (resp: Product[]) => {
        console.log(resp);
        resp.forEach(product => this.productDetails.push(product));
        console.log('msg', this.productDetails);
        this.showTable = true;

        if(resp.length == 12) {
          this.showLoadMoreProductButton = true;
        } else {
          this.showLoadMoreProductButton = false;
        }

        // this.productDetails = resp;
      }, (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  loadMoreProduct() {
    this.pageNumber = this.pageNumber + 1;
    this.getAllProducts();
  }

  deleteProduct(productId: number) {
    this.productService.deleteProduct(productId).subscribe(
      (resp) => {
        this.getAllProducts();
      },
      (error:HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  showImages(product: Product) {
    console.log(product);
    this.imagesDialog.open(ShowproductImagesDialogComponent, {
      data: {
        images: product.productImages
      },
      height: '500px',
      width: '800px'
    });
  }

  editProductDetails(productId: any) {
    this.router.navigate(['/addNewProduct', {productId: productId}]);
  }
}
