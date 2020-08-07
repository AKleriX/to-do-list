import React, {useEffect, useState} from 'react';
import style from './ToDoList.module.css'
import getInitialState from "../../api/api";
import ToDo from "./ToDo/ToDo";
import ToDoField from "./ToDoField/ToDoField";
import {DragDropContext, Droppable} from "react-beautiful-dnd";
import cn from 'classnames';
import ModalEditMode from "./ModalEditMode/ModalEditMode";
import Loader from "../loader/loader";
import PropTypes from 'prop-types';


// Презентационная компанента списка дел
// To-do list presentation component

const ToDoList = React.memo(({
                                 toDosList, onChangeCompletion, removeToDo, addToDo,
                                 onDragEnd, openEditWindow, toDoEditMode, completeEditToDo, closeEditMode
                             }) => {


    return (
        <>
            <div className={style.toDoBlock}>
                <h1 className={style.logoName}>ToDo List</h1>
                <ToDoField addToDo={addToDo}/>
                {/* Задаем контекст для области перетягивания */}
                {/* Setting the context for the drag area */}
                <DragDropContext
                    onDragEnd={onDragEnd}>
                    {/*Задаем столбец, в котором осуществляется перетягивание*/}
                    {/*Set the column to be dragged*/}
                    <Droppable droppableId={'list'}>
                        {(provider) => (
                                <div className={cn(style.toDoList)}
                                     {...provider.droppableProps}
                                     ref={provider.innerRef}
                                >
                                    {/*Пробегаемся по массиву списка дел и каждое отрисовываем*/}
                                    {/*Loop through an array of to-do lists and draw each*/}
                                    {toDosList.length !== 0 ? toDosList.map((toDo, index) => {
                                        return <ToDo key={toDo.id}
                                                  id={toDo.id}
                                                  title={toDo.title}
                                                  completed={toDo.completed}
                                                  onChange={onChangeCompletion}
                                                  removeToDo={removeToDo}
                                                  index={index}
                                                  openEditWindow={openEditWindow}/>
                                    }) : <span className={style.noTasks}>No tasks!</span>}
                                    {/*Передаем задний фон самого объекта области перетягивания*/}
                                    {/*Passing the background of the object itself to the drag area*/}
                                    {provider.placeholder}
                                </div>
                        )
                        }
                    </Droppable>
                </DragDropContext>
            </div>
            {/*Если включен режим редактирования - отрисовать компонент окна редактирования*/}
            {/*If editing mode is enabled, draw the editing window component*/}
            {toDoEditMode.edit && <ModalEditMode toDoEditMode={toDoEditMode}
                                                 completeEditToDo={completeEditToDo}
                                                 closeEditMode={closeEditMode}/>}
        </>
    );
})

// Проверяем корректность типов пропсов
// Checking the correctness of props types
ToDoList.propTypes = {
    toDosList: PropTypes.array,
    onChangeCompletion: PropTypes.func,
    removeToDo: PropTypes.func,
    addToDo: PropTypes.func,
    onDragEnd: PropTypes.func,
    openEditWindow: PropTypes.func,
    toDoEditMode: PropTypes.object,
    completeEditToDo: PropTypes.func,
    closeEditMode: PropTypes.func
}

// Контейнерная компонента для всего списка дел, где совершаются ассинхронные операции, хранится State и находятся обработчики событий, изменяющие State
// The container component for the entire to-do list, where asynchronous operations are performed, State is stored and event handlers that change State are located

