function stringChop(str, size) {
  // Handle the case where the input string is null or size is not a valid number
  if (!str || isNaN(size) || size <= 0) return [];

  // Convert size to a number (as prompt returns a string)
  size = Number(size);

  // Initialize an empty array to store chunks
  let chunks = [];

  // Loop through the string in steps of size
  for (let i = 0; i < str.length; i += size) {
    chunks.push(str.substring(i, i + size));
  }

  return chunks;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));

