import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.css']
})
export class OurTeamComponent implements OnInit {

  str = "XYZ";
  result = '';

  upCase(s1:string): void{
    this.result="This is our-team component. I have received a string '" +s1+ "' from the our-member component and I capitalize it here as " + s1.toUpperCase()
  }
  constructor() { }

  ngOnInit() {

} 
}
