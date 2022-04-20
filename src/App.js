import React, { useEffect, useState } from "react";
import "./App.scss";
import Content from "./components/content";
import UseFetch from "./components/content/UseFetch";
import ScrollPosition from "./components/content/ScrollPosition";

function App() {

  const [data] = UseFetch("assets/settings.json"); //https://jsonplaceholder.typicode.com/posts
  const mScroll = ScrollPosition();

  console.log(data);

   return (
  /*  
    <>
    {data &&
<div>{data.lat}</div>
    }
    </> */

     <>
   {data &&
       <Content item={data.content} ms={mScroll} />
   }
     </>
  );
}

export default App;
