import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-descargar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './descargar.component.html',
  styleUrl: './descargar.component.scss'
})
export class DescargarComponent {
  copySuccess = false;

  shareApp(): void {
    if (navigator.share) {
      navigator.share({
        title: 'Lifeline: Auxilio post-sismo',
        text: 'Instala Lifeline antes del sismo. Primeros auxilios con IA en tu teléfono, aun sin internet.',
        url: window.location.origin
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.origin);
      this.copySuccess = true;
      setTimeout(() => this.copySuccess = false, 3000);
    }
  }
}
