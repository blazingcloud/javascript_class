!SLIDE bullets incremental small

# Object-Orienting JavaScript #

## We need to add: ##

* the <code>this</code> variable
* constructors
* more refined prototypes

!SLIDE small

# <code>this</code> is it #
<br>
## <code>this</code> is a magic variable that always points to the current object ##
<br><br><br>

    @@@ javaScript
    var circle = {radius: 2};
    circle.circumference = function() {
        return Math.PI * 2 * this.radius;
    }
    console.log(circle.circumference()); 
    
          // 12.566370614359172

!SLIDE small

# <code>this</code> is it #
<br>
## <code>this</code> allows one function (method) to ##
## operate on many states (instances) ##
<br><br><br>

    @@@ javaScript
    var biggerCircle = {radius: 4};
    biggerCircle.circumference = circle.circumference;
    console.log(biggerCircle.circumference()); 
    
          // 25.132741228718345

!SLIDE smaller

# ...but <code>this</code> isn't always it #
<br>
## <code>this</code> is only set when you call ##
## a function via an object ##
<br><br><br><br>

    @@@ javaScript
    circle1.circumference()      // OK -- this = circle1
    circle2['circumference']()   // OK -- this = circle2

!SLIDE smaller

# ...but <code>this</code> isn't always it #
<br>

## When called sans object, <code>this</code> points ##
## to the global object (usually <code>window</code>) ##
<br><br><br><br>

    @@@ javaScript
    var g = circle.circumference;
    g();                        // BAD -- this = window, 
                                // so this.radius = undefined, 
                                // so result is NaN

!SLIDE bullets incremental small

# <code>apply this</code>! #

* <code>apply</code> is a function that calls a function
* <code>apply</code> allows you to dynamically set <code>this</code> and <code>arguments</code>
* <code>apply</code> is called on the function itself using <code>.</code>

!SLIDE small

    @@@ javaScript
    var add = function(x,y) { return x+y; }
    add.apply(null, [2, 3]); // returns 5

    var square = function() { return this.value * 
                              this.value; }
    var x = {value: 10}
    square.apply(x);  // returns 100
    var y = {value: 20}
    square.apply(y);  // returns 400

    var increaseBy = function(amount) { return 
                                      this.value + amount; }
    increaseBy.apply(x, [4]); // returns 14
    increaseBy.apply(y, [5]); // returns 25