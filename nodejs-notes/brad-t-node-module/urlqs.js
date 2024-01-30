const url = require('url');
const querystring = require('querystring');

//url.parse()

const myUrl = url.parse('https://ecample.com/listing?id=1000&');
// console.log(myUrl);

//url.format()
const myUrl2 = url.format({
    protocol: 'https',
    host: 'www.example.com',
    pathname: 'listing',
    query: {
        id: 1000,
        premium: true
    }
});

console.log(myUrl2)

// querystring.parse()
const myQs = 'year=2023&month=January&day=20';
const q = querystring.parse(myQs);
console.log(q);

// querystring.stringify()
const myQs2 = querystring.stringify({
    year: 2023,
    month: 'January',
    day: 20,
});

console.log(myQs2);
