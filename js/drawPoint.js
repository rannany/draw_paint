//Desenha um ponto      
let drawPoint = (context) => {
  context.fillStyle = "rgb(400,0,0)";
  context.fillRect (10, 10, 10, 10);
};
//Desenha um retangulo
let retangulo = (context) => {
  context.fillRect(100, 100, 50, 50); 
  context.strokeRect(200, 200, 25, 25);
} 
//Desenha um triangulo
let triangulo = (context) => {
  context.beginPath();
  context.moveTo(100, 100);
  context.lineTo(100, 180);
  context.lineTo(180, 90);
  context.fill();
}
export { drawPoint, retangulo, triangulo};
