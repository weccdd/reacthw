const LaunchesApartFrom = ({launch}) => {
const {mission_name, launch_year} = launch;
    return (
        <div>
            <div>Mission Name: {mission_name}</div>
            <div>Launch Year: {launch_year}</div>
            <hr/>
        </div>
    );
};

export {LaunchesApartFrom};