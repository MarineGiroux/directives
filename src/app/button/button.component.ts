import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Button } from '../models/button';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})


export class ButtonComponent {
  title = 'Bonjour !!';

  isAdmin : boolean=true;

  buttonView = new Button("View");
  buttonEdit = new Button("Edit");
  buttonIsAdmin = new Button("Is Amin");

  toggleIsAdmin() {
    this.isAdmin = !this.isAdmin;
  }

}
