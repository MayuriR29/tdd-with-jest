// Sum all the numbers of the array except the highest and the lowest number
// If the highest and lowest numbers appear more than once, exclude ALL occurrences
//
// e.g. sumWithoutHighestAndLowest([6, 2, 1, 8, 10]) => 16
// e.g. sumWithoutHighestAndLowest([1, 1, 11, 2, 3]) => 5

const sumWithoutHighestAndLowest = array => {
  let maxnum = Math.max(...array);
  let minNum = Math.min(...array);
  let arr1 = array
    .filter(val => val !== maxnum && val !== minNum)
	.reduce((acc, curr) => acc + curr);
	

  return arr1;
};

module.exports = sumWithoutHighestAndLowest;
