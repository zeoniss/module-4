/*
 * Напиши скрипт управления личным кабинетом интернет банка.
 * Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.
 * */

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
// const Transaction = {
//     DEPOSIT: 'deposit',
//     WITHDRAW: 'withdraw',
// };

// /*
//  * Каждая транзакция это объект со свойствами: id, type и amount
//  */

// const account = {
//     // Текущий баланс счета
//     balance: 0,
//     nextId: 400,

//     getNextId() {
//         this.nextId += 1;
//         return this.nextId;
//     },

//     // История транзакций
//     transactionsList: [],
//     transactionsMap: {},

//     /*
//      * Метод создает и возвращает объект транзакции.
//      * Принимает сумму и тип транзакции.
//      */
//     createTransaction(amount, type) {
//         return {
//             id: this.getNextId(),
//             amount,
//             type,
//         };
//     },

//     /*
//      * Метод отвечающий за добавление суммы к балансу.
//      * Принимает сумму танзакции.
//      * Вызывает createTransaction для создания объекта транзакции
//      * после чего добавляет его в историю транзакций
//      */
//     deposit(amount) {
//         const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
//         this.balance += amount;
//         this.transactionsList.push(transaction);
//         this.transactionsMap[transaction.id] = transaction;
//     },

//     /*
//      * Метод отвечающий за снятие суммы с баланса.
//      * Принимает сумму танзакции.
//      * Вызывает createTransaction для создания объекта транзакции
//      * после чего добавляет его в историю транзакций.
//      *
//      * Если amount больше чем текущий баланс, выводи сообщение
//      * о том, что снятие такой суммы не возможно, недостаточно средств.
//      */
//     withdraw(amount) {
//         const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
//         if (amount > this.balance) {
//             console.error('Naf-Naf Minerals!');
//             return;
//         }

//         this.balance -= amount;
//         this.transactionsList.push(transaction);
//         this.transactionsMap[transaction.id] = transaction;
//     },

//     /*
//      * Метод возвращает текущий баланс
//      */
//     getBalance() {
//         return this.balance;
//     },

//     /*
//      * Метод ищет и возвращает объект транзации по id
//      */
//     getTransactionDetails(id) {
//         return this.transactionsMap[id] || null;
//     },

//     /*
//      * Метод возвращает количество средств
//      * определенного типа транзакции из всей истории транзакций
//      */
//     getTransactionTotal(type) {
//         if (!Object.values(Transaction).includes(type)) {
//             console.error(`Unknown transaction type "${type}"`);
//             return;
//         }

//         let total = 0;

//         for (const transaction of this.transactionsList) {
//             if (transaction.type !== type) {
//                 continue;
//             }

//             total += transaction.amount;
//         }

//         return total;
//     },
// };

// console.log(account.getTransactionDetails(300));
// account.deposit(1200);
// account.withdraw(700);
// account.withdraw(800);
// account.deposit(300);
// console.log(account.getTransactionTotal('unknown'));
// console.log(account.getTransactionTotal(Transaction.DEPOSIT));
// console.log(account.getTransactionDetails(401));
// const isUniq = (element, index, arr) => arr.indexOf(element) === index;
// const isEven = element => element % 2 === 0;

// function filterArray(array, cb) {
//     'use strict';
//     const numbers = [];
//     for (let i = 0; i < array.length; i += 1) {
//         const element = array[i];
//         const index = i;
//         // Write code under this line
//         if (cb(element, index, array)) {
//             numbers.push(element);
//         }
//     }
//     return numbers;
// }

// const arr = [1, 2, 3, 4, 5, 1, 2, 5];

// console.log(filterArray([-2, 0, 2], isUniq));
// // [1, 2, 3, 4, 5]

// console.log(filterArray([1, 1, 2], isUniq));
// // [2, 4, 2]
// const add = (accum, element) => accum + element;
// const mult = (accum, element) => accum * element;
// const sub = (accum, element) => accum - element;

// function reduceArray(array, cb, initial) {
//     'use strict';
//     let i;
//     let accum;
//     if (arguments.length >= 3) {
//         accum = initial;
//         i = 0;
//     }
//     if (arguments.length === 2) {
//         accum = array[0];
//         i = 1;
//     }
//     for (i = 0; i < array.length; i += 1) {
//         const element = array[i];
//         // Write code under this line
//         accum = cb(accum, element);
//     }
//     return accum;
// }

// const arr = [1, 2, 3, 4, 5];

// console.log(reduceArray(arr, add)); // 15
// console.log(reduceArray(arr, add, 10)); // 25

// console.log(reduceArray(arr, mult)); // 120
// console.log(reduceArray(arr, mult, 10)); // 1200

// console.log(reduceArray(arr, sub)); // -13
// console.log(reduceArray(arr, sub, 10)); // -5
// const account = {
//     owner: 'Mango',
//     balance: 24000,
//     discount: 0.1,
//     orders: ['order-1', 'order-2', 'order-3'],
//     changeDiscount(value) {
//         this.discount = value; // Write code in this line
//     },
//     showOrders() {
//         return this.orders; // Write code in this line
//     },
//     addOrder(cost, order) {
//         this.balance -= cost; // Write code in this line
//         this.orders.push(order); // Write code in this line
//     },
// };
// const copyAccount = Object.assign({}, account);
// copyAccount.orders = [...account.orders];
// // копируем для автотестов ссылочные типы

// account.changeDiscount(0.15);
// console.log(account.discount); // 0.15

// console.log(account.showOrders());
// // ['order-1', 'order-2', 'order-3']

// account.addOrder(5000, 'order-4');
// console.log(account.balance); // 19000

// console.log(account.showOrders());
// // ['order-1', 'order-2', 'order-3', 'order-4']
// const makeChangeColor = function() {
//     const changeColor = function(color) {
//         this.color = color
//     }
//     const sweater = {
//         color: 'teal',
//     }
//     sweater.changeColor = changeColor
//     return sweater.changeColor
// }
// const changeColor = makeChangeColor()
// changeColor('blue')
// const inventory = {
//     items: ['Knife', 'Gas mask'],
//     add(itemName) {
//         this.items.push(itemName)
//         return `Adding ${itemName} to inventory`
//     },
//     remove(itemName) {
//         this.items = this.items.filter((item) => item !== itemName)
//         return `Removing ${itemName} from inventory`
//     },
// }

// const invokeInventoryAction = function(itemName, action) {
//     const act = action(itemName)
//     const msg = `Invoking action on ${itemName}`
//     return { act, msg }
// }

// const invokeAdd = invokeInventoryAction(
//     'Medkit',
//     inventory.add.bind(inventory), // Write code in this line
// )
// const arrayAdd = [...inventory.items]
//     /*
//                 //console.log(invokeAdd);
//                 //{ act: 'Adding Medkit to inventory', msg: 'Invoking action on Medkit' }

//                 //console.log(arrayAdd);
//                 // ['Knife', 'Gas mask', 'Medkit']
//                 */

// const invokeRemove = invokeInventoryAction(
//     'Gas mask',
//     inventory.remove.bind(inventory), // Write code in this line
// )

// const arrayRemove = [...inventory.items]

// /*
// //console.log(invokeRemove);
// //{ act: 'Removing Gas mask from inventory', msg: 'Invoking action on Gas mask' }

// //console.log(arrayRemove);
// // ['Knife', 'Medkit']
// */
const printMessage = function(message) {
    console.log(message)
}

const higherOrderFunction = function(callback) {
    const string = 'HOCs are awesome'
    callback(string)
}

higherOrderFunction(printMessage)