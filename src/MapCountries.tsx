import Country from './Country'
import ClipLoader from 'react-spinners/ClipLoader'

interface MapCountry {
    loading: boolean
    currentCountries: any
}

export default function MapCountries({ loading, currentCountries }: MapCountry) {
    return (<div className='map-countries'>
      <p className='tr-flag'>Flag</p>
      <p className='tr-name'>Name</p>
      <p className='tr-region'>Region</p>
      <p className='tr-population'>Population</p>
      <p className='tr-lang'>Languages</p>
    
    { loading && <ClipLoader color='teal' size={120} /> }
    { currentCountries.map((country, index) => {
      return (<Country key={index} name={country.name.common} flag={country.flags.png} 
      region={country.region} population={country.population.toLocaleString()} 
      languages={ country.languages ? Object.values(country.languages) : null } />)
    }) }
    </div>)
}