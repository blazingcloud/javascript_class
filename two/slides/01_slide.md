!SLIDE 
# Javascript - Week 2 #

TDD with Jasmine and Introduction to the DOM
------------------

!SLIDE bullets incremental
# From Last Week #

* Go over homework (shopping cart class)
* Go over prototype
* JavaScript version 1.6
* Parsing strings into numbers: ParseInt, ParseFloat

!SLIDE bullets incremental
# Test-Driven Development (TDD) #

* What is TDD?
* Write tests first to specify the behavior of the code
* Code until your tests pass

!SLIDE bullets incremental
# Jasmine #

* Test framework for JavaScript with syntax similar to rspec for Ruby
* Written by (and used by) the good folks at Pivotal

!SLIDE bullets
# Adventure Time! #

* Test out MagicalItem class

!SLIDE bullets incremental
# Scope #

* No block-level scoping
* Each function is an object, so there is one scope per function

!SLIDE
This is valid, but it's bad form.
------------------

    @@@javaScript
    function myFunction() {
      if (true) {
        var a = ‘a’;
      } else {
        var a = ‘b’;
      }
      console.log(‘a is: ‘, a);
    }