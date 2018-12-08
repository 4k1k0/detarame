import { Component, OnInit } from '@angular/core';
import { GlitchService } from '../../services/glitch.service';

@Component({
  selector: 'app-add-text',
  templateUrl: './add-text.component.html',
  styleUrls: ['./add-text.component.scss']
})
export class AddTextComponent implements OnInit {

  texto: string = '';

  constructor( private glitchService: GlitchService) { }

  ngOnInit() {
  }

  cambiarTexto() {
    this.glitchService.cambiarTexto(this.texto);
  }

}
