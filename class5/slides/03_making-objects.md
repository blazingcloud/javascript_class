!SLIDE bullets incremental small

# How to Make an Object #

* From scratch
* Using constructors
* Using prototypes

!SLIDE small

## Making an object from scratch  ##
<br><br><br><br>

    @@@ javaScript
    var circle = {};
    circle.radius = 2;
    circle.circumference = function() {
        return Math.PI * 2 * this.radius;
    }
    circle.area = function() {
        return Math.PI * this.radius * this.radius;
    }
    circle.radius; // 2
    circle.area;   // function () { ...
    circle.area(); // 12.566370614359172

!SLIDE small

## Making an object from scratch (with literals) ##
<br><br><br><br>

    @@@ javaScript
    var circle = {
        radius: 2,
        circumference: function() {
            return Math.PI * 2 * this.radius;
        },
        area: function() {
            return Math.PI * this.radius * this.radius;
        }
    }
    circle.radius; // 2
    circle.area;   // function () { ...
    circle.area(); // 12.566370614359172
  
!SLIDE bullets incremental

# Be careful! #

* Remember the commas between elements
* Remember to OMIT the comma on the last element

!SLIDE

# Constructors #

!SLIDE bullets

* A constructor is a __function__ that's called with the <code>new</code> keyword.

!SLIDE bullets incremental small

# <code>new</code> says... #

* Make a new empty object
* Set the object's _prototype_ to be the function's prototype
* Set <code>this</code> to point to the object
* Invoke the function
* Return the object (unless the function returns a different object)

!SLIDE small

## Making an object with a constructor ##
<br><br><br><br>

    @@@ javaScript
    var Circle = function(radius) {
        this.radius = radius;
        this.circumference = function() {
            return Math.PI * 2 * this.radius;
        }
        this.area = function() {
            return Math.PI * this.radius * this.radius;
        }
    };
    var circle = new Circle(2);
    circle.radius; // 2
    circle.area;   // function () { ...
    circle.area(); // 12.566370614359172


!SLIDE bullets incremental small

# Be Careful! #

* <code>Circle</code> with a capital C is the _constructor_
* <code>circle</code> with a lowercase C is the _object_ or _instance_
* This is a JavaScript _class_, used for making lots of objects that have access to the same methods with their varied data

!SLIDE bullets incremental small

# Closures #

* Every function makes a closure
* The closure comprises the function's parameters and local variables
* The closure points to the function's enclosing scope(s)

!SLIDE small

## Making an object with private data using closures ##
<br><br><br><br>

    @@@ javaScript
    var Circle = function(radius) {
        this.circumference = function() {
            return Math.PI * 2 * radius;
        }
        this.area = function() {
            return Math.PI * radius * radius;
        }
    };
    var circle = new Circle(2);
    circle.radius; // undefined
    circle.area(); // 12.566370614359172
    

!SLIDE bullets incremental small

## Making an object with private data using closures ##

* We use the radius __parameter__ as private data
* <code>radius</code> is private to the scope of the Circle function's closure
* <code>circumference</code> and <code>area</code> are public (exposed) on each circle object
* But! Since they were defined inside the constructor, they can see <code>radius</code>

!SLIDE small

## Making private methods using closures ##
<br><br><br><br>

    @@@ javaScript
    var Circle = function(radius) {
        var rSquared = function { 
            return radius * radius; 
        }
        this.circumference = function() {
            return Math.PI * 2 * radius;
        }
        this.area = function() {
            return Math.PI * rSquared();
        }
    };
