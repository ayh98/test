// const size = 


// let orderCount = 0; 
// const takeOrder = (topping) => {
//  console.log(`Pizza with ${topping}`);
//  orderCount++;
// }
// takeOrder("pineapple");
// takeOrder("donner");
// takeOrder("meatball");
// console.log(orderCount);



// const withdrawCash = (pin, amount, balance) => {
//         if (pin !== 1234) {
//                 console.log("Your pin is incorrect, please try again.")
//         }
//         else if (balance < amount) {
//                 console.log(`You have insufficient funds, you're balance is £${balance}`);
//         }
//         else {
//                 console.log(`You have withdrawn £${amount}`)
//         }

// }
// withdrawCash (1234, 310, 200);


// let grid = [
//     ['x', 'o', 'x'],
//     ['x', 'o', 'o'],
//     ['o', 'x', 'o']
//     ];
    
//     // console.log(grid[0][0]); // Output: 1
//     // console.log(grid[0][1]); // Output: 2
//     // console.log(grid[0][2]); // Output: 3
//     // console.log(grid[1][0]); // Output: 4
//     // console.log(grid[1][1]); // Output: 5
//     // console.log(grid[1][2]); // Output: 6
//     // console.log(grid[2][0]); // Output: 7
//     // console.log(grid[2][1]); // Output: 8
//     // console.log(grid[2][2]); // Output: 9
    
// if ((grid[0][0] == "x" && grid[0][1] == "x" && grid[0][2] == "x") || (grid[0][0] == "o" && grid[0][1] == "o" && grid[0][2] == "o")){
//         console.log("WINNER WINNER!");
// }
// else if ((grid[1][0] == "x" && grid[1][1] == "x" && grid[1][2] == "x") || (grid[1][0] == "o" && grid[1][1] == "o" && grid[1][2] == "o")){
//         console.log("WINNER WINNER!");
//     }
// else if ((grid[2][0] == "x" && grid[2][1] == "x" && grid[2][2] == "x") || (grid[2][0] == "o" && grid[2][1] == "o" && grid[2][2] == "o")){
//         console.log("WINNER WINNER!");
// }

// else if ((grid[0][0] == "x" && grid[1][0] == "x" && grid[2][0] == "x") || (grid[0][0] == "o" && grid[1][0] == "o" && grid[2][0] == "o")){
//         console.log("WINNER WINNER!");
// }

// else if ((grid[0][1] == "x" && grid[1][1] == "x" && grid[2][1] == "x") || (grid[0][1] == "o" && grid[1][1] == "o" && grid[2][1] == "o")){
//         console.log("WINNER WINNER!");
// }

// else if ((grid[0][2] == "x" && grid[1][2] == "x" && grid[2][2] == "x") || (grid[0][2] == "o" && grid[1][2] == "o" && grid[2][2] == "o")){
//         console.log("WINNER WINNER!");
// }

// else if ((grid[0][0] == "x" && grid[1][1] == "x" && grid[2][2] == "x") || (grid[0][0] == "o" && grid[1][1] == "o" && grid[2][2] == "o")){
//         console.log("WINNER WINNER!");
// }
// else if ((grid[0][2] == "x" && grid[1][1] == "x" && grid[2][0] == "x") || (grid[0][2] == "o" && grid[1][1] == "o" && grid[2][0] == "o")){
//         console.log("WINNER WINNER!");
// }
// else{
//          console.log("TIE!");
// }

// // Create a function that takes two parameters for a coffee order (size, type of drink)
// const takeOrder = (size, type) => {
//         console.log(`Order received: Coffee is a ${size} ${type}`);
// }
//         takeOrder('grande' , 'latte');

// // Take this code and turn it into arrow function syntax
// const factorial = n => {
//         if ((n === 0) || (n === 1)) {
//         return 1;
//         } else {
//         return (n * factorial(n-1));
//         }
//        }
        
//        console.log(factorial(33));

// let x = 3;
// const y = x++;

// console.log(`x:${x}, y:${y}`);