const cart = [
  { name: "Laptop", price:  1000, diskonPersen: 10 },
  { name: "Mouse", price: 20, diskonPersen: 5 },
  { name: "Keyboard", price: 50, diskonPersen: 0},
];

function applyDiskon (cart) {
    const hasil = {}
    for(const item of cart) {
        const diskon = (item.price * item.diskonPersen) / 100;
        hasil[item.name]=item.price - diskon;
    }
    return hasil;
}
console.log(applyDiskon(cart));

