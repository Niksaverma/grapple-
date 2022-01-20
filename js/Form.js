class Form{
    constructor(){
     this.input = createInput("").attribute("placeholder", "Enter your name");
     this.button = createButton("Submit");
     this.element = createElement("h2");
    }

  play() {
   
     this.input.position(width/2-100,height/2+50);
     this.button.position(width/2-100,height/2+90);
     this.button.mousePressed(()=>{
    var name = this.input.value();
    this.element.html("Hi "+ name)
    this.element.position(width/2-100,height/2+50);
    this.input.hide();
    this.button.hide();
    player.getName();
   gameState = 1;
     })
    }

   

}