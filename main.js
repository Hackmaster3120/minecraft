var canvas=new fabric.Canvas("myCanvas");
var blk_W=30;
var blk_H=30;
var pbX=10;
var pbY=10;
var playerObj="";
function playerUpdate() {
    fabric.Image.fromURL("player.png",function(Img){
       playerObj=Img;
       playerObj.scaleToWidth(150);
       playerObj.scaleToHeight(140);
       playerObj.set({
         top:pbY,
         left:pbX
       });
       canvas.add(playerObj);
    });
}
function DisBlocks(getBlocks) {
    fabric.Image.fromURL(getBlocks,function(Img){
        Blocks=Img;
        Blocks.scaleToWidth(blk_W);
        Blocks.scaleToHeight(blk_H);
        Blocks.set({
          top:pbY,
          left:pbX
        });
        canvas.add(Blocks);
     });
}
window.addEventListener("keydown",myKD);
function myKD(e) {
    KeyCode=e.keyCode;
    console.log("ASCII is "+KeyCode);
    if (KeyCode=="37") {
        Left();
    }
    if (KeyCode=="38") {
        Up();
    }
    if (KeyCode=="39") {
        Right();
    }
    if (KeyCode=="40") {
        Down();
    }
    if (KeyCode=="49") {
      DisBlocks("Bricks.jpg");
      console.log("1");
    }
    if (KeyCode=="50") {
      DisBlocks("Glowstone.png");
      console.log("2");
    }
    if (KeyCode=="51") {
      DisBlocks("GoldBricks.png");
      console.log("3");
    }
    if (KeyCode=="52") {
      DisBlocks("Grass.png");
      console.log("4");
    }
    if (KeyCode=="53") {
      DisBlocks("LeafBlock.png");
      console.log("5");
    }
    if (KeyCode=="54") {
      DisBlocks("Netherite.jpg");
      console.log("6");
    }
    if (KeyCode=="55") {
      DisBlocks("Slime.png");
      console.log("7");
    }
    if (KeyCode=="56") {
      DisBlocks("Stone.jpg");
      console.log("8");
    }
    if (KeyCode=="57") {
      DisBlocks("trunk.jpg");
      console.log("9");
    }
    if (KeyCode=="73" && e.shiftKey == true) {
      blk_H=blk_H+10;
      blk_W=blk_W+10;
      document.getElementById("curWidth").innerHTML=blk_W;
      document.getElementById("curHeight").innerHTML=blk_H;
    }
    if (KeyCode=="68" && e.shiftKey == true) {
      blk_H=blk_H-10;
      blk_W=blk_W-10;
      document.getElementById("curWidth").innerHTML=blk_W;
      document.getElementById("curHeight").innerHTML=blk_H;
    }
    if (KeyCode=="69") {
      eraseBLK();
  }
}
function Left() {
  if(pbX>=10){
   pbX=pbX-blk_W;
   canvas.remove(playerObj);
   playerUpdate();
  }
}
function Up() {
  if(pbY>=10){
   pbY=pbY-blk_H;
   canvas.remove(playerObj);
   playerUpdate();
  }
}
function Right() {
  if(pbX<=700){
   pbX=pbX+blk_W;
   canvas.remove(playerObj);
   playerUpdate();
  }
}
function Down() {
  if(pbY<=500){
   pbY=pbY+blk_H;
   canvas.remove(playerObj);
   playerUpdate();
  }
}
function eraseBLK(e) {
  
}