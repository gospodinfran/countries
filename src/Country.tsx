import ReadMoreIcon from '@mui/icons-material/ReadMore';

interface Country {
    name: string
    flag: string
    region: string
    population: number
    languages: string[] | null
}

export default function Country({ name, flag, region, population, languages }: Country ) {

    function handleMoreClick(name: string) {
        console.log(name)
    }

    return (<div className="country">
        <img src={flag} alt={`flag of ${name}`} />
        <p className="name">{name}</p>
        <p className="region">{region}</p>
        <p className="population">{population}</p>
        <div className="languages">{ 
        languages ? <ul>{languages.map((lang, index) => {
            return <li key={index}>{lang}</li>
        })}</ul> : ''
        }</div>
        <ReadMoreIcon className='more-icon' fontSize='large' onClick={() => handleMoreClick(name)} />
    </div>)
}