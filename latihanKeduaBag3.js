const products = [
    {
        id: 1,
        title: "Laptop",
        price: 1200,
        rating: 4.5,
        stock: 5,
        category: "laptops",
        tags: ["computer", "electronics", "office"],
        dimensions: {
            width: 30,
            height: 2,
            depth: 20
        },
        reviews: [
            { user: "A", rating: 5, comment: "Good product" },
            { user: "B", rating: 4, comment: "Worth it" }
        ]
    },

    {
        id: 2,
        title: "Smartphone",
        price: 800,
        rating: 4.2,
        stock: 15,
        category: "phones",
        tags: ["mobile", "electronics"],
        dimensions: {
            width: 7,
            height: 0.8,
            depth: 15
        },
        reviews: [
            { user: "C", rating: 4, comment: "Nice camera" },
            { user: "D", rating: 5, comment: "Fast" },
            { user: "E", rating: 3, comment: "Battery so-so" }
        ]
    },

    {
        id: 3,
        title: "Headphone",
        price: 100,
        rating: 4.4,
        stock: 3,
        category: "headphones",
        tags: ["audio", "electronics"],
        dimensions: {
            width: 18,
            height: 20,
            depth: 8
        },
        reviews: [
            { user: "F", rating: 5, comment: "Great sound" },
            { user: "G", rating: 4, comment: "Comfortable" }
        ]
    },

    {
        id: 4,
        title: "Keyboard",
        price: 75,
        rating: 4.3,
        stock: 10,
        category: "accessories",
        tags: ["computer", "office"],
        dimensions: {
            width: 44,
            height: 3,
            depth: 15
        },
        reviews: [
            { user: "H", rating: 4, comment: "Good keyboard" },
            { user: "I", rating: 5, comment: "Very comfortable" }
        ]
    },

    {
        id: 5,
        title: "Mouse",
        price: 50,
        rating: 4.1,
        stock: 20,
        category: "accessories",
        tags: ["computer", "office"],
        dimensions: {
            width: 7,
            height: 4,
            depth: 12
        },
        reviews: [
            { user: "J", rating: 4, comment: "Works well" },
            { user: "K", rating: 5, comment: "Very good" }
        ]
    },

    {
        id: 6,
        title: "Monitor",
        price: 300,
        rating: 4.6,
        stock: 7,
        category: "monitors",
        tags: ["display", "computer"],
        dimensions: {
            width: 55,
            height: 35,
            depth: 5
        },
        reviews: [
            { user: "L", rating: 5, comment: "Great display" },
            { user: "M", rating: 4, comment: "Good quality" }
        ]
    },

    {
        id: 7,
        title: "Tablet",
        price: 500,
        rating: 4.3,
        stock: 8,
        category: "tablets",
        tags: ["mobile", "electronics"],
        dimensions: {
            width: 18,
            height: 0.7,
            depth: 25
        },
        reviews: [
            { user: "N", rating: 4, comment: "Good tablet" },
            { user: "O", rating: 5, comment: "Very useful" }
        ]
    },

    {
        id: 8,
        title: "Smartwatch",
        price: 200,
        rating: 4.2,
        stock: 12,
        category: "wearables",
        tags: ["watch", "mobile"],
        dimensions: {
            width: 4,
            height: 1,
            depth: 4
        },
        reviews: [
            { user: "P", rating: 4, comment: "Nice watch" },
            { user: "Q", rating: 5, comment: "Looks good" }
        ]
    },

    {
        id: 9,
        title: "Speaker",
        price: 80,
        rating: 4.4,
        stock: 6,
        category: "audio",
        tags: ["music", "electronics"],
        dimensions: {
            width: 15,
            height: 20,
            depth: 10
        },
        reviews: [
            { user: "R", rating: 5, comment: "Good sound" },
            { user: "S", rating: 4, comment: "Nice speaker" }
        ]
    },

    {
        id: 10,
        title: "Webcam",
        price: 90,
        rating: 4.1,
        stock: 9,
        category: "accessories",
        tags: ["camera", "computer"],
        dimensions: {
            width: 8,
            height: 5,
            depth: 4
        },
        reviews: [
            { user: "T", rating: 4, comment: "Clear video" },
            { user: "U", rating: 5, comment: "Great webcam" }
        ]
    },

    {
        id: 11,
        title: "Printer",
        price: 150,
        rating: 4.0,
        stock: 4,
        category: "printers",
        tags: ["office", "electronics"],
        dimensions: {
            width: 40,
            height: 20,
            depth: 35
        },
        reviews: [
            { user: "V", rating: 4, comment: "Good printer" },
            { user: "W", rating: 3, comment: "A little slow" }
        ]
    },

    {
        id: 12,
        title: "Flashdisk",
        price: 20,
        rating: 4.5,
        stock: 25,
        category: "storage",
        tags: ["storage", "computer"],
        dimensions: {
            width: 2,
            height: 0.8,
            depth: 6
        },
        reviews: [
            { user: "X", rating: 5, comment: "Fast and small" },
            { user: "Y", rating: 4, comment: "Useful" }
        ]
    },

    {
        id: 13,
        title: "Harddisk",
        price: 100,
        rating: 4.3,
        stock: 10,
        category: "storage",
        tags: ["storage", "computer"],
        dimensions: {
            width: 10,
            height: 2,
            depth: 15
        },
        reviews: [
            { user: "Z", rating: 4, comment: "Good storage" },
            { user: "AA", rating: 5, comment: "Reliable" }
        ]
    },

    {
        id: 14,
        title: "SSD",
        price: 120,
        rating: 4.7,
        stock: 8,
        category: "storage",
        tags: ["storage", "computer"],
        dimensions: {
            width: 7,
            height: 0.7,
            depth: 10
        },
        reviews: [
            { user: "AB", rating: 5, comment: "Very fast" },
            { user: "AC", rating: 5, comment: "Excellent SSD" }
        ]
    },

    {
        id: 15,
        title: "RAM",
        price: 60,
        rating: 4.4,
        stock: 14,
        category: "components",
        tags: ["computer", "hardware"],
        dimensions: {
            width: 4,
            height: 0.5,
            depth: 13
        },
        reviews: [
            { user: "AD", rating: 4, comment: "Works well" },
            { user: "AE", rating: 5, comment: "Good RAM" }
        ]
    },

    {
        id: 16,
        title: "Gaming Keyboard",
        price: 110,
        rating: 4.6,
        stock: 5,
        category: "gaming",
        tags: ["gaming", "computer"],
        dimensions: {
            width: 45,
            height: 4,
            depth: 16
        },
        reviews: [
            { user: "AF", rating: 5, comment: "Great for gaming" },
            { user: "AG", rating: 4, comment: "Good switches" }
        ]
    },

    {
        id: 17,
        title: "Gaming Mouse",
        price: 90,
        rating: 4.5,
        stock: 7,
        category: "gaming",
        tags: ["gaming", "computer"],
        dimensions: {
            width: 7,
            height: 4,
            depth: 13
        },
        reviews: [
            { user: "AH", rating: 5, comment: "Very responsive" },
            { user: "AI", rating: 4, comment: "Good mouse" }
        ]
    },

    {
        id: 18,
        title: "Controller",
        price: 70,
        rating: 4.3,
        stock: 11,
        category: "gaming",
        tags: ["gaming", "console"],
        dimensions: {
            width: 15,
            height: 6,
            depth: 10
        },
        reviews: [
            { user: "AJ", rating: 4, comment: "Comfortable" },
            { user: "AK", rating: 5, comment: "Good controller" }
        ]
    },

    {
        id: 19,
        title: "Microphone",
        price: 130,
        rating: 4.6,
        stock: 6,
        category: "audio",
        tags: ["audio", "recording"],
        dimensions: {
            width: 10,
            height: 25,
            depth: 10
        },
        reviews: [
            { user: "AL", rating: 5, comment: "Clear audio" },
            { user: "AM", rating: 4, comment: "Good microphone" }
        ]
    },

    {
        id: 20,
        title: "Powerbank",
        price: 40,
        rating: 4.2,
        stock: 18,
        category: "accessories",
        tags: ["mobile", "battery"],
        dimensions: {
            width: 7,
            height: 2,
            depth: 15
        },
        reviews: [
            { user: "AN", rating: 4, comment: "Good capacity" },
            { user: "AO", rating: 5, comment: "Very useful" }
        ]
    },

    {
        id: 21,
        title: "Charger",
        price: 35,
        rating: 4.3,
        stock: 20,
        category: "accessories",
        tags: ["mobile", "electronics"],
        dimensions: {
            width: 5,
            height: 5,
            depth: 4
        },
        reviews: [
            { user: "AP", rating: 4, comment: "Charges fast" },
            { user: "AQ", rating: 5, comment: "Good charger" }
        ]
    },

    {
        id: 22,
        title: "USB Cable",
        price: 10,
        rating: 4.1,
        stock: 30,
        category: "accessories",
        tags: ["usb", "mobile"],
        dimensions: {
            width: 2,
            height: 2,
            depth: 100
        },
        reviews: [
            { user: "AR", rating: 4, comment: "Works well" },
            { user: "AS", rating: 5, comment: "Good cable" }
        ]
    },

    {
        id: 23,
        title: "Router",
        price: 60,
        rating: 4.2,
        stock: 9,
        category: "network",
        tags: ["internet", "network"],
        dimensions: {
            width: 15,
            height: 3,
            depth: 10
        },
        reviews: [
            { user: "AT", rating: 4, comment: "Stable connection" },
            { user: "AU", rating: 5, comment: "Easy to use" }
        ]
    },

    {
        id: 24,
        title: "Modem",
        price: 75,
        rating: 4.1,
        stock: 5,
        category: "network",
        tags: ["internet", "network"],
        dimensions: {
            width: 15,
            height: 4,
            depth: 10
        },
        reviews: [
            { user: "AV", rating: 4, comment: "Works well" },
            { user: "AW", rating: 5, comment: "Good modem" }
        ]
    },

    {
        id: 25,
        title: "Projector",
        price: 400,
        rating: 4.4,
        stock: 3,
        category: "display",
        tags: ["display", "office"],
        dimensions: {
            width: 30,
            height: 10,
            depth: 25
        },
        reviews: [
            { user: "AX", rating: 5, comment: "Bright display" },
            { user: "AY", rating: 4, comment: "Good projector" }
        ]
    },

    {
        id: 26,
        title: "TV",
        price: 600,
        rating: 4.5,
        stock: 4,
        category: "display",
        tags: ["display", "entertainment"],
        dimensions: {
            width: 100,
            height: 60,
            depth: 5
        },
        reviews: [
            { user: "AZ", rating: 5, comment: "Great picture" },
            { user: "BA", rating: 4, comment: "Good TV" }
        ]
    },

    {
        id: 27,
        title: "Camera",
        price: 700,
        rating: 4.7,
        stock: 5,
        category: "camera",
        tags: ["camera", "photography"],
        dimensions: {
            width: 14,
            height: 10,
            depth: 8
        },
        reviews: [
            { user: "BB", rating: 5, comment: "Great camera" },
            { user: "BC", rating: 4, comment: "Good quality" }
        ]
    },

    {
        id: 28,
        title: "Tripod",
        price: 45,
        rating: 4.2,
        stock: 10,
        category: "accessories",
        tags: ["camera", "photography"],
        dimensions: {
            width: 8,
            height: 60,
            depth: 8
        },
        reviews: [
            { user: "BD", rating: 4, comment: "Stable tripod" },
            { user: "BE", rating: 5, comment: "Good quality" }
        ]
    },

    {
        id: 29,
        title: "Earphone",
        price: 40,
        rating: 4.3,
        stock: 15,
        category: "audio",
        tags: ["audio", "mobile"],
        dimensions: {
            width: 5,
            height: 3,
            depth: 5
        },
        reviews: [
            { user: "BF", rating: 4, comment: "Good sound" },
            { user: "BG", rating: 5, comment: "Very comfortable" }
        ]
    },

    {
        id: 30,
        title: "Smart TV",
        price: 800,
        rating: 4.6,
        stock: 6,
        category: "display",
        tags: ["tv", "entertainment"],
        dimensions: {
            width: 120,
            height: 70,
            depth: 6
        },
        reviews: [
            { user: "BH", rating: 5, comment: "Excellent TV" },
            { user: "BI", rating: 4, comment: "Great features" }
        ]
    }
];
//semua tag
const allTags = products.map(product => product.tags);

console.log(allTags);
//cari produk tagg
function findProductsByTag(products, tag) {
    return products.filter(product => product.tags.includes(tag));
}

console.log(findProductsByTag(products, "electronics"));
//jumlah riview semua produk
const reviewCounts = products.map(product => ({
    id: product.id,
    title: product.title,
    totalReviews: product.reviews.length
}));

console.log(reviewCounts);
//review bntng lima
const fiveStarReviews = products
    .flatMap(product => product.reviews)
    .filter(review => review.rating === 5);

console.log(fiveStarReviews);
//x bar dri reviews
const averageRatings = products.map(product => {
    const total = product.reviews.reduce(
        (sum, review) => sum + review.rating,
        0
    );

    return {
        id: product.id,
        title: product.title,
        averageRating: total / product.reviews.length
    };
});

console.log(averageRatings);
//produk dengan reviw terbnnyk
const productMostReviews = products.reduce((max, product) => {
    return product.reviews.length > max.reviews.length
        ? product
        : max;
});

console.log(productMostReviews);
//semua rate menjadi array
const allReviewRatings = products.flatMap(product =>
    product.reviews.map(review => review.rating)
);

console.log(allReviewRatings);