const ToDoListContainer = () => {


    // Задание первоначального State - пустой массив
    // Setting the initial State to an empty array
    let [toDosList, changeToDosList] = useState(false);

    // Состояние для окна редактирования, включает: включен/выключен режим редактирования, id редактируемого поля, изначальный title поля
    // State for the edit window, includes: enabled / disabled edit mode, id of the edited field, initial title of the field
    let [toDoEditMode, changeToDoEditMode] = useState({
        'edit': false,
        'id': null,
        'title': null
    });

    // Запрос на сервер и обработка ответа с обновлением State
    // Server request and response processing with State update
    useEffect(() => {
        getInitialState().then(response => {
            changeToDosList(response.data.reverse());
        })
    }, []);

    // Обработка изменения статуса выполнения дела, принимает id дела, статус которого необходимо поменять
    // Processing a change in the status of the to-do, accepts the id of the to-do, the status of which needs to be changed
    const onChangeCompletion = (taskId) => {
        changeToDosList(toDosList.map(toDo => {
            if (toDo.id === taskId) {
                toDo.completed = !toDo.completed;
            }
            return toDo;
        }));
    }

    // Удаление дела. Принимает id дела, которое удаляется из общего списка дел
    // Deleting to-do. Accepts the id of the case, which is removed from the general to-do list
    const removeToDo = (toDoId) => {
        changeToDosList(toDosList.filter(toDo => toDo.id !== toDoId));
    }

    // Добавление нового дела. Принимает текст нового дела и создает объект нового дела, добавляя его в начало списка
    // Adding a new to-do. Accepts the text of a new to-do and creates a new to-do object, adding it to the beginning of the list
    const addToDo = (toDoText) => {
        let ids = toDosList.map(toDo => toDo.id);
        let newId = Math.max.apply(null, ids) + 1;
        if (newId === -Infinity) newId = 1;
        let newToDos = [...toDosList];
        newToDos.unshift({
            'userId': 1,
            'id': newId,
            'title': toDoText,
            'completed': false
        });
        changeToDosList(newToDos);
    }


    // Обработка события по завершению перетягивания дела
    // Handling an event upon completion of a to-do drag
    const onDragEnd = (result) => {
        // Из пришедшего объекта получаем объекты конечного места назначения и начальной позиции
        // From the arrived object, we get objects of the final destination and starting position
        const {destination, source} = result;

        // Проверяем, было ли перемещение вообще, изменилось ли местоположение дела
        // Check if there was a move at all, if the location of the case changed
        if (!destination || (destination.droppableId === source.droppableId && destination.index === source.index)) {
            return;
        }

        //получаем массив всех дел
        //get an array of all to-dos
        const newToDoIds = Array.from(toDosList);
        //копируем переносимый элемент
        //copy the transferred element
        const moveTask = {...newToDoIds[source.index]};
        //удаляем перенесенное дело из массива
        //remove the transferred to-do from the array
        newToDoIds.splice(source.index, 1);
        //вставляем дело на новое положение
        //insert the to-do into a new position
        newToDoIds.splice(destination.index, 0, moveTask);

        //обновляем state
        //update state
        changeToDosList(newToDoIds);

    }


    // Появление режима редактирования для инициировавшего его дела
    // The appearance of the editing mode for the initiator of the to-do
    const openEditWindow = (e) => {
        if (e.target.type === 'checkbox')
            return;
        let changeToDoTitle = null;
        toDosList.forEach(toDo => {
            if (toDo.id.toString() === e.target.id.toString()) {
                changeToDoTitle = toDo.title;
                return;
            }
        });
        changeToDoEditMode({
            'edit': true,
            'id': e.target.id,
            'title': changeToDoTitle
        });
    }

    // Сохраниение отредактироованного дела
    // Saving edited to-do
    const completeEditToDo = (id, newText) => {
        const newToDoList = toDosList.map(toDo => {
            if (toDo.id.toString() === id) toDo.title = newText;
            return toDo;
        });
        changeToDosList(newToDoList);
        changeToDoEditMode({
            'edit': false,
            'id': null,
            'title': null
        });
    }

    // Закрытие окна редактирования без сохранения изменений
    // Closing the editing window without saving changes
    const closeEditMode = (e) => {
        if (e.target.id !== 'background') {
            return;
        }
        changeToDoEditMode({
            'edit': false,
            'id': null,
            'title': null
        });
    }


    // Отрисовка списка дел, если он есть. Иначе отрисовывается загрузчик
    // Rendering the to-do list, if any. Otherwise, the loader is rendered
    return (
        <>
            {!toDosList && <Loader />}
            {toDosList && <ToDoList toDosList={toDosList}
                                   onChangeCompletion={onChangeCompletion}
                                   removeToDo={removeToDo}
                                   addToDo={addToDo}
                                   onDragEnd={onDragEnd}
                                   openEditWindow={openEditWindow}
                                   toDoEditMode={toDoEditMode}
                                   completeEditToDo={completeEditToDo}
                                   closeEditMode={closeEditMode}/>}
        </>
    );
}

export default ToDoListContainer;