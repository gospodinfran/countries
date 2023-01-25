import Country from './Country'
import ClipLoader from 'react-spinners/ClipLoader'
import { Key } from 'react'

interface MapCountry {
    loading: boolean
    currentCountries: any
}

export default function MapCountries({ loading, currentCountries }: MapCountry) {
    return (<div className='map-countries'>
      <div className="space"></div>
      <p className='tr-flag'>Flag</p>
      <p className='tr-name'>Name</p>
      <p className='tr-region'>Region</p>
      <p className='tr-population'>Population</p>
      <p className='tr-lang'>Languages</p>
    
    { loading && <ClipLoader color='teal' size={120} /> }
    { currentCountries.map((country: { name: { common: string }; flags: { png: string }; region: string; population: { toLocaleString: () => number }; languages: { [s: string]: string } | ArrayLike<string> }, index: Key | null | undefined) => {
      return (<Country key={index} name={country.name.common} flag={country.flags.png} 
      region={country.region} population={country.population.toLocaleString()} 
      languages={ country.languages ? Object.values(country.languages) : null } />)
    }) }
    </div>)
}