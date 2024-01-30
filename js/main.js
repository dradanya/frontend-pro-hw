const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function generateKey(length,characters) {
    let result = '';

    for(let i = 0; i < length;i++){
        let num = Math.floor(Math.random() * characters.length);
        result += characters.substring(num,num + 1);
    }
    return result;
}

const key = generateKey(10,characters);

console.log(key);