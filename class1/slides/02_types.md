!SLIDE small
# Number #
<br><br><br><br>

    @@@ javaScript
    var myNumber1 = 1;
    var myNumber2 = 2;
    var mySum = myNumber1 + myNumber2;
    console.log('mySum: ', mySum);
    

!SLIDE small
# String #
<br><br><br><br>

    @@@ javaScript
    var myString1 = "string 1"; 
    var myString2 = "string 2"; 
    var myConcat = myString1 + myString2; 
    console.log('myConcat: ', myConcat);
    
    var myCombo1 = myString1 + myNumber1; 
    console.log('myCombo1: ', myCombo1);
    
    var myCombo2 = myNumber1 + myString1; 
    console.log('myCombo2: ', myCombo2);
    
!SLIDE incremental
# Object #

## Object == Hash == Associative Array ##


## Object is the superclass of all other objects ##
<br><br><br><br>

    @@@ javaScript
    var myObject = new Object();
    
    var myObject = {};
    
!SLIDE small
# Null #
<br><br><br><br>

    @@@ javaScript
    var nullVar = null; 
    console.log('nullVal: ', nullVar); 
    console.log('is nullVar null? ', nullVar == null); 
    console.log('is nullVar undefined? ', 
      nullVar === undefined);

!SLIDE small
# Undefined #
<br><br><br><br>

    @@@ javaScript
    var myObj = new Object(); 
    console.log('undefinedVar: ', myObj['undefinedVar']); 
    console.log('is undefinedVar null? ', 
      myObj['undefinedVar'] == null); 
    console.log('is undefinedVar undefined? ', 
      myObj['undefinedVar'] === undefined);
      
!SLIDE
# What is false? #
<br><br>
## false, 0, undefined, null ##
<br><br>

    @@@ javaScript
    if (myObj['undefinedVar']) {
      console.log('undefinedVar is true');
    } else {
    console.log('undefinedVar is false');
    }
    

!SLIDE
# Arrays #
<br><br><br><br>

    @@@ javaScript
    var myArray = [1,2]; 
    console.log('myArray: ', myArray);
     
    var myArray2 = new Array(); 
    myArray2.push(1); 
    myArray2.push(2); 
    console.log('myArray2: ', myArray2);
    
!SLIDE 

# toString() #
<br><br><br><br>

    @@@ javaScript
    console.log('myArray2 toString: ', 
      myArray2.toString());
      
!SLIDE bullets incremental

# Quotation #

* Can use either single or double quotes
* 'something' or "something"
* single quotes are most common

!SLIDE 

# Functions #
<br><br>
## Either global or a member of an object ##
<br><br>

    @@@ javaScript
    function sayHello(name) {
      console.log('hello ' + name); 
    } 
    
    sayHello('Lorien');
