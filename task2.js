var str_a = String(process.argv[2]); 
var str_b = String(process.argv[3]);

var str = str_a;
var count = -1;

for(i=0; i<str.length; i++)
{
	str = str.replace(str[0],"")+str[0];
	if(str == str_b)
	{
		count = i+1;
		break;
	}
}
str = str_a;
for(i=0; i<str.length; i++)
{
	begin = str.slice(-1);
	end = str.slice(0,-1);
	str = begin + end;
	if(str == str_b)
	{
		if (i+1 < count) count = i+1;
		break;
	}
}
if(str_a == str_b) process.stdout.write("0");
else process.stdout.write(String(count));