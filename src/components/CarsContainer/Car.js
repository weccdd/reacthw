const Car = ({car}) => {
    const {id, brand, price, year} = car;
    console.log(id);
    return (
        <div>
            <div>Id:{id}</div>
            <div>Brand:{brand}</div>
            <div>Price:{price}</div>
            <div>Year:{year}</div>
        </div>
    );
};

export {Car};