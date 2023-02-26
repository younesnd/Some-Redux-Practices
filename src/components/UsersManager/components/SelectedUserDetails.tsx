import { useAppSelector } from "@/store/hook"
import { getSelectedUser } from "../usersSlice"
const SelectedUserDetails = () => {

    const users = useAppSelector(getSelectedUser)


    return (
        <div className="container" >
        <h2 className="font-semibold mt-5 mb-4"> Selected User Details </h2>

        <div className="flex flex-col">
            <span className=" font-heading">ID :  {users?.id}</span>
            <span>Name : {users?.name}</span>
            <span>Email : {users?.email}</span>
            </div>

        </div>

    )   

}

export default SelectedUserDetails