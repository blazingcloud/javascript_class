!SLIDE

# Prototypes #

!SLIDE bullets incremental small

# Prototypes #

* Every JavaScript object has a prototype

!SLIDE bullets incremental small

# Prototypes #

* If a property lookup ("." or "[]") fails, then JS looks in the object's prototype also...
* recursively up the "prototype chain", or
* until you find a property with the right name, or
* you reach <code><b><font color="darkblue">Object</font><font color="brown">.</font><font color="blue">prototype</font></code>

!SLIDE bullets incremental small

# Prototypes #

* Prototypes work on all properties, not just functions
* An object's prototype can only be set when it is created (mostly)

!SLIDE smaller

    @@@ javaScript
    var mammal = {lactates: true, legs: 4};

    var bat = Object.create(mammal);
    bat.legs = 2;
    bat.legs;     // 2
    bat.lactates; // true

    var horse = Object.create(mammal);
    horse.legs;     // 4
    horse.lactates; // true

    octohorse = Object.create(horse);
    octohorse.legs = 8;
    octohorse.legs  // 8

!SLIDE bullets incremental small
# Hey, remember <code>new</code>? #

* Make an empty object
* Set the object's _prototype_ to be the function's prototype
* Set <code>this</code> to point to the object
* Invoke this function
* Return the object (unless the function returns a different object)

!SLIDE bullets incremental

# The function's prototype #

* The value of the property named <code>prototype</code> on that function object
* Every function has one

!SLIDE small

    @@@ javaScript
    function add(x,y) { return x+y; }
      add.prototype;    // some weird object with 
                        // a "constructor" property 
                        // pointing to add
    
!SLIDE small

## We can add properties to the ##
## pre-existing prototype... ##
<br><br><br><br>

    @@@ javaScript
    var Whale = function() { 
        this.legs = 0;
    }
    Whale.prototype.locomotion = "swimming";
    Whale.prototype.lactates = true;
    whale = new Whale();
    whale.lactates;     // true
    

!SLIDE smaller

## And some of those properties can be functions ##
<br><br><br><br>

    @@@ javaScript
    var Circle = function(radius) {
        this.radius = radius;
    }
    Circle.prototype.circumference = function() {
        return Math.PI * 2 * this.radius;
    }
    Circle.prototype.area = function() {
        return Math.PI * this.radius * this.radius;
    }

    var circle = new Circle(2);
    circle.radius;  // this is 2; it's stored on the circle
    circle.area;    // this is a function; 
                    // it's stored on Circle.prototype
    circle.area();  // this is a function call; 
                    // inside it, "this" points to the circle
    

!SLIDE small

## Or we could just replace the prototype entirely ##
<br><br><br><br>

    @@@ javaScript
    var Bat = function() { 
           this.legs = 2; 
    }
    Bat.prototype = mammal;
    bat = new Bat();
    bat.lactates;     // true

!SLIDE bullets incremental small

# Be careful! #

* The prototype of a function is not really that function's prototype
* There are two properties...
* <code>&#95;&#95;proto&#95;&#95;</code> or <code>[[Proto]]</code> -- the hidden link to the prototype chain
* <code>prototype</code> -- specifies the hidden link for objects created using this function and <code>new</code>

!SLIDE bullets incremental small

# Names and Types #

* By convention, constructors are capitalized
* They represent a type name, or a class name
* You can use <code>instanceof</code> to check an object's type
* <code>circle <b><font color="blue">instanceof</b></font> Circle  <font color="brown">// true</font></code>
* <code>circle <b><font color="blue">instanceof</font> <font color="darkblue">Object</font></b>  <font color="brown">// also true</font></code>

!SLIDE bullets incremental smaller

## Extending core objects with prototypes ##

* Every object has a prototype
* This prototype is usually a _pointer_ to a shared prototype defined on the constructor
* If you add a property on a shared prototype, it appears on all objects of that type

!SLIDE small

## Array.sum -- adds all elements of an array together ##
<br><br><br><br>

    @@@ javaScript
    Array.prototype.sum = function() {
        var total = 0;
        for (var i=0; i<this.length; ++i) {
            total += this[i];
        }
        return total;
    };
    [1,2,3].sum()  // 6

