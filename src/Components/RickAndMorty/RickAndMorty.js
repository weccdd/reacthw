const RickAndMorty = ({item}) => {
    return (
        <div>
            <h1>{item.id}</h1>
            <h2>{item.name}</h2>
            <h3>{item.species}</h3>
            <h4>{item.status}</h4>
            <h5>{item.gender}</h5>
            <img src={item.image} alt={item.name}/>
        </div>
    );
};

export {RickAndMorty};