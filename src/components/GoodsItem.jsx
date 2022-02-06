function GoodsItem (props) {
   
   const {
      mainId,
      displayName,
      displayDescription,
      price,
      displayAssets,
      addToBasket = Function.prototype,
   } = props

   return (
      <div className="card">
        <div className="card-image">
          <img src={displayAssets.map(item => item.full_background)} alt={displayName} />
          
        </div>
        <div className="card-content">
           <span className="card-title">{displayName}</span>
          <p>{displayDescription}</p>
        </div>
        <div className="card-action">
          <button className="btn" onClick={() => 
          addToBasket({
            mainId,
            displayName,
            price,
            displayAssets,
          })}
          >Купить</button>
          <span className="right" style={{fontSize: '32px'}}>{price.regularPrice} UAH</span>
        </div>
      </div>
   )
}

export { GoodsItem }