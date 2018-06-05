var str = process.argv[2];

str = str.replace(/Р/g,"");
str = str.replace(/р/g,"");
str = str.replace(/К/g,"");
str = str.replace(/к/g,"");
str = str.replace(/Н/g,"");
str = str.replace(/н/g,"");

process.stdout.write(str);