//get the enter button aka the element with the id "enterButton" with getElementById and add an event listerner to it
//when the user triggers/clicks the button aka "click", this function happens
document.getElementById("enterButton").addEventListener("click", function () {
  //add this message to the console to prove that its working
  console.log("person has entered the app and it's working");
  //hide the intro by making its display values to none
  document.getElementById("intro").style.display = "none";
  //And show our second page aka "block"
  document.getElementById("secondPage").style.display = "block";
  //use the function whatGenre to ask for their genre
  whatGenre();
});

// we use arrays to list our recommendations by genre
const booksByGenre = {
  //for example here is an array that stores recommendations for horror books
  horror: [
    "Dracula by Bram Stoker",
    "Haunted by Chuck Palahniuk",
    "Blood Meridian by Cormac McCarthy"
  ],
  scifi: [
    "Three Body Problem by Liu Cixin",
    "Bleeding Edge by Thomas Pynchon",
    "Dune by Frank Herbert"
  ],
  fantasy: [
    "The Hobbit by J.R.R. Tolkien",
    "Game of Thrones by George R. R. Martin",
    "The Priory of the Orange Tree by Samantha Shannon"
  ],
  thriller: [
    "Drive Your Plow Over the Bones of the Dead by Olga Tokarczuk",
    "Butter by Asako Yuzuki",
    "Misery by Stephen King"
  ]
};

//with this function we ask the user for their book genre
function whatGenre() {
  //see if one of the genre options is selected, so far its false because the user hasn't picked a valid genre
  let isValidGenre = false;
  //creates a variable that will store whatever the person types
  let askGenre = "";

  //The ! is a logical NOT operator. If isValidGenre is false, then !isValidGenre becomes true
  //this is a loop that happens until the user picks a valid genre
  while (!isValidGenre) {
    //prompt the user to pick a genre
    //toLowerCase coverts whatever the person types is lower case, as they are case sensitive e.g. Horror into horror
    askGenre = prompt(
      "Pick ONE genre - Horror, SciFi, Fantasy or Thriller"
    ).toLowerCase();
    //if whatever askGenre/user types is in booksByGenre, aka a valid genre
    if (booksByGenre[askGenre]) {
      //then isValidGenre boolean is set to true, which stops/exits our while loop
      isValidGenre = true;
      //alert the user to there choice with this message
      alert("Great choice! Here's some books from the " + askGenre + " genre.");
    } else {
      //if not then say
      alert("We don't have that genre. Try again.");
      //and show in the console what has happened/ gone wrong
      console.log("invalid genre they entered: " + askGenre);
    }
  }
  //call the function to display the books based on whatever was answered in the prompt
  displayBooks(askGenre);
}

//this function tackles how we display our books on the webpage
function displayBooks(genre) {
  //lets access the newList
  const newList = document.getElementById("newList");
  //change whatever is on newList to this:
  newList.innerHTML =
    "<h1>Nice choice📖👍   Here's some of our recommendations👇</h1>";
  //create an unordered list for the books in the selected genre
  const ul = document.createElement("ul");
  //for each book in the selected genre in booksByGenre, create a =>
  booksByGenre[genre].forEach((book) => {
    //create a list item
    const list = document.createElement("li");
    //textContent sets the book as text element (li)
    //otherwise it'd be null
    list.textContent = book;
    //add the li as a child of the unordered list
    ul.appendChild(list);
  });
  //add the newly unordered list to the newlist div
  newList.appendChild(ul);
}

//get submitNewGenre and create an event listener for it 'click'
//when clicked this function happens
document
  .getElementById("submitNewGenre")
  .addEventListener("click", function () {
    //get our input from the input field genreForm
    const newGenre = document.getElementById("genreForm").value.toLowerCase();
    //if newGenre is in booksByGenre
    if (booksByGenre[newGenre]) {
      //alert this message
      alert(
        "Another great choice! Here's some books from the " +
          newGenre +
          " genre."
      );
      //use the displayBooks funtion and create a unordered list for new genre
      displayBooks(newGenre);
    } else {
      //else alert this message
      alert("We don't have that genre. Try again.");
      //and console log what happened
      console.log("invalid new genre they entered:" + newGenre);
    }
    //clear the genreForm incase they want to type a different genre
    document.getElementById("genreForm").value = "";
  });

