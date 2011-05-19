!SLIDE 
# Javascript - Week 2 #

## TDD with Jasmine and Introduction to the DOM ##


!SLIDE bullets incremental
# From Last Week #

* Go over homework (shopping cart class)

!SLIDE bullets incremental small
# Test-Driven Development (TDD) #

* What is TDD?
* Write tests first to specify the behavior of the code
* Code until your tests pass

!SLIDE bullets incremental small
# Jasmine #

* Test framework for JavaScript with syntax similar to rspec for Ruby
* Jasmine can be run anywhere you can execute JavaScript
* Written by (and used by) the good folks at Pivotal

!SLIDE bullets incremental small
# Jasmine Specs #

* Each spec is a JavaScript function
* You tell Jasmine about a spec with a call to <code>it()</code> with a description string and the function
* The string is a description of a behavior that you want your production code to exhibit

!SLIDE small
# Sample Spec #
<br><br><br><br>

    @@@ javaScript
    it('should increment a variable', function () {
      var foo = 0;
      foo++;
    });
    
!SLIDE bullets incremental small
# Expectations #

* Within your spec you will express expectations about the behavior of your application code.
* This is done using the <code>expect()</code> function and any of various expectation matchers

!SLIDE small

    @@@ javaScript
    it('should increment a variable', function () {
      var foo = 0;            // set up the world
      foo++;                  // call your application code
      expect(foo).toEqual(1); // passes because foo == 1
    });
    
!SLIDE bullets incremental small
# Suites #

* Specs are grouped into Suites
* Suites are defined using the global <code>describe()</code> function
* The Suite name is typically the name of a class or other application component, and will be reported with results when your tests are run

!SLIDE small

    @@@ javaScript
    describe('Calculator', function () {
      it('can add a number', function () {
      ...
      });

      it('can multiply some numbers', function () {
      ...
      });
    });

!SLIDE bullets incremental small
# More about Suites #

* Suites are executed in the order in which <code>describe()</code> calls are made
* Specs within a suite share a functional scope
* Any variables declared inside a describe block are accessible from within the specs

!SLIDE small

    @@@ javaScript
    describe('Calculator', function () {
      var counter = 0

      it('can add a number', function () {
        counter = counter + 2;   // counter was 0 before
        expect(counter).toEqual(2);
      });

      it('can multiply a number', function () {
        counter = counter * 5;   // counter was 2 before
        expect(counter).toEqual(10);
      });
    });
    


!SLIDE bullets incremental
# More about Suites #

* Describe blocks may be nested

!SLIDE smaller

    @@@ javaScript
    describe('some suite', function () {

      var suiteWideFoo;

      beforeEach(function () {
        suiteWideFoo = 0;
      });

      describe('some nested suite', function() {
        var nestedSuiteBar;
        beforeEach(function() {
          nestedSuiteBar=1;
        });

        it('nested expectation', function () {
          expect(suiteWideFoo).toEqual(0);
          expect(nestedSuiteBar).toEqual(1);
        });

      });

      it('top-level describe', function () {
        expect(suiteWideFoo).toEqual(0);
        expect(nestedSuiteBar).toEqual(undefined);
      });
    });
    
    
!SLIDE bullets incremental small
# More about Suites #

* Specs may be disabled by calling <code>xit()</code> instead of <code>it()</code>. Suites may be disabled by calling <code>xdescribe()</code> instead of <code>describe()</code>
* There's a lot more to this. You should check out the documentation:
* http://pivotal.github.com/jasmine/wiki
    
!SLIDE bullets
# Adventure Time! #

* Write some tests for the MagicalItem class