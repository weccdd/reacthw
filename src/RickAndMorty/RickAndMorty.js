const RickAndMorty = ({id, name, species, status, gender, image}) => {
    return (
        <div>
            <h1>{id}</h1>
            <h2>{name}</h2>
            <h3>{species}</h3>
            <h4>{status}</h4>
            <h5>{gender}</h5>
            <img src={image} alt={name}/>
        </div>
    );
};

export {RickAndMorty};