import { AbstractControl, ValidationErrors } from "@angular/forms";

export function appbannedWords(bannedWordsArray:Array<string>){
    return (control:AbstractControl):ValidationErrors | null => {
        let findBannedWords = bannedWordsArray.find((word) => {
            return word?.toLowerCase() ==  control?.value?.toLowerCase()
        })

        return findBannedWords ? {appbannedWords:{control:control.value}}
        : null
    }
}