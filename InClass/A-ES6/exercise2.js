class Polygon {
  constructor(height, width) {
    this.name = "Polygon";
    this.height = height;
    this.width = width;
  }
  get area(){ return this.width * this.height;}
  sayName() {
    console.log('Hi, I am a ' + this.name);
  } 
}

let p = new Polygon( 300, 400);
p.sayName();
console.log('The area of this polygon is ' + p.area);


class Rectangle extends Polygon {
  constructor(height, width) {
    super(height, width);
    this.name = "Rectangle";
    this.sides = 4;
    //this.area = this.height * this.width;
  }
  get area() {return this.width * this.height;}
  sayName() {
    console.log('Hi I am a polygon and my name is ' + this.name + '.');
  }
}

let r = new Rectangle(50, 60);
r.sayName();
//r.area = 3;
console.log('The area of this polygon is ' + r.area);

//Create 2 new classes that extend from polygon: triangle and circle and log their names and areas

class Triangle extends Polygon{
  constructor(height,width){
    super(height, width);
    this.name = "Triangle";
  }
  get area() {return (this.width * this.height) /2 ;}
}
let b = new Triangle(200,300);
b.sayName();
console.log("The area of this polygon is " + b.area);

class Trapezoid extends Polygon{
  constructor(height,base1,base2){
    super(height);
    this.name="Trapezoid";
    this.base1=base1;
    this.base2=base2;
    //this.area=this.height *this.width; 
  }
  get area() {return (this.base1 + this.base2) * this.height /2 ;}
}
let c = new Trapezoid(200,150,200);
c.sayName();
console.log("The area of this polygon is " +c.area);
