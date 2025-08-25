// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

export function Size(width = 80, height = 60) {
  this.width = width;
  this.height = height;
}

Size.prototype.resize = function resize(newWidth, newHeight) {
  this.width = newWidth;
  this.height = newHeight;
}

export function Position(x = 0, y = 0) {
  this.x = x;
  this.y = y;
}

Position.prototype.move = function move(newX, newY) {
  this.x = newX;
  this.y = newY;
}

export class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    this.position = new Position();
  }

  resize(newSize) {
    const maxWidth = this.screenSize.width - this.position.x;
    const maxHeight = this.screenSize.height - this.position.y;
    
    if (newSize.width < 1) {
      this.size.width = 1;
    } else if (newSize.width > maxWidth) {
      this.size.width = maxWidth;
    } else {
      this.size.width = newSize.width;
    }
    
    if (newSize.height < 1) {
      this.size.height = 1;
    } else if (newSize.height > maxHeight) {
      this.size.height = maxHeight;
    } else {
    this.size.height = newSize.height;
    }
  }

  move(newPosition) {
    const maxX = this.screenSize.width - this.size.width;
    const maxY = this.screenSize.height - this.size.height;

    if (newPosition.x < 0) {
      this.position.x = 0;
    } else if (newPosition.x > maxX) {
      this.position.x = maxX;
    } else {
      this.position.x = newPosition.x;
    }

    if (newPosition.y < 0) {
      this.position.y = 0;
    } else if (newPosition.y > maxY) {
      this.position.y = maxY;
    } else {
      this.position.y = newPosition.y;
    }
  }  
}

export function changeWindow(programWindow) {
  programWindow.size.width = 400;
  programWindow.size.height = 300;
  programWindow.position.x = 100;
  programWindow.position.y = 150;

  return programWindow;
}
