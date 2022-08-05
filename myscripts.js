const bestHand = function (ranks, suits) {
  // new Set will create a new object of all the suits and only return the unique values. for a flush to occur we need 5 suits all matching one another thus leaving us with only one suit. using the .size property we are able to access the integer of how many entries the Set object has.
  if (new Set(suits).size === 1) {
    return "Flush";
  }

  // in order to get three of a kind we need to have three cards that match the same number. Using ranks.filter creates a new array based on a condition.
  if (
    ranks.filter((rank) => rank === ranks[0]).length >= 3 ||
    //   We are checking if the first number in the ranks array matches any other number in the array. In this instance it would get a match of the first, second third and fourth. we can work out how many duplicates there are by using the .length property. anything with 3 or more returns us a "three of a kind"
    ranks.filter((rank) => rank === ranks[1]).length >= 3 ||
    ranks.filter((rank) => rank === ranks[2]).length >= 3 ||
    ranks.filter((rank) => rank === ranks[3]).length >= 3 ||
    ranks.filter((rank) => rank === ranks[4]).length >= 3
  ) {
    return "Three of a Kind";
  }

  //   similar logic to a flush, a new object is created of all the ranks with only the unqique values remaining. We need to ensure the condition for the size is set to 3 and not 2 as there may be an instance where there are 2 pairs and a single rank leaving us with a size of three.
  if (new Set(ranks).size <= 3) {
    return "Pair";
  }

  return "High Card";
};
// Flush

(ranks = [13, 2, 3, 1, 9]), (suits = ["a", "a", "a", "a", "a"]);

console.log(bestHand(ranks, suits));

//   Three of a kind

(ranks = [4, 4, 2, 4, 4]), (suits = ["d", "a", "a", "b", "c"]);

console.log(bestHand(ranks, suits));

// Pair

(ranks = [10, 10, 12, 12, 9]), (suits = ["a", "b", "c", "a", "d"]);

console.log(bestHand(ranks, suits));

/* If i had more time I would have completed the following;

Create an object to hold both array that would provide suit and rank. ✅

Have three buttons on the screen Flush/Three of a Kind/ Pair ✅

Create an Onclick event to display each card on the sceen for each example when the button is presssed
*/

const merged = ranks.map((val1, index) => ({
    rank: val1,
    suit: suits[index]
}))

console.log(merged)

function flush() {
  document.getElementById("cards").innerHTML = JSON.stringify(merged)
} 