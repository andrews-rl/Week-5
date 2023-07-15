// Note to grader: The comments were put in as note taking and insurance that I understand what this program is 
// doing. If you see that my understanding is flawed please send a text through slack so I can confirm understanding. Also fyi, I changed
// my default tab spacing to two spaces after completing most of the project. Some tab spaces are 4 and others are 2. 

/* This assignment requires the creation of a menu, using 2 classes and at least 1 array. 
I created a character class, menu class, and movie class. The menu and movie class have an array to hold values.
The program allows you to create and delete movies and characters. Characters are aligned under
their respective movies.
*/
// Below creates the class for characters and defines it with the properties listed. 


class Character{// Creates the class character. 
    constructor (name, type){// A constructor, or a special function, creates and initializes an object instance of
        // a class.
        this.name = name;// Creates a place holder for the property name with in instance of the class character 
        // created by the constructor.
        this.type = type;// Creates a place holder for the property type (hero or villain) within instance of the 
        // class character created by the constructor.
    }

    describe(){// functice designed to return the following values.    
        return `${this.name} is a  ${this.type}.`
    }
}

// Below creates the class for movies and defines it with the properties listed. In addition, the first
// required array is created. 

class Movie{// Creates a class, a special function within JavaScript.
    constructor (name){// Creates a constructor which is a special method of a class for creating an object instance of the class Movie.
        this.name = name; // Creates a name property of class Movie. 
        this.characters = [];// Creates a multitple input storage container for characters.
        }

    addCharacter(character){// A method, or a special function, designed receive an input and to add instances of the characters which 
        // will be stored in the this.characters array.
        if (character instanceof Character){ //If statement designed create an instance and to push individual character inside the 
            // character array.
            this.characters.push(character);
        } else {
            throw new Error(`You can only add an instance of a character. Argument is not a character: ${character}`);// If the input to the addCharacter 
            // then the program will provide this error code. 
        } 
    }   
    
    describe(){  // functice designed to return the following values.  
        return `${this.name} has ${this.characters.length} characters.`;
    }
    

} 

// Below creates the class for menu and defines it with the properties listed. In addition, a second additional
// array is created. 


class Menu {
    constructor() {
        this.movies = []; // Create array for all movies
        this.selectedMovie = null;// Could it have been a ''. I am thinking that is an empty string. I am thinking it could be 
        // null if there was a possiblity of it being a number or another type. 
    }

    start() {
        let selection = this.showMainMenuOptions();// Sets the variable selection equal to the method showMainMenuOptions. This is
        // JavaScript way to point to properties within methods or methods themselves.
        while(selection != 0){
            switch (selection){
                case '1':
                    this.createMovie();
                    break; // Instructs the computer to exit the switch if the condition of case 1 is met. 
                case '2':
                    this.viewMovie();
                    break; // Instructs the computer to exit the switch if the condition of case 2 is met.
                case '3':
                    this.deleteMovie();
                    break; // Instructs the computer to exit the switch if the condition of case 3 is met.
                case '4':
                    this.displayMovies();
                    break; // Instructs the computer to exit the switch if the condition of case 4 is met.
                default:
                    selection = 0; // Designed to tell the computer to exit if something other than the 
                    // numbers 1-4 and cause the program to exit the switch. 

            }
            selection = this.showMainMenuOptions();// Defines the variable selection and allows the method, a special function,
            // to be called when the variable is called.
        }

        alert('Goodbye!');// Instructs the computer to display a popup that states Goodbye.
    }

// Here is the main menu requesting a response. The options are clear, and inputs are used select and activate one of the functions below the start function above. 

    showMainMenuOptions() {
        return prompt(`
        Selections:
            0) exit
            1) create new movie
            2) view specific movie
            3) delete movie
            4) display all movies
        `);// Displays, in a popup, the information above and creates an opportunity for the user to input data.
    }

// Here is a second menu where input is requested, and a character array is created to with the input and stored for later use.

    showMovieMenuOptions(movieInfo) {// method, or special function, designed to parse previous info in order to display the message
        // and movie info on the bottom of the message provided from above.  
    return prompt(`
        0) back
        1) create character
        2) delete character
        ------------------
        ${movieInfo}
    `);// Displays, in a popup, the information above and creates an opportunity for the user to input data.
}

