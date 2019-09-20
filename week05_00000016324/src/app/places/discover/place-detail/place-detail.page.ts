import { Component, OnInit } from '@angular/core';
import { Routes, Route, Router, ActivatedRoute } from '@angular/router';
import { NavController, ModalController, LoadingController } from '@ionic/angular';
import { Place } from '../../places.model';
import { PlacesService } from '../../places.service';
import { CreateBookingComponent } from '../../../booking/create-booking/create-booking.component';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  place: Place;

  constructor(private navCtrl: NavController, private route: ActivatedRoute, private placesService: PlacesService, private modalCtrl: ModalController, private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if(!paramMap.has('placeId')){
        this.navCtrl.navigateBack('/places/tabs/discover');
        return;
      }
      this.place = this.placesService.getPlace(paramMap.get('placeId'));
    })
  }

  onBookPlace(){
    this.modalCtrl.create({component: CreateBookingComponent, componentProps: {selectedPlace: this.place}})
      .then(modalElement => {
        modalElement.present();
        return modalElement.onDidDismiss();
      })
      .then(resultData => {
        console.log(resultData.data, resultData.role);
        if(resultData.role === 'confirm'){
          this.loadingCtrl.create({
            keyboardClose: true,
            message: 'Booking the place ...'
          })
          .then(loadingEl => {
            loadingEl.present();
            setTimeout(() => {
              loadingEl.dismiss();
              this.modalCtrl.dismiss({message: 'booked!'}, 'confirm');
            }, 2000);
          });
          console.log('BOOKED');
        }
      });
  }

}
