/** @type {Font} */
let font;

function preload() {
  font = loadFont("./fonts/Adobe-Jenson-Pro-Bold-Caption.ttf");
}

function setup() {
  createCanvas(595, 842, "svg");
  addDownloadButton();

  rectMode(CENTER);
  angleMode(DEGREES);
  strokeJoin(ROUND);
  strokeCap(ROUND);

  noLoop(); // Opzionale
}

function draw() {
  clear(); // Non cancellare!

  const nShapes = 10; // quante forme disegnare
  const minVerts = 5,
    maxVerts = 12;

  for (let s = 0; s < nShapes; s++) {
    // Genera i vertici in posizioni totalmente casuali
    const nVerts = floor(random(minVerts, maxVerts + 1));
    const pts = [];
    for (let i = 0; i < nVerts; i++) {
      pts.push({
        x: random(width),
        y: random(height),
      });
    }

    // Colori a contrasto
    const fillCol = random([0, 255]);
    fill(fillCol);
    stroke(fillCol === 0 ? 255 : 0);
    strokeWeight(random(1, 4));

    // Disegna la forma smussata
    beginShape();
    // duplico l’ultimo punto per iniziare la curva in modo morbido
    curveVertex(pts[nVerts - 1].x, pts[nVerts - 1].y);
    // punto intermedio
    for (let p of pts) {
      curveVertex(p.x, p.y);
    }
    // duplico i primi due per chiudere bene
    curveVertex(pts[0].x, pts[0].y);
    curveVertex(pts[1].x, pts[1].y);
    endShape(CLOSE);
  }
}
