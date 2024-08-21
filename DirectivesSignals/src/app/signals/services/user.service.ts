import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { SingleUserResponse, User } from '../interfaces/single-user-response.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _httpClient: HttpClient = inject(HttpClient);
  private _baseUrl: string = 'https://reqres.in/api/users';

  getUserById(id: number): Observable<User> {
    return this._httpClient.get<SingleUserResponse>(`${this._baseUrl}/${id}`)
            .pipe(map(response => response.data));
  }

}
