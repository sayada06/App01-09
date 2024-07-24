import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCol, IonLabel, IonGrid, IonRow, IonItem, IonButton, IonIcon} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCol, IonLabel, IonGrid, IonRow, IonItem, IonButton, IonIcon],
})
export class HomePage {
  constructor() {}
}
