import { Injectable } from '@angular/core';
import { PC } from '../shared/models/PC';
import { sample_pc, sample_tags } from 'src/data';
import { Tag } from '../shared/models/Tag';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {  PARTS_BY_ID_URL, PARTS_BY_SEARCH_URL, PARTS_BY_TAG_URL, PARTS_TAGS_URL, PARTS_URL } from '../shared/models/constants/urls';


@Injectable({
  providedIn: 'root'
})
export class PCService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<PC[]>{
    return this.http.get<PC[]>(PARTS_URL);
  }

  getAllPcPartsBySearchTerm(searchTerm: string) {
    return this.http.get<PC[]>(`${PARTS_BY_SEARCH_URL}${searchTerm}`);
  }

  getAllTags(): Observable<Tag[]> { 
    return this.http.get<Tag[]>(`${PARTS_TAGS_URL}`);
  }

  getPartByTag(tag: string): Observable<PC[]> {
    return tag === 'All' ?
      this.getAll() :
      this.http.get<PC[]>(`${PARTS_BY_TAG_URL}${tag}`);
  }
  
  getPartById(partId: string): Observable<PC> {
    return this.http.get<PC>(`${PARTS_BY_ID_URL}${partId}`);
  }
}
