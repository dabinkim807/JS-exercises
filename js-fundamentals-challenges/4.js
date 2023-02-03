// Create a function that calculates how many minutes have elapsed from midnight until right now.
// The function should still return an accurate answer,
// even if you ran it a few minutes or hours later.

// create a function that takes no inputs
  // create an instance of Date object, which returns the current date and time
  // use .getHours() and .getMinutes() to extract hours and minutes from current time
  // convert hours to minutes
  // return

function minutesElapsed() {
  const now = new Date()
  return now.getHours() * 60 + now.getMinutes();
}

console.log(minutesElapsed());