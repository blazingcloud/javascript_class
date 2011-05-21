!SLIDE
# Iterating #

!SLIDE small
## Iterate over an array using an index ##
<br><br><br><br>

    @@@ javaScript
    var myArray = ['a', 'b', 'c', 'd'];
    
    for (var i=0; i<myArray.length; i++) {
        console.log(myArray[i]);
    }

!SLIDE small
## Iterate over a hash using <code>for in</code> ##
<br><br><br><br>

    @@@ javaScript
    var myHash = new Object(); 
    myHash['a'] = 'a'; 
    myHash['b'] = 'b'; 
    myHash['c'] = 'c'; 
    myHash['d'] = 'd';
    
    for (var key in myHash) {
      console.log("key: ", key, ", value: ", myHash[key]);
    }
    
!SLIDE small
## Don't iterate over an array as you would a hash ##
<br><br><br><br>

    @@@ javaScript
    var myArray = ['a', 'b', 'c', 'd']; 
    myArray['contains'] = function(){}; 
    for (var key in myArray) {
      console.log('key: ', key, ', value: ', myArray[key]);
    }
    
!SLIDE
## Iterate using <code>index</code> so you don't get extra properties ##
<br><br><br><br>

    @@@ javaScript
    for (var i=0; i<myArray.length; i++) {
      console.log(myArray[i]);
    }