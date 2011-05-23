!SLIDE bullets incremental small
# Objects #

* Object is the superclass of all other objects 
* Object == Hash == Associative Array 

!SLIDE 
## Creating an object ##
<br><br><br><br>

    @@@ javaScript
    var myObject = new Object();
    
    var myObject = {};

!SLIDE 
## Setting properties on an object ##
<br><br><br><br>

    @@@ javaScript
    myObject.a == "a";
    
    myObject['a'] = "a";

!SLIDE
## Accessing an object's properties ##
<br><br><br><br>

    @@@ javaScript
    myObject.a;
    
    myObject['a'];
    
!SLIDE small
## Setting functions on objects ##
<br><br><br><br>

    @@@ javaScript
    myObject.myFunction = function() {
      console.log('function prints myObject.a: ',
        myObject.a);
    };

!SLIDE
## Calling the function ##
<br><br><br><br>

    @@@ javaScript
      myObject.myFunction();
      
!SLIDE
## Displaying all of the attributes and functions on objects ##
<br><br><br><br>

    @@@ javaScript
      for (var prop in myObject) {
        console.log(prop, ": ", myObject[prop]);
      }