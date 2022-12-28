import { Injectable } from "@angular/core";


@Injectable()
export class ProjectDetailService {

    getProjects(): IProject[] {
        return PROJECTS;
    }

    getProject(id: number) {
        return PROJECTS.find( (project) => project.id == id );
    }

	getProjectThumbnails() {
		let projects = this.getProjects();
		let projectThumbnails:any = [];

		for (let project of projects) {
			project.imageUrl = project.imageUrls![0];
			projectThumbnails.push(project);
		}

		return projectThumbnails;
	}
}

const PROJECTS: IProject[] = [
	{   
        id: 1,
		name: "Project Dose",
		details: [
			"They are 100% natural. Made with cashews or almonds, all our new products contain no additives, no preservatives and, obviously, no lactose nor soy.",
			"They contain 5 X more nuts and 5 X more proteins than the other nutmilks. They taste delicious and have a creamy texture like the ones you are making at home.",
			"Yet another information about the Project. This is so cool aii?! Let's do this!",
			"Ready for a change? Get yours now!",
		],
		imageUrls: [
			"../assets/img/700x900/img1.jpg",
			"../assets/img/700x900/img2.jpg",
			"../assets/img/700x900/img1.jpg",
			"../assets/img/700x900/img2.jpg"
		]
	},
	
	{   
        id: 2,
		name: "Project Two: The Second One",
		details: [
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempus maximus augue, vel sagittis nisl porta in. Curabitur et nulla.",
			"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			" Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		],
		imageUrls: [
			"../assets/img/700x900/img4.jpg",
			"../assets/img/700x900/img5.jpg",
			"../assets/img/700x900/img3.jpg",
			"../assets/img/700x900/img1.jpg"
		]
	}		
]

interface IProject {
    id: number,
    name: string,
    details: string[],
    imageUrls?: string[],
	imageUrl?: string
}