const petsData = [
    {
        petName: "Stella",
        age: 7,
        weightInKilos: 24,
        breed: "Dalmation",
        pic: "images\\stella.png"
    },
    {
        petName: "Cody",
        age: 8,
        weightInKilos: 22,
        breed: "Corgi",
        pic: "images\\cody.png"
    },
    {
        petName: "Mango",
        age: 2,
        weightInKilos: 11,
        breed: "Persian",
        pic: "images\\mango.png"
    },
    {
        petName: "Lucy",
        age: 4,
        weightInKilos: 35,
        breed: "Ball Python",
        pic: "images\\lucy.png"
    },
    {
        petName: "Buhmie",
        age: 1,
        weightInKilos: 28,
        breed: "Bull-dog",
        pic: "images\\buhmie.png"
    }
];

const linearListPets = (petsArray, separater) => {
    let str = "";
    petsArray.forEach((pet) => {
        str += pet.petName + " the " + pet.breed + separater;
    });
    console.log(str);
};

petsData.unshift({
    petName: "Carmie",
    age: 3,
    weightInKilos: 28,
    breed: "Greyhound",
    pic: "images\\carmie.png"
});

petsData.push({
    petName: "Copper",
    age: 3,
    weightInKilos: 0.3,
    breed: "Mali Uromastyx",
    pic: "images\\copper.png"
});

// List the pets by name
console.log("Added Carmie to front, Copper to end");
linearListPets(petsData, " | ");

// Change the first pet's name
petsData[0].petName = "Queen Stella";
// Check
console.log("Changed Stella to Queen Stella");
linearListPets(petsData, " ! ");

let youngPet = petsData.find(
    (pet) => {
        if (pet.age < 3)
            return (pet);
    }
);
console.log("Pet, age less than 3 is ",
    youngPet.petName);



let totalYears = 0;
petsData.forEach((pet) => totalYears += pet.age);
console.log("The sum of the pet ages is ", totalYears);



let suki = {

    petName: "Suki",
  
    age: 3,
  
    weightInKilos: 1.0,
  
    breed: "Jack Russel Terrier",
  
    pic: "images\\suki.png",
  
  };
  
  petsData.splice(3, 0, suki);
  
  linearListPets(petsData, " | ");
  
  
  
// Now use splice again, this time to remove the item at index 3. 

petsData.splice(3, 1);

linearListPets(petsData, " | ");





//Assignment begins
const showInfo = () => {
    // get a handle to the input field and get the value
    let petNumber = document.querySelector("#petNum").value;
    // the array is zero-based, so subtract 1
    petNumber = parseInt(petNumber) - 1;
    // get a handle to the paragraph
    let selectedPetInfo = document.querySelector(".selectedPetInfo");
    // get the correspoding petsData object
    let pet = petsData[petNumber];
    // set the information
    selectedPetInfo.textContent = `${pet.petName} is a ${pet.breed}
                                and is ${pet.age} years old.`;
    let petPic = document.querySelector(".selectedPetPic");
    // set the image
    petPic.src = pet.pic;
}
// ------------------------------------------------------
// JAVASCRIPT
// Get a handle to the petsInfo paragraph
let petsInfo = document.querySelector(".petsInfo");
// Add content by modifying the textContent property
petsInfo.textContent = `Welcome to our newest pet,
                        ${petsData[petsData.length - 1].petName} the
                        ${petsData[petsData.length - 1].breed}`;

let petsList = document.querySelector(".petsList");
let allPetsList = `<ol>`;
petsData.forEach((pet) => {
    allPetsList += `<li> ${pet.petName} the ${pet.breed}</li>`;
});
allPetsList += `</ol>`;

petsList.innerHTML = allPetsList;