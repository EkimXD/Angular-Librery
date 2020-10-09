import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { JuegoService } from 'src/app/services/juego.service';
import Juegos from 'src/app/models/juegos';

@Component({
  selector: 'app-juego-details',
  templateUrl: './juego-details.component.html',
  styleUrls: ['./juego-details.component.css']
})

export class JuegoDetailsComponent implements OnInit, OnChanges {

  @Input() juego: Juegos;
  @Output() refreshList: EventEmitter<any> = new EventEmitter();
  currentJuego: Juegos = null;
  message = '';

  constructor(private juegoService: JuegoService) { }

  ngOnInit(): void {
    this.message = '';
  }

  ngOnChanges(): void {
    this.message = '';
    this.currentJuego = { ...this.juego };
  }

  updatePublished(status): void {
    this.juegoService.update(this.currentJuego.key, { published: status })
      .then(() => {
        this.currentJuego.published = status;
        this.message = 'Estado actualizado satisfactoriamente';
      })
      .catch(err => console.log(err));
  }

  updateJuego(): void {
    const data = {
      title: this.currentJuego.title,
      description: this.currentJuego.description,
      libreria: this.currentJuego.libreria,
      costo: this.currentJuego.costo
    };

    this.juegoService.update(this.currentJuego.key, data)
      .then(() => this.message = 'El libro fue actualizado')
      .catch(err => console.log(err));
  }

  deleteJuego(): void {
    this.juegoService.delete(this.currentJuego.key)
      .then(() => {
        this.refreshList.emit();
        this.message = 'The Game was updated successfully!';
      })
      .catch(err => console.log(err));
  }

}
