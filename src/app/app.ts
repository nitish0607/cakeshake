import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('cakeshakewala');

  readonly WHATSAPP_NUMBER = '917753035353';
  readonly currentYear = new Date().getFullYear();

  orderCake(name: string, price: number, photoUrl: string): void {
    const message =
      `Hi Cake Shake! I want to order ${name} for ₹${price}.\n` +
      `Cake Photo: ${photoUrl}\n` +
      `Please confirm availability and delivery.`;

    const url =
      `https://wa.me/${this.WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(url, '_blank');
  }

 

openWhatsApp() {
   var WHATSAPP_NUMBER = '917753035353';
  window.open(
    `https://wa.me/${this.WHATSAPP_NUMBER}`,
    '_blank'
  );
}

}
