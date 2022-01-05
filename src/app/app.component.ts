import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  mySnap!: FaceSnap;
  myOtherSnap!: FaceSnap;
  myLastSnap!: FaceSnap;

  ngOnInit() {
    this.mySnap = {
      title: 'Mes vacances',
      description: 'Photos de mes vacances',
      imageUrl:
        'https://media.istockphoto.com/photos/small-retro-car-with-baggage-luggage-and-beach-equipment-on-the-roof-picture-id1140063009?k=20&m=1140063009&s=612x612&w=0&h=v4h02KSCtiYNn90v8nt-6jV47cNf4aDS0pNKzx-88R8=',
      createdDate: new Date(),
      snaps: 0,
      location: 'Noirmoutier',
    };
    this.myOtherSnap = {
      title: 'Ma nouvelle maison',
      description: 'Je vous présente ma nouvelle maison',
      imageUrl:
        'https://www.maisonsclairlogis.fr/wp-content/uploads/maison-contemporaine_onyx-version-nuit.jpg',
      createdDate: new Date(),
      snaps: 0,
      location: 'Los Angeles',
    };
    this.myLastSnap = {
      title: 'Mon bateau',
      description: 'Petite balade en bateau',
      imageUrl:
        'https://img.nauticexpo.fr/images_ne/projects/images-g/nouveau-plate-forme-bateau-exterieur-mastercraft-12403-9874230.jpg',
      createdDate: new Date(),
      snaps: 0,
    };
  }
}
