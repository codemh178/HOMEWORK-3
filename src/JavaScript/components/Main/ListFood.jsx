import style from '../../../Style/components/Main/MainListFood.module.css';
import AddButton from './AddButton';
import { useContext } from 'react';
import TotalCostContext from '../../Provider/TotalCostContext';

const ListFood = (props) => {
    const totalCostCtx = useContext(TotalCostContext);
    const handlerAdd = amount => {
        totalCostCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        });
  };

    return (
        <li className={style['food']}>
            <div>
                <h3>{props.name}</h3>
                <div className={style['description']}>{props.description}</div>
                <div className={style['price']}>${props.price.toFixed(2)}</div>
            </div>
            <div>
                <AddButton id={props.id} addToCart={handlerAdd}/>
            </div>
        </li>
    );
};

export default ListFood;