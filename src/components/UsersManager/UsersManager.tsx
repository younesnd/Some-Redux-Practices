import AddUsers from "./components/AddUsers"
import DisplayUsers from "./components/DisplayUsers" 
import SelectedUserDetails from "./components/SelectedUserDetails"
const UsersManager = () => {

   return (
    <div className="conatiner grid grid-cols-3 rounded shadow-md items-start gap-20 ">
         <AddUsers/>
         <DisplayUsers/>
         <SelectedUserDetails/>
      </div>
      

   ) 
   
 

}
 export default UsersManager 