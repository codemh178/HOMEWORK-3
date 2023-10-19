import style from '../../../Style/components/Main/Content.module.css';

const MainContent = () => {
    return (
        <section className={style["content"]}>
            <h2 className={style['h2--hide']}>
            Delicious Food, Delivered To You
            </h2>
            <h2 className={style['h2--show']}>Delicious Food</h2>
            <h2 className={style['h2--show']}>Delivered To You</h2>

            <p className={style['p--hide']}>
            Choose your favorite meal 
            from our broad selection of available meals 
            and enjoy a delicious lunch or dinner at home.
            </p>
            <p className={style['p--hide']}>
            All our meals are cooked with high-quality ingredients, 
            just-in-time and of course by experienced chefs!
            </p>
        </section>
    );
};

export default MainContent;