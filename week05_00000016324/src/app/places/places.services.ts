import { Injectable } from "@angular/core";
import { Place } from './places.model';

@Injectable({
    providedIn: 'root'
})

export class PlacesService{
    private _places : Place[] = [
        new Place(
            'p1',
            'Gading Apartement',
            '2BR, Luas dan Cozy',
            'https://www.desertsun.co.uk/blog/images/Apartment%201.jpg',
            10000000000
        ),
        new Place(
            'p2',
            'Serpong Apartement',
            'Apartemen Romantis',
            'https://www.desertsun.co.uk/blog/images/Apartment%201.jpg',
            12500000000
        ),
        new Place(
            'p3',
            'BSD Apartement',
            'Apartemen murah',
            'https://www.desertsun.co.uk/blog/images/Apartment%201.jpg',
            50000000000
        )
    ];

    get places(){
        return[...this._places];
    }
}