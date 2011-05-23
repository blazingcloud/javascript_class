!SLIDE small
# Methods #

    @@@ javaScript
    var student = {
        gpa: 4.0,
        grade: function() {
            var gradeLetters = ["F", "D", "C", "B", "A"];
            return gradeLetters[Math.floor(this.gpa)];
        }
    };
    // or...
    student.grade = function() { ... }
    
!SLIDE bullets incremental small

# Methods #

* A method is a function "on" an object 
* When a method is called via the dot operator, the "this" variable points to the object it was called on 
* An object encapsulates state (properties) and behavior (methods)

!SLIDE smaller

    @@@ javaScript
    var alice = {firstName: 'Alice', lastName: 'Liddell'};
    var bob = {firstName: 'Bob', lastName: 'Jones'};
    alice.fullName = function() 
      { return this.firstName + " " + this.lastName; }
    bob.fullName = alice.fullName;  // Whoa, trippy!
    alice.fullName(); //=> "Alice Liddell"
    bob.fullName(); //=> "Bob Jones"
    
!SLIDE
