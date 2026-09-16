function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
        }

        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}

const hitung = [10, 20, 30, 40, 50, 60, 70];

console.log(binarySearch(hitung, 50));
console.log(binarySearch(hitung, 99));
//
const products = [
    { id: 1, title: "Laptop", price: 1200 },
    { id: 2, title: "Smartphone", price: 800 },
    { id: 3, title: "Headphones", price: 100 },
    { id: 4, title: "Keyboard", price: 300 },
    { id: 5, title: "Monitor", price: 500 }
];

const sortedProducts = [...products].sort(
    (a, b) => a.price - b.price
);

function binarySearchByPrice(products, targetPrice) {
    let left = 0;
    let right = products.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (products[mid].price === targetPrice) {
            return products[mid];
        }

        if (products[mid].price < targetPrice) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return undefined;
}

console.log(binarySearchByPrice(sortedProducts, 500));
