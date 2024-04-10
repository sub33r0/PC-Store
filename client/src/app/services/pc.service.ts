import { Injectable } from '@angular/core';
import { PC } from '../shared/models/PC';
import { sample_pc } from 'src/data';


@Injectable({
  providedIn: 'root'
})
export class PCService {

  constructor() { }

  getAll(): PC[]{
    return sample_pc;
  }

  getAllPcPartsBySearchTerm(searchTerm: string) {
    return this.getAll().filter(part => part.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }
  
  getPartById(partId: string): PC {
    return this.getAll().find(part => part.id === partId) ?? new PC();
  }

}
