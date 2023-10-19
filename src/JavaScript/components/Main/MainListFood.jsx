import style from '../../../Style/components/Main/MainListFood.module.css';
import ListFood from './ListFood';

const Food = [
    {
        id: 'f1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99,
    },
    {
        id: 'f2',
        name: 'Schnitzel',
        description: 'A german specialty!',
        price: 16.5,
    },
    {
        id: 'f3',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 12.99,
    },
    {
        id: 'f4',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 18.99,
    },
]

const MainListFood = () => {
    const List = Food.map((food) => (
        <ListFood
        key={food.id}
        id={food.id}
        name={food.name}
        description={food.description}
        price={food.price}
        />
    ));
    
    return (
        <div className={style['list']}>
            <ul>
                {List}
            </ul>
        </div>
    );
};

export default MainListFood;