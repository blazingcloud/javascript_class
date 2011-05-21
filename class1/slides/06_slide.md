!SLIDE bullets
# Adventure Time! #

Shopping Cart
----------------

* ShoppingCart class
* Item class

!SLIDE small

    @@@ javaScript
    function ShoppingCart() { 
      
      this.items = new Array(); 
      
      this.addItem = function() {
        //add the item to the array
      }
      this.getTotalCost = function() {
        //iterate over array and sum up the prices
      }
    }
    

!SLIDE smaller

    @@@ javaScript
    function MagicalItem() {
     
      this.price = 0;
      this.name = '';
      this.description = '';
      this.hitPoints = 0;
      this.manna = 0;
      this.kilos = 0;
      this.isPuffOfSmoke = false;

      this.damage = function(numMannaPoints) {
        this.manna -= numMannaPoints;

        if (this.manna < 0) this.isPuffOfSmoke = true;
      }

      this.regenerate = function(numMannaPoints) {
        this.manna += numMannaPoints;
        this.isPuffOfSmoke = false;
      }
    }
    
!SLIDE bullets smaller
# Homework Time! #

* Fill in implementation for empty methods in ShoppingCart class
* Modify MagicalItem and shoppingCart classes to use prototype syntax
* Read Section 4 Overview, and Section 8 types (only 8.1-8.5) int he ECMAScript specification.
* http://www.ecmainternational.org/publications/standards/ecma-262.htm
