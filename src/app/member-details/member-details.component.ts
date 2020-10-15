import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.scss']
})
export class MemberDetailsComponent implements OnInit {
  showSidebar: boolean = true;
  showNavbar: boolean = true;
  showFooter: boolean = true;
  isLoading: boolean;
  userType:string;
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
    this.userType=sessionStorage.getItem('userType');
if(this.userType=='02')
{
  this.showSidebar = false;
  this.showNavbar = true;
  this.showFooter = true;
}
  }

  openMediumModal( mediumModalContent ) {
    this.modalService.open( mediumModalContent );
  }

  openManageModal( mediumModalContent ) {
    this.modalService.open( mediumModalContent, { size : 'md' } );
  }

}
