"use strict";

class Figure {
    constructor(fig, height) {
        this.fig = fig
        this.height = height
        this.draw()
    }
    draw(){
        const fig = document.createElement("div")
        fig.classList.add("figure")
        fig.style.height = this.height + 'px'
        if (this.width){
            fig.style.width = this.width + 'px'
        } else {
            fig.style.width = this.height + 'px'
        }
        console.log(fig)
        const drawArea = document.querySelector("body")
        drawArea.append(fig)
    }
}

class Kvadrat extends Figure {
   
    square (height){
        const s = height * height
        window.alert(s)
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

for (let i = 1; i <= 2; i++) { 
    const figure = new Figure (String(prompt("Напиши фигуру")), Number(prompt("Введи длину")))
    if (figure.fig == 'квадрат'){
    const kvadrat = new Kvadrat ()
  //о ужас если вы хотели подомную проверку то зачем дважды обьект то создавать
    kvadrat.square(figure.height)
 /*   let kvadr = document.querySelector('kvadr')
    let p = document.createElement('p')
    kvadr.width= kvadrat.height
    kvadr.appendChild(p)*/
    
}
 if (figure.fig == 'прямоугольник'){
    const rectangle = new Rectangle (figure.fig,figure.height, Number(prompt("Введи ширину")))
  //  window.alert(rectangle.width)
    rectangle.square(figure.height, rectangle.width)
    rect.width= rectangle.width
}
 if (figure.fig == 'треугольник'){
    const triangle = new Triangle (figure.fig,figure.height,Number(prompt("Введи высоту")))
    triangle.square(figure.height, triangle.width)
}
else {
    alert("Проверьте неправильная фигура")
}


}
 