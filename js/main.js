function generateList(array) {
    return `<ul>\n${array.map(item => `    <li>${Array.isArray(item) ? generateList(item) : item}</li>`).join('\n')}\n</ul>\n`;
}

const array = [1, 2, 3, [1, 2, [1.1, 1.2, 1.3]], 4];
const htmlList = generateList(array);
console.log(htmlList);