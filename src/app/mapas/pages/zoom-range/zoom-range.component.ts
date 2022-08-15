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
    width: 700px;
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

    //En el momento en el que ya cree el mapa y esta listo para ser usado
    this.mapa.on('zoom', (evento) => {
      // console.log('zoom');
      // console.log(evento)

      //const zoomActual = this.mapa.getZoom();
     // console.log('zoomActual');
      //console.log(zoomActual);

      this.zoomLevel = this.mapa.getZoom();
    })

    this.mapa.on('zoomend', (e) => {
      if(this.mapa.getZoom() > 18){
        this.mapa.zoomTo( 18 );
      }
    })
  }

  zoomIn(){
    //console.log('zoom in')
    this.mapa.zoomIn();

    //Esta no es la manera mas optima de hacer zoom, pues
    //al mover la ruedita del mouse, el número del zoom no se
    //actualiza. Por lo tanto tenemos que meter un event Listener
    //que este escuchado los cambios
    //this.zoomLevel = this.mapa.getZoom();


  }

  zoomOut(){
    //console.log('zoom out')
    this.mapa.zoomOut();

    //console.log(this.mapa.getZoom())

    //this.zoomLevel = this.mapa.getZoom();
   
  }

  zoomCambio( valor: string){
    //console.log( valor)
    this.mapa.zoomTo ( Number(valor) )
  }
  


}
