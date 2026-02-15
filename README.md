# JavaScript Canvas Animation

This project demonstrates **animation in JavaScript** using the HTML `<canvas>` element. It features three animated shapes that move and collide with each other:

- A **circle** (cyan)
- A **square** (purple)
- A **triangle** (orange)

To run this project, you must **open the file `base.html` in your web browser**.

## Features

- Continuous movement of the shapes within the canvas.
- Collision detection with canvas boundaries.
- Collision detection between the shapes themselves, with bounce by reversing movement direction.
- Each shape has independent speed and size, making the animation dynamic.

## Mathematics behind the shapes

The shapes are created using **basic mathematical formulas**:

- **Circle:** `ctx.arc(x, y, radius, 0, 2 * Math.PI)`  
  `(x, y)` is the center of the circle and `radius` defines its size.

- **Square:** `ctx.fillRect(a, b, width, height)`  
  `(a, b)` is the top-left corner and `width`/`height` define the size.

- **Triangle:**  
  ```javascript
  ctx.moveTo(c, d);
  ctx.lineTo(c + size/2, d + size);
  ctx.lineTo(c - size/2, d + size);
  ctx.closePath();

## Run
1. Locate the file base.html in the project folder.
2. Double-click it or right-click → Open With → your browser (Chrome, Firefox, Edge, etc).

## Example
![Gravação de Tela 2026-02-15 052103](https://github.com/user-attachments/assets/de18bf93-7a9c-4711-b81d-dca5dd2dacdd)
