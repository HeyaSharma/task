
import { useEffect, useState } from 'react'
import './User.css'
export default function Users(){

    let [user,setUser]=useState([]);

    const statesOfIndia = ["All",
        "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar",
        "Chandigarh", "Chhattisgarh","Delhi",
        "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
        "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
        "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana",
        "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", "Andaman and Nicobar Islands",
        "Chandigarh", "Dadra and Nagar Haveli", "Daman and Diu", "Lakshadweep", "Delhi", "Puducherry"
    ];

    useEffect(() => {
        async function fetchData() {
            console.log("hello");
            try {
                const response = await axios.get('http://localhost:8080/getUsers');
                setUser(response.data.data);
                
            } catch (error) {
                console.error('Error fetching data:', error.message);
            }
        }

        fetchData();
    }, []); 


    async function filt(e){

       try{
        let resp={}
        console.log(e.target.value);
        if(e.target.value=="All"){
        
           resp= await axios.get('http://localhost:8080/getUsers');

        }else{

            resp=await axios.get(`http://localhost:8080/filter/${e.target.value}`);
        }

   

        setUser(resp.data.data);


       }

       catch(e){
           console.log(e.message);
       }

    }

    return(
        
        <div className='main'>

            <div>
                <h3>Filters</h3>

                <select name="state" onChange={filt} id="state">
                    {
                        statesOfIndia.map((e,idx)=>{
                        return(
                            <option  value={e} key={idx}>{e}</option>
                        )
                        })
                    }
                </select>

            </div>


            <div className='users'>

                {

                      user.length>0 
                      ? 
                      user.map((e)=>{
                           
                            return(
                            <div key={e._id} className="user">

                                <p>Firstname : {e.firstName}</p>
                                <p>Lastname : {e.lastName}</p>
                                <p>Mobile no. : {e.mobile}</p>
                                <p>E-mail : {e.email}</p>
                                <p>Address : {e.address}</p>
                                <p>State : {e.state}</p>
                                <p>City : {e.city}</p>
                                     

                            </div>

                            )
                        
                        })

                        :

                        <h1>User Not Found, &#128565;</h1>

                }



            </div>





        </div>
    )
}