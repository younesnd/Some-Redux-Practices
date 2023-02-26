import { useAppSelector } from '@/store/hook'
import { useDispatch } from 'react-redux'
import { removeUsers, selectUer } from '../usersSlice'

const DisplayUsers = () => {
  const users = useAppSelector((state) => state.users.users)
  const dispatch = useDispatch()

  return (
    <div className="container flex flex-col justify-center items-center mt-5">
      <span className=" mb-5 ml-28 text-lg font-medium mr-24">Users</span>
      <div className="flex flex-col gap-4 ">
        {users.map((item) => (
          <button className="text-center hover:underline" onClick={()=>dispatch(selectUer(item.id))}>
            {item.email} <button className='hover:underline' onClick={()=>dispatch(removeUsers(item.id))}>X</button>
          </button>
        ))}
      </div>
    </div>
  )
}
export default DisplayUsers
