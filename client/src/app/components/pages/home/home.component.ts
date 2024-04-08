import { Component , OnInit } from '@angular/core';
import { PCService } from 'src/app/services/pc.service';
import { PC } from 'src/app/shared/models/PC';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  pc:PC[] = [];

  constructor(private pcService: PCService) { 
    this.pc = this.pcService.getAll();
  }

  ngOnInit(): void {
  }
}
