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
    firstName!:FormControl
    lastName!: FormControl
    email!: FormControl
    companyName!: FormControl
    budget!: FormControl
    message!: FormControl
    privacyCheck!: FormControl

    ngOnInit(): void {
        this.firstName = new FormControl("", [Validators.required, Validators.pattern('^[a-zA-Z- ]*$')]);
        this.lastName = new FormControl("", [Validators.required, Validators.pattern('^[a-zA-Z- ]*$')]);
        this.email = new FormControl("", [Validators.required, Validators.pattern('')]);
        this.companyName = new FormControl("");
        this.budget = new FormControl("", Validators.required);
        this.message = new FormControl("", Validators.required);
        this.privacyCheck = new FormControl();

        this.learnMoreForm = new FormGroup({
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            companyName: this.companyName,
            budget : this.budget,
            message: this.message,
            privacyCheck: this.privacyCheck
        })
    }

    validateName(): any {
        return this.firstName.invalid && this.firstName.errors
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