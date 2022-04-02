import { Link } from 'react-router-dom';

import formateDate from '../utils/formDate';
import { HiCalendar } from 'react-icons/hi';


function LaunchItem({ launch }) {

    return (

        <div className='item-card'>
            <div className="item-card-wrap">

                <div className='item-header'>
                    <span>
                        <HiCalendar className='calendar-icon' /> {formateDate(launch.launch_date_local.split('T')[0])}
                    </span>
                    <span className={launch.launch_success ? 'success' : 'error'}>
                        {launch.launch_success ? 'Correcto' : 'Error'}
                    </span>
                </div>

                <div className='item-content'>
                    <div className='item-title'>{launch.mission_name}</div>
                </div>

                <div className="item-footer">
                    <Link to={`/launch/${launch.flight_number}`}>
                        <button className='btn'>Ver detalles</button>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default LaunchItem