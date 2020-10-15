import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-member-search',
  templateUrl: './member-search.component.html',
  styleUrls: ['./member-search.component.scss']
})
export class MemberSearchComponent implements OnInit {
  showResults: boolean=false;
  showSidebar: boolean = true;
  showNavbar: boolean = true;
  showFooter: boolean = true;
  isLoading: boolean;
  constructor() { }

  ngOnInit() {
    
  }
  submitSearch()
  {
    this.showResults=true;
  }

}
