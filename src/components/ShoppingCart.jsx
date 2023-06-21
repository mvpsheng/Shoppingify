
import source from '../assets/source.svg'

export default function ShoppingCart() {
  return (
      <div className="shoppingcart">
        <div className="addItemarea">
          <div>
            <img className='source' src={source} alt="" />
          </div>
          <div className='additemarearight'>
            <p>Didn’t find what you need?</p>
            <button>Add item</button>
          </div>
        </div>
        <div className="shoppingcartbody">
          <p>Shopping List</p>

          <div>
            <p className='selectedcatagories'>Fruit and vegetables</p>
            <div className='selectedItems'>
              <label>Acocado </label>
              <button>3 pcs</button>
            </div>
          </div>

        </div>
        <div className="nameofList">
            <input type="text" placeholder='Enter a name'/>
            <button>Save</button>
        </div>
      </div>
  )
}