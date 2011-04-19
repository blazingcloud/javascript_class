!SLIDE bullets incremental
# The Document Object Model (DOM) #

* Composed of the objects and object properties which make up an HTML document
* The DOM is the API for interacting with these objects
* Each browser has a slightly different DOM (how annoying!)
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
# Create and Access DOM Objects #

* Objects are assigned unique IDs
* document.getElementById('id')
* Objects in a collection...
* Add to 'childNodes' collection using appendChild
* You can then iterate over the 'childNodes' collection

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