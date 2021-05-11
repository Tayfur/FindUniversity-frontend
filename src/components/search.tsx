import React from 'react'
interface searchProps {
    country?:string,
}
interface PostData {
    country: string;
    name: string;
}

export const Search:React.FC<searchProps> = ({country}) => {
    var API_URL = 'http://universities.hipolabs.com/search?country=';

    const [posts, setPosts] = React.useState<PostData[] | null>(null);    
    const [text, setText] = React.useState('');
        const [isLoading, setIsLoading] = React.useState(true)
        function handleInput(value:any) {
            setText(value.target.value)
        }
        function handleButton(params:string) {
            fetch(API_URL+params)
            .then((res) => res.json())
            .then((res) => setPosts(res))
            .then(() => setIsLoading(false));
            }

    return (
        <div>
            <input type="text" placeholder="Search.." onChange={handleInput}/>
            <button onClick={()=>handleButton(text)}>search</button>
            <ul> {posts?.map((p) => <li key={p.name}>{p.name}</li>)}</ul>
        </div>
    )
}
