import { Component } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
    isZoomed = false;
    zoom() {
      this.isZoomed = !this.isZoomed;
    }
    print() {
      window.print();
    }
    share() {
      // implement sharing functionality here
    }
}
