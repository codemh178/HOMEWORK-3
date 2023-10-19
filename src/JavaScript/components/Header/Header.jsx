import { Fragment } from 'react';
import style from '../../../Style/components/Header/Header.module.css';
import TotalCost from '../TotalCost/TotalCost';
import ImgFood from '../../../assets/meals.png';

const Header = (props) => {
    return (
        <Fragment>
        <header>
            <h1 className={style['h1--hide']}>ReactMeals</h1>
            <TotalCost/>
        </header>
        <div className={style['image']}>
             <img src={ImgFood}
             alt='A table full of delicious food!'
             />
        </div>
        </Fragment>
    )
}

export default Header;