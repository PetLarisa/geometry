"use strict";

class Figure {
    constructor(fig, height) {
        this.fig = fig
        this.height = height
        
        
    }
   
}

class Kvadrat extends Figure {
   
    square (height){
        const s = height * height
        window.alert(s)
        
    let kvadr = document.querySelector('kvadr')
    let p = document.createElement('p')
    kvadr.width= kvadrat.height


    kvadr.appendChild(p)
       }
       
}




class Rectangle extends Figure {
    constructor(fig , height ,width){
        super( fig , height)
        this.width = width;
    } 
   
   square (height, width){
        const s =  height * width
       window.alert(s) 
   }
}
class Triangle extends Figure {
    constructor(fig , height ,width){
        super( fig , height)
        this.width = width;
    } 
          
   square (height, width){
     const s =  height * width *1/2
       window.alert(s)
   }

}
//prompt("Напиши фигуру", 10)
const figure = new Figure (String(prompt("Напиши фигуру")), Number(prompt("Введи длину")))
if (figure.fig == 'квадрат'){
    const kvadrat = new Kvadrat ()
   // alert(figure.height*figure.height)
    kvadrat.square(figure.height)
    let kvadr = document.querySelector('kvadr')
    let p = document.createElement('p')
    kvadr.width= kvadrat.height


    kvadr.appendChild(p)
    


}
else if (figure.fig == 'прямоугольник'){
    const rectangle = new Rectangle (figure.fig,figure.height, Number(prompt("Введи ширину")))
  //  window.alert(rectangle.width)
    rectangle.square(figure.height, rectangle.width)
    rect.width= rectangle.width
}
else if (figure.fig == 'треугольник'){
    const triangle = new Triangle (figure.fig,figure.height,Number(prompt("Введи высоту")))
    triangle.square(figure.height, triangle.width)
}
else {
    alert("Проверьте неправильная фигура")
}


 