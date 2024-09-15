let rows=2
let pattern="";

for(let i=1;i<=rows;i++)
    {
        for(let space=1;space<=rows-i;space++)
            {
                pattern=" "
            }
            for(let star=1;star<=2*i-1;star++){
                pattern+= "*";
            }
            pattern +="\n";
    }
    console.log(pattern);


let n = 3; 
for (let i = 1; i <= n; i++) { 
	let str = "*"; 
	let space = ' '; 
	console.log(space.repeat((n - i)) + str.repeat(i * 2 - 1)); 
} 
for (let i = n - 1; i >= 1; i--) { 
	let str = "*"; 
	let space = ' '; 
	console.log(space.repeat((n - i)) + str.repeat(i * 2 - 1)); 
}
