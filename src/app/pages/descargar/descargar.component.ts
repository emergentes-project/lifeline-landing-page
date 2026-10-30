import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ANDROID_APK_URL } from '../../app-download';

@Component({
  selector: 'app-descargar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './descargar.component.html',
  styleUrl: './descargar.component.scss'
})
export class DescargarComponent {
  readonly downloadUrl = ANDROID_APK_URL;
  copySuccess = false;

  shareApp(): void {
    if (navigator.share) {
      navigator.share({
        title: 'Lifeline: Auxilio post-sismo',
        text: 'Instala Lifeline antes del sismo. Primeros auxilios con IA en tu teléfono, aun sin internet.',
        url: this.downloadUrl
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(this.downloadUrl);
      this.copySuccess = true;
      setTimeout(() => this.copySuccess = false, 3000);
    }
  }
}
