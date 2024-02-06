import {useEffect, useState} from "react";
import {launchesService} from "../service/launchesService";
import {LaunchesApartFrom} from "../LaunchesApartFrom/LaunchesApartFrom";

const Launches = () => {
    const [launches, setLaunches] = useState([]);

    useEffect(() => {
        launchesService.getAll()
            .then(({data}) => {setLaunches(data.filter(value => value.launch_year !=='2020'))})

    }, [])
    console.log(launches);
    return (
        <div>
            {launches.map((launches, index)=> <LaunchesApartFrom key={index} launch={launches}/>)}
        </div>
    )
}

export {Launches};