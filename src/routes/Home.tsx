import { useEffect, useState } from 'react'
import '../App.css'
import useFetch from '../custom-hooks/useFetch'
import TablePaginationDemo from '../TablePagination'
import MapCountries from '../MapCountries'
import SearchAppBar from '../SearchAppBar'

export default function Home() {
  const [ countries, setCountries ] = useState<any>([])
  const [ currentPage, setCurrentPage ] = useState<number>(0)
  const [ perPage, setPerPage ] = useState<number>(5)
  const [ search, setSearch ] = useState('')

  const { get, loading } = useFetch('https://restcountries.com/v3.1/all')

  useEffect(() => {
    get('')
    .then(data => setCountries(data))
    .catch(error => console.log(error))
  }, [])

  interface Item {
    [x: string]: any
    common: string
  }

  interface CountryImportant {
    name: {
      [common: string]: Item
    }
  }

  // Pretty inefficient search but perfectly fine with such little data
  const allCountries = countries.filter((item: CountryImportant) => {
    return search.toLowerCase() === ''
    ? item
    : item.name.common.toLowerCase().includes(search.toLowerCase())
  })
  const lastPostIndex = (currentPage + 1) * perPage
  const firstPostIndex = lastPostIndex - perPage
  const currentCountries = allCountries.slice(firstPostIndex, lastPostIndex)

  return (<div className="container">
    <SearchAppBar onSearchChange={setSearch} />
    <MapCountries loading={loading} currentCountries={currentCountries} />
    <TablePaginationDemo count={countries.length} page={currentPage} 
    setPage={setCurrentPage} perPage={perPage} setPerPage={setPerPage}/>
  </div>
  )
}