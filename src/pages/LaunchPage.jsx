import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

import { getLaunchById } from '../api/getData';

import LaunchDetail from '../components/LaunchDetail';

function LaunchPage() {

    const [launch, setLaunch] = useState();
    const { id } = useParams();

    useEffect(() => {
        getLaunchById(id).then(data => setLaunch(data));
    }, [id])

    return (
        <div className="wrap-detail">
            {
                launch && (
                    <LaunchDetail launch={launch} />
                )
            }
        </div>
    )
}

export default LaunchPage;