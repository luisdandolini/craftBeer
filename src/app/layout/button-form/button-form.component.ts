import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-form',
  templateUrl: './button-form.component.html',
  styleUrls: ['./button-form.component.css']
})
export class ButtonFormComponent implements OnInit {

  @Input() label: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
