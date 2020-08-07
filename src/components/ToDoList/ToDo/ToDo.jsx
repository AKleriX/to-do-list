import React, {useState} from "react";
import cn from 'classnames';
import style from './ToDo.module.css';
import {Draggable} from "react-beautiful-dnd";
import PropTypes from 'prop-types';
import editImg from '../../../assets/edit.svg';
import delImg from '../../../assets/trash.svg';


// Отрисовка одного дела
// Drawing one to-do
const ToDo = ({title, id, completed, removeToDo, onChange, index, openEditWindow}) => {
    let completedClasses = {
        'text': style.notCompletedText,
        'title': style.titleInProgress,
        'background': style.notCompletedBackground
    };
    if (completed) {
        completedClasses = {
            'text': style.completedText,
            'title': style.titleCompleted,
            'background': style.completedBackground
        };
    }

    // создание внутреннего состояния дела на открытие окна с подтверждением удаления
    // creating an internal state of the case for opening a window with confirmation of deletion
    let [deleteQuestion, showDeleteQuestion] = useState(false);

    // задаем область перетаскиваемого объекта и в ней отрисовываем дело
    // set the area of the dragged object and draw the to-do in it
    return (

        <Draggable draggableId={id.toString()} index={index}>
            {(provider) => (
                <div className={cn(style.toDo, completedClasses.background)}
                     {...provider.draggableProps}
                     {...provider.dragHandleProps}
                     ref={provider.innerRef}
                     onDoubleClick={openEditWindow}
                     id={id}
                     title={title}
                     onPointerLeave={() => {
                     }}>
                    <input type={'checkbox'} checked={completed} onChange={() => onChange(id)}/>
                    <span className={completedClasses.title}
                          id={id}>{!completed ? 'In progress...' : 'Completed!'}</span>
                    {/*Если необходимо - показываем окно с подтверждением удаления*/}
                    {/*If necessary, show a window with confirmation of deletion*/}
                    {deleteQuestion ? <DeleteQuestion showDeleteQuestion={showDeleteQuestion}
                                                      removeToDo={removeToDo}
                                                      id={id}/> :
                        <span className={cn(style.edit)}>
                                <input id={id}
                                       title={'Edit'}
                                       className={cn(style.editButton)}
                                       type={'image'}
                                       alt={'Edit'}
                                       onClick={openEditWindow}
                                       src={editImg}/>
                                <input className={cn(style.detButton)}
                                       type={'image'}
                                       src={delImg}
                                       title={'Delete'}
                                       alt={'Delete'}
                                       onClick={() => showDeleteQuestion(true)}/>
                     </span>}
                    <div className={cn(completedClasses.text, style.title)} id={id} title={title}> {title} </div>
                </div>
            )
            }
        </Draggable>
    );
}

// Компонент окна подтвержения удаления
// Delete confirmation window component
const DeleteQuestion = ({showDeleteQuestion, removeToDo, id}) => {
    return (<div className={style.deleteQuestion}>
        Delete?&nbsp;
        <button onClick={() => removeToDo(id)}>Yes</button>
        <button autoFocus onClick={() => showDeleteQuestion(false)}>No</button>
    </div>);
}

// Проверяем корректность типов пропсов
// Checking the correctness of props types
ToDo.propTypes = {
    title: PropTypes.string,
    id: PropTypes.number,
    completed: PropTypes.bool,
    removeToDo: PropTypes.func,
    onChange: PropTypes.func,
    index: PropTypes.number,
    openEditWindow: PropTypes.func
}

export default ToDo;