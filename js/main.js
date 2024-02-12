function createTable(){
    let tbl = document.createElement('table');
    let tblBody = document.createElement('tbody');
    for(let y = 0; y < 10;y++){
        let str = document.createElement('tr')
        for(let x = 0; x < 10;x++){
            let columns = document.createElement('td');
            let columnText = document.createTextNode(x + 10 * y + 1);
            columns.appendChild(columnText);
            str.appendChild(columns);
        }
        tblBody.appendChild(str);
    }
    tbl.appendChild(tblBody);
    document.body.appendChild(tbl);
    tbl.setAttribute('border', '1');
}

createTable();