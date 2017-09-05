// given an array if ids, which contain many duplicate integers and one unique integer, find the unique integer

function uniqueID(ids) {
  let idsOccurence = {};

  for (let i = 0; i < ids.length; i++) {
    if (idsOccurence.hasOwnProperty(ids[i])) {
      idsOccurence[ids[i]] += 1;
    } else {
      idsOccurence[ids[i]] = 1;
    }
  }

  for (var num in idsOccurence) {
    if (idsOccurence[num] == 1) {
      console.log(num);
    }
  }
}

uniqueID([1, 1, 2, 2, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 8, 8, 8]); // should return 3

// iterate over the array
// create an object for each element with the number as the key and the times it appears as the value
// the number which has a value of one is the uniqueID
