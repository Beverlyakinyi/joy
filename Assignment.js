
// Extract the last four characters from the string below;"extravaganza"
const string="Extravaganza";
console.log(string[8]);
console.log(string[9]);
console.log(string[10]);
console.log(string[11]);

// Insert the following string at the fourth index of the below variable:"eat"const food = "The quick fox jumped over the lazy dog"
const food = "The Quick for jumped over the lazy dog";
const addString =food.slice(0,4) + "eat" + food.slice(4);
console.log({addString});

// Count how many times the following string appears in the string variable:1. "the"2."brown"const story= "The quick brown fox jumps over the lazy dog"

const story="The quick brown fox jumps over the lazy dog"
const countThe=(story.match(/the/gi)||[]).length;
const countBrown=(story.match(/brown/gi||[].length));
 console.log("Nummber of occurences of 'the':",countThe);
 console.log("Number of occurences of 'brown':",countBrown);

// ind the following words from the following strings:1. "are"const string1 = "The pupils are reading in the library";2. "sitting"const string2 = "The child was sitting on the table before it fell"
const string1="The pupils are reading in the library";
const string2="The child was sitting on the table before it felt"
console.log({index:string1.indexOf('are')})
console.log({index:string2.indexOf('sitting')})



// Convert the following strings into the specified format:1. UpperCase: "wonderful"2. LowerCase: "amazing", "UndERneath"3. Title case "A wonderful world"

var text='Wonderfull'
  text= text.toUpperCase();
  console.log (text)

  var text='Amazing'
  text=text.toLowerCase();
  console.log(text)

var text='undERneath'
text=text.toLowerCase();
console.log(text)

function titleCase(str){
  return str.toLowerCase().replace(/\b\w/g,s=>s.toUpperCase());
}
console.log(titleCase('A wonderful world'));