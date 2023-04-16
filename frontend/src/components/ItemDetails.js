const  ItemDetails = ({item})=>{
    return (
        <div className="item-detail">
            <h4>{item.title}</h4>
            <p>{item.createdAt}</p>
        </div>
    )
}
export default ItemDetails