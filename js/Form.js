class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Ingresa tu nombre");  //createInput crea una cajita de entrada de texto.
    this.playButton = createButton("Jugar");  //Esta creando un botón que diga jugar.
    this.titleImg = createImg("./assets/title.png", "titulo del juego");
    this.greeting = createElement("h2");  //Cuando haya h significa titulo o subtitulo es parte de html.
  }

  setElementsPosition (){
    this.titleImg.position(120,50);
    this.input.position(width/2-110,height/2-80);
    this.playButton.position(width/2-90,height/2-20);
    this.greeting.position(width/2-300,height/2-100);
  }

  setElementsStyle (){
    this.titleImg.class("gameTitle");
    this.input.class("customInput");
    this.playButton.class("customButton");
    this.greeting.class("greeting");
  }

  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }

  handleMousePressed (){
    this.playButton.mousePressed(()=>{
      this.input.hide();
      this.playButton.hide();
      var message =`Hello ${this.input.value()}
      </br> Wait another player`;
      this.greeting.html(message);
    });   //La combinación de parentesís, igual, simbolo mayor que y llaves se le llama funtion arrow.
  }

  display (){
    this.setElementsPosition();
    this.setElementsStyle();
    this.handleMousePressed();
  }
}

