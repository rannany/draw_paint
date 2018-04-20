import { drawPoint, retangulo, triangulo } from './drawPoint.js';
import css from '../css/style.css';
(() => {
  //Inicia instancia do canvas2d
  let canvas = document.getElementById('canvas');
  let context = canvas.getContext('2d');
  //Desenha os segintes planos
  //retangulo(context);
  drawPoint(context);
  triangulo(context);
})();
