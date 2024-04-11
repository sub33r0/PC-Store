import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { PCService } from 'src/app/services/pc.service';
import { PC } from 'src/app/shared/models/PC';

@Component({
  selector: 'app-pc-part-page',
  templateUrl: './pc-part-page.component.html',
  styleUrls: ['./pc-part-page.component.css']
})
export class PcPartPageComponent implements  OnInit {

  part!: PC;

  constructor(activatedRoute: ActivatedRoute, pcService: PCService, private cartService: CartService, private router: Router) {
    activatedRoute.params.subscribe((params) => {
      if (params.partId) {
        pcService.getPartById(params.partId).subscribe(serverPart => { 
          this.part = serverPart;
        });
      }
    });
  }
    ngOnInit(): void {
    }
  
  addToCart() {
    this.cartService.addToCart(this.part);
    this.router.navigateByUrl('/cart-page');
  }

}
