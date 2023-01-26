
function threeSum(array, target) {
  //your code here
	 let closestSum = 0;
    let minDiff = Infinity;

    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            for (let k = j + 1; k < array.length; k++) {
                let sum = array[i] + array[j] + array[k];
                let diff = Math.abs(target - sum);
                if (diff < minDiff) {
                    minDiff = diff;
                    closestSum = sum;
                }
            }
        }
    }

    return closestSum;
}



module.exports = threeSum;
