import { useReducer,  } from 'react'
import { DeleteItem,UpdateItem, ShoppingListActions,  ShoppingListState,  } from './ShoppingList.types'
import ShoppingListHeader from './ShoppingListHeader'
import ShoppingListRow from './ShoppingListRow'


const getUuid = () => '_' + Math.random().toString(36).substring(2, 9)


const shoppingItems: ShoppingListState = {
   newShoppingItemName: '', items: [{id: '1', name: 'Sea Salt'},{id: '2', name: 'Apples'},{id: '3',name: 'Chicken breasts'}]}

const reducer = (state: ShoppingListState, action: ShoppingListActions): ShoppingListState => {
  switch (action.type) {
    case 'UPDATE_NEW_SHOPPING_ITEM_NAME':
      return {
        ...state,
        newShoppingItemName: action.payload,
      }
    case 'ADD_ITEM':
      return {
        ...state,
        newShoppingItemName: '',
        items: [...state.items, action.payload],
      }
    case 'UPDATE_ITEM':
      return {
        ...state,
        items: state.items.map((item, idx) => {
          if (idx === action.payload.index) {
            return action.payload.item
          }
          return item
        }),
      }
    case 'DELETE_ITEM':
      return {
        ...state,
        items: state.items.filter((_, idx) => idx !== action.payload.index),
      }
    default:
      return state
  }
}
type ShoppingListProps = {}

const ShoppingList = (props: ShoppingListProps) => {
  const [shoppingList, dispatch] = useReducer(reducer, shoppingItems)

  const addItem = () => {
    if (!shoppingList.newShoppingItemName) //ADD_ITEM':{ ...state, newShoppingItemName: '', items: [...state.items, action.payload],
          dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: getUuid(),
        name: shoppingList.newShoppingItemName,
      },
    })
  }
  const deleteItem: DeleteItem = (item) => {
    dispatch({
      type: 'DELETE_ITEM',
      payload: item,
    })
  }
  const updateItem: UpdateItem = (payload) => {
    dispatch({
      type: 'UPDATE_ITEM',
      payload,
    })
  }
  const onChangeShoppingListItemName = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({type: 'UPDATE_NEW_SHOPPING_ITEM_NAME',payload: e.target.value,})  }

  return (
    <div className="py-8 max-w-4xl mx-auto text-left">
      <div className="max-w-xs">
        <ShoppingListHeader shoppingList={shoppingList.items} />
        <div className="space-y-3 mb-6">
          {shoppingList.items.map((item, index) => {
            return (
              <ShoppingListRow
                key={item.id}
                item={item}
                index={index}
                updateItem={updateItem}
                deleteItem={deleteItem}
              />
            )
          })}
        </div>
        <div className="flex flex-col justify-end space-y-2 max-w-xs">
          <label htmlFor="shppingItemField">Add item</label>
          <input
          className='rounded'
            type="text"
            id="shoppingItemField"
            value={shoppingList.newShoppingItemName}
            onChange={onChangeShoppingListItemName}
          />
          <button
            className="self-end rounded px-4 py-2 bg-blue-400 text-green-900"
            onClick={addItem}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  )
}
export default ShoppingList
