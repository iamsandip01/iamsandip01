import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FileHandle } from './_model/file-handle.model';
import { Product } from './_model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ImageProcessingService {

  constructor(private sanitizer: DomSanitizer) { }

  public createImages(product: Product) {
    const productImagesss: any[] = product.productImages;

    const productImagesssToFileHandle: FileHandle[] = [];

    for (let i = 0; i < productImagesss.length; i++) {
      const imageFileData = productImagesss[i];

      const imageBlob = this.dataURItoBlob(imageFileData.picByte, imageFileData.type);

      const imageFile = new File([imageBlob], imageFileData.name, { type: imageFileData.type });

      const finalFileHandle :FileHandle = {
        file: imageFile,
        url: this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(imageFile))
      };

      productImagesssToFileHandle.push(finalFileHandle);
    }

    product.productImages = productImagesssToFileHandle;
    return product;

  }

  public dataURItoBlob(picBytes: string, imageType: any) {
    const byteString = window.atob(picBytes);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);

    for(let i = 0; i < byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt(i);
    }

    const blob = new Blob([int8Array], { type: imageType});
    return blob;
  }
}
