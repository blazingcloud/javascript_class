!SLIDE bullets incremental
# Scope #

* No block-level scoping
* Each function is an object, so there is one scope per function

!SLIDE bullets incremental
# The Browser Object Model (BOM) #

* Includes the global <code>window</code> variable
* <code>window</code> includes serveral properties: <code>window.location, window.navigator, window.history, window.screen, window.frames</code>...
* <code>window.document</code> contains the DOM

!SLIDE bullets incremental
# BOM methods #

* <code>open(), close()</code>
* <code>moveTo(), sizeTo()</code>
* <code>alert(), prompt(), confirm()</code>
* <code>setTimeout(), setInterval()</code>

!SLIDE bullets incremental small
# The Document Object Model (DOM) #

* Composed of the objects and object properties which make up an HTML _document_
* The _object model_ is how we describe elements on the HTML page
* The DOM is the API for interacting with these objects
* It's mostly standard, but each browser has a slightly different DOM (how annoying!)
* Platform- and language-neutral

!SLIDE bullets incremental
# Basic DOM Objects #

* window - top level object with global scope
* document - contains the elements that make up the document
* location - information about the current page location
* navigator - information about the web browser
* frames - collection of frames and iframes

!SLIDE bullets incremental
# Basic DOM Objects (continued) #

* DIV - basic container
* text node - container for text 
* NB: all text is contained in a text node

!SLIDE bullets incremental
# <code>window</code> vs. <code>document</code>

* <code>document</code> is the page
* <code>window</code> is the stuff around the page
* Kinda the same, but kinda different

!SLIDE

    @@@javaScript
    window === document 
    // => false
    window.location === document.location
    // => true

!SLIDE bullets incremental
# <code>window</code> is magic #

* <code>window.location</code> = "http://google.com"
  makes the browser load a new page

!SLIDE

# global JS functions are properties of <code>window</code> #

    @@@ javaScript
    window.x = 7;
    x === 7; // true
    y = 9;
    window.y === 9 // works in reverse too

!SLIDE 
# core JS functions are methods of <code>window</code> #

        parseInt('123')         // same
        window.parseInt('123')  // thing



!SLIDE bullets incremental
# Create and Access DOM Objects #

* Objects are assigned unique IDs
* Objects in a collection...
* Add to 'childNodes' collection using appendChild
* You can then iterate over the 'childNodes' collection

!SLIDE bullets incremental
# Locating HTML Elements #

* The hard way<br><br>
  Traverse the document tree using DOM Node methods
* The somewhat easier way
  <code>document.getElementByTagName('p')[0]</code>
* The easy way
  <code>document.getElementById('article')</code>
  
!SLIDE bullets incremental
# Locating HTML Elements #
* The awesome way<br><br>
  <code>$('#article')</code>
* CSS selectors FTW
* We'll talk about jQuery in more depth soon!

!SLIDE bullets incremental
# Events and Listeners #

* Each type of Object has an associated set of events that it "throws"
* You can assign any function to execute when an event is thrown

!SLIDE
# Event Handlers #

!SLIDE
# Attaching an event handler #
# declaratively #

    @@@ javaScript
    <body onload="someFunction();">
    
!SLIDE small
# Attaching an event handler #
# using an inline function #

    @@@ javaScript
    var button = document.createElement("button");
    button.innerHTML = "Click Me!";
    button.onclick = function() {
                        alert('You clicked me!')
                      };
!SLIDE
# Attaching an event handler #
# using a named function #

    @@@ javaScript
    function handleButtonClick() {
      alert('You clicked me!');
    }
    
    button.onclick = handleButtonClick;
    
!SLIDE bullets incremental
# The onload event #

* You must wait for the window onload event before you can interact with the DOM
* Disobey this rule, and get repaid with _non-deterministic behavior_