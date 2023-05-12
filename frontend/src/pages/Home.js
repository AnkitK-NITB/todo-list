import {useEffect, useState} from 'react'

//components
import Itemdetails from '../components/ItemDetails'
import ItemForm from '../components/ItemForm'

const Home = ()=>{
    const [List, setList] = useState(null)
    useEffect(()=>{
        const fetchList = async ()=>{
            const res = await fetch('/api/lists/')
            const json = await res.json()
            
            if(res.ok){
                setList(json)
                // console.log(List?List:"hui")
            }
        }
        fetchList()
    },[])
    return (
        <div className="home">
            <div className="list">
                {List && List.map((item)=>(
                    <Itemdetails key={item._id} item={item} />
                ))}
            </div>
            <ItemForm/>
        </div>
    )
}
export default Home