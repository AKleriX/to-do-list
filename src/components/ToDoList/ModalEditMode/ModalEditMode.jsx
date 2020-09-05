import React from 'react';
import style from './ModalEditMode.module.css';
import cn from 'classnames';
import {useFormik} from "formik";
import * as Yup from "yup";
import PropTypes from 'prop-types';
import closeImg from '../../../assets/close.svg';


// Компанент окна редактирования дела
// To-do edit window component

const ModalEditMode = ({toDoEditMode, completeEditToDo, closeEditMode}) => {

    // Создание хука formik для контроля формы, передавая в него начальные параметры, текст, из выбранным делом
    // Creating a formik hook to control the form, passing in the initial parameters, text, from the selected to-do
    let formikForm = useFormik({
        initialValues: {
            toDoText: toDoEditMode.title
        },
        validationSchema: Yup.object({
            toDoText: Yup.string()
                .required('Required!')
        }),
        onSubmit: values => {
            completeEditToDo(toDoEditMode.id, values.toDoText);
        }
    });

    // Задаем классы для поля ввода в зависимости от наличия ошибки
    // Setting classes for the input field depending on the presence of an error
    let classForInput = style.input;
    if (formikForm.errors.toDoText)
        classForInput = cn(classForInput, style.inputError);

    return (
        <>
            {/*Если было произведено двойное нажатие на "серой" области, подложке, окна - то произайдет закрытие редактирования без сохранения изменений*/}
            {/*If you double-clicked on the "gray" area, background, window - then the editing will be closed without saving changes*/}
            <div className={cn(style.modal)} id={'background'} onDoubleClick={closeEditMode}>
                <div className={cn(style.modalBody)}>
                    <form onSubmit={formikForm.handleSubmit} className={style.formBlock}>
                        <textarea
                            className={classForInput}
                            onChange={formikForm.handleChange}
                            id={'toDoText'}
                            name={'toDoText'}
                            value={formikForm.values.toDoText}
                            placeholder={'Your to do'}
                            autoFocus/>
                        <button className={style.editButton} type={'submit'}>Edit to do</button>
                        {/*Если было произведено двойное нажатие на "крестике" - то произайдет закрытие редактирования без сохранения изменений*/}
                        {/*If you double-clicked on the "cross", then the editing will be closed without saving the changes*/}
                        <input className={cn(style.closeImg)} type={'image'} alt={'Close'} src={closeImg} onClick={closeEditMode} id={'background'}/>
                        {formikForm.errors.toDoText &&
                        <div className={cn(style.error)}>{formikForm.errors.toDoText}</div>}
                    </form>
                </div>
            </div>
        </>
    );
}

// Проверяем корректность типов пропсов
// Checking the correctness of props types
ModalEditMode.propTypes = {
    toDoEditMode: PropTypes.object,
    completeEditToDo: PropTypes.func,
    closeEditMode: PropTypes.func
}

export default ModalEditMode;
