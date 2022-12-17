import { Component, OnInit } from '@angular/core'

declare let HsNavScroller: any;

@Component({
    templateUrl: './howto.component.html',
    styles: [`
        .list-pad-top { padding-top: 5rem! important; }
        .step-pad-bottom { padding-bottom: 3rem !important; }
        .learn-more {
            margin-bottom: 100px; }
    `]
})
export class HowToComponent implements OnInit {


    ngOnInit(): void {
        new HsNavScroller('.js-nav-scroller')
    }
}