import '../assets/pagination.css'


function Pagination({ launchesPerPage, totalLaunches, paginate }) {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalLaunches / launchesPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav >
            <ul className='home-pagination'>
                {
                    pageNumbers.map(number => (
                        <li key={number} onClick={() => paginate(number)}>
                            {number}
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}

export default Pagination;