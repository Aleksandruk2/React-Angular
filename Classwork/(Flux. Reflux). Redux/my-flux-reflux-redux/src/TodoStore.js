import {EventEmitter} from 'events';
import AppDispatcher from "./Dispatcher";

//Набір даних, який зберігається в store
let _todos = [];

class TodoStore extends EventEmitter{
    //Повертає список у store
    getAll() {
        return _todos;
    }

    //Відмічаємо, що були зміни
    emitChanges() {
        this.emit('change');
    }

    addChangeListener(callback) {
        this.on('change', callback);  //Проведенно зміни і викликаємо callback
    }

    removeChangeListener(callback) {
        this.removeListener('change', callback);
    }
}

//Сторили наш Store
const todoStore = new TodoStore();

AppDispatcher.register((action) => {
   switch (action.actionType) {
       case 'ADD_TODO':
           _todos.push({id: Date.now(), text: action.text});
           todoStore.emitChanges();
           break;
       case 'REMOVE_TODO':
           _todos = _todos.filter(todo => todo.id !== action.id);
           todoStore.emitChanges();
           break;
       default:
   }
});

export default todoStore;