import  { Component, OnInit, ViewChild, ElementRef } from '@angular/core'
import { SendMailService } from '../shared/send.mail.service';
import { FormGroup, NgForm } from '@angular/forms';

declare let HSCore: any;
declare let L: any;

@Component({
    templateUrl: './contactus.component.html',
    styles:[`
        em { color: red; float: right; }
    `]
})
export class ContactUsComponent implements OnInit { 
    mailForm?: FormGroup

    firstName: string = '';
    lastName: string = '';
    vistorEmail: string = '';
    phone: string = '';
    emailTextArea: string = '';
    emailSubject: string = '';

    mouseoverLogin: any = false;

    @ViewChild('emailFeedBackBtn') emailFeedBck!: ElementRef;
    @ViewChild('emailFeedBackBtn2') emailFeedBck1!: ElementRef;

    constructor(private emailService: SendMailService) {  }

    
    ngOnInit(): void {

        // INITIALIZATION OF LEAFLET
        const leaflet = HSCore.components.HSLeaflet.init(document.getElementById('mapEg3'))
        L.tileLayer(
            'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', 
            {
                id: 'mapbox/light-v9'
            }
        ).addTo(leaflet)
    }

    sendMessage(formValues: any): void {
        this.firstName = formValues.firstName;
        this.lastName = formValues.lastName;
        this.vistorEmail = formValues.vistorEmail;
        this.phone = formValues.phone;
        this.emailSubject = formValues.emailSubject;
        this.emailTextArea = formValues.emailTextArea;

        const emailBody: string = `
        <div>
            <p>
                <div>Email details:</div><hr />
                <em>Sent from the the <strong>'Contact Us' page</strong> in <strong>Affriinvest.com</strong></em><br />
                <em>Email Subject: <strong>${this.emailSubject}</strong></em><br />
                <em>Contact's Phone (optional): <strong>${this.phone}</strong><br />
                <em>Contact's email: <strong>${this.vistorEmail}</strong><br />
                <em>Contact's Name (Surname first): <strong>${this.lastName + ' ' + this.firstName}</strong><br />
            </p>
            <p>
                <em>Email Body:</em><br />
                <p style="font-size: large; text-decoration: bold;">${this.emailTextArea}</p>
            </p>
        </div>
        `
        
        this.emailService.sendMail(this.emailService.getAuthCredentails().Username, this.emailSubject,
            emailBody)
    
        // console.log('Message Sent');
        
        // we are still gonna condition this upon the HTTP status of the emailService
        this.emailFeedBck.nativeElement.click();
    }

    resetForm(form: NgForm): void {
        setTimeout(() => {
            form.reset(); 
        }, 2000);
    }   

    
 }