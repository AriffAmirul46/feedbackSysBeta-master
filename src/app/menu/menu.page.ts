import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage {
  // Array of menu items
  menuItems = [
    {
      name: 'Cappuccino',
      description: 'A delicious blend of espresso, steamed milk, and foam.',
      price: 4.5,
      image: 'assets/images/cappuccino.jpg'
    },
    {
      name: 'Latte',
      description: 'Smooth espresso with steamed milk and a light foam topping.',
      price: 4.0,
      image: 'assets/images/latte.jpg'
    },
    {
      name: 'Blueberry Muffin',
      description: 'Freshly baked muffin filled with blueberries.',
      price: 2.5,
      image: 'assets/images/blueberry_muffin.jpg'
    }
    // Add more menu items as needed
  ];

  constructor() { }
}
