import style from '../../../Style/components/TotalCost/ListCost.module.css';

const ListCost = (props) => {
    return (
      <li className={style['cart-item']}>
        <div>
          <h2>{props.name}</h2>
          <div className={style['summary']}>
            <span className={style['price']}>${props.price}</span>
            <span className={style['amount']}>x {props.amount}</span>
          </div>
        </div>
        <div className={style['change']}>
          <button onClick={props.remove}>-</button>
          <button onClick={props.add}>+</button>
        </div>
      </li>
    );
  };
  
  export default ListCost;