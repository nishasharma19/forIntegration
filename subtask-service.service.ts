import { Subtask } from './subtask';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

/*@Injectable({
  providedIn: 'root'
})*/

@Injectable()
export class SubtaskServiceService 
{

  private subtaskUrl: string;
  private updateUrl: string
 
  constructor(private http: HttpClient) 
  { 
      this.subtaskUrl = 'http://localhost:9090/api/getsubtasks';
      this.updateUrl = 'http://localhost:9090/api/updateProgress';
  }

  public findAll(): Observable<Subtask[]>
  {
    return this.http.get<Subtask[]>(this.subtaskUrl);
  }


  public updateProgress(id: number, progress:number, comment: string):Observable<Subtask>
  {
    const url = `${this.updateUrl}/${id}/${progress}/${comment}`;
    return this.http.put<Subtask>(url, progress);
  }

}
