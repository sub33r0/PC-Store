import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PCService } from 'src/app/services/pc.service';
import { PC } from 'src/app/shared/models/PC';

@Component({
  selector: 'app-pc-part-page',
  templateUrl: './pc-part-page.component.html',
  styleUrls: ['./pc-part-page.component.css']
})
export class PcPartPageComponent implements  OnInit {

  part!: PC;

  constructor(activatedRoute: ActivatedRoute, pcService: PCService) {
    activatedRoute.params.subscribe((params) => {
      if (params.partId) {
        this.part = pcService.getPartById(params.partId);
      }
    });
  }
    ngOnInit(): void {
    }
}
