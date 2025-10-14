import AppDispatcher from "./Dispatcher";

const TodoActions = {
    //Приймаємо значення text і повіжомяємо, що виконується дія 'ADD_TODO'
    addTodo(text) {
        AppDispatcher.dispatch({
            actionType: 'ADD_TODO',
            text
        });
    },
    //Приймаємо id записуємо і повідомляємо, що треба зробити дію 'REMOVE_TODO'
    removeTodo(id) {
        AppDispatcher.dispatch({
            actionType: 'REMOVE_TODO',
            id
        });
    }
};

export default TodoActions;