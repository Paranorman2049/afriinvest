import { Component, ViewChild, ElementRef } from "@angular/core";
import {  NgForm } from "@angular/forms";
import { SendMailService } from "../shared/send.mail.service";

@Component({
    templateUrl: 'learnmore.component.html',
    styles: [`
        .contact-form { margin-bottom: 10px; }
        em { 
            color: #E05C65; 
            float: right;
        }
        .error input { background-color: #E3C3C5; }
        .error ::-webkit-input-placeholder { color: #999; }
        .error ::-moz-placeholder { color: #999; }
        .error :-moz-input-placeholder { color: #999; }
        .error :ms-input-placeholder { color: #999; }
    `]
})
export class LearnMoreComponent  {
    learnMoreForm!: NgForm;

    firstName: any;
    lastName: any;
    email!: any;
    companyName: any;
    budget: any;
    message: any;
    privacyCheck: any;

    @ViewChild('emailFeedbackModalBtn') modalBtn!: ElementRef;

    constructor(private emailService: SendMailService) {
        
    }

    sendMail(formValues: any): void {
        this.firstName = formValues.firstName
        this.lastName = formValues.lastName;
        this.email = formValues.email;
        this.companyName = formValues.companyName;
        this.budget = formValues.budget;
        this.message = formValues.message;

        const emailBody: string = `
        <div>
            <p>
                <div>Email details:</div><hr />
                <em>Sent from the the <strong>'Learn More' page</strong> in <strong>Affriinvest.com</strong></em><br />
                <em>Client's budget: <strong>${this.budget}</strong></em><br />
                <em>Client's company Name: <strong>${this.companyName}</strong></em><br />
                <em>Contact's email: <strong>${this.email}</strong><br />
                <em>Contact's Name (Surname first): <strong>${this.lastName + ' ' + this.firstName}</strong><br />
            </p>
            <p>
                <em>Email Body:</em><br />
                <p style="font-size: large; text-decoration: bold;">${this.message}</p>
            </p>
        </div>
        `

        this.emailService.sendMail(
            this.emailService.getAuthCredentails().Username,
            'Sent From the Afriinvest Hire Us Page',
            emailBody
        );

        this.modalBtn.nativeElement.click();
    }

    resetForm(form: NgForm) {
        setTimeout(() => {
            form.reset();  
        }, 2000);
    }
}