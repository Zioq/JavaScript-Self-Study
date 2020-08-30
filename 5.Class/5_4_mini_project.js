/** [School Catalogue]
 *  The Department of Education wants the catalog to hold quick reference material for each school in school.
 *  We need to create classes share properties and methods, each will inherit from a parent `School` class. 
 */

 // Create class named School
 class School {
    // Constructor
    constructor(name,level,numberOfStudents) {
        this._name = name;
        this._level = level;
        this._numberOfstudents = numberOfStudents;
    }

    //Getter
    get name() {
        return this._name;
    }
    get level() {
        return this._level;
    }
    get numberOfStudents() {
        return this._numberOfstudents;
    }

    // Stter 
    set numberOfStudents(value) {
        if(typeof value === 'number') {
            this._numberOfstudents =  value;
        } else {
            console.log("Invalid input: numberOfStudents must be set to a Number.");
        }
    }

    // Methods 
    quickFacts() {

        console.log(`${this.name} educates ${this.numberOfStudents} stduents at the ${this.level} school level`);
    }

    // Static Method
    static pickSubstituteTeachers(substituteTeachers) {
        // Generate random index number
        const index =Math.floor(substituteTeachers.length * Math.random());
        // pick the substituteTeacher using a random number index

        return substituteTeachers[index];
    }

 } 

 // Create Primary School Class
 class PrimarySchool extends School {

    // Consturctor (leave out the level parameter beacuse every primary school is going to have the same level primary)
     constructor(name, numberOfStudents,pickupPolicy) {
         //super properties(Properties from school)
         super(name, 'privary',numberOfStudents);
         //pickupPoicy isn't inherited from the school so it isn't covered by super
         this._pickupPolicy = pickupPolicy;
     }

     // Getter for pickpuPolicy becuase it doesn't inherit from School
     get pickupPolicy(){
         return this._pickupPolicy;
     }

 }


 // Create Middle School Class
 class MiddleSchool extends School {
     // This class does not include any additional properties or method
     constructor(name,numberOfStudents) {
         super(name,'Middle School',numberOfStudents);
     }
 }

 // Create High School Class
 class HighSchool extends School {
     
    //Constuctor 
    constructor(name, numberOfStudents, sportsTeams) {
        // Properties from School
        super(name, 'High School',numberOfStudents);
        // Property for HighSchool Class
        this._sportsTeams = sportsTeams;
    }

    // Getter
    get sportsTeams() {
        return this._sportsTeams;
    }
 }

// Create instance of PrimarySchool and HighSchool.
const lorraineHansbury = new PrimarySchool('Lorraine Hansbury',514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');

// Call .quickFacts() on the lorraineHansbury instance.
lorraineHansbury.quickFacts();

// Call the .pickSubstituteTeacher() on School for get the substitute teacher for the day.
const substituteTeachersList = ['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli'];

const sub = School.pickSubstituteTeachers(substituteTeachersList);
console.log(sub);

// Create HighSchool Instance
const alSmith = new HighSchool('Al E. Smith',415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);

// Get the value savaed to the sportTeams
console.log(alSmith.sportsTeams);

// Create MiddleShcool Instance
const vancouverMiddleSchool = new MiddleSchool('Vanoucver Middle School', 400);

console.log(vancouverMiddleSchool);

// Create SchoolCatalog that holds a collection of schools.

class SchoolCatalog {
    // Constuctor
    constructor() {
        this._primarySchools =[];
        this._middleSchools = [];
        this._highSchools = [];
    }

    //getter
    get primarySchools(){
        return this._primarySchools;
    }
    get middleSchools() {
        return this._middleSchools;
    }
    get highSchools() {
        return this._highSchools;
    }

    addSchool(school) {
        switch (school.constructor.name){

            case 'PrimarySchool':
                this.primarySchools.push(school);
            return;

            case 'MiddleSchool':
                this.middleSchools.push(school);
            return;

            case 'HighSchool':
                this.highSchools.push(school);
            return;

            default:
                return; 
        }
    }
}

const schoolCatalog = new SchoolCatalog();
schoolCatalog.addSchool(lorraineHansbury);
schoolCatalog.addSchool(vancouverMiddleSchool);
schoolCatalog.addSchool(alSmith);
console.log(schoolCatalog);