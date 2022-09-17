import { faker } from '@faker-js/faker';
import React from 'react';

import { useState,useEffect } from 'react';
import Story from './Story';

function Stories() {

    const [suggestions, setSuggestions] = useState([])
    
    useEffect(() => {
        const suggestions = [...Array(20)].map((_,i)=>({
            id :i ,
            username: faker.internet.userName(),
            avatar: faker.image.avatar(),
        })
        )
        setSuggestions(suggestions)
      }, []);
    //   console.log(suggestions)
    //   var size = Object.keys(suggestions).length;
    //   console.log("size", size)
      
    return ( <div className='flex mt-4 ml-2  space-x-2 p-5  
    overflow-x-scroll rounded-sm border-gray-100 border
    scrollbar-thin scrollbar-thumb-black '>
        
        {suggestions.map(profile =>(
            
         <Story key = {profile.id} 
            img = {profile.avatar}
            username = {profile.username}/>
        ))}
       
    
    </div> 
    );
}

export default Stories;
