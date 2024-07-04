import './Form.css'
import { useNavigate } from 'react-router-dom'


import { useState } from 'react';

// import axios from 'axios'; // Ensure Axios is imported

const statesOfIndia = ["All",
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar",
  "Chandigarh", "Chhattisgarh","Delhi",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
  "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana",
  "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", "Andaman and Nicobar Islands",
  "Chandigarh", "Dadra and Nagar Haveli", "Daman and Diu", "Lakshadweep", "Delhi", "Puducherry"
];



export default function Form(){
    let nav=useNavigate();
    const [frmState, setFrmState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
        address: '',
        city: '',
        state: '',
      });
  
     async function handleSubmit(e){
        e.preventDefault();
        console.log("heloo");

  if(frmState.address.length!=0 && frmState.lastName.length!=0 && frmState.address.length!=0 && frmState.city.length!=0 && frmState.state.length!=0 && frmState.mobile.length!=0 && frmState.firstName.length!=0){
 
        try{
          const response = await axios.post('http://localhost:8080/frm',{frmState});
          console.log(response);
          setFrmState({})
          nav('/user');

        }
        catch(e){
          console.log(e.message);
        }
      }

      }

    function handleChange(e){
    setFrmState({...frmState,[e.target.name]:e.target.value});
    }
    
        
      
          return (
            <div className='fr'>
              <h1>FORM</h1>
            <form>
              <div>
                <label htmlFor="firstName">First Name:</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={frmState.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName">Last Name:</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={frmState.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={frmState.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="mobile">Mobile No:</label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={frmState.mobile}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="address">Address:</label>
                <textarea
                 name="address" onChange={handleChange} id="address" value={frmState.address} rows={5} col={34}>
                  {/* {frmState.address} */}
                </textarea>
              
              </div>
              <div>
                <label htmlFor="city">City:</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={frmState.city}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
              <label htmlFor="state">State:</label>
              <select name="state" onChange={handleChange} id="state">
                    {
                        statesOfIndia.map((e,idx)=>{
                        return(
                            <option  value={e} key={idx}>{e}</option>
                        )
                        })
                    }
                </select>
                
              </div>
              <button onClick={handleSubmit} >Submit</button>
            </form>
            </div>
          );
}