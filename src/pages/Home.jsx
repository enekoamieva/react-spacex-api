import { useState, useEffect } from 'react';

import { getAllLaunches } from '../api/getData';

import LaunchItem from '../components/LaunchItem';
import Pagination from '../components/Pagination';
import Spinner from '../components/Spinner';

function Home() {

    const [launches, setLaunches] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [launchesPerPage, setLaunchesPerPage] = useState(16);

    useEffect(() => {

        getAllLaunches().then(data => {
            setLaunches(data);
            localStorage.setItem('totalLaunches', data.length);
            setLoading(false);
        })

    }, []);

    //Get current launches
    const indexOfLastLaunch = currentPage * launchesPerPage;
    const indexOfFirstLaunch = indexOfLastLaunch - launchesPerPage;
    const currentLaunches = launches.slice(indexOfFirstLaunch, indexOfLastLaunch);

    //Change Page
    const paginate = (number) => setCurrentPage(number);

    if (loading) {
        return <Spinner />
    }

    return (
        <div>
            <div className='wrap'>
                {
                    currentLaunches.map(launch => (
                        <LaunchItem
                            launch={launch}
                            key={launch.flight_number}
                            loading={loading}
                        />
                    ))
                }
            </div>
            <Pagination
                launchesPerPage={launchesPerPage}
                totalLaunches={launches.length}
                paginate={paginate}
            />
        </div>

    )
}

export default Home