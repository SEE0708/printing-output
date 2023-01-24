let a = 3;
let b = 5;
let c;

let output = 'let a = 3;\n';
output += 'let b = 5;\n';
output += 'let c;\n';
output += '-----------\n';
output += 'a + b = ' + (a + b) + "\n";
output += 'a - b = ' + (a - b) + "\n";
output += 'a * b = ' + (a * b) + "\n";
output += 'a / b = ' + (a / b) + "\n";
output += 'a % b = ' + (a % b) + "\n";
output += 'a += b = ' + (a += b) + "\n";
output += 'a -= b = ' + (a -= b) + "\n";
output += 'a *= b = ' + (a *= b) + "\n";
output += 'a /= b = ' + (a /= b) + "\n";
output += 'a %= b = ' + (a %= b) + "\n";
output += 'a == b = ' + (a == b) + "\n";
output += 'a != b = ' + (a != b) + "\n";
output += 'a > b = ' + (a > b) + "\n";
output += 'a < b = ' + (a < b) + "\n";
output += '!a && !c = ' + (!a && !c) + "\n";
output += '!a || !c = ' + (!a || !c) + "\n";

alert(output);


let first_name = "Salah";
let last_name = "Eldho";
let email = "eldh0002@algonquinlive.com";

// Multi line Chaining
    output = 'My name is '
    output += first_name;
    output += ' ';
    output += last_name;
    output += '.'
    output += ' ';
    output += 'You can contact me at ';
    output += email;
    output += '.'
    
alert(output);
