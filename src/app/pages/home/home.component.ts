import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface FaqItem {
  question: string;
  answer: string;
  isOpen: boolean;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  activeRole: 'ciudadano' | 'medico' = 'ciudadano';

  faqs: FaqItem[] = [
    {
      question: '¿Funciona sin internet?',
      answer: 'Sí. La IA on-device, la base médica curada y tus consultas se procesan localmente en tu teléfono. Cuando el dispositivo recupera la señal, la consulta y tu ubicación se sincronizan automáticamente con el personal médico.',
      isOpen: true
    },
    {
      question: '¿Lifeline reemplaza a un médico?',
      answer: 'No. Lifeline te orienta en los primeros minutos críticos tras un sismo con indicaciones claras basadas en fuentes médicas oficiales. Ante signos graves o heridas complejas, ordena taxativamente buscar asistencia médica profesional.',
      isOpen: false
    },
    {
      question: '¿De dónde sale la información?',
      answer: 'Las indicaciones provienen de fuentes médicas de primeros auxilios previamente validadas e indexadas (MINSA, OMS y Cruz Roja Peruana). Se emplea la técnica RAG (Retrieval-Augmented Generation) para garantizar que la IA local nunca alucine recomendaciones sin respaldo clínico.',
      isOpen: false
    },
    {
      question: '¿Qué pasa con mis datos y mi ubicación?',
      answer: 'Tus datos de salud y ubicación se almacenan de manera cifrada en tu dispositivo. Cumplimos estrictamente con la Ley N° 29733 (Ley de Protección de Datos Personales del Perú) aplicando principios de finalidad, minimización y protección en almacenamiento y sincronización.',
      isOpen: false
    },
    {
      question: 'Soy personal médico, ¿cómo me registro?',
      answer: 'Descarga la aplicación, selecciona el rol "Personal Médico" e ingresa tu categoría profesional, número de colegiatura y especialidad. El sistema IAM valida tu identidad para darte acceso exclusivo al triaje, autoasignación y cierre de casos en campo.',
      isOpen: false
    }
  ];

  setRole(role: 'ciudadano' | 'medico'): void {
    this.activeRole = role;
  }

  toggleFaq(index: number): void {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }
}
