// let list = [
//     'Milk',
//     'Sugar',
//     'Salt',
//     'Butter',
//     'Bread'
// ]
// console.log(list[0]);
// console.log(list[1]);
// console.log(list[2]);

// console.log(list);

// let [first, second, ...other] = list;
// console.log(first, second, other);

// let arr = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8]
// ];

// let [[a, b, c, d, [nine, zero]], newArr, ...other] = arr;
// console.log(a, b, c, d, newArr, other);
// console.log(nine, zero);

// let person = {
//     age: 30,
//     name: 'John',
//     lastName: 'Snow'
// };

// // let name = person.name;
// // let age = person.age;
// // let lastName = person.lastName;

// let {age, name, lastName} = person;
// console.log(name, age, lastName);

// let obj1 = {
//     subObj: {
//         name: 'Jack'
//     }
// };

// let {subObj:{name}} = obj1;
// console.log(name);

// рассмотрим пример деструктуризации, когда объект содержит в себе массив, в котором размещен другой объект
// let obj = {
//     arr: [
//         {
//             name: 'Makers'
//         }
//     ]
// };
// let {arr: [{name}]} = obj;
// console.log(name);

//? рассмотрим как работает деструктуризация на функциях
// function foo({name, age}){
//     console.log(name);
//     console.log(age);
// }

// let person = {
//     name: 'Makers',
//     lastName: 'Bootcamp',
//     age: 2
// };
// foo(person)

// let arr = [1, 2, 3, 4, 5];
// let [,,,four, five] = arr; //чтобы пропустить элементы в начале массива, можно поставить запятые (каждая запятая пропускает/не обрабатывает очередной элемент)
// console.log(four, five);

// рассмотрим spread-operator
// function foo(a, b, c){
//     console.log(a, b, c);
// };
// let arr = [1, 2, 3, 4, 5];
// foo(...arr);

// let a = {
//     age: 20
// };
// // let b = {
// //     age: 20
// // };
// // let b = a;
// let b = {...a};
// b.age = 30;
// console.log(a, b);
// console.log(a === b); // false

// let obj1 = {
//     name: 'Kani',
//     color: 'yellow'
// };
// let obj2 = {
//     lastName: 'East',
//     //color: 'pink'
// };

// let {color} = obj1;
// let newObj = {...obj1, ...obj2};
// console.log(newObj);

// let obj = {
//     name: 'Kani',
//     age: 22,
//     positions: [
//         'Mentor',
//         'Backend-developer',
//         'Frontend-developer',
//         'Blogger'
//     ],
//         dog: {
//             name: 'Oreo',
//             age: 2
//         }
// };

//let {name, age} = obj;

// let {
//     name,
//     age,
//     positions: [
//         firstPosition,
//         secondPosition,
//         ...otherPositions
//     ],
//     dog: {
//         name: dogName,
//         age: dogAge
//     }
// } = obj;
//console.log(name, age, firstPosition, secondPosition, otherPositions, dogName, dogAge);

// function sayHello({name, age, dog: {name: dogName}}){
//     console.log(`
//     Hello, my name is ${name}
//     I am ${age} y.o.
//     I have a dog ${dogName}
//     `);
// }
// sayHello(obj)