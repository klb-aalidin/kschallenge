const fs = require('fs');
const path = require('path');

// function to detect the type of object
function detectObjectType(object) {
  object = object.trim(); // strip spaces for alphanumeric
  if (!isNaN(object) && object.includes('.')) {
    return 'Real Number';
  } else if (!isNaN(object)) {
    return 'Integer';
  } else if (/^[A-Za-z]+$/.test(object)) {
    return 'Alphabetical String';
  } else if (/^[A-Za-z0-9]+$/.test(object)) {
    return 'Alphanumeric String';
  } else {
    return 'Unknown Type';
  }
}

// function to read and process the file
function processFile() {
  const filePath = path.join(__dirname, 'random_objects.txt');
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const objects = fileContent.split(','); // Split by commas

  // loop through each object in the file and print its type
  for (let i = 0; i < objects.length; i++) {
    const object = objects[i]; // Get the current object
    if (object) {
      // check if object is not empty
      const trimmedObject = object.trim(); // remove spaces around the object
      const objectType = detectObjectType(trimmedObject); // detect the type of the object
      console.log('Object: "' + trimmedObject + '", Type: ' + objectType);
    }
  }
}

processFile();
