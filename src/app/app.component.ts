import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Angular Essentials';
  rootName = 'Itachi';
  rootItems = ['Apples', 'Bananas', 'Cherries']

  onNameChanged(newName: string) {
    this.rootName = newName;
  }

  onItemWasAdded(newItem: string) {
    this.rootItems.push(newItem);
    console.log('items in cart', this.rootItems);
  }
}

// to create new subfolder/component under 'app' folder:
// in terminal run ng g c <COMPONENT_NAME>
// OR
// ng generate component <COMPONENT_NAME>
