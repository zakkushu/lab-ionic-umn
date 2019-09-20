import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[]=[
    new Place(
      'p1',
      'Gading Serpong',
      '2BR, Luas dan Cozy',
      'http://www.desertsun.co.uk/blog/images/Apartment%201.jpg',
      100000
    ),
    
      new Place(
        'p2',
        'Serpong Apartment',
        'Apartment Romantis',
        'https://sg2-cdn.pgimgs.com/projectnet-project/27142/ZPPHO.99164561.R800X800.jpg',
        125000
    ),
    
      new Place(
        'p3',
        'BSD Apartment',
        'Apartment Murah',
        'https://asset.kompas.com/crop/0x137:1000x637/780x390/data/photo/2017/09/04/1260190116.jpg',
        500000
    ),

  ];

  get places(){
    return[... this._places];
  }

  constructor() { }

  getPlace(id: string){
    return {...this._places.find(p => p.id === id)};
  }
}
