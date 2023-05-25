import React ,{useState} from "react";
import Header from "./components/Header/Header";
import Title from "./components/Title/Title";
import Filter from "./components/Filter/Filter";
import Items from "./components/Items/Items";
import NotFound from "./components/NotFound/NotFound";
import { listData } from "./components/Data/listData";

function App() {
  const [data,setData]=useState(listData);
  const [notFound,setNotFound]=useState('');

  const handleFilter=(category)=>{
    if(category==='All'){
      setData(listData);
    }
    else{
      const newArr=listData.filter(item=>{
        return item.name===category;
      })
      setData(newArr);
    }
  }

  const handleSearch=(text)=>{
     const newArr=listData.filter(item=>item.name.toLowerCase().includes(text));
     if(newArr.length){
       setData(newArr);
       setNotFound('');
     }
     else{
      setData([]);
      setNotFound('This meal is not found !!');
     }
  }
  
  return (
    <div className="app">
      <Header handleSearch={handleSearch}/>
      <Title/>
      <Filter handleFilter={handleFilter}/>
      <Items data={data}/>
      <NotFound notFound={notFound}/>
    </div>
  );
}
export default App;
