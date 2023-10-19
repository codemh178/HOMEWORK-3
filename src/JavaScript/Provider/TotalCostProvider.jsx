import { useReducer } from 'react';
import TotalCostContext from './TotalCostContext';

const inforTotal = {
  items: [],
  totalAmount: 0,
};

const reducer = (state, action) => {

/************************INCREASE AMOUNT***********************/
  if (action.type === '+') {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
   
    let updatedItems;
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    };
  }

/************************DECREASE AMOUNT***********************/
  if (action.type === '-') {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter(item => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    };
  }

  return inforTotal;
};

const TotalCostProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    reducer,
    inforTotal
  );

  const addHandler = (item) => {
    dispatchCartAction({ type: '+', item: item });
  };

  const removeHandler = (id) => {
    dispatchCartAction({ type: '-', id: id });
  };

  const TotalContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addHandler,
    removeItem: removeHandler
  };

  return (
    <TotalCostContext.Provider value={TotalContext}>
      {props.children}
    </TotalCostContext.Provider>
  );
};

export default TotalCostProvider;