    displayMovies() {
        let movieString = ''; // set a variable to a null or empty string.
        for (let i = 0; i < this.movies.length; i++){// This is a for loop that directs the computer to continue the loop as long as the index which
            // starts at 0 to continue to iterate by increments of one until the index is equal to or greater than the length of the movie array. 
            movieString += i +') ' + this.movies[i].name + '\n'; // This allows the computer to add to variable movieString each of the movies identified
            // by the computer while iterating through data in the movie array. 
        }
        alert(movieString);// Provides an alert to the user displaying the variable movieString.
    }

    createMovie() {// Prompts the user for an input and pushes the input into the movie array.
        let name = prompt('Enter name for new movie');
        this.movies.push(new Movie(name));
    }
    
    viewMovie() {
        let index = prompt(`Enter the index of the movie you wish to view`);// Prompts the user to input index.
        if (index > -1 && index < this.movies.length) {// Determines if index is both greater than -1 and less than the total number of movies
            // in the this.movie array. If both are true, then the following lines of code will be executed.
            this.selectedMovie = this.movies[index]; // Set the Menu property selectedMovie equal to the movie indicated by the index input.
            let description = 'Movie Name: ' + this.selectedMovie.name + '\n'; // Set string variable equal to Movie Name: and the selected movie.

            for (let i = 0; i < this.selectedMovie.characters.length; i++) {// This is a for loop that directs the computer to continue the loop as long as
                // after index starting at zero and incrementing by one that the index remains less than selected movie character length.
                description +=i + ') ' + this.selectedMovie.characters[i].name // This line is telling the computer to add to the variable description
                // each of the selected characters while iterating through each of the characters and calls the names of the characters. 
                 + ' - ' + this.selectedMovie.characters[i].type + '\n'; // This line adds to the previous variable and calls the character type.
            }

            let selection = this.showMovieMenuOptions(description); // Creates a variable based on the input from prompt and method above. 
            // This number is used to select an appropriate case.
            switch(selection) {// Essentially an if statement to create an action based on the number input. If 1 than execute case 1. If 2 than 
                // execute case 2.
                case '1':
                    this.createCharacter();  // Calls method createCharacter if 1 is selected. The method createCharacter is coded below. 
                    break; // If case 1 is true or selected then there is no need to go to case 2 and the computer exits the switch.
                case '2':
                    this.deleteCharacter(); // Calls method deleteCharacter if 2 is selected. The method deleteCharacter is coded below.
            }
        }
    }

    deleteMovie() {
        let index = prompt('Enter the index of the movie you wish to delete:')// Prompts the user for input.
        if (index > -1 && index < this.movies.length) {// Evaluates input to determine if the input number is
            // greater than -1 and less than the length of the movie array. If true, then the following line of code will be
            // executed. If not, the computer will not delete anything.
            this.movies.splice(index, 1);// Using the splice method this line of code will remove the character.
            // associated with the index number provided by the user when prompted above.
        }
    } 

    createCharacter() {// Method used to create character and pushes a new character into character array.
        let name = prompt(`Enter name of new character:`);// Prompts the user for input.
        let type = prompt(`Enter type (villain or hero) for new character:`);// Prompts the user for input.
        this.selectedMovie.characters.push(new Character(name, type));// Pushes new character into character array.
    }

    deleteCharacter() {// Method used to delete a character and pushes anew character into the character array.
        let index = prompt(`Enter index of character you wish to delete:`); // Prompts the user for input.
        if (index > -1 && index < this.selectedMovie.characters.length) { // Evaluates input to determine if the input number is
            // greater than -1 and less than the length of the characters array. If true, then the following line of code will be
            // executed. If not, the computer will not delete anything. 
            this.selectedMovie.characters.splice(index, 1);// Using the splice method this line of code will remove the character
            // associated with the index number provided by the user when prompted above.
        }
    }
}

let menu = new Menu(); // Instructs the computer to create a variable equal to a new Menu. New is used to avoid a 
//type error when calling a class. The new keyword directs the function to be used as a constructor.

menu.start(); // Execute the function start within the class menu. 



