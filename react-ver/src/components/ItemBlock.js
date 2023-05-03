function ItemBlock(props){
    const {name, calories, type, description, price, menuType, id, image} = props;
    return (
        <div class="w-[250px] h-[310px] item rounded-lg bg-yellow-100 p-5 min-h-full flex flex-col shadow-lg" data-menutype={menuType} data-id={id} >
            <div class="relative h-1/4">
                <img className="absolute top-[-200%]" src={image} alt="" />
            </div>
            <h2 class="font-bold text-xl text-amber-500">{name}</h2>
            <div class="mb-1">
                <span>{calories} kcal</span> 
                <span>{type === null ? "" : ` | ${type}`}</span> 
            </div>
            <p class="leading-tight mt-4">${description}</p>
            <p class="mt-auto text-lg font-bold text-amber-500">£${price}</p>
        </div>
    )
}

export default ItemBlock;