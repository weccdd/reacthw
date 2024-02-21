import css from './Character.module.css'
const Character = ({character}) => {
    const {id, name, status, species, image} = character
    return (
        <div className={css.Character}>
            <h2>id:{id}</h2>
            <h2>name:{name}</h2>
            <h2>status:{status}</h2>
            <h2>species:{species}</h2>
            <img src={image} alt={name}/>
        </div>
    );
};

export {Character};