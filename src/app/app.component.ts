import { Component } from '@angular/core';
import { PhotoService } from 'src/app/services/photo.service'
import { Photo } from './models/photo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  response: string = null;
  photos: Photo[] = null;

  constructor(private swService: PhotoService) {}

  ngOnInit(): void {

    this.swService.getPhotos().subscribe(
      (resp: Photo[]) => {
        this.photos = resp;
        console.log(this.photos);
      },
      (error: any) => {
        console.log(error);
      }
    );

  }
}

