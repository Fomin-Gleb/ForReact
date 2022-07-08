import axios from 'axios'

class usersService{
   static  async getAllUsers(){
      try{
        const response= await axios.get("https://jsonplaceholder.typicode.com/users");
        return response.data
      }
      catch (e){
        console.log(e);
      } 
        
   }
}

export default usersService;


