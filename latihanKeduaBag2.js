const product = [
    {id: 1, nama: "laptop", harga: 1200, kategori: "laptop", stok: 5},
    {id: 2, nama: "hape", harga: 800, kategori: "hape", stok: 15},
    {id: 3, nama: "headphone", harga: 100, kategori: "headphone", stok: 3},
    {id: 4, nama: "keyboard", harga: 75, kategori: "aksesoris", stok: 10},
    {id: 5, nama: "mouse", harga: 50, kategori: "aksesoris", stok: 20},
    {id: 6, nama: "monitor", harga: 300, kategori: "monitor", stok: 7},
    {id: 7, nama: "tablet", harga: 500, kategori: "tablet", stok: 8},
    {id: 8, nama: "smartwatch", harga: 200, kategori: "wearable", stok: 12},
    {id: 9, nama: "speaker", harga: 80, kategori: "audio", stok: 6},
    {id: 10, nama: "webcam", harga: 90, kategori: "aksesoris", stok: 9},
    {id: 11, nama: "printer", harga: 150, kategori: "printer", stok: 4},
    {id: 12, nama: "flashdisk", harga: 20, kategori: "storage", stok: 25},
    {id: 13, nama: "harddisk", harga: 100, kategori: "storage", stok: 10},
    {id: 14, nama: "ssd", harga: 120, kategori: "storage", stok: 8},
    {id: 15, nama: "ram", harga: 60, kategori: "komponen", stok: 14},
    {id: 16, nama: "keyboard gaming", harga: 110, kategori: "gaming", stok: 5},
    {id: 17, nama: "mouse gaming", harga: 90, kategori: "gaming", stok: 7},
    {id: 18, nama: "controller", harga: 70, kategori: "gaming", stok: 11},
    {id: 19, nama: "microphone", harga: 130, kategori: "audio", stok: 6},
    {id: 20, nama: "powerbank", harga: 40, kategori: "aksesoris", stok: 18},
    {id: 21, nama: "charger", harga: 35, kategori: "aksesoris", stok: 20},
    {id: 22, nama: "kabel usb", harga: 10, kategori: "aksesoris", stok: 30},
    {id: 23, nama: "router", harga: 60, kategori: "jaringan", stok: 9},
    {id: 24, nama: "modem", harga: 75, kategori: "jaringan", stok: 5},
    {id: 25, nama: "proyektor", harga: 400, kategori: "display", stok: 3},
    {id: 26, nama: "tv", harga: 600, kategori: "display", stok: 4},
    {id: 27, nama: "kamera", harga: 700, kategori: "kamera", stok: 5},
    {id: 28, nama: "tripod", harga: 45, kategori: "aksesoris", stok: 10},
    {id: 29, nama: "earphone", harga: 40, kategori: "audio", stok: 15},
    {id: 30, nama: "smart tv", harga: 800, kategori: "display", stok: 6}
];

const findProdukById = (product, id) => {
    return product.find(item => item.id === id);
};
console.log(findProdukById(product, 5));
console.log(findProdukById(product,100));

const lowStockProducts=(products)=> {
    return products.filter(produk => produk.stok < 10);
};
console.log(lowStockProducts(product));
function udpdateStok (products , id, newStok      ) {
    return products.map(item => {
        if(item.id === id) {
            return {...item, stok: newStok};
        }   
    });
}
console.log(udpdateStok(product, 3, 20));



