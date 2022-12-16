import { Component, OnInit } from '@angular/core'

declare let HsNavScroller: any;

@Component({
    templateUrl: './howto.component.html'
})
export class HowToComponent implements OnInit {


    ngOnInit(): void {
        new HsNavScroller('.js-nav-scroller')
    }
}