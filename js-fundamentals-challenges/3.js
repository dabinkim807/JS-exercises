// 1. Create an array of numbers, (ex: [1, 2, 3])
// 2. Without using any math operators, write 5 statements:
//   - Return the first item in the array (ex: 1)
//   - Return the last item in the array (ex: 3)
//   - Add a new item to the end of the array (ex: [1,2,3,4])
//   - Add an array to the beginning of the array. (ex: [["a","b","c"],1,2,3,4])
//   - Return the first item from the first item in the array. (ex: "a")

const arrNums = [1, 2, 3];

console.log(arrNums[0]);
console.log(arrNums[2]);

arrNums.push(4);
arrNums.unshift(["a","b","c"]);

console.log(arrNums[0][0]);