import { Component } from '@angular/core';
import { Heroes } from '../heroes/heroes';
import { MessageService } from '../message-service';

@Component({
  selector: 'app-messages',
  imports: [Heroes],
  templateUrl: './messages.html',
  styleUrl: './messages.css',
})
export class Messages {
  constructor(public messageService: MessageService) {}
}
