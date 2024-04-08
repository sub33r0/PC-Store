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
}
