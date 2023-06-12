import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { Player } from '../player';

@Component({
  selector: 'app-player-add',
  templateUrl: './player-add.component.html',
  styleUrls: ['./player-add.component.css']
})
export class PlayerAddComponent implements OnInit {

  player: Player = new Player();

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
  }

  addPlayer(): void {
    this.playerService.addPlayer(this.player).subscribe(player => console.log(player));
  }

}

