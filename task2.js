var str_a = process.argv[2]; 
var str_b = process.argv[3];

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
	str = str[str.length-1]+str.replace(str[str.length-1],"");
	if(str == str_b)
	{
		if (i+1 < count) count = i+1;
		break;
	}
}
process.stdout.write(String(count));