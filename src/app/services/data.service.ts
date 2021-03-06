import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-errors/app-error';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { BadInput } from '../common/bad-input';
import { throwError } from 'rxjs';


export class DataService {
  constructor(private url: string, private http: HttpClient) { }

  getAll(){
    return this.http.get(this.url).pipe(map(response => response as any[]), catchError(this.handleError));
  }

  create(resource){
   return this.http.post(this.url, JSON.stringify(resource)).pipe(map(response => response as any), catchError(this.handleError));
  }

  update(resource){
    return this.http.put(this.url+'/'+resource.id, JSON.stringify(resource)).pipe(map(response => response as any[]), catchError(this.handleError));
  }

  delete(id: number): Observable<any>{
    return this.http.delete(this.url+'/'+id).pipe(map(response => response as any[]), catchError(this.handleError));
  }

  private handleError(error: Response){
    if(error.status === 400)
      return throwError(new BadInput());
    if(error.status === 404)
      return throwError(new NotFoundError());

    return throwError(new AppError(error));
  }
}
