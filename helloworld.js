var stdin = process.openStdin();
console.log("Enter the string");
var name=''
stdin.addListener("data", function(d) {

       name =d.toString().trim() ;
main();
break;
  });



function readLine(){
return name ;
}



function greeting(parameterVariable) {
    // This line prints 'Hello, World!' to the console:
    console.log('Hello, World!');
    console.log(parameterVariable)
    // Write a line of code that prints parameterVariable to stdout using console.log:
    
}

function main() {
    const parameterVariable = readLine();
    
    greeting(parameterVariable);
}