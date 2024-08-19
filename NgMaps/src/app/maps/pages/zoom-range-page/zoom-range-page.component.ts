import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import {Map} from 'mapbox-gl';

@Component({
  selector: 'maps-zoom-range-page',
  templateUrl: './zoom-range-page.component.html',
  styleUrl: "./zoom-range-page.component.css"
})
export class ZoomRangePageComponent implements AfterViewInit{
  @ViewChild('map') divMap?: ElementRef;
  @ViewChild('zoomInput') zoomInput?: ElementRef;
  map?: Map;
  zoom: number = 10;
  ngAfterViewInit(): void {
     if (!this.divMap) throw 'El elemento HTML no fue encontrado';

     this.map = new Map({
       container: this.divMap.nativeElement, // container ID
       style: 'mapbox://styles/mapbox/streets-v12', // style URL
       center: [-74.5, 40], // starting position [lng, lat]
       zoom: this.zoom // starting zoom
     });

    this.mapListeners();
  }


  mapListeners() {
    if (!this.map) throw 'El elemento HTML no fue encontrado';
    const zoom = this.map!.getZoom();
    this.map?.on('zoom', (ev) => {
      this.zoom = this.map!.getZoom();
    });

    this.map?.on('zoomend', (ev) => {
      if (this.map!.getZoom() < 18) return;
      this.map!.zoomTo(18);
    });
  }

  zoomIn() {
    this.map?.zoomIn();
  }

  zoomOut() {
    this.map?.zoomOut();
  }

  zoomChanged(zoom: string) {
    const normalizedZoom = Number(zoom);
    if(isNaN(normalizedZoom)) return;
    if(normalizedZoom > 18 || normalizedZoom < -2) return;
    this.map?.zoomTo(normalizedZoom);
  }

}
