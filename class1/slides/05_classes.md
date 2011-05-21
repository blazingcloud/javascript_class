!SLIDE
# Classes #

!SLIDE small
## A class describes the attributes and behaviors of a type of object ##
<br><br><br><br>

    @@@ javaScript
    function Car() {
      this.numDoors = 2; 
      this.color = 'red'; 
      this.isDriving = false;
      
      this.drive = function(){
        this.isDriving = true;
      }
      
      this.pard = function(){
        this.isDriving = false;
      }
    }

!SLIDE
## Creating a new instance of the Car class ##
<br><br><br><br>

    @@@ javaScript
    var camero = new Car(); 
    camero.color = “Electric Blue”;
    
!SLIDE
## What is the value of <code>isDriving</code> before we call this method? After? ##
<br><br><br><br>
  
    @@@ javaScript
    camero.drive();
    
!SLIDE smaller
## We can modify a class's prototype ##
## to define its properties ##
<br><br><br><br>

    @@@ javaScript
    function Car3() {};
    
    Car3.prototype.numDoors = 2; 
    Car3.prototype.color = 'red'; 
    Car3.prototype.isDriving = false;
    
    Car3.prototype.drive = function(){ 
      this.isDriving = true;
    };
    Car3.prototype.park = function(){ 
      this.isDriving = false;
    };
    
!SLIDE small
## We can also augment a class ##
## by modifying its prototype ##
<br><br><br><br>

    @@@javaScript
    Array.prototype.contains = function(item) { 
      //determine if the array contains the item
    };
    
!SLIDE
# Determining type #

!SLIDE
## Determining type with <code>instance of</code> ##
<br><br><br><br>

    @@@javaScript
    console.log('camero instance of Car? ', 
      camero instanceof Car);
    
!SLIDE
## Determining type with <code>typeof</code> ##
<br><br><br><br>

    @@@ javaScript
    console.log('typeof myCar: ', typeof myCar);
    console.log('typeof myCar.drive: ', 
      typeof myCar.drive);
      
