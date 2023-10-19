import { useContext, Fragment } from "react";
import Popup from "reactjs-popup";
import YourCartButton from "../Header/YourCartButton";
import style from '../../../Style/components/TotalCost/TotalCost.module.css';
import TotalCostContext from "../../Provider/TotalCostContext";
import ListCost from "./ListCost";

const TotalCost = (props) => {
    const totalCostCtx = useContext(TotalCostContext);

    const removeHandler = (id) => {
        totalCostCtx.removeItem(id);
    };

    const addHandler = (item) => {
        totalCostCtx.addItem({ ...item, amount: 1 });
    };

    const list = (
        <ul className={style['cart-items']}>
        {totalCostCtx.items.map((item) => (
            <ListCost
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            remove={removeHandler.bind(null, item.id)}
            add={addHandler.bind(null, item)}
            />
        ))}
        </ul>
    );

    return (
        <Popup trigger={YourCartButton} modal nested>
            {
                close => (
                    <Fragment>
                    <div className={style["card-background"]}></div>
                    <div className={style["card"]}>
                    {list}
                    <div className={style["total"]}>
                        <span>Total Amount</span>
                        <span>${totalCostCtx.totalAmount.toFixed(2)}</span>
                    </div>
                    <div className={style["actions"]}>
                       <span> 
                            <button onClick={() => close()}>Close</button>
                            
                            {totalCostCtx.items.length > 0 
                            && <button>Order</button>} 
                       </span>
                    </div>
                    </div>
                    </Fragment>
                )
            }
        </Popup>
    );
};

export default TotalCost;