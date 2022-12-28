import { Component, OnInit } from "@angular/core";
import { ProjectDetailService } from "../shared/project.details.service";

@Component({
    templateUrl: 'project.component.html'
})
export class ProjectComponent implements OnInit{
    projects: any;
    
    
    constructor(private projectService: ProjectDetailService) {

    }

    ngOnInit(): void {
        this.projects = this.projectService.getProjectThumbnails();
    }


}