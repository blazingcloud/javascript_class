describe ("Simon", function() {
  
  it ("should echo hello", function() {
    expect(Simon.new.echo("hello")).toEqual("hello")
  });
  
  it ("should echo bye" function() {
    expect(Simon.new.echo("bye")).toEqual("bye")
  });

  it ("should shout hello" function() {
    expect(Simon.new.shout("hello")).toEqual("HELLO")
  });
  
  it ("should shout multiple words" function() {
    expect(Simon.new.shout("hello world")).toEqual("HELLO WORLD")
  });

  it ("should repeat" function() {
    expect(Simon.new.repeat("hello")).toEqual("hello hello")
  });

  it ("should repeat a number of times" function() {
    expect(Simon.new.repeat("hello", 3)).toEqual("hello hello hello")
  });

  it ("should return the first letter" function() {
    expect(Simon.new.start_of_word("hello", 1)).toEqual("h")
  });
  
  it ("should return the first two letters" function() {
    expect(Simon.new.start_of_word("Bob", 2)).toEqual("Bo")
  });

  it ("should tell us the first word of 'Hello World' is 'Hello'" function() {
    expect(Simon.new.first_word("Hello World")).toEqual("Hello")
  });

  it ("should tell us the first word of 'oh dear' is 'oh'" function() {
    expect(Simon.new.first_word("oh dear")).toEqual("oh")
  });
  
});