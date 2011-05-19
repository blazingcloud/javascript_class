!SLIDE 
# Javascript - Week 3 #

## Functions and Closures ##

!SLIDE bullets incremental small
# From Last Week #

## Go over homework ##
* ShoppingCart tests
* New MagicalItemView class
* Does everybody's shopping cart work properly?

!SLIDE bullets incremental
# Functions #

* There are a few ways to define a function

!SLIDE bullets incremental smaller
# Functions #

* <h2>Function Declaration, aka Named Function</h2>
  <code><b><font color="blue">function</font> add<font color="brown">(</font></b>x<b><font color="brown">,</font></b>y<b><font color="brown">)</font></b> <b><font color="red">{</font> <font color="blue">return</font></b> x <b><font color="brown">+</font></b> y<b><font color="brown">;</font><font color="red"> }</font></b></code><br>
* Not recommended. Why is that?
* <h2>Function Expression</h2>
  <code><b><font color="blue">var</font></b> subtract <b><font color="brown">=</font></b> <b><font color="blue">function</font></b><b><font color="brown">(</font></b>x<b><font color="brown">,</font></b>y<b><font color="brown">)</font></b> <b><font color="red">{</font> <font color="blue">return</font></b> x <b><font color="brown">-</font></b> y<b><font color="brown">;</font></b> <b><font color="red">}</font></b></code>

!SLIDE
# Functions #

## Named Function Expression ##
    @@@ javaScript
    var factorial = function fact(x) { 
      if (x == 1) {
        return 1;
      } else {
        return x * (fact(x-1));
      }
    }

!SLIDE bullets incremental small
# Functions #

## Anonymous Functions ##

* Data doesn't need to be assigned to a variable
* Such data is thus "anonymous"
* <code><b><font color="blue">function</color><font color="brown">(</color></b>a<b><font color="brown">)</color></b><b><font color="red">{</color> <font color="blue">return</color></b> a<b><font color="brown">;</color></b> <b><font color="red">}</color></b></code>
  
!SLIDE bullets incremental small
# Functions #

## Callback Functions ##

* If function a executes function b, function b is a <i>callback function</i>
* Proper use of callback functions yields tighter, cleaner, faster code

!SLIDE smaller
# Functions #
<br><br>
## Callback Functions ##
<br><br><br><br>

    @@@ javaScript
    function invoke_and_add(a, b) {
      return a() + b();
    }
    
    function one() {
      return 1;
    }
    
    function two() {
      return 2;
    }
    
    >>> invoke_and_add(one, two);

!SLIDE bullets incremental small
# Functions #

## Private (inner) Functions ##

* You can define a function within another function
* When the global function is called, it itself calls its inner functions
* The inner function is inaccessible outside of the function in which it is contained, and therefore <i>private</i>.
* Keeps global namespace clean and limits functionality that shouldn't apply to the rest of the application

!SLIDE
# Functions #

## Private (inner) Functions ##

    @@@ javaScript
    function a(param) {
      function b(theinput) {
        return theinput * 2;
      };
      return 'The result is ' + b(param)
    };