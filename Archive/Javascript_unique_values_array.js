
function separateUniqueAndDuplicates(arr) {
    const uniqueValues = [];
    const duplicateValues = [];
    const visited = {};

    arr.forEach(num => {
        if (visited[num]) {
            duplicateValues.push(num);
        } else {
            uniqueValues.push(num);
            visited[num] = true;
        }
    });

    return {
        uniqueValues: uniqueValues,
        duplicateValues: duplicateValues
    };
}

// Example usage:
const array = [1, 4, 6, 6, 9, 0]; // Example array
const result = separateUniqueAndDuplicates(array);
console.log("Unique values:", result.uniqueValues);
console.log("Duplicate values:", result.duplicateValues);