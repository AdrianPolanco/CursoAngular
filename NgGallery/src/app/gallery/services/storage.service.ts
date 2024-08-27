import { Injectable } from '@angular/core';
import { Photo } from '../types/photo.type';
import { Guid } from 'guid-typescript';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private readonly STORAGE_KEY = 'gallery';

  constructor() {}

  async get(): Promise<Photo[]> {
    let photosJson = localStorage.getItem(this.STORAGE_KEY);
    let photos = (photosJson ? JSON.parse(photosJson) : []) as Photo[];
    const proccessPhotos = photos.map(async(photo: Photo) => ({
      ...photo,
      image: await this.getBlobUrlFromBase64(photo.image)
    }));

    photos = await Promise.all(proccessPhotos);
    return photos;
  }

  async save(
    title: string,
    description: string,
    imageFile: File
  ): Promise<Photo> {
    const photos = await this.get();
    const image = await this.fileToDataUrl(imageFile);
    const photo: Photo = {
      id: photos.length + 1,
      title,
      description,
      image,
      created_at: new Date(),
      favorite: false,
    };

    photos.push(photo);
    this.savePhoto(photos);
    return photo;
  }

  async updateFavoriteStatus(id: number): Promise<Photo[]> {
    let photos = await this.get();

    photos = photos.map((p) => {

      if (p.id === id) {
        p.favorite = !p.favorite;
      }
      return p;
    });
    this.savePhoto(photos);
    return photos;
  }

  async delete(id: number): Promise<Photo[]> {
    let photos = await this.get();
    photos = photos.filter((p) => p.id !== id);
    this.savePhoto(photos);
    return photos;
  }

  private convertBase64ToBlob(base64: string, contentType: string) {
    const byteCharacters = atob(base64.split(',')[1]);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    return new Blob([byteArray], { type: contentType });
  }

  private async getBlobUrlFromBase64(base64: string): Promise<string> {
    const blob = await this.resizeImage(base64, 300, 200); // Ajusta el tipo de contenido si es necesario
    return blob
  }

  private resizeImage(
    base64Str: string,
    maxWidth: number,
    maxHeight: number
  ): Promise<string> {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = base64Str;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        let width = img.width;
        let height = img.height;

        // Calcula las nuevas dimensiones manteniendo la relación de aspecto
        if (width > maxWidth) {
          height *= maxWidth / width;
          width = maxWidth;
        }
        if (height > maxHeight) {
          width *= maxHeight / height;
          height = maxHeight;
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx?.drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL()); // Devuelve la imagen redimensionada como base64
      };
    });
  }

  private savePhoto(photos: Photo[]): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(photos));
  }

  private fileToDataUrl(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  }
}
