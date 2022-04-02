import { Link } from 'react-router-dom';

import YoutubeFrame from './YoutubeFrame';


function LaunchDetail({ launch }) {

    const previousLaunch = () => {
        return launch.flight_number - 1
    }

    const nextLaunch = () => {
        return launch.flight_number + 1;
    }

    const totalLaunches = localStorage.getItem('totalLaunches');

    return (
        <div className='launch-detail'>
            {
                launch.links.youtube_id && (
                    <YoutubeFrame videoID={launch.links.youtube_id} />
                )
            }

            <h1>{launch.mission_name}</h1>
            <p>{launch.details}</p>

            <div className="pagination">
                {
                    launch.flight_number !== 1 && (
                        <Link to={`/launch/${previousLaunch()}`}>
                            <button className='btn'>Anterior</button>
                        </Link>
                    )
                }

                {
                    launch.flight_number != totalLaunches && (
                        <Link to={`/launch/${nextLaunch()}`}>
                            <button className='btn'>Siguiente</button>
                        </Link>
                    )
                }

            </div>
        </div>
    )
}

export default LaunchDetail;