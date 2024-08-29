const fs = require('fs');
const path = require('path');

// function to generate a random alphabetical string
function getRandomAlphabeticalString(length) {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let result = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * letters.length);
    result = result + letters[randomIndex];
  }
  return result;
}

// function to generate a random real number
function getRandomRealNumber() {
  const randomNumber = Math.random() * 100;
  return randomNumber.toFixed(6);
}

// function to generate a random integer
function getRandomInteger() {
  return Math.floor(Math.random() * 10000);
}

// function to generate a random alphanumeric string with spaces
function getRandomAlphanumericString(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result = result + characters[randomIndex];
  }

  // add random spaces before and after
  const spacesBefore = ' '.repeat(Math.floor(Math.random() * 10)); 
  const spacesAfter = ' '.repeat(Math.floor(Math.random() * 10));

  return spacesBefore + result + spacesAfter;
}

// function to randomly choose and generate one of the four types of objects
function getRandomObject() {
  const options = [
    () => getRandomAlphabeticalString(10),
    getRandomRealNumber,
    getRandomInteger,
    () => getRandomAlphanumericString(10),
  ];

  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex]();
}

// function to generate a 10MB file with random objects
function generateFile() {
  const totalSizeInBytes = 10 * 1024 * 1024; // 10MB in bytes
  let fileContent = ''; // this will hold file content
  let currentSize = 0; // keep track of the file size

  // keep adding random objects until the file reaches 10MB
  while (currentSize < totalSizeInBytes) {
    const randomObject = getRandomObject();
    const objectWithComma = randomObject + ',';
    fileContent = fileContent + objectWithComma; // add the object to the file content
    currentSize = currentSize + Buffer.byteLength(objectWithComma); // update the current size
  }

  // save the generated content to a file
  const filePath = path.join(__dirname, 'random_objects.txt');
  fs.writeFileSync(filePath, fileContent);
  console.log('File generated:', filePath);
}

generateFile();
