// fake test strings
let sampleImages = ['image-src', 'imagetwo-src'];

// create an empty array of length 5
let paneArray = new Array(5);

// array to be filled/condensed 
let shortenedArray = [];

for (let i = 0; i < paneArray.length; i++) {
    if (sampleImages[i] == null) {
        console.log('blank was reached at position ' + i)
        paneArray[i] = "X";
        shortenedArray[i] = "X"
        break;
    } else {
        shortenedArray[i] = sampleImages[i]
    }
}

// snippet was used to determine the last position
// in the imagesSelected array in app
// idea being the last empty position will store the button
// to select the next image
// see the difference between paneArray and shortenedArray
console.log(paneArray);
console.log(shortenedArray);

