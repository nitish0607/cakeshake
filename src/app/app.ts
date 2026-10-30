
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  protected readonly title = signal('cakeshakewala');

  readonly WHATSAPP_NUMBER = '917753035353';
  readonly currentYear = new Date().getFullYear();

  // Order specific cake on WhatsApp
  orderCake(name: string, price: number, photoUrl: string): void {

    const message =
      `Hi Cake Shake! I want to order ${name} for ₹${price}.\n` +
      `Cake Photo: ${photoUrl}\n` +
      `Please confirm availability and delivery.`;

    const url =
      `https://wa.me/${this.WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(url, '_blank');
  }

  // General WhatsApp chat
  openWhatsApp(): void {

    window.open(
      `https://wa.me/${this.WHATSAPP_NUMBER}`,
      '_blank'
    );

  }

}
