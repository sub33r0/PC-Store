import { Injectable } from '@angular/core';
import { PC } from '../shared/models/PC';
import { sample_pc, sample_tags } from 'src/data';
import { Tag } from '../shared/models/Tag';


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

  getAllTags(): Tag[] { 
    return sample_tags;
  }

  getPartByTag(tag: string): PC[] {
    return tag === 'All' ?
      this.getAll() :
      this.getAll().filter(part => part.tags?.includes(tag));
  }
  
  getPartById(partId: string): PC {
    return this.getAll().find(part => part.id === partId) ?? new PC();
  }

}
