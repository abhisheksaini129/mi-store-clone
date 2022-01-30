import React,{ useState,useEffect } from 'react';
import NavCard from './NavCard.jsx';
import '../Style/NavOptions.css';
const NavOption = ({miPhones,RedmiPhones,TV,Laptops,Fitness,Home,Audio,Accessories}) => {
    
   const [miPhoneToggle, setMiPhoneToggle] = useState(false);
   const [redmiPhoneToggle,setRedmiPhoneToggle] = useState(false);
   const [tvToggle,setTvToggle] = useState(false);
   const [laptopToggle,setLaptopToggle] = useState(false);
   const [fitnessToggle,setFitnessToggle] = useState(false);
   const [homeToggle,setHomeToggle] = useState(false);
   const [audioToggle,setAudioToggle] = useState(false);
   const [accessoriesToggle,setAccessoriesToggle] = useState(false);
 
    
   useEffect(() => {
     
    if(window.location.pathname === "/miphones"){
        return   setMiPhoneToggle(true)
       }
     if(window.location.pathname === "/redmiphones"){
        return   setRedmiPhoneToggle(true)
       }
       if(window.location.pathname === "/tv"){
        return   setTvToggle(true)
       }
       if(window.location.pathname === "/laptops"){
        return   setLaptopToggle(true)
       }
       if(window.location.pathname === "/lifestyle"){
        return  setFitnessToggle(true)
       }
       if(window.location.pathname === "/home"){
        return  setHomeToggle(true)
       }
       if(window.location.pathname === "/audio"){
        return  setAudioToggle(true)
       }
       
       if(window.location.pathname === "/accessories"){
        return  setAccessoriesToggle(true)
       }

       
   },[])

    return(
         <div className="navOptions"> 

                {miPhoneToggle?   miPhones.map((item)=>(

                    < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
                )) : null }


                {redmiPhoneToggle?   RedmiPhones.map((item)=>(

                < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
                )) : null }


                {tvToggle ?   TV.map((item)=>(

                    < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
                )) : null }

                {laptopToggle ?   Laptops.map((item)=>(

                < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
                )) : null }



                {fitnessToggle ?   Fitness.map((item)=>(

                < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
                )) : null }


                {homeToggle ?   Home.map((item)=>(

                    < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
                )) : null }



                {audioToggle ?   Audio.map((item)=>(

                < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
                )) : null }


                {accessoriesToggle ?   Accessories.map((item)=>(

                    < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
                )) : null }
      </div>
  )
};

export default NavOption;
