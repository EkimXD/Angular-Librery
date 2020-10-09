import { Component, OnInit } from '@angular/core';
import { JuegoService } from 'src/app/services/juego.service';
import Juegos from 'src/app/models/juegos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-juego',
  templateUrl: './add-juego.component.html',
  styleUrls: ['./add-juego.component.css']
})
export class AddJuegoComponent implements OnInit {

  juego: Juegos = new Juegos();
  submitted = false;

  constructor(private juegoService: JuegoService,private router: Router ) { }

  ngOnInit(): void {
  }

  saveJuego(): void {
    console.log(this.juego);
    this.juegoService.create(this.juego).then(() => {
      this.submitted = true;
      this.router.navigate(['/libros']);
    });
  }

  newJuego(): void {
    this.submitted = false;
    this.juego = new Juegos();
  }

}
