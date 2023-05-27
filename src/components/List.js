import React from "react";
import Card from "./Card";
import AddNew from "./AddNew";
import { useSelector } from "react-redux";
function List(props) {
  const listItem = useSelector((store) => store.listSlice.list);
  return (
    <>
   
      {listItem.map((list) => (
         <div className="p-3 w-1/3" key={list.id}>
            <div className="p-3 bg-gray-200 shadow-xl">
             <div key={list.id} className="mb-4">
          {list.title}
          </div>
          {list?.children?.length >0 && list.children.map((children)=><Card key={children.id} cardInfo={children}/>)}
          <div className="mt-3"><AddNew type="card" parentid={list.id} /></div>

         </div>
       </div>
     
      ))}
      
      <div className="p-3 w-1/3">
        <div className="p-3 bg-gray-200 shadow-xl">
        <AddNew />

        </div>
       
      </div>
    
    </>
  );
}

export default List;
