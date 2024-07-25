import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/models/wishlist';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  items : WishItem[] = [
    new WishItem('Learn Angular'),
    new WishItem('Finish Project', true),
    new WishItem('Drink Water')
  ]

  listFilter : String = '0';
  newWishText = '';
  title = 'wishlist';
  visibleItems : WishItem[] = this.items;

  addNewWish(){
    //adding wishes to array
    //clear the textbox
    this.items.push(new WishItem(this.newWishText))
    this.newWishText='';
  }
  filterChanged(value: any){
    if (value === '0') {
      this.visibleItems = this.items;
    } else if (value === '1') {
      this.visibleItems = this.items.filter(item => !item.isComplete);
    } else {
      this.visibleItems = this.items.filter(item => item.isComplete);
    }
  }
  toggleItem(item : WishItem){
    item.isComplete = !item.isComplete;
    console.log(item);
  }
}
