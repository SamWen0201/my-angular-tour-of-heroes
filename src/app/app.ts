import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Heroes } from './heroes/heroes';
import { Messages } from './messages/messages';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Heroes, Messages],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'Tour of Heroes';
}
