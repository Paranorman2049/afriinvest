import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

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
export class LearnMoreComponent implements OnInit {
    learnMoreForm!: FormGroup;

    ngOnInit(): void {
        let firstName = new FormControl("", [Validators.required, Validators.pattern('^[a-zA-Z- ]*$')]);
        let lastName = new FormControl("", [Validators.required, Validators.pattern('^[a-zA-Z- ]*$')]);
        let email = new FormControl("", [Validators.required, Validators.pattern('')]);
        let companyName = new FormControl("");
        let budget = new FormControl("", Validators.required);
        let message = new FormControl("", Validators.required);
        let privacyCheck = new FormControl();

        this.learnMoreForm = new FormGroup({
            firstName: firstName,
            lastName: lastName,
            email: email,
            companyName: companyName,
            budget : budget,
            message: message,
            privacyCheck: privacyCheck
        })
    }

    showErrorMessage(): void {
        // to do later on
    }

    sendMail(formValues: any): void {
        if (formValues.valid) {
            console.log(this.learnMoreForm.controls)
        }
    }
}