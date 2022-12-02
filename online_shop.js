var catalog = []
var basket = []

function product(id, name, description, sizes, price, vailable) {
        catalog.push({
            id : Number(id),                        // Код товара
            name : String(name),                    // Наименование
            description : String(description),      // Описание
            sizes : Array(sizes),                   // Массив возможных размеров
            price : Number(price),                  // Цена товара
            vailable : Boolean(vailable),           // Признак доступности для продажи
        })                      
}

function addToBasket(id, amount) {
            basket.push({
                good : catalog[id-1],               // Cсылка на товар в каталоге
                amount : Number(amount),            // Количество товара в корзине
                })
}

function delFromBasket(id, amount) {
    for (let i=0; i < basket.length; i++) {
        if (basket[i].good.id == id) {
            if (amount >= basket[i].amount) {
                basket.splice(i, 1);
                return;
            }
            basket[i].amount -= amount;
        }
    }
    return basket        
}

function cleanBasket() {
  basket = []
}

function getTotalCalcBasket () {
    let totalSum = 0;
    let totalAmount = 0;
    for (position of basket) {
        totalSum += position.good.price*position.amount
        totalAmount += position.amount
    }
    return {"totalSum": totalSum, "totalAmount": totalAmount}
}

new product(1, "TV", "cool", [32, 33, 38], 4500, true)
new product(2, "dress", "long", [38, 40, 42], 800, false)
new product(3, "motherboard", "new", ["atx"], 350, false)
new product(4, "shoes", "classic", [40, 42, 43], 300, true)
new product(5, "table", "round", ["big", "small"], 500, false)


console.log(catalog)

addToBasket(1, 1)
addToBasket(3, 2)

console.log(basket)
console.log(getTotalCalcBasket())

cleanBasket()

console.log(basket)

addToBasket(2, 3)
addToBasket(4, 2)

console.log(basket)
console.log(basket[0].good)
console.log(basket[0].amount)
console.log(basket[1].good)
console.log(basket[1].amount)

console.log(getTotalCalcBasket())

delFromBasket(4,2)

console.log(basket)
console.log(basket[0].good)
console.log(basket[0].amount)

console.log(getTotalCalcBasket())
