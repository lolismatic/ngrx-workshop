import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { HttpTokenInterceptor } from './http.token.interceptor';

export { HttpTokenInterceptor };

export const INTERCEPTORS = [
  { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true }
];
