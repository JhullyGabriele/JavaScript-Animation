const canvas = document.getElementById("meuCanvas");
const ctx = canvas.getContext("2d");

let x = 50, y = 200, raio = 20, velocidadeX1 = 3, velocidadeY1 = 2;
let a = 300, b = 150, tamanhoQuadrado = 40, velocidadeX2 = 2, velocidadeY2 = 3;
let c = 100, d = 100, tamanhoTriangulo = 50, velocidadeX3 = 4, velocidadeY3 = 2;

function colisaoFormas(x1, y1, w1, h1, x2, y2, w2, h2) {
  return !(x1 + w1 < x2 || x1 > x2 + w2 || y1 + h1 < y2 || y1 > y2 + h2);
}

function animar() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.beginPath();
  ctx.arc(x, y, raio, 0, Math.PI * 2);
  ctx.fillStyle = "cyan";
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.fillStyle = "purple";
  ctx.fillRect(a, b, tamanhoQuadrado, tamanhoQuadrado);
  ctx.closePath();

  ctx.beginPath();
  ctx.fillStyle = "orange";
  ctx.moveTo(c, d);
  ctx.lineTo(c + tamanhoTriangulo / 2, d + tamanhoTriangulo);
  ctx.lineTo(c - tamanhoTriangulo / 2, d + tamanhoTriangulo);
  ctx.closePath();
  ctx.fill();

  x += velocidadeX1; y += velocidadeY1;
  a += velocidadeX2; b += velocidadeY2;
  c += velocidadeX3; d += velocidadeY3;

  if (x + raio > canvas.width || x - raio < 0) velocidadeX1 *= -1;
  if (y + raio > canvas.height || y - raio < 0) velocidadeY1 *= -1;

  if (a + tamanhoQuadrado > canvas.width || a < 0) velocidadeX2 *= -1;
  if (b + tamanhoQuadrado > canvas.height || b < 0) velocidadeY2 *= -1;

  if (c + tamanhoTriangulo / 2 > canvas.width || c - tamanhoTriangulo / 2 < 0) velocidadeX3 *= -1;
  if (d + tamanhoTriangulo > canvas.height || d < 0) velocidadeY3 *= -1;

  if (colisaoFormas(x - raio, y - raio, raio*2, raio*2, a, b, tamanhoQuadrado, tamanhoQuadrado)) {
    velocidadeX1 *= -1; velocidadeY1 *= -1;
    velocidadeX2 *= -1; velocidadeY2 *= -1;
  }

  if (colisaoFormas(x - raio, y - raio, raio*2, raio*2, c - tamanhoTriangulo/2, d, tamanhoTriangulo, tamanhoTriangulo)) {
    velocidadeX1 *= -1; velocidadeY1 *= -1;
    velocidadeX3 *= -1; velocidadeY3 *= -1;
  }

  if (colisaoFormas(a, b, tamanhoQuadrado, tamanhoQuadrado, c - tamanhoTriangulo/2, d, tamanhoTriangulo, tamanhoTriangulo)) {
    velocidadeX2 *= -1; velocidadeY2 *= -1;
    velocidadeX3 *= -1; velocidadeY3 *= -1;
  }

  requestAnimationFrame(animar);
}

animar();
