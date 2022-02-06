import { useState, useEffect } from 'react'
import { API_KEY, API_URL } from '../config'
import { GoodsList } from './GoodsList';
import { Preloader } from './Preloader';
import { Cart } from './Cart';
import { BasketList } from './BasketList';
import { Alert } from './Alert';


function Shop () {
   const [goods, setGoods] = useState([]);
   const [loading, isLoading] = useState(true);
   const [order, setOrder] = useState([]);
   const [isBasketShow, setIsBasketShow] = useState(false);
   const [alertName, setAlertName] = useState('')

   const basketStatus = () => {
      setIsBasketShow(!isBasketShow)
   }
   
   const addToBasket = (item) => {
      const itemIndex = order.findIndex(orderItem => orderItem.mainId === item.mainId)
      
      if(itemIndex < 0) {
         const newItem = {
            ...item,
            quantity: 1,
         }
         setOrder([...order, newItem]);
      } else {
         const newOrder = order.map((orderItem, index) => {
            if(index === itemIndex){
               return {
                  ...orderItem,
                  quantity: orderItem.quantity + 1
               };
            } else {
               return orderItem
            }
         })

         setOrder(newOrder)
      }  
      setAlertName(item.displayName)
   }

   const deleteFromBasket = (id) => {
      const deleteOrder = order.filter(el => el.mainId !== id)
      console.log(deleteOrder)
      setOrder(deleteOrder)
   };

   const addQuanity = (id) => {
      const newOrder = order.map(el => {
         if(el.mainId === id) {
            const newQuanitty = el.quantity + 1;
            return {
               ...el,
               quantity:newQuanitty
            }
         }else {
            return el
         }
      })

      setOrder(newOrder)
   }


   const minusQuanity = (id) => {
      const newOrder = order.map(el => {
         if(el.mainId === id) {
            const newQuanitty = el.quantity - 1;
            return {
               ...el,
               quantity:newQuanitty >= 0 ? newQuanitty : 0,
            }
         }else {
            return el
         }
      })

      setOrder(newOrder)
   }


   const closeAlert = () => {
      setAlertName('')
   }

   useEffect(function getGoods(){
      fetch(API_URL, {
         headers: {
            Authorization: API_KEY
         }
      }).then(response => response.json())
      .then(data => {
         data.shop && setGoods(data.shop)
         isLoading(false)
      });
   }, [])



   return <main className="container content">
      <Cart quantity={order.length} basketStatus={basketStatus} />

      {
         loading ? <Preloader /> : <GoodsList goods={goods} addToBasket={addToBasket}/>
      }

      {
         isBasketShow && <BasketList order= {order} 
         basketStatus={basketStatus} 
         deleteFromBasket={deleteFromBasket} 
         addQuanity={addQuanity}
         minusQuanity={minusQuanity}
         />
      }

      {
         alertName && <Alert displayName={alertName} closeAlert={closeAlert} />
      }
   </main>
}

export { Shop }