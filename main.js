let array = []

for(let i = 0; i < Infinity;i++) {
    
    let command = prompt('Введите команду (Например: add, имя чтобы добавить. Или del, имя чтобы удалить. Или stop чтобы остановить.')
    if(command == 'stop') {
        console.log('Программа остановлена');
        break;
    }

    if(command.startsWith('add, ')) {
        let nameAdd = command.slice(4)
        array.push(nameAdd)
        console.log(array)

    }else if(command.startsWith('del, ')) {
        let nameDel = command.slice(4)
        let index = array.indexOf(nameDel)
        array.splice(index,1)
        console.log(array)
    }
}



console.log(array);