import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { HandleHttpErrorService } from "../services/handle-http-error.service";

@Injectable()
export class HandleHttpErrorsInterceptor implements HttpInterceptor {

  constructor(private errorService: HandleHttpErrorService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return new Observable(observer => {
      next.handle(request).subscribe(
        res => {
          if (res instanceof HttpResponse) {
            // Continue http cycle
            observer.next(res);
          }
        },
        (err: HttpErrorResponse) => {
          // Handle errors
          this.errorService.handleError(err);
        }
      )
    });
  }
}
