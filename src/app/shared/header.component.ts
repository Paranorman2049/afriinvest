import { Component, OnInit } from "@angular/core";



@Component({
    selector: 'header-element',
    templateUrl: './header.component.html',
    styles: [`
        .anchor-tag-hider { opacity: 0.0; }
    `]
})

export class HeadComponent implements OnInit {

    ngOnInit() {

    }
}
