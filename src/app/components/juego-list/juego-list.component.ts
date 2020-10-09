import { Component, OnInit } from '@angular/core';
import { JuegoService } from 'src/app/services/juego.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-juego-list',
  templateUrl: './juego-list.component.html',
  styleUrls: ['./juego-list.component.css']
})

export class JuegoListComponent implements OnInit {

  juegos: any;
  currentJuego = null;
  currentIndex = -1;
  title = '';

  constructor(private juegoService: JuegoService) { }

  ngOnInit(): void {
    this.retrieveJuegos();
  }

  refreshList(): void {
    this.currentJuego = null;
    this.currentIndex = -1;
    this.retrieveJuegos();
  }

  retrieveJuegos(): void {
    this.juegoService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.juegos = data;
    });
  }

  setActiveJuego(juego, index): void {
    this.currentJuego = juego;
    this.currentIndex = index;
  }

  removeAllJuegos(): void {
    this.juegoService.deleteAll()
      .then(() => this.refreshList())
      .catch(err => console.log(err));
  }

}
