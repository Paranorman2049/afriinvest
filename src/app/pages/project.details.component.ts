import { Component, OnInit } from "@angular/core";
import { ProjectDetailService } from "../shared/project.details.service";
import { ActivatedRoute } from "@angular/router";

declare let HSStickyBlock: any;

@Component({
    templateUrl: 'project.details.component.html'
})
export class ProjectDetailsComponent implements OnInit {

	project: any;

    constructor(private projectDetail: ProjectDetailService, private route: ActivatedRoute) {
        
    }


    ngOnInit(): void {
        new HSStickyBlock('.js-sticky-block', {
            targetSelector: document.getElementById('header')?.classList.contains('navbar-fixed') ? '#header' : null
        });

		this.project = this.projectDetail.getProject(+this.route.snapshot.params['id']);
    }



}
	