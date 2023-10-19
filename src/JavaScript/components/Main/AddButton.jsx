import { useRef } from 'react';
import style from '../../../Style/components/Main/AddButton.module.css';

const AddButton = (props) => {
    const amountInputRef = useRef();

    const handlerSubmit = (event) => {
      event.preventDefault();
      const amountFood = +amountInputRef.current.value;
      props.addToCart(amountFood);
    };

    return (
        <form className={style['form']} onSubmit={handlerSubmit}>
        <div className={style['input']}>
            <label>Amount</label>
            <input 
            type='number' 
            min={1} max={5} step={1} defaultValue={1}
            id= {props.id}
            ref={amountInputRef}
            />
        </div>
        <button>+ Add</button>
    </form>
    );
};

export default AddButton;