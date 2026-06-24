let productdata: [name: string, price: number, qty: number][] = [["Tablet", 299.99, 15], ["Monitor", 199.99, 20]];

for (let i = 0; i < productdata.length; i++) {
    console.log(`Product: ${productdata[i][0]},  Price: $${productdata[i][1]},  Quantity: ${productdata[i][2]}`);
}

productdata.push(["Laptop", 999.99, 10], ["Mouse", 29.99, 50], ["Keyboard", 49.99, 30]);

console.log("\nAfter adding new products:\n");

for (let i = 0; i < productdata.length; i++) {
    console.log(`Product: ${productdata[i][0]},  Price: $${productdata[i][1]},  Quantity: ${productdata[i][2]}`);
}