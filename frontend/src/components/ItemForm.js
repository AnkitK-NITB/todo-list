import { useState } from "react"

const ItemForm = () => {
    const [title, setTitle] = useState('')
    const [description, setDesc] = useState('')
    const [err, setErr] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const item = {title, description}
        const response = await fetch('/api/lists', {
            method: 'POST',
            body:JSON.stringify(item),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()
        if(response.ok){
            setTitle('')
            setDesc('')
            setErr(null)
        } else {
            setErr(json.error)
        }
        console.log(json)
    }
    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a new todo</h3>
            
            <label>Title :</label>
            <input
                type="text"
                onChange={(e)=>setTitle(e.target.value)}
                value={title}
            />
            <label>Description</label>
            <input
                type="text"
                onChange={(e)=>setDesc(e.target.value)}
                value={description}
            />
            <button>Add Item</button>
            {err && <div className="error">{err}</div>}
        </form>
    )
}
export default ItemForm