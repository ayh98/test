console.log('   |  |');
console.log('   |  |');
console.log('   |  |');
console.log('-----------');
console.log('   |  |');
console.log('   |  |');
console.log('   |  |');
console.log('-----------');
console.log('   |  |');
console.log('   |  |');
console.log('   |  |');

let grid = [ " | | "," | | "," | | ","-----------"," | | "," | | "," | | ","-----------"," | | "," | | "," | | "];
let q = 0;
do{console.log(grid[q]);q++}
while(q<11);
'incrementer q++ = (q=q+1)'

for (var i = 0; i < 3; i++){
    for (var j = 0; j < 3; j++){
    console.log("   |  |  "); 
    }
    if(i !== 2){
      console.log("-----------");
    }
}