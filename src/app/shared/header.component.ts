import { Component, OnInit } from "@angular/core";
import { SendMailService } from "./send.mail.service";
import { reduce } from "rxjs";



@Component({
    selector: 'header-element',
    templateUrl: './header.component.html',
    styles: [`
        .anchor-tag-hider { opacity: 0.0; }
        .error input { background-color: #E3C3C5; }
        .error ::placeholder {
            color: red;
            opacity: 1;
        }
        .error :-ms-input-placeholder { color: red; }
        .error ::-ms-input-placeholder { color: red; }
        em { color: red; }
    `]
})

export class HeadComponent implements OnInit {
    fullName: string = '';
    company: string = '';
    country: string = '';
    email: string = '';
    phone: string = '';
    subject: string = '';
    message: string = '';
    title: string = '';

    constructor(private emailService: SendMailService) {

    }

    ngOnInit() {
        // theres's nothing to do here
    }

    sendMessage(formValues: any): void {
        this.fullName = formValues.fullName;
        this.country = formValues.country;
        this.email = formValues.email;
        this.company = formValues.company;
        this.phone = formValues.phone;
        this.subject = formValues.subject;
        this.message = formValues.message;
        this.title = formValues.title;

        const emailBody: string = `
        <div>
            <p>
                <div>Email details:</div> <hr />
                <em>Sent from the the <strong>'Laanding Page Modal Email Form' page</strong> in <strong>Affriinvest.com</strong></em><br />
                <em>Email Subject: <strong>${this.subject}</strong></em><br />
                <em>Contact's Phone (optional): <strong>${this.phone}</strong><br />
                <em>Contact's email: <strong>${this.email}</strong><br />
                <em>Contact's Title: <strong>${ this.title }</strong><br />
                <em>Contact's Name: <strong>${ this.fullName }</strong><br />
                <em>Contact's Country : <strong>${ this.country }</strong><br />
                <em>Contact's Compnay (Surname first): <strong>${ this.company }</strong><br />
            </p>
            <p>
                <div>Email Body:</div>
                <p style="font-size: large; text-decoration: bold;">${this.message}</p>
            </p>
        </div>
        `
        
        this.emailService.sendMail(this.emailService.getAuthCredentails().Username, this.subject,
            emailBody)
    
        // console.log('Message Sent');
        
        // To do: we are still gonna condition this upon the HTTP status of the emailService
        alert("Message Sent!")
    }


}
