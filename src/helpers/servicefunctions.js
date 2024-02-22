export async function combineDuplicates(arr, property) {
    const result = arr.reduce((accumulator, current) => {
        const existingItem = accumulator.find(item => item[property] === current[property]);

        if (existingItem) {
            // Combine properties into an array if the item with the same property exists
            existingItem[property] = Array.isArray(existingItem[property])
                ? [...existingItem[property], current[property]]
                : [existingItem[property], current[property]];
        } else {
            // Add the item to the accumulator if it doesn't exist
            accumulator.push(current);
        }

        return accumulator;
    }, []);

    return result;
}