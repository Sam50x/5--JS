// Task 1: Create a function that takes an array of numbers and returns the largest number in the array.
// Example input: [10, 5, 20, 8]
// Output: 20

const maxOfArray = (nums) => {
    let max = nums[0];

    nums.forEach(num => {
        if (max < num) {
            max = num
        }
    });

    return max
}

console.log(maxOfArray([20, 12, 5, 8]))

// Task 2:Create a function that takes an array of numbers and returns how many of them are positive.
// Use a loop and an if condition inside it.

// Example: [-1, 2, 5, -7]
// Output: 2

const countPositive = (nums) => {
    let count = 0

    nums.filter(num => num > 0).forEach(num => count++)

    return count
}

console.log(countPositive([-1, 2, 5, -7]))

// Task 3: Create a function that takes an array of numbers and returns a new array with each number squared.
// Example input: [2, 3, 4]
// Output: [4, 9, 16]
//bonus: Use the map method to create the new array.

const squaredNums = (nums) => {
    return nums.map(num => num * num)
}

console.log(squaredNums([2, 3, 4]))


// Task 4: Create a function that takes an array of numbers and returns a new array with only the numbers that are divisible by 3 , then add them together and print the sum.
// Example input: [3, 5, 9, 12, 14]
// Output: [3, 9, 12] , sum = 24
// bonus: Use the filter method to filter the numbers and the reduce method to sum them up.

const divisibleByThree = (nums) => {
    return {
        arr: nums.filter(num => num % 3 == 0),
        sum: nums.filter(num => num % 3 == 0).reduce((acc, num) => acc += num)
    }
}

console.log(divisibleByThree([3, 5, 9, 12, 14]))

// Task 5: Create a function that takes an array of strings and returns a new array with only the strings that have more than 5 characters.
// Example input: ["apple", "banana", "kiwi", "watermelon"]
// Output: ["banana", "watermelon"]

const moreThanFiveChars = (words) => {
    return words.filter(word => word.length > 5)
}

console.log(moreThanFiveChars(["apple", "banana", "kiwi", "watermelon"]))

// Task 6: Create a function that takes a string and returns true if it is a palindrome (reads the same backward as forward), and false otherwise.
// Example input: "racecar"
// Output: true

const isPalindrome = (word) => {

    for (let i = 0; i < word.length / 2; i++) {
        if (word[i] !== word[word.length - 1 - i]) {
            return false
        }
    }

    return true
}

console.log(isPalindrome("racecar"))

// Task 7: Create a function that takes an array of strings and returns a new array with only the even indexed strings converted to uppercase and reversed.
// Example input: ["apple", "banana", "cherry"]
// Output: ["ELPPA", "YRREHC"]

const evenIndexedStrings = (words) => {

    return words.filter((_, index) => index % 2 == 0).map(word => word.toUpperCase().split('').reverse().join(''))
}

console.log(evenIndexedStrings(["apple", "banana", "cherry"]))

// Task 8:

const students = [
    {
        name: "Ahmed",
        score: 68,
    },
    {
        name: "Ali",
        score: 24,
    },
    {
        name: "Mariam",
        score: 85,
    },
    {
        name: "Amr",
        score: 54,
    },
    {
        name: "Sara",
        score: 99,
    },
];
// Create a function that takes the array of students and prints each student and their grade to the console.
//
// The grade is calculated as follows:
// If the score is less than 50, the grade is 'F'.
// If the score is between 50 and 60, the grade is 'D'.
// If the score is between 60 and 70, the grade is 'C'.
// If the score is between 70 and 80, the grade is 'B'.
// If the score is higher than 80, the grade is 'A'.
//
// The output for each student should look like this:
// "Name: -student name-, Grade: -student grade-"
//
// Bonus: Sort the students by their grade in descending order into a new array
// and print the new array to the console. (Hint: Use the sort method)

// Write your code here
const printStudents = (students) => {

    students.forEach(st => {
        const sc = st.score

        if (sc < 50) {
            st.grade = 'F'
        }
        else if (sc >= 50 && sc < 60) {
            st.grade = 'D'
        }
        else if (sc >= 60 && sc < 70) {
            st.grade = 'C'
        }
        else if (sc >= 70 && sc < 80) {
            st.grade = 'B'
        }
        else {
            st.grade = 'A'
        }
    })

    const sortedStudents = [...students].sort((a, b) => b.grade.localeCompare(a.grade))

    sortedStudents.forEach(st => {
        const { name, grade } = st

        console.log(`Name: ${name}, Grade: ${grade}`)
    })
}

printStudents(students)