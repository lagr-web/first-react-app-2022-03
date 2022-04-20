import { useEffect, useState } from "react";


 const UseFetch = (url) => {

 const [data, setData] = useState(null);

useEffect(()=> {

     fetch(url, {
       
      method:"get",
        headers : {
         'Content-Type': 'application/json',
         'Accept' : 'application/json',
         'Content-Type' : 'text/plain'
         
        }

    })
    .then( (res) => res.json() )
    .then( (data) => setData(data) );

},[url]) // END useEffect


return [data]

}

export default UseFetch;