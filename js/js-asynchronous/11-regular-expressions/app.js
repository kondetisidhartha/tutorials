// // let re;
// // re = /sid/;

// // console.log(re)
// // console.log(re.source)

// // const text = "But it appears some states think they have better plans in place";


// //exec() - Returns array if matched else null
// // re = /some/;
// // const result = re.exec(text)
// // console.log(result)
// // console.log(result[0]);
// // console.log(result.index);
// // console.log(result.input);


// // test() - Returns true or false
// // re = /some/;
// // const result = re.test(text)
// // console.log(result)

// // Below is false because in re 'S' is uppercase
// // re = /Some/;
// // const result = re.test(text)
// // console.log(result)

// // Now to match with case insensitive use 'i'
// // re = /SOme/i;
// // const result = re.test(text)
// // console.log(result)

// // global search
// // re = /Some/ig
// // const result = re.exec(text)
// // console.log(result)

// // match() - Return result array or null
// // const re = /sOme/i;
// // const result = text.match(re)
// // console.log(result)

// // search() - returns index of first match if not found return -1
// // const re = /sOme/i;
// // const result = text.search(re)
// // console.log(result)

// // replace() - if matched returns replaced re with new sent else full text no change
// // const re = /Plans/i;

// // const newStr = text.replace(re, 'almost')
// // console.log(newStr)

// // PART 2

// let re;
// // Literal characters
// re = /Some/
// // no case sensitive
// re = /some/i


// //Meta characters
// re = /^S/   // must start given string with S
// re = /^S/i   // must start given string with s or S
// // re = /^b/i   // must start  given string with b or B

// re = /E$/   // must end given string with E
// re = /R$/i   // must end given string with r or R
// re = /E$/i   // must end  given string with e or E

// re = /^Hello$/   // must start with H and end given string with o
// re = /^Hello$/i   // must start with H or h and end given string with o or O


// re = /s.me/i   // ONE character in . place so 'same','some' all matches
// re = /s*ates/i   // Zero or more character in * place

// re = /thi?z?p?n?k/i; // optionals like 'gray' 'grey' 'gry'
// re = /thi?n?k\?/i;


// // Brackets []
// re = /s[oa]me/i   // it can be some or same but must be

// re = /[^s]ome/i   // must match other than 's' like opposite of above

// re = /[A-Z]ome/   // any uppercase letter A to Z
// re = /[a-z]ome/   // any lowercase letter A to Z
// re = /[A-Za-z]ome/   // any letter A to Z and a-z, any case
// re = /[0-9]ome/  // any digit 0 to 9 range
// re = /[A-Za-z0-9]ome/

// // find all 4 digit words
// re = /[a-z][a-z][a-z][a-z]/;

// // Braces - Quantafiers
// re = /so{1,3}me/    // o must be between 1 and 3 times
// re = /so{4}me/      // o must be exactly 4 times 
// re = /so{5,}me/      // o must be atleast 2 times
let re;
re = /\w/i; // means alphanumeric and underscore(_)
re = /\W/i; // (Uppercase w) means OTHER THAN alphanumeric and underscore(_)
re = /\w+/i; // + means more than one
re = /\w{6}/i; // means any alphanumeric or underscore 6 times

re = /\d/; // any digit from 0 to 9
re = /\d+/; // any digit from 0 to 9 and more than 1
re = /\D/; // any NON digit 
re = /\D+/; // any NON digit more than 1
re = /\d{10}/; // any digit of 10 times like phone number

re = /\s/; // any whitespace like space/tab
re = /\s+/; // any whitespace like space/tab and more than 1
re = /\D/; // any NON whitespace 
re = /\D+/; // any NON whitespace more than 1

re = /tex\b/; // word boundary - only tex full word. must not be inside another like tex in text

re = /x(?=y)/; // match x only if followed by y
re = /x(?!y)/; // match x only if NOT followed by y

const text = "5555This_is@ a text tex xylophone";
const result = re.exec(text)
console.log(result)

function reTest(re, str) {
  if (re.test(str)) {
    console.log(`${str} matches ${re.source}`)
  } else {
    console.log(`Text does NOT match RE`)
  }
}

reTest(re, text)