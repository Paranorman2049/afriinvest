import { Injectable } from "@angular/core";

declare let Email: any;

@Injectable()
export class SendMailService {
    private msg: string = '';

    // sends the mail to the reciept
    private authCredentials: ISMTPServerAuth = {
        Host: 'smtp.elasticemail.com',
        Username: 'john.alx2049@gmail.com',
        Password: '435017DAC7011F4182CF1933CE5A92216F42'
    };

    
    sendMail(emailTo: string, emailSubject: string, emailBody: string): any {
        // send the email to thetarget email then returns an Observable to handle Exception apporpriately
        let returnText: string = '';
        Email.send({
            Host: this.authCredentials.Host,
            Username: this.authCredentials.Username,
            Password: this.authCredentials.Password,
            To: emailTo,
            From: this.authCredentials.Username,
            Subject: emailSubject,
            Body: emailBody
        }).then((message: string) => {
            console.log('message = ' + message);
            returnText = message.valueOf()
        }).catch((error: string) =>{
            //to do, send mail to developer that an error as occured
            console.log('An error as occured while attempting to send mail = ' + error);
        })

        return returnText;
    }

    
    setMsg(message: string): void {
        this.msg = message;
        console.log('this.msg = ' + this.msg)
    }

    // get email credentials
    getAuthCredentails(): ISMTPServerAuth {
        return this.authCredentials;
    }
}

interface ISMTPServerAuth {
    Host: string,
    Username: string,
    Password: string
}