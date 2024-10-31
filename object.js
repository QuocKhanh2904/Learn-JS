let a = {
    name: 'khanh',
    address: 'binh dinh'
}

let c = 'khanh'

 console.log('type of a: ', typeof a, 'type of b: ', typeof c)

////////////////////////////////////////////////

//key: value
let obj = {
    name: 'Eric',
    address: 'Ha Noi',
    email: '',
    gender: ''
};


let b = 'address';

// obj[b] = 'Hary'
obj.name = 'HCM'

console.log('what is your name ? ', `My name 's : `, obj['name'], obj)
console.log('Where are you from ? ', `I'm from : `, obj['address'])