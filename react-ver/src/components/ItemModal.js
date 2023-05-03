function ItemModal(props){
    return (
        <div className="itemModal bg-yellow-100 w-1/4 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-4 rounded-lg z-20">
        <h1 className="font-bold mb-1 text-xl">{props.name}</h1>
        <span>{props.calories} kcal</span> <span>{props.type === null ? "" : `| ${props.type}`}</span> 
        <p className="description">{props.description}</p>
        <div>
            <span className="quantity-btn inline-block bg-amber-500 cursor-pointer w-[23px] h-[23px] rounded-[100px]" data-type="sub">-</span>
            <span className="set-quantity text-black radius">{props.setQuantity}</span>
            <span className="quantity-btn inline-block bg-amber-500 cursor-pointer w-[23px] h-[23px] rounded-[100px]" data-type="add">+</span>
        </div>
        <span className="price">£{props.price}</span>
        <div className="cursor-pointer my-2">
            <div className="add-order-btn p-4 bg-amber-500 text-white mb-2 text-center text-xl">Add order</div>
            <div className="close-btn p-2 text-black text-center text-xl">Close</div>
        </div>
    </div>
    );
}

export default ItemModal;