import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlitchService {

  texto: string;
  canvas: any;
  context: any;

  constructor() {}

  cambiarTexto( txt: string ) {
    this.texto = txt;
    this.setCanvas();
  }

  colorRandom() {
    let r = Math.floor(Math.random() * 255) + 1;
    let g = Math.floor(Math.random() * 255) + 1;
    let b = Math.floor(Math.random() * 255) + 1;
    return `rgb(${r},${g},${b})`;
  }

  setCanvas() {
    let canvas:any = document.getElementById('my-canvas');
    let context = canvas.getContext("2d");
    if ( this.texto === undefined || this.texto === '' || this.texto === null ) {
      context.fillStyle = 'white';
      context.fillRect(0, 0, 200, 200);
      return;
    }
    context.fillStyle = 'white';
    context.fillRect(0, 0, 200, 200);
    context.font = "20pt Calibri";
    let n = Math.floor(Math.random() * 100) + 1;
    for (let i = 0; i < n; i++) {
      let x = Math.floor(Math.random() * 200) + 1;
      let y = Math.floor(Math.random() * 200) + 1;
      let z = Math.floor(Math.random() * 360) + 1;
      // context.rotate(z);
      context.fillStyle = this.colorRandom();
      context.fillText(this.texto, x, y);
      context.fillStyle = this.colorRandom();
      context.fillText(this.texto, x + i, y + i);
    }
  }

}
