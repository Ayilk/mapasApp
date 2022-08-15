import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as  mapboxgl from 'mapbox-gl';


@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styles: [`
  .mapa-container{
    height: 100%;
    width: 100%;
  }

  .row {
    background-color: white;
    border-radius: 5px;
    bottom: 50px;
    left: 50px;
    padding: 10px;
    position: fixed;

    z-index: 999;
  }
  `
  ]
})
export class ZoomRangeComponent implements AfterViewInit {

  @ViewChild('mapa') divMapa!: ElementRef;

  mapa!: mapboxgl.Map;

 zoomLevel: number = 10;

  constructor() {}

  ngAfterViewInit(): void {

   // console.log('afterViewInit', this.divMapa)
       
     this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [ -106.44490237257102, 23.239929574080456],
      zoom: this.zoomLevel
    });
  }

  zoomIn(){
    //console.log('zoom in')
    this.mapa.zoomIn();

    this.zoomLevel = this.mapa.getZoom();


  }

  zoomOut(){
    //console.log('zoom out')
    this.mapa.zoomOut();

    //console.log(this.mapa.getZoom())

    this.zoomLevel = this.mapa.getZoom();
   
  }
  


}
