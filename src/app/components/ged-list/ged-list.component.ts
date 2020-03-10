import { Component, OnInit } from '@angular/core';
import {GedService} from '../../services/ged.service';
import {File} from '../../model/File';

@Component({
  selector: 'pwe-ged-list',
  templateUrl: './ged-list.component.html',
  styleUrls: ['./ged-list.component.scss']
})
export class GedListComponent implements OnInit {
  public files: File[];
  constructor(private gedService: GedService) {
    // @ts-ignore
    gedService.getFiles().subscribe(files => this.files = files);
  }

  ngOnInit() {
  }

  sortFilesByDate(files: File[]): File[] {
    return files.sort((a, b) => (a.time < b.time) ? 1 : -1);
  }
}
