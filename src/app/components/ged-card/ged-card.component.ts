import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'pwe-ged-card',
  templateUrl: './ged-card.component.html',
  styleUrls: ['./ged-card.component.scss']
})
export class GedCardComponent {
  @Input()
  public file: File;
  constructor() { }
  public handleWithGoogleViewer(file: File) {
    return file.name.toLowerCase().endsWith('.txt') || file.name.toLowerCase().endsWith('.css') || file.name.toLowerCase().endsWith('.html')
      || file.name.toLowerCase().endsWith('.php') || file.name.toLowerCase().endsWith('.c') || file.name.toLowerCase().endsWith('.cpp')
      || file.name.toLowerCase().endsWith('.h') || file.name.toLowerCase().endsWith('.hpp') || file.name.toLowerCase().endsWith('.js')
      || file.name.toLowerCase().endsWith('.doc') || file.name.toLowerCase().endsWith('.docx') || file.name.toLowerCase().endsWith('.xls')
      || file.name.toLowerCase().endsWith('.xlsx') || file.name.toLowerCase().endsWith('.ppt') || file.name.toLowerCase().endsWith('.pptx')
      || file.name.toLowerCase().endsWith('.pdf') || file.name.toLowerCase().endsWith('.pages') || file.name.toLowerCase().endsWith('.ai')
      || file.name.toLowerCase().endsWith('.psd') || file.name.toLowerCase().endsWith('.tiff') || file.name.toLowerCase().endsWith('.dxf')
      || file.name.toLowerCase().endsWith('.svg') || file.name.toLowerCase().endsWith('.eps') || file.name.toLowerCase().endsWith('.ps')
      || file.name.toLowerCase().endsWith('.ttf') || file.name.toLowerCase().endsWith('.xps') || file.name.toLowerCase().endsWith('.zip')
      || file.name.toLowerCase().endsWith('.rar');
  }
}
