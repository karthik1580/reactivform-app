import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-gst-form',
  templateUrl: './add-gst-form.component.html',
  styleUrls: ['./add-gst-form.component.scss'],
  
})
export class AddGstFormComponent implements OnInit {
  data1: string = 'Sarathlal Saseendran';  
  data2: string = '12345'; 
  name123: string = 'Angular';
  constructor() { }

  ngOnInit(): void {
  }

}
