

function BasketItem (props) {
   const {
      mainId,
      displayName,
      price,
      quantity,
      displayAssets,
      deleteFromBasket = Function.prototype,
      addQuanity = Function.prototype,
      minusQuanity = Function.prototype,
   } = props

   return (
      <li className="collection-item avatar">
      <img src={displayAssets.map(item => item.full_background)} alt="Err IMG" className="circle"/>
      <span className="title">{displayName}</span>
      <p>Кількість: {quantity} <span onClick={() =>minusQuanity(mainId)} className="minuss-quantity">-</span> <span className="pluss-quantity" onClick={() => addQuanity(mainId)}> + </span>
      
      <br/>
         Ціна: <strong>{price.regularPrice * quantity} UAH</strong>
      </p>
     <span><i className="secondary-content material-icons close-item" onClick={() => deleteFromBasket(mainId)}>close</i></span> 
    </li>
   )
}

export { BasketItem }