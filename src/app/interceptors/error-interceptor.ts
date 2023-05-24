import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';

import { Observable, catchError, map, mergeMap, of, throwError } from 'rxjs';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor() {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      map((req) => req),
      catchError((error) => {
        console.log(
          `🍅 -> file: error-interceptor.ts:24 -> ErrorInterceptor -> catchError -> error:`,
          error
        );
        return of();
      })
    );
  }
}
