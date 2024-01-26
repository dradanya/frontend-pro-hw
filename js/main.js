const hr = +prompt('Enter the required number of hours to convert per second: ');
const sec = hr * 3600
	
	if (Number.isNaN (hr)){
		alert ('Error: You entered an additional character. Try entering only a number. Example : 5');
		}
	else if (!Number.isNaN (hr)) {
		alert ('Translation result in seconds: ' + sec);
	}

    else{
        alert('Error: Нou did not enter anything');
    }