/* eslint-disable react/jsx-key */
import { useEffect, useState } from 'react';
import './Home.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Card from '../Card/Card';
const Home = () => {
    const [allActors, setallActors] = useState([])
    const [selectActors, setSelectActors] = useState([])
    const [remaing, setRemaing] = useState(0)
    const [totalCredit, setTotalCredit] = useState(0)
    useEffect(()=> {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setallActors(data))
    },[])
const handleSelectActor = (actor) => {
    const isExist = selectActors.find((item) => item.id == actor.id);
    let count = parseInt(actor.Credit.split('hr').join())
    if(isExist){
        return toast("Error.")
    }else{
        selectActors.forEach((item) => {
            count += parseInt(item.Credit.split('hr').join())
        })
       const totalRemaing = 20 - count;
       
       if(count > 20){
        return toast("This didn't work.")
       }else{
        setRemaing(totalRemaing)
        setSelectActors([...selectActors, actor])
        setTotalCredit(count)
       }
       
    }
   
}

    console.log(selectActors)
    return (
     <div className='container'>
        <div className='Home-container'>
         <div className='card-container'>
                {
                allActors.map((actor) => (
                 <div key={actor.id} className="card">
                    <div className='img'>
                        <img src={actor.image} alt="" />
                    </div>
                    <h3>{actor.coursename}</h3>
                    <div className='text-content'>
                    <p>{actor.details}</p>
                    </div>
                    <div className="sub-container">           
                    <p>$</p>
                    <p>Price : {actor.Price}</p>
                    <p> <img className='photo' src={actor.image_url} alt="" /></p>
                    <p>Credit : {actor.Credit}</p>
                    </div>
                    <button onClick={()=>handleSelectActor(actor)} className='btn-container'>Select </button>
              </div>
                ))
                }
          
         </div>
            <div className='cart-section'>
           <Card selectActors={selectActors} remaing ={remaing} totalCredit ={totalCredit}>

           </Card>
           <div className='toast'>
           <ToastContainer/>
           </div>
         
          </div>
        </div>
    </div>
    
    );
};

export default Home;