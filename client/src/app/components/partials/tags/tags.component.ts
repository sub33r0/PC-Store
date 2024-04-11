import { Component, OnInit } from '@angular/core';
import { PCService } from 'src/app/services/pc.service';
import { Tag } from 'src/app/shared/models/Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  tags?:Tag[];

  constructor(pcService: PCService) {
    pcService.getAllTags().subscribe((serverTags) => { 
      this.tags = serverTags;
    });
  }

  ngOnInit(): void {
  }

}
