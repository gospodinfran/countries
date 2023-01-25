import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { ClipLoader } from "react-spinners"
import useFetch from "../custom-hooks/useFetch"

export default function Details() {
    const [ country, setCountry ] = useState<any>()
    const [ searchParams ] = useSearchParams()
    const name = searchParams.get('name')

    const { get, loading } = useFetch('https://restcountries.com/v3.1/name/')

    useEffect(() => {
        get(`${name}`)
        .then((data: any) => setCountry(data[0]))
        .catch(error => console.log(error))
      }, [])

    return (<div className="details">
        <h1>{ name }</h1>
        <img src={country?.flags?.png} alt={`${name}`} />
        <p>Capital: { country?.capital }</p>
        <p>Located at { parseInt(country?.latlng[0], 10) } °N and { parseInt(country?.latlng[1], 10) } °W, { name } is { country?.independent == true ? '' : 'not' }  an independant country { country?.unMember == true && `and a UN member` }.</p>
        { loading && <ClipLoader /> }
        
    </div>)
}