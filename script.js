const canvas = document.getElementById("patternCanvas");
const ctx = canvas.getContext("2d");

// Ajustar tamaño del lienzo
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Configuración inicial
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;

// Dibujar un pétalo rojo
function drawPetal(x, y, radius, color) {
  ctx.beginPath();

  for (let i = 0; i  <= 100; i++) {
    /* const theta = Math.PI / 2; */
    const theta = Math.PI / 2 + (Math.PI * i) / 100; // Ángulo entre π/2 y 3π/2
    const r = radius * Math.cos(4 * theta) + 1;
    const xc = x + r * Math.cos(theta);
    const yc = y + r * Math.sin(theta);

    if (i === 0) {
        ctx.moveTo(xc, yc);
    } else {
        ctx.lineTo(xc, yc);
    }
  }

  ctx.closePath();
  ctx.strokeStyle = color;
  ctx.fill();
  ctx.stroke();
}

function drawPetal2(x, y, radius, color) {
    ctx.beginPath();

    for (let i = 0; i  <= 100; i++) {
        const theta = Math.PI / 2 + (Math.PI * i) / 100; // Ángulo entre π/2 y 3π/2
        const r2 = -1 * (radius * Math.cos(4* theta)) - 1;
        const xc2 = x + r2 * Math.cos(theta);
        const yc2 = y + r2 * Math.sin(theta);

        if (i === 0) {
            ctx.moveTo(xc2, yc2);
        } else {
            ctx.lineTo(xc2, yc2);
        }
    }

    ctx.closePath();
    ctx.strokeStyle = color;
    ctx.fill();
    ctx.stroke();
}

function drawPetal3(x, y, radius, color) {
  ctx.beginPath();

  for (let i = 0; i  <= 100; i++) {
    const theta = (2 * Math.PI * i) / 100; // Ángulo entre 0 y 2π
    const r3 = radius * Math.cos(4* theta + 5) - 1;
    const xc3 = x + r3 * Math.cos(theta);
    const yc3 = y + r3 * Math.sin(theta);

    if (i === 0) {
        ctx.moveTo(xc3, yc3);
    } else {
        ctx.lineTo(xc3, yc3);
    }
  }

  ctx.closePath();
  ctx.strokeStyle = color;
  ctx.fill();
  ctx.stroke();
}

function drawPetal4(x, y, radius, color) {
  ctx.beginPath();

  for (let i = 0; i  <= 100; i++) {
    const theta = (2 * Math.PI * i) / 100; // Ángulo entre 0 y 2π
    const r4 = -1 * (radius * Math.cos(4* theta + 4)) - 2;
    const xc4 = x + r4 * Math.cos(theta);
    const yc4 = y + r4 * Math.sin(theta);

    if (i === 0) {
        ctx.moveTo(xc4, yc4);
    } else {
        ctx.lineTo(xc4, yc4);
    }
  }

  ctx.closePath();
  ctx.strokeStyle = color;
  ctx.fill();
  ctx.stroke();
}

// Dibujar el patrón de pétalos
function drawFlower() {
  const numPetals = 16;
  for (let i = 0; i < 1; i++) {
    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.rotate((i * 2 * Math.PI) / numPetals);
    for (let j = 0; j < 21; j++) {
      drawPetal(0, 0, 175 - j * 6, "#F9B208");
      drawPetal2(0, 0, 175 - j * 6, "#F9B208");
      drawPetal3(0, 0, 175 - j * 6, "#F9B208");
      drawPetal4(0, 0, 175 - j * 6, "#F9B208");
    }
    ctx.restore();
  }
}

// Dibujar espiral dorada
function drawGoldenSpiral() {
  const goldenAngle = (137.508 * Math.PI) / 180;
  for (let i = 0; i < 140; i++) {
    const r = 4 * Math.sqrt(i);
    const theta = i * goldenAngle;
    const x = centerX + r * Math.cos(theta);
    const y = centerY + r * Math.sin(theta);

    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(i * goldenAngle);
    ctx.fillStyle = "#3E1404";
    ctx.beginPath();
    ctx.arc(0, 0, 3.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

// Dibujar letra "T" con puntos
function drawT(x, y) {
    const positionsT = [
      // Barra horizontal superior
      [x, y], [x + 6, y], [x + 12, y], [x + 18, y],
      [x + 24, y],
      // Tallo vertical hacia abajo
      [x + 12, y], [x + 12, y + 6], [x + 12, y + 12], [x + 12, y + 18],
      [x + 12, y + 24], [x + 12, y + 30],
    ];
    positionsT.forEach(([px, py]) => drawPoint(px, py, "#ff0000"));
  }

// Dibujar letra "U" con puntos
function drawU(x, y) {
    const positionsU = [
      // Lado izquierdo de la U
      [x, y], [x, y + 6], [x, y + 12], [x, y + 18], [x, y + 24],
      [x, y + 30],
      // Curva inferior de la U
      [x + 3, y + 33], [x + 6, y + 36], [x + 12, y + 36],
      [x + 18, y + 36], [x + 21, y + 33],
      // Lado derecho de la U
      [x + 24, y + 30], [x + 24, y + 24], [x + 24, y + 18], [x + 24, y + 12],
      [x + 24, y + 6], [x + 24, y],
    ];
    positionsU.forEach(([px, py]) => drawPoint(px, py, "#ff0000"));
  }

function drawJ(x, y) {
    const positionsJ = [
      // Línea vertical de la J
      [x, y], [x, y + 6], [x, y + 12], [x, y + 18], [x, y + 24],
      [x, y + 30], [x, y + 36],
  
      // Parte curva de la J (lado izquierdo)
      [x - 3, y + 39], [x - 6, y + 42], [x - 12, y + 42], [x - 18, y + 39], [x - 21, y + 36],
      [x - 21, y + 30], [x - 21, y + 24],
    ];
  
    // Dibujar cada punto en las posiciones especificadas
    positionsJ.forEach(([px, py]) => drawPoint(px, py, "#B5B5B5"));
  }

// Función para dibujar un punto
function drawPoint(x, y, color) {
  ctx.beginPath();
  ctx.arc(centerX + x, centerY + y, 4, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

// Ejecutar el dibujo
drawFlower();
drawGoldenSpiral();
/* drawT(-30, -10);
drawU(5, -10); */
drawJ(10, -15);
