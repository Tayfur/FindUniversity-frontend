import React from 'react'


interface UniversityProps{
    name?:string
    country?:string
    web_pages?:[]
}
export const University:React.FC<UniversityProps> = ({country,name,web_pages}) => {

    
    return (
        <div>
            {country}
            {name}
            {web_pages}
        </div>
    )
}
