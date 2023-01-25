import ReadMoreIcon from '@mui/icons-material/ReadMore';
import { Link } from 'react-router-dom';

interface Country {
    name: string
    flag: string
    region: string
    population: number
    languages: string[] | null
}

export default function Country({ name, flag, region, population, languages }: Country ) {

    function handleMoreClick() {
        <Link to={'/details'} />
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
        <Link to={`details/?name=${name}`}><ReadMoreIcon className='more-icon' fontSize='large'/></Link>
    </div>)
}