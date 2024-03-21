const birthYear = prompt('Ваш рік народження: ');

if(birthYear === null){
    alert('Шкода, що Ви не захотіли ввести свій рік народження.');
}else {
    const city = prompt('Ваше місто: ');

    if(city === null){
        alert('Шкода, що Ви не захотіли ввести своє місто.');
    }else {
        const favoriteSport = prompt('Your favorite sport: ');

        if(favoriteSport === null) {
            alert('Шкода, що Ви не захотіли ввести свій улюблений вид спорту.');
        }else {
            const currentYear = new Date().getFullYear();
            const age = currentYear - birthYear;
            let message = `Твій вік: ${age}\n`;

            switch(city){
                case 'Київ':
                    message += `Ти живеш у столиці України - ${city}\n`;
                    break;
                case 'Вашингтон':
                    message += `Ти живеш у столиці США - ${city}\n`;
                    break;
                case 'Лондон':
                    message += `Ти живеш у столиці Великобританії - ${city}\n`;
                    break;
                default:
                    message += `Ти живеш у місті -  ${city}\n`;
            }

            switch(favoriteSport){
                case 'Бокс':
                    message += 'Круто! Хочеш стати як Кличко?\n';
                    break;
                case 'Футбол':
                    message += 'Круто! Хочеш встати як Роналду?\n';
                    break;
                case 'Хокей':
                    message += 'Круто! Хочеш стати як Рішар?\n';
                    break;
                default:
                    message += `Це цікавий вибір! : ${favoriteSport}\n`;
            }

            alert(message);
        }
    }
}