!SLIDE

# JavaScript Week 6 #
<br>
# JQuery Overview #
<br>

!SLIDE bullets incremental small

# "Unobtrusive" DHTML / JavaScript #
<br>

* Separation of markup and behavior
* Separation of markup and layout
* Basically - Keep your JavaScript and CSS out of your HTML

!SLIDE bullets incremental small

# cross browser abstraction #
<br>
* JQuery has many helper methods that abstract away non-standard browser behavior.
* So you don’t have to write two or three sets of code for your application

!SLIDE bullets incremental small

# document ready vs. window unload #
<br>
* onload fires after everything has loaded including all images - this could fire long after the DOM is ready to go!
<br>
* JQuery’s document ready event fires when the DOM is ready
<br>
* This event encapsulates cross-browser code (because IE does not implement the standard contentloaded event)

!SLIDE bullets incremental small

# selectors #
<br>
* JQuery allows you to use CSS selectors to access DOM elements

!SLIDE bullets incremental small

# selectors #

    @@@ javascript
    <document.getElementById('myDiv') ---> $('#myDiv')>
<br>
    @@@ javascript
    <$('#myDiv > div')>

!SLIDE bullets incremental small

# iteration using selectors #
<br>

* From the JQuery tutorial http://docs.jquery.com/ Tutorials:Getting_Started_with_jQuery
<br>
    @@@ javascript
    <$(document).ready(function() { $("#orderedlist").find("li").each(function(i) {$(this).append( " BAM! " + i ); });});>

!SLIDE bullets

# event handling #

* To attach an onclick handler 
* to the button with id myButton:
<br>
    @@@ javascript
    <$('#myButton').bind('click', function() { 
    alert('User clicked my button');
    });>

!SLIDE bullets

# event handling #

* To attach an event handler to execute for multiple events:
<br>
    @@@ javascript
    <$('#myButton').bind('mouseenter mouseleave', function() { $(this).toggleClass('moused_over');});>

