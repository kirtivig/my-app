import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-our-member',
  templateUrl: './our-member.component.html',
  styleUrls: ['./our-member.component.css']
})
export class OurMemberComponent implements OnInit {

  @Input() s : string;
  @Output() clickme = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
