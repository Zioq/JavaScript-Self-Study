/** [Inheritance]
 *  When mutilple classes share properties or methods, they become candidates for `inheritance` - a tool developers use to decrease the amount of code they need to write.
 *  With inheritacne, you can create a `parent class` (also known as a superclass) with properties and methods that mutiple `child` classes(also known as subclasses) share. The child classes inherit the properties and methods form their parent class.
 */

 // Let's say we want to design superclass which has data of hosipital employees
 // We want to design 2 subclass `Doctor` and `Nurse`
 // [Docotor] : *Properties: _name, _remainingVacationDays (set to 20 inside the ) constructor()), _insurance. * Method: .takeVacationDays()
 // [Nurse]: *Properties: _name, _remainingVacationDays (set to 20 inside constructor()), _certifications. * Method: .takeVacationDays(), .addCertification()

 class HosipitalEmployee {
    // Constructor
    constructor(name) {
         this._name = name;
         this._remainingVacationDays = 20;
    }
    // Getter
    get name() {
        return this._name;
    }
    get remainingVacationDays() {
        return this._remainingVacationDays;
    }

    // Method
    takeVacationDays(daysOff) {
        this._remainingVacationDays -= daysOff;
    }
    
    // Add static method 
    static generatePassword() {
        // Return a random integer between zero and 10,000
        return Math.floor(Math.random()*10000);
    }
     
 }
 /** [Extends and Super]
  *  The `extends` keyword makes the methods of the parent class available inside the child class
  *  The constructor accept accepts arguements.
  *  The `super` keyword calls the constructor of the parent class. Notice, we call `super` on the first line of our `constructor`, then set the other property on the second line. In a constructor(), you must always claa the `super` method before you can use the `this` keyword - If you do not, JavaScript will throw a reference errror. To avoid reference errors, it is best practice to call `super` on the first line of subclass constructors. 
  */

  // `Nurse` class as a child of the `HosipitalEmployee` class. 
  // * Properties: _name, _remainingVacationDays, _certification
  // * Methods: .takeVacationDays(), .addCertification()
  class Nurse extends HosipitalEmployee {
      constructor(name,certifications) {
          // Use the `super` keyword to call the parent's constructor(). Pass in the `name` argument.
          super(name);
          this._certifications = certifications;
      }
      // Add a getter that return the value saved to the Nurse instance's _certiciation
      get certification() {
          return this._certifications;
      }

      // Add a method which add certification.
      addCertification(newCertification) {
          this._certifications.push(newCertification);
      }
  }

  // Create a new instance of Nurse.
  const nurseHailey = new Nurse("Hailey",['Trauma', 'Pediatrics']);
  console.log(nurseHailey);

  // When we call `extends` in a class declareation, all of the parent methods are available to the child class. As a result the the child class has access to the parent getters and other methods. Since the `extends` keyword brings all of the parnet's getters and methods into the child class, the nurseHailey.name ,for example, accesses the name getter and returns the value saved to the `name` property.

  // Call the inherited methods. 
  nurseHailey.takeVacationDays(5);
  console.log(nurseHailey.remainingVacationDays);


  // In addition to the inherited features, child classes can comtain their own properties, getters, setters, and methods.
  // Line from 46~ 54
  nurseHailey.addCertification("Genetics");
  console.log(nurseHailey.certification);

  /** [Static Methods]
   *  Sometimes we will want a class to have methods that ARE NOT AVAILABLE IN INDIVIDUAL INSTANCE, but that you can call directly from the class.
   */
  // See how to write code in line 30


  // Make a Doctor class that inherits from HospitalEmployee
  class Doctor extends HosipitalEmployee {
      constructor(name,insurance) {
          super (name);
          this._insurance = insurance;
      }

      get insurance() {
          return this._insurance;
      }

  }

  // Create a new instance of Doctor
  const doctorRobert = new Doctor("Robert","CERB");
  console.log(doctorRobert);