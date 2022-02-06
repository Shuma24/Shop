import { GoodsItem } from "./GoodsItem"


function GoodsList (props) {
   const {goods = [], addToBasket = Function.prototype} = props


    if(goods.lenght === 0){
      return <h3>Error nothing loading</h3>
   }

   return <div className="goods">
      {goods.map(item => <GoodsItem key={item.mainId} {...item} addToBasket={addToBasket} />)}
   </div>
}

export { GoodsList }