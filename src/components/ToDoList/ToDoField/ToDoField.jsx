import React from "react";
import {useFormik} from "formik";
import * as Yup from 'yup';
import cn from 'classnames';
import style from './ToDoField.module.css';
import PropTypes from 'prop-types';


// Компонент поля с формой добавления нового дела
// Field component with a form for adding a new to-do

const ToDoField = ({addToDo}) => {

    // задание нового formik хука для контроля формы, с валидацией Yup-объектом
    // setting a new formik hook for form control, with Yup object validation
    const formikForm = useFormik({
        initialValues: {
            toDoText: ''
        },
        validationSchema: Yup.object({
            toDoText: Yup.string()
                .required('Your to-do must have text!')
        }),
        validateOnChange: false,
        validateOnBlur: false,
        onSubmit: values => {
            addToDo(values.toDoText);
            formikForm.resetForm();
        }
    });

    // Задаем классы для поля ввода в зависимости от наличия ошибки
    // Setting classes for the input field depending on the presence of an error
    let inputTextClass = formikForm.errors.toDoText ? cn(style.errorForInput, style.toDoTextField) : style.toDoTextField;

    // Отрисовываем форму, связывая ее с хуком formik для контроля формы
    // Rendering the form by linking it to the formik hook for form control
    return (
        <form onSubmit={formikForm.handleSubmit}>
            <div>
                <textarea onChange={formikForm.handleChange}
                       id={'toDoText'}
                       name={'toDoText'}
                       value={formikForm.values.toDoText}
                       placeholder={'Your new to do'}
                       className={inputTextClass}/>{' '}
                <input type={'submit'} className={style.addToDoButton} value={''}/>
                {formikForm.errors.toDoText &&
                <div className={cn(style.error)}>{formikForm.errors.toDoText}</div>}
            </div>
        </form>
    );

}

// Проверяем корректность типов пропсов
// Checking the correctness of props types
ToDoField.propTypes = {
    addToDo: PropTypes.func
}

export default ToDoField;
