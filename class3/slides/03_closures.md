!SLIDE bullets incremental smaller

# Closures #

* A closure is a function which is contained within another function
* Advantage: scope
* Lexical scope: Functions create their environment (scope) when they are defined (not when they're executed)
* NB: A function defined inside a function is invisible beyond the function, but a function defined inside a code block (<i>if</i> or <i>for</i> loops) IS visible outside the block

!SLIDE smaller

# Closures #
<br><br><br><br>

    @@@ javaScript
    function sayHello2(name) {
      var text = 'Hello ' + name; // local variable
      var sayAlert = function() { alert(text); } // closure!
      return sayAlert;
    }

!SLIDE bullets incremental small

# JavaScript is _different_ #

* In C and most other common languages, pointers point only to the function
* In these languages, the local variables are no longer accessible because the stack-frame is destroyed.

!SLIDE bullets incremental smaller

# JavaScript is _different_ #

* The JS function reference variable points to the function _as well as_ the closure it's created in
* A JS closure is a stack-frame which is not deallocated when the function returns
* This means that the local variables remain accessible after returning from the function

!SLIDE smaller

# JavaScript is _different_ #
<br><br><br><br>

    @@@ javaScript
    function sayHello2(name) {
      var text = 'Hello ' + name; // local variable
      var sayAlert = function() { alert(text); } 
      return sayAlert;
    }
    
    
    var say2 = sayHello2('Jane');
    say2();

<br><br><br><br>
### The anonymous function can reference <code>text</code> which holds the value 'Jane' <br> because the local variables of <code>sayHello2()</code> are kept in a closure. ###

!SLIDE

# More examples! #

!SLIDE smaller

## More examples! ##

<br><br><br><br>

    @@@ javaScript
    function say667() {
      // Local variable that ends up within closure
      var num = 666;
      var sayAlert = function() { alert(num); }
      num++;
      return sayAlert;
    }
    
    
    var sayNumba = say667();
    sayNumba(); // yields '667'
    

<br><br><br><br>
## Local variables are not copied; ##
## they are kept by reference ##

!SLIDE smaller

## Local variables are not copied (cont'd) ##
<br><br><br><br>

    @@@ javaScript
    alert(sayNumba.toString());

<br><br><br><br>
## The alert box reads... ##
<br><br><br><br>

    @@@ javaScript
    function () {
        alert(num);
    }
    
!SLIDE smaller

## More examples! ##

<br><br><br><br>

    @@@ javaScript
    function setupSomeGlobals() {
      // Local variable that ends up within closure
      var num = 666;
      // Store some references to functions as global variables
      gAlertNumber = function() { alert(num); }
      gIncreaseNumber = function() { num++; }
      gSetNumber = function(x) { num = x; }
    }

<br><br><br><br>

### The three functions gain shared access to the same closure--the local variables of <code>setupSomeGlobals()</code>--when the three functions are defined. ###

!SLIDE smaller

## More Examples! ##

<br><br><br><br>

    @@@ javaScript
    function buildList(list) {
      var result = [];
      for (var i = 0; i < list.length; i++) {
        var item = 'item' + list[i];
        result.push( function() {alert(item + ' ' + list[i])} );
      }
      return result;
    }

    function testList() {
      var fnlist = buildList([1,2,3]);
      // using j only to help prevent confusion - could use i
      for (var j = 0; j < fnlist.length; j++) {
        fnlist[j]();
      }
    }
    
!SLIDE bullets incremental smaller

## More on that last one... ##

* Be very careful if you are defining a function within a loop!
* The line <code>result<b><font color="brown">.</font>push</b><font color="brown">(</font> <b><font color="blue">function</b></font><font color="brown">()</font> <font color="red">{</font><b>alert</b><font color="brown">(</font>item <font color="brown">+</font> <font color="red">' '</font> <font color="brown">+</font> list<font color="brown">[</font>i<font color="brown">])</font><font color="red">}</font></code> adds a reference to an anonymous function three times to the result array
* If you run the example, "item3 undefined" is alerted __three__ times (there is only one closure for the local variables for <code>buildList</code>)
* When the anonymous functions are called they all use the same single closure, and they use the current value for <code>i</code> and <code>item</code> within that one closure

!SLIDE smaller

## More Examples! ##
<br><br><br><br>

    @@@ javaScript
    function sayAlice() {
      var sayAlert = function() { alert(alice); }
      // Local variable that ends up within closure
      var alice = 'Hello Alice';
      return sayAlert;
    }
    
    sayAlice()(); // returns alert with 'Hello Alice'
    alert(alice); // doesn't work (alice isn't a global variable)
    
!SLIDE bullets incremental smaller

## More on that last one... ##

* The closure contains any local variables that were declared inside the outer function before it exited
* When the anonymous function is called, it can access <code>alice</code> because it's in the closure
* The <code>sayAlert</code> variable is also inside the closure, and can be accessed by any other function that might be declared within <code>sayAlice()</code>
* It can also be accessed recursively within the inside function

!SLIDE smaller

## More Examples! ##
<br><br><br><br>

    @@@ javaScript
    function newClosure(someNum, someRef) {
      // Local variables that end up within closure
      var num = someNum;
      var anArray = [1,2,3];
      var ref = someRef;
      return function(x) {
          num += x;
          anArray.push(num);
          alert('num: ' + num +
              '\nanArray ' + anArray.toString() +
              '\nref.someVar ' + ref.someVar);
        }
    }
    
!SLIDE bullets incremental small

## More on that last (and final!) one... ##

* Each call creates a separate closure for the local variables
* There is _not_ a single closure per function declaration
* There is a closure for _each call_ to a function