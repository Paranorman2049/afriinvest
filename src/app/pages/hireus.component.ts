import  { Component, ViewChild, ElementRef } from  '@angular/core'
import { FormGroup, NgForm } from '@angular/forms';
import { SendMailService } from '../shared/send.mail.service';

@Component({
    templateUrl: './hireus.component.html',
    styles: [`
        em { color: red; }
    `]
})
export class HireUsComponent {
    contactForm!: FormGroup

    firstName: any;
    lastName: any;
    email: any ;
    company: any;
    budget: any
    message: any;

    @ViewChild('emailFeedbackModalBtn') emailFeedbackModalBtn!: ElementRef;

    constructor(private emailService: SendMailService) {
        console.log(this.email);
    }

    sendMessage(formValues: any) {
        this.firstName = formValues.firstName
        this.lastName = formValues.lastName;
        this.email = formValues.email;
        this.company = formValues.company;
        this.budget = formValues.budget;
        this.message = formValues.message;

        // console.log(formValues);

        const emailBody: string = `
        <div>
            <p>
                <div>Email details:</div><hr />
                <em>Sent from the the <strong>'Hire Us' page</strong> in <strong>Affriinvest.com</strong></em><br />
                <em>Client's budget: <strong>${this.budget}</strong></em><br />
                <em>Client's company Name: <strong>${this.company}</strong></em><br />
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

        this.emailFeedbackModalBtn.nativeElement.click();
    }

    resetForm(form: NgForm) {
        setTimeout(() => {
            form.reset();
        }, 1800);
    }
}