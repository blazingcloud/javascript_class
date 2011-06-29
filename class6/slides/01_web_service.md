!SLIDE

# JavaScript Week 5 #
<br>
# Retrieving Data from a Web Service #

!SLIDE bullets incremental small

# Methods for Retrieving Data #

* Get JSON data via a script include 
* Get XML data using an XMLHTTPRequest

!SLIDE bullets incremental small

# XHR Security Restrictions #

* XMLHTTPRequest can only retrieve data from the same domain as your webpage
* for a page at www.yourdomain.com 
* none of these will be legal!
* **yourdomain.com**
* **www2. yourdomain.com**
* **123.72.92.13**

!SLIDE bullets incremental small

# JSON #
# no security restrictions -- yay! #
<br><br><br><br>

    @@@ html
    <script src=”http://anywhere.com”></script>

!SLIDE bullets incremental small

# JSON vs. XML #

* JSON is much easier to read because it can be easily turned into javascript objects (because that’s what it is!)
* XML is more widely used, but it more work because you have to parse the resulting XML document.

!SLIDE bullets incremental small

# Methods for Sending Data #
* Same domain
* You can post data using an XHR, but only to the same domain
* Cross-domain
* Image tag (for small bits of data)
* Iframe and form post (for large amounts of data)

!SLIDE bullets small

# Cross-domain scripting - Image Tag #

* You can send small bits of data to any domain 
* using an image tag
* The character limit for a query string is 2083
* (the limit imposed by IE)

!SLIDE bullets small

# Cross-domain scripting - Image Tag #

    @@@ html
    <img width=”0” height=”0”        
         src=”http://myservice.com?myData=12345” ></img>

!SLIDE bullets incremental small

# Iframes #

* Like a frame in a frameset it has it’s own window object
* Iframes are subject to the same security restrictions as XHR

!SLIDE bullets incremental small

# Cross-domain scripting - Form Post #

* You can send large amounts of data by posting a form
* You can programatically:
* append an iframe to your document
* append a form to your iframe
* submit the form
* Once your form has been submitted your iFrame’s location will be in the other domain

!SLIDE bullets incremental small

# Cross domain scripting - URL Fragment #

* You can use a URL fragment to set data on a frame
* Frame locations (in different domains) are write only. So you can append a fragment (#someData) to another frame to give it data
* You could use the form post method from the previous slide with this method to pass back some value

!SLIDE bullets incremental small

# Activity #

* Implement a web page that retrieves the data from catalog.xml using an XHR (use the example in the book).
* Generate objects by parsing the XML

!SLIDE bullets incremental small

* Homework
* Build something that pulls its data from a web service. You may use either JSON or XML.
* Extra credit: Try the two cross-domain scripting methods for sending data to a different domain - the image tag and the form post
