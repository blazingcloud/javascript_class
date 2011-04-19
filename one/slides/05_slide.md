!SLIDE
# Classes #

!SLIDE
# A class describes the attributes and behaviors of a type of object #

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
# Creating a new instance of the Car class #

    @@@ javaScript
    var camero = new Car(); 
    camero.color = “Electric Blue”;
    
!SLIDE
# What is the value of isDriving before we call this method? After? #
  
    @@@ javaScript
    camero.drive();
    
!SLIDE
# We can modify a class's prototype to define its properties #

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
    
!SLIDE
# We can also augment a class by modifying its prototype #

    @@@javaScript
    Array.prototype.contains = function(item) { 
      //determine if the array contains the item
    };
    
!SLIDE
# Determining type #

!SLIDE
# Determining type with "instance of" #
    @@@javaScript
    console.log('camero instance of Car? ', 
      camero instanceof Car);
    
!SLIDE
# Determining type with "typeof" #
    @@@ javaScript
    console.log('typeof myCar: ', typeof myCar);
    console.log('typeof myCar.drive: ', 
      typeof myCar.drive);
      
