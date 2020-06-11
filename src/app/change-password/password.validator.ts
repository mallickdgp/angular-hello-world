import { AbstractControl, ValidationErrors, FormGroup } from '@angular/forms';

export class PasswordValidator{
    static passwordIsInvalid(control: AbstractControl) : Promise<ValidationErrors | null> {

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(control.value != '1234')
                resolve({ passwordIsInvalid: true});
                else
                resolve(null);
            }, 2000);
        })
        
    }  

    static newAndConfirmNotEqual(group: FormGroup) : ValidationErrors | null {
        console.log("I am here!");
        if(group.controls['newPassword'].value != group.controls['confirmPassword'].value){
            return {newAndConfirmNotEqual: true}
        }
        return null;

        
    }
}