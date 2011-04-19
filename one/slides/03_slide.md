!SLIDE bullets incremental
# Objects #

* Object is the superclass of all other objects 
* Object == Hash == Associative Array 

!SLIDE 
# Creating an object #

    @@@ javaScript
    var myObject = new Object();
    
    var myObject = {};

!SLIDE 
# Setting properties on an object #

    @@@ javaScript
    myObject.a == "a";
    
    myObject['a'] = "a";

!SLIDE
# Accessing an object's properties #
    @@@ javaScript
    myObject.a;
    
    myObject['a'];
    
!SLIDE small
# Setting functions on objects #

    @@@ javaScript
    myObject.myFunction = function() {
      console.log('function prints myObject.a: ',
        myObject.a);
    };

!SLIDE
# Calling the function #

    @@@ javaScript
      myObject.myFunction();
      
!SLIDE
# Displaying all of the attributes and functions on objects #

    @@@ javaScript
      for (var prop in myObject) {
        console.log(prop, ": ", myObject[prop]);
      }