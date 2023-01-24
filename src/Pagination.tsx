import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

interface Pagination {
    totalCountries: number
    postsPerPage: number
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>
    currentPage: number
    setPerPage: React.Dispatch<React.SetStateAction<number>>
}

export default function Pagination({ totalCountries, postsPerPage, setPerPage, setCurrentPage, currentPage }: Pagination) {
    let pages = []
    for(let i = 1; i <= Math.ceil(totalCountries / postsPerPage); i++) {
        pages.push(i)
    }
    
    return (
        <div className='pagination'>
            <ChevronLeftIcon fontSize='large' />
            <ChevronRightIcon fontSize='large' />
            { pages.map(page => {
                return <button key={page} onClick={() => setCurrentPage(page)}
                className={page == currentPage ? 'active': ''}>{page}</button>
            }) }
        </div>
    )
}