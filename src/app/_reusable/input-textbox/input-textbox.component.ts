import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-textbox',
  templateUrl: './input-textbox.component.html',
  styleUrls: ['./input-textbox.component.scss']
})
export class InputTextboxComponent implements OnInit {
  // @Input() inputModel: string;  
  // @Input() maxLength: number;  
  // @Input() isNumeric: boolean; 
  @Input() inputName?: string;
  @Input() labelName?: string;
  @Input() inputModel: string = '';

  //@Output() inputModelChange = new EventEmitter<string>();
  constructor() { }
 
  ngOnInit() {
   console.log('name', this.inputName);
  }

  textChange(){
   // this.inputModelChange.emit(this.inputModel);
    //this.textCount = this.inputModel.length;
    console.log('hiiiii');
  }

}
