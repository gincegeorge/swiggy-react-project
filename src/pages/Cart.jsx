import { useDispatch, useSelector } from "react-redux";
import { IMAGE_URL } from "../constants";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="container mx-auto max-w-7xl p-10 bg-green-100 ">
      <div className="flex mb-5">
        <h2 className="font-bold text-2xl mb-4"> Cart</h2>
        {cartItems.length ? (
          <button
            onClick={() => handleClearCart()}
            className="bg-slate-800 text-white px-4 py-1 mt-1 ml-4"
          >
            Clear cart
          </button>
        ) : (
          ""
        )}
      </div>
      <div className="grid grid-cols-5 gap-y-6 gap-x-4">
        {cartItems.map((menu) => {
          return (
            <div className="bg-green-200 my-2 p-4" key={menu?.id}>
              <div className="mb-2">
                <img src={IMAGE_URL + menu?.imageId} alt="" />
              </div>
              <div>
                {menu?.name}
                <div />
                <div>Rs:{menu?.price / 100}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
