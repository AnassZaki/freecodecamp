var Person = function(firstAndLast) {
    let fullName = firstAndLast;
    
    this.getFullName = () => fullName;
    this.getFirstName = () => fullName.split(" ")[0];
    this.getLastName = () => fullName.split(" ")[1];
    
    this.setFirstName = (first) => fullName = first + " " + fullName.split(" ")[1];
    this.setLastName = (last) => fullName = fullName.split(" ")[0] + " " + last;
    this.setFullName = (name) => fullName = name;
  };
  
  var bob = new Person('Bob Ross');
  bob.getFullName();
