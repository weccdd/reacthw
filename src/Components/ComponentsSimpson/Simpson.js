const Simpson = ({item}) => {
    return (
        <div>
            <h1>{item.name} {item.surname}</h1>
            <h2>{item.age}</h2>
            <p>{item.info}</p>
            <img src={item.photo} alt={item.name}/>
        </div>
    );
};

export {Simpson};