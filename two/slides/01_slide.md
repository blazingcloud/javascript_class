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
* Jasmine can be run anywhere you can execute JavaScript
* Written by (and used by) the good folks at Pivotal
* http://pivotal.github.com/jasmine/wiki

!SLIDE bullets incremental
# Jasmine Specs #

* Each spec is a JavaScript function
* You tell Jasmine about a spec with a call to <code>it()</code> with a description string and the function
* The string is a description of a behavior that you want your production code to exhibit

!SLIDE small
# Sample Spec #

    @@@ javaScript
    it('should increment a variable', function () {
      var foo = 0;
      foo++;
    });
    
!SLIDE bullets incremental
# Expectations #

* Within your spec you will express expectations about the behavior of your application code.
* This is done using the <code>expect()</code> function and any of various expectation matchers
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