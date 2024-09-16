import React,{useEffect} from 'react'

function App() {
  let Api = "http://hn.algolia.com/api/v1/search?query=html";
  const fetchApidata = async(url)=>{
    try{
          const res = fetch(url);
    }
    catch(error){
       console.log(error);
    }
  }
  
  useEffect(() => {
    fetchApidata(Api);
  
  
  }, [])
  

  return (
    <div>App</div>
  )
}

export default App