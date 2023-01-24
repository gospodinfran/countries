import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './custom-hooks/useFetch'
import TablePaginationDemo from './TablePagination'
import MapCountries from './MapCountries'

function App() {
  const [ countries, setCountries ] = useState<any>([])
  const [ currentPage, setCurrentPage ] = useState<number>(0)
  const [ perPage, setPerPage ] = useState<number>(5)

  const { get, loading } = useFetch('https://restcountries.com/v3.1/all')

  useEffect(() => {
    get('')
    .then(data => setCountries(data))
    .catch(error => console.log(error))
  }, [])

  const lastPostIndex = (currentPage + 1) * perPage
  const firstPostIndex = lastPostIndex - perPage
  const currentCountries = countries.slice(firstPostIndex, lastPostIndex)

  return (<div className="container">
    <h1 className='title'>Countries of the world: Project</h1>
    <MapCountries loading={loading} currentCountries={currentCountries} />
    <TablePaginationDemo count={countries.length} page={currentPage} 
    setPage={setCurrentPage} perPage={perPage} setPerPage={setPerPage}/>
  </div>
  )
}

export default App
