import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Player } from './player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private API_URL = 'http://localhost:3000/players';

  constructor(private http: HttpClient) { }

  getPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(this.API_URL);
  }

  getPlayer(id: string): Observable<Player> {
    return this.http.get<Player>(`${this.API_URL}/${id}`);
  }

  addPlayer(player: Player): Observable<Player> {
    return this.http.post<Player>(this.API_URL, player);
  }

  updatePlayer(player: Player): Observable<Player> {
    return this.http.put<Player>(`${this.API_URL}/${player._id}`, player);
  }

  deletePlayer(id: string): Observable<Player> {
    return this.http.delete<Player>(`${this.API_URL}/${id}`);
  }

}
