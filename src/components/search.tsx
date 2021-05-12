import React from 'react'
import {University} from '../UniversityListItem/university'

var API_URL = 'http://universities.hipolabs.com/search?country=';

interface UniversityProps{
    name?:string
    country?:string
    web_pages?:[]
}

export const Search:React.FC = ({}) => {

    const [SearchField, setSearchField] = React.useState('');
    const [Data, setData] = React.useState<UniversityProps[] | null>(null); 
    console.log(Data)

    const handleInput=(value:any) =>{
        setSearchField(value.target.value)
    }
    const SearchhandleButton=()=> {
        fetch(API_URL+SearchField)
        .then((res) => res.json())
        .then((res) => setData(res))
        }

    return (
        <div>
            <input type="text" placeholder="Search.." onChange={handleInput}/>
            <button onClick={()=>SearchhandleButton()}>search</button>
            {Data?.map((d)=>
            <University 
            key={d.name} 
            country={d.country} 
            name={d.name} 
            web_pages={d.web_pages}/>)}
        </div>
    )
}
