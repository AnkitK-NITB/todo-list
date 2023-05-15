const  ItemDetails = ({item})=>{
    return (
        <div className="item">
            <h4>{item.title}</h4>
            <p>{item.description}</p>
            <p>{item.createdAt}</p>
        </div>
    )
}
export default ItemDetails