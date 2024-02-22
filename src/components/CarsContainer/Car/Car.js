import css from './Car.module.css'
const Car = ({car}) => {
    const {id, brand, price, year} = car;
    console.log(id);
    return (
        <div className={css.Car}>
            <div>Id:{id}</div>
            <div>Brand:{brand}</div>
            <div>Price:{price}</div>
            <div>Year:{year}</div>
        </div>
    );
};

export {Car};