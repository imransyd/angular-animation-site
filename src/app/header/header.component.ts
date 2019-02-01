import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	header = {
		heading:"Angular tryout Website",
		headingtext:"This site was build for the sole purpose understanding and learning the use of the angular framework",
		buttontext: "DO SOME ANGEARING"
	}

  constructor() { }

  ngOnInit() {
  }

}
