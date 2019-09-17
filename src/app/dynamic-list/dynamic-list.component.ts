import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dynamic-list',
  templateUrl: './dynamic-list.component.html',
  styleUrls: ['./dynamic-list.component.css']
})
export class DynamicListComponent implements OnInit {

  form = new FormGroup({
    topics: new FormArray([])
  });
//Abstract Control is the parent class of FormControl, FormGroup and FormArray

  addTopic(topic: HTMLInputElement){
    (this.form.get('topics') as FormArray).push(new FormControl(topic.value));
    topic.value= '';
  }

  removeTopic(topic: FormControl){
    let index = (this.form.get('topics') as FormArray).controls.indexOf(topic);
    (this.form.get('topics') as FormArray).removeAt(index);
  }
  constructor() { }

  ngOnInit() {
  }

}