<br><br><br><br><br><br>
## Q: What's <code>this</code>? ##

!SLIDE small

## Array.each -- apply a function to each element of an array ##
<br><br><br><br>

    @@@ javaScript
    Array.prototype.each = function(operation) {
        for (var i=0; i<this.length; ++i) {
            operation(this[i]);
        }
    };
    [1,2,3].each(function(x) { console.log(10-x); }) 
                            // prints 9, 8, 7 to console

!SLIDE small

## We can now rewrite <code>sum</code> in terms of <code>each</code>
<br><br><br><br>

    @@@ javaScript
    Array.prototype.sum = function() {
      var total = 0;
      this.each(function(x) { 
          total += x;
      })
      return total;
    };
    [1,2,3].sum()  // 6
    [4,5,6].sum()  // 15

<br><br><br><br><br><br>
## NB: this breaks <code>for x in a</code> for arrays ##

!SLIDE small

## <code>String.reverse</code> ##

    @@@ javaScript
    String.prototype.reverse = function() {
        return Array.prototype.reverse.apply
                        (this.split('')).join('');
    }
    "abc".reverse() // "cba"

<br><br><br><br><br><br>
## Q: What's actually doing the reversing? ##
## Q: Why are we using <code>apply</code>? ##

!SLIDE

# Prototypical Inheritance #

!SLIDE small

## Say we want to make a simple class hierarchy... ##
## Mammal > Cat ##
<br><br><br><br>

    @@@ javaScript
    function Mammal() {}
    function Cat() {}
    

!SLIDE bullets incremental small

* Setting properties on <code>Cat.prototype</code> will also set them on <code>Mammal.prototype</code>
* <code>Cat<b><font color="brown">.</font><font color="blue">prototype</font></b> <font color="brown">=</font> Mammal<b><font color="brown">.</font><font color="blue">prototype</font><font color="brown">;</b></font> <font color="brown">// BAD</font></code>
* We want the cat's prototype to be a new object whose prototype is Mammal's prototype 
* <code>Cat<b><font color="brown">.</font><font color="blue">prototype</font></b> <font color="brown">=</font> <b><font color="blue">new</font> Mammal<font color="brown">();</b></font> <font color="brown">// GOOD</font></code>

!SLIDE bullets incremental small

## <code>Cat.prototype = new Mammal();</code> ##

* Each cat has its own properties
* All cats share a single prototype
* All mammals share a separate, single prototype
* <code>cat.x</code> will look first on cat, then on Cat's prototype, then on Mammal's prototype

!SLIDE

# Calling superclass methods #

!SLIDE smaller

## One class can call its parent class's ##
## methods using <code>apply</code>. ##
<br><br><br><br>

    @@@ javaScript
    var Rectangle = function(height, width) {
        this.height = height;
        this.width = width;
    }
    Rectangle.prototype.area = function() { 
        return this.height * this.width; 
    }

    var Square = function(side) {
        Rectangle.apply(this, [side, side]);
    }
    Square.prototype = new Rectangle();
    Square.prototype.constructor = Square;
    
    s = new Square(10);
    s.area(); // 100

!SLIDE smaller

## Calling a parent class's methods using <code>apply</code> (cont'd). ##
<br><br><br><br>

    @@@ javaScript
    var Cube = function(side) {
        Square.apply(this, [side]);
    }
    Cube.prototype = new Square();
    Cube.prototype.constructor = Cube;        
    Cube.prototype.area = function() {
        return Square.prototype.area.apply(this) * 6;
    }
    Cube.prototype.volume = function() {
        return Rectangle.prototype.area.apply(this) * this.height;
    }

    c = new Cube(10);
    c.area();     // 600
    c.volume();   // 1000


!SLIDE small

## You can set a "superclass" (aka "_super" or "uber") ##
## property so you don't have to name the ##
## superclass every time ##

<br><br><br><br><br>

    @@@ javaScript
    Cube.prototype._super = Square.prototype;
    Cube.prototype.area = function() {
        return this._super.area.apply(this) * 6;
    }
