import React from "react";
import style from "./loader.module.css";
import loader from '../../assets/loader.svg'


// Компонент, отображающий loader и использующийся для демонстрации прогресса-ожидания
// The component that displays the loader and is used to display pending execution.
const Loader = () => {
    return (
        <div>
            <img  className={style.loader} src={loader} alt={'Loading...'}/>
        </div>
    );
}

export default Loader;