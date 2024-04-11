import { Component , OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { PCService } from 'src/app/services/pc.service';
import { PC } from 'src/app/shared/models/PC';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  parts:PC[] = [];

  constructor(private pcService: PCService, activatedRoute: ActivatedRoute) { 
    let foodsObservable:Observable<PC[]>;
    activatedRoute.params.subscribe((params) => {
      if(params.searchTerm){
        foodsObservable = this.pcService.getAllPcPartsBySearchTerm(params.searchTerm);
      } else if (params.tag) { 
        foodsObservable = this.pcService.getPartByTag(params.tag);
      }else {
        foodsObservable = pcService.getAll();

      }
      foodsObservable.subscribe((serverParts) => {
        this.parts = serverParts;
      });
    });
  }

  ngOnInit(): void {
  }
}