var svg= document.getElementById("svg");
var circle=document.getElementById("circle");
var dvd= document.getElementById("dvd");
var stop= document.getElementById("stop");
var clear=document.getElementById("clear");

var id;

var clear_board=function(e){
  while (svg.hasChildNodes()){
    svg.removeChild(svg.lastChild);
    console.log("cleared");
  }
}

var stop_animation=function(){
  window.cancelAnimationFrame(id);
}

var w=svg.getAttribute("width");
var h=svg.getAttribute("height");

var c= document.createElementNS("http://www.w3.org/2000/svg","circle");
svg.appendChild(c);
var x=w/2;
var y=h/2;
var radius=0;
var change=-2;

var animate_circle=function(){
  clear_board();
  window.cancelAnimationFrame(id);
  console.log("Logging after canceling");
  c.setAttribute("cx",x);
  console.log("cx set");
  c.setAttribute("cy",y);
  console.log("cy set");
  c.setAttribute("r",radius);
  c.setAttribute("fill", "black");
  console.log("this far");
  size_up();
}
var size_up=function(){
  if(radius==0||radius==x){
    change*=-1;
    console.log("changed growth direction");
  }
  radius+=change;
  console.log("radius changed");
  c.setAttribute("r",radius);
  console.log("set radius");
  id=window.requestAnimationFrame(size_up);

}

var randInt=function(min,max){
  min=Math.ceil(min);
  max=Math.floor(max);
  return Math.floor(Math.random()*(max-min+1))+1;
}

var xcor=randInt(0,w-80);
var ycor=randInt(0,h-50);
var dx=1;
var dy=1;
var rectangle= document.createElementNS("http://www.w3.org/2000/svg","rect");

var dvd_animation=function(){
  clear_board();
  window.cancelAnimationFrame(id);
  console.log(id);

  svg.appendChild(rectangle);
  rectangle.setAttribute("x",xcor);
  rectangle.setAttribute("y",ycor);
  rectangle.setAttribute("width",80);
  rectangle.setAttribute("height",50);
  rectangle.setAttribute("fill","green");

  dvd_move();
}

var dvd_move=function(){
  if(xcor==0|| xcor==w-80){
    dx*=-1;
  }
  if(ycor==0||ycor==w-80){
    dy*=-1
  }
  xcor+=dx;
  ycor+=dy;
  rectangle.setAttribute("x",xcor);
  rectangle.setAttribute("y",ycor);
  id=window.requestAnimationFrame(dvd_move);
}

circle.addEventListener("click",animate_circle);
clear.addEventListener("click",clear_board);
stop.addEventListener("click",stop_animation);
dvd.addEventListener("click",dvd_animation);
