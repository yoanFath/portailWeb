import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {GedService} from '../../services/ged.service';

@Component({
  selector: 'pwe-ged-input',
  templateUrl: './ged-input.component.html',
  styleUrls: ['./ged-input.component.scss']
})
export class GedInputComponent implements OnInit {
  selectedFile: File;
  uploadProgress: number;

  constructor(public dialogRef: MatDialogRef<GedInputComponent>,
              public gedService: GedService) { }

  ngOnInit() {
    this.gedService.uploadProgress.subscribe((progress) => {
      this.uploadProgress = progress;
      if (progress === 100) {
        this.dialogRef.close();
      }
    });
  }

  addFile() {
    this.gedService.uploadFile(this.selectedFile);
  }

  detectFile(event) {
    this.selectedFile = event.target.files[0];
  }
}
