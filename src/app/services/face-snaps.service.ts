import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Injectable({
  providedIn: 'root',
})
export class FaceSnapsService {
  faceSnaps: FaceSnap[] = [
    {
      id: 1,
      title: 'Mes vacances',
      description: 'Photos de mes vacances',
      imageUrl:
        'https://media.istockphoto.com/photos/small-retro-car-with-baggage-luggage-and-beach-equipment-on-the-roof-picture-id1140063009?k=20&m=1140063009&s=612x612&w=0&h=v4h02KSCtiYNn90v8nt-6jV47cNf4aDS0pNKzx-88R8=',
      createdDate: new Date(),
      snaps: 149,
      location: 'Noirmoutier',
    },
    {
      id: 2,
      title: 'Ma nouvelle maison',
      description: 'Je vous présente ma nouvelle maison',
      imageUrl:
        'https://www.maisonsclairlogis.fr/wp-content/uploads/maison-contemporaine_onyx-version-nuit.jpg',
      createdDate: new Date(),
      snaps: 0,
      location: 'Los Angeles',
    },
    {
      id: 3,
      title: 'Mon bateau',
      description: 'Petite balade en bateau',
      imageUrl:
        'https://img.nauticexpo.fr/images_ne/projects/images-g/nouveau-plate-forme-bateau-exterieur-mastercraft-12403-9874230.jpg',
      createdDate: new Date(),
      snaps: 0,
    },
    {
      id: 4,
      title: 'Mes vacances',
      description: 'Photos de mes vacances',
      imageUrl:
        'https://media.istockphoto.com/photos/small-retro-car-with-baggage-luggage-and-beach-equipment-on-the-roof-picture-id1140063009?k=20&m=1140063009&s=612x612&w=0&h=v4h02KSCtiYNn90v8nt-6jV47cNf4aDS0pNKzx-88R8=',
      createdDate: new Date(),
      snaps: 149,
      location: 'Noirmoutier',
    },
    {
      id: 5,
      title: 'Ma nouvelle maison',
      description: 'Je vous présente ma nouvelle maison',
      imageUrl:
        'https://www.maisonsclairlogis.fr/wp-content/uploads/maison-contemporaine_onyx-version-nuit.jpg',
      createdDate: new Date(),
      snaps: 0,
      location: 'Los Angeles',
    },
    {
      id: 6,
      title: 'Mon bateau',
      description: 'Petite balade en bateau',
      imageUrl:
        'https://img.nauticexpo.fr/images_ne/projects/images-g/nouveau-plate-forme-bateau-exterieur-mastercraft-12403-9874230.jpg',
      createdDate: new Date(),
      snaps: 0,
    },
  ];

  getAllFaceSnaps(): FaceSnap[] {
    return this.faceSnaps;
  }

  getFaceSnapById(faceSnapId: number): FaceSnap {
    const faceSnap = this.faceSnaps.find(
      (faceSnap) => faceSnap.id === faceSnapId
    );
    if (!faceSnap) {
      throw new Error('FaceSnap not found!');
    } else {
      return faceSnap;
    }
  }

  snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
    const faceSnap = this.getFaceSnapById(faceSnapId);
    snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
  }
}
