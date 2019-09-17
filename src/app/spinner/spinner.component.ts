import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

  public show : boolean = true;

  @Input()
  public set showSpinner(value: boolean) {
    if(value){
      this.show=true;
    }
    else {
      this.show=false;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
