let a = 3;
let b = 5;
let c;
let value;

 value = 'let a = 3;' + "\n";
 value += 'let b = 5;' + "\n";
 value += 'let c;' + "\n";
 value += '----------' + "\n";
 value += 'a + b = ' + (a+b) + "\n";
 value += 'a - b = ' + (a-b) + "\n";
 value += 'a * b = ' + (a*b) + "\n";
 value += 'a / b = ' + (a/b) + "\n";
 value += 'a % b = ' + (a%b) + "\n";
 value += '(a += b) = ' + (a+=b) + "\n";
 value += '(a -= b) = ' + (a-=b) + "\n";
 value += '(a *= b) = ' + (a*=b) + "\n";
 value += '(a /= b) = ' + (a/=b) + "\n";
 value += '(a %= b) = ' + (a%=b) + "\n";
 value += '(a == b) = ' + (a==b) + "\n";
 value += '(a != b) = ' + (a!=b) + "\n";

alert(value);




let first_name = 'Muskan';
let last_name = 'Wadhwa';
let email = 'wadh0012@algonquinlive.com';
let output;

output = 'My name is ';
output += first_name ;
output += ' ';
output += last_name ;
output +='. ';
output += 'You can contact me at ';
output += email;
output += '.';

alert(output);
