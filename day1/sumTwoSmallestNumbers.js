// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 integers. No floats or empty arrays will be passed.
// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
// [10, 343445353, 3453445, 3453545353453] should return 3453455.
// Hint: Do not modify the original array. 提示：不要修改原始数组。


// code by me:
// 使用sort函数其实不符合题意
function sumTwoSmallestNumbers(numbers) {
    var newNumbers = numbers.sort(function (a, b) {
        return a - b;
    });
    return newNumbers[0] + newNumbers[1];
};

// code by bigLao:
// 1:
function sumTwoSmallestNumbers(numbers) {
    numbers = numbers.sort(function (a, b) {
        return a - b;
    });
    return numbers[0] + numbers[1];
};
// 2:
function sumTwoSmallestNumbers(numbers) {
    var [a, b] = numbers.sort((a, b) => a - b)
    return a + b
}
// 3:
function sumTwoSmallestNumbers(numbers) {
    var min = Number.MAX_SAFE_INTEGER;
    var secondMin = Number.MAX_SAFE_INTEGER;
    var n;
    for (i = 0; i < numbers.length; i++) {
        n = numbers[i];
        if (n < min) {
            secondMin = min;
            min = n;
        } else if (n < secondMin) {
            secondMin = n;
        }
    }
    return min + secondMin;
}
// test :

describe("Your function", _ => {
    it("should work for basic tests", _ => {
        Test.assertEquals(sumTwoSmallestNumbers([5, 8, 12, 19, 22]), 13, "Sum should be 13");
        Test.assertEquals(sumTwoSmallestNumbers([15, 28, 4, 2, 43]), 6, "Sum should be 6");
        Test.assertEquals(sumTwoSmallestNumbers([3, 87, 45, 12, 7]), 10, "Sum should be 10");
        Test.assertEquals(sumTwoSmallestNumbers([23, 71, 33, 82, 1]), 24, "Sum should be 24");
        Test.assertEquals(sumTwoSmallestNumbers([52, 76, 14, 12, 4]), 16, "Sum should be 16");
    });
});