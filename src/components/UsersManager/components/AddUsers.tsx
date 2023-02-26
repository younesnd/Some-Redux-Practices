import { useAppDispatch } from '@/store/hook'
import { useImmer } from 'use-immer'
import { addUsers } from '../usersSlice'

const createId = () => '_' + Math.random().toString(36).substr(2, 9)
const initialState = {
  name: '',
  email: '',
}

const AddUsers = () => {
  // const SelectAll = useAppSelector((state) => state.users.users)
  const dispatch = useAppDispatch()
  const [form, setForm] = useImmer(initialState)

  const OnchangeUsers = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmitUsers = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (!form.name || !form.email) return
    dispatch(addUsers({ id: createId(), ...form }))

    setForm(initialState)
  }

  return (
    
    <form className="space-y-3 ml-5 mt-4">
      <div className="flex flex-col items-stretch text-left space-y-2">
        <span className="mb-5 ml-28 text-lg font-medium">Add users</span>
        <label className="font-semibold" htmlFor="name">
          Name
        </label>
        <input
          className="flex-grow px-4 py-3"
          type="text"
          name="name"
          id="name"
          value={form.name}
          onChange={OnchangeUsers}
        />
        <label className="font-semibold" htmlFor="email">
          Email
        </label>
        <input
          className="flex-grow px-4 py-3"
          type="text"
          name="email"
          id="email"
          value={form.email}
          onChange={OnchangeUsers}
        />
      </div>
      <div className="flex ml-28">
        <button
          type="button"
          className="  
          text-left text-white bg-blue-700 font-medium  text-sm px-5 py-2.5 mr-2 mb-4 e dark:focus:ring-blue-800"
          onClick={onSubmitUsers}
        >
          Add User
        </button>
      </div>
    </form>
  )
}

export default AddUsers
