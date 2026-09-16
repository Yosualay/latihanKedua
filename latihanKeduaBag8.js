function bubbleSort(numbers) {
    const arr = [...numbers];

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] =
                    [arr[j + 1], arr[j]];
            }
        }
    }

    return arr;
}

const numbers = [5, 3, 8, 1, 2];

console.log(bubbleSort(numbers));
console.log(numbers);
//
function sortProducts(products, sortBy) {
    const result = [...products];

    switch (sortBy) {
        case "price-asc":
            return result.sort((a, b) => a.price - b.price);

        case "price-desc":
            return result.sort((a, b) => b.price - a.price);

        case "rating":
            return result.sort((a, b) => b.rating - a.rating);

        case "title":
            return result.sort((a, b) =>
                a.title.localeCompare(b.title)
            );

        default:
            return result;
    }
}

const products = [
    { title: "Laptop", price: 1200, rating: 4.5 },
    { title: "Smartphone", price: 800, rating: 4.2 },
    { title: "Headphones", price: 100, rating: 4.8 }
];

console.log(sortProducts(products, "price-asc"));
console.log(sortProducts(products, "price-desc"));
console.log(sortProducts(products, "rating"));
console.log(sortProducts(products, "title"));
