//Create variables here

function preload()
{
	//load images here
}

function setup() {
	createCanvas(800, 700);
  
}


function draw() {  

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy);
    }

  drawSprites();
  //add styles here

}

function readStock(data){
  foodS=data.val();
  }



  function writeStock(x){

    if(x<=0){
      x=0;
      }else{
      x=x-1;
      }
      

    database.ref('/').update({
    Food:x
    })
    }
    
    