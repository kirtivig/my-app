import { ErrorHandler } from "@angular/core";

export class AppErrorHandler extends ErrorHandler{
    handleError(error){
        alert('An Unexpected error occured in createPost');
        console.log(error);
    }
}