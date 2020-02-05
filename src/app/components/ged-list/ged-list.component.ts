import { Component, OnInit } from '@angular/core';
import {GedService} from '../../services/ged.service';

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

}
