import { BasketItem } from "./BasketItem";

function BasketList (props) {
   
   const {
      order = [], 
      basketStatus= Function.prototype, 
      deleteFromBasket = Function.prototype,
      addQuanity = Function.prototype,
      minusQuanity = Function.prototype,
   } = props;


   const totalPrice = order.reduce((sum, el) => {
      return sum +el.price.regularPrice * el.quantity
   }, 0)

   return (
      <ul className="collection basket-list">
      <i className="material-icons basket-close" onClick={() => basketStatus()}>close</i>
      <li  className="collection-item active">Корзина</li>
      {
         order.map(item => <BasketItem 
            key={item.mainId} 
            {...item} 
            deleteFromBasket={deleteFromBasket} 
            addQuanity={addQuanity} 
            minusQuanity= {minusQuanity}/>)
      }
      <li className="collection-item active">Загальна сума:  <strong>{totalPrice} UAH</strong>
      <a href="!#" className="secondary-content">Оформити заказ</a>
      </li>
    </ul>
   )
}

export { BasketList }