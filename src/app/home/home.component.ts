import { Component, OnInit } from "@angular/core";

declare let HSCore: any;


@Component({
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
    ngOnInit(): void {
        // INITIALIZATION OF TEXT ANIMATION (TYPING)
        HSCore.components.HSTyped.init('.js-typedjs')
    }
}