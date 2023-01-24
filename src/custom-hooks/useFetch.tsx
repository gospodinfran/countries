import { useState } from 'react'

export default function useFetch(baseUrl: string) {
    const [ loading, setLoading ] = useState(true)

    function get(url: string) {
        return new Promise((resolve, reject) => {
            fetch(baseUrl + url)
            .then(response => response.json())
            .then(data => {
                if (!data) {
                    setLoading(false)
                    return reject(data)
                }
                // see if I can make .finally(setLoading(false)) work
                setLoading(false)
                resolve(data)
            })
            .catch(error => {
                setLoading(false)
                reject(error)
            })
        })
    }

    return { get, loading }
}