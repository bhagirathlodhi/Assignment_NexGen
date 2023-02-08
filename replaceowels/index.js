var test = ['a','e','i','o','u'];
const str = "hello, secret meeting tonight";
var result = "";
for(let i =0;i<str.length;i++)
{
    if(test.includes(str[i]))
    {
        result += "#";
        if(test.includes(str[i+1]))
        {
            result += str[i+1];
            i+=1;
        }
    }else{
    result += str[i]

}}
console.log(result);