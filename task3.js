var a = process.argv[2];
var b = process.argv[3];

while((a != 0) && (b != 0))
	if (a > b) a %= b;
	else b %= a

if(a) process.stdout.write(String(a));
else process.stdout.write(String(b));