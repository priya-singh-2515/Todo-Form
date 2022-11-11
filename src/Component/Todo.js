import React,{useEffect, useState} from "react";
import todo from  "../images/todo.svg";
import "../App.css"

const Todo =()=>{

    const [inputData,setInputData]=useState('');
    const [items,setItems]=useState([]);
    const [toggleSubmit,setToggleSubmit]=useState(true);
    const [isEditItem,setIsEditItem]=useState(null);
    
    const addItem=()=>{
        if(!inputData){
            alert('Please fill data');
        }else if(inputData && !toggleSubmit) {
           setItems(
             items.map((element) => {
                    if(element.id===isEditItem){
                        return{...element,name:inputData}
                    };
                    return element;
            })
           )
           setInputData('')
           setToggleSubmit(true)
           setIsEditItem(null)
        
         } else{
            const allInputData={id: new Date().getTime().toString(),name:inputData}
            setItems([...items,allInputData]);
            setInputData('')
        }
    }

    // Delete items
    const deleteItem = (index)=>{
        console.log(index);
        const updateditems = items.filter((element)=>{
            return index!==element.id;
        })

        setItems(updateditems);
    }

    const updateditems=(id)=>{
         console.log(id);
        const updateditems = items.map((element,index)=>{

        })
    }
    
    const editItem=(id)=>{
        let newEditItem = items.find((element)=>{
            return element.id === id
        });
        console.log(newEditItem);

        setToggleSubmit(false);
        // setToggleSubmit(true)

        setInputData(newEditItem.name);
        // setInputData('');

        setIsEditItem(id);
        // setIsEditItem(null)
    }
    // remove all
    const removeAll=()=>{
        setItems([]);
    }

    const onSubmitForm=(event)=>{
        
        event.preventDefault()
        addItem()
    }
    

    return (
        <>
        
          <div className="main-div">
            <div className="child-div">
                <figure>
                    <img src={todo} alt="todologo"/>
                    <figcaption> Add Your List Here </figcaption>
                </figure>

                <form onSubmit={onSubmitForm}>
                  <div className="addItems">
                    <input type="text" placeholder="Add Items...."value={inputData}onChange={(e)=>setInputData(e.target.value)} autoFocus/>
                   {
                    toggleSubmit ? <i className="fa fa-plus add-btn" title="Add Item" onClick={addItem}></i>:
                    <i className="fa fa-edit add-btn" title="update Item" onClick={addItem}></i>
                   } 
                  </div>
                  {/* <input type="submit" value="Submit"></input> */}
                </form>
                
                <div className="showItems">

                    {
                        items.map((element)=>{
                            return(
                                <div className="eachItem" key={element.id}>
                                <h3>{element.name}</h3>
                                <div className="todo-btn"> 

                                {/* <i className="far fa-trash-alt add-btn" title="Update Item" onClick={()=>updateditems(index)}></i> */}
                                   <i className="far fa-edit add-btn" title="Edit  Item" onClick={()=>editItem(element.id)}></i>
                                   <i className="far fa-trash-alt add-btn" title="Delete Item" onClick={()=>deleteItem(element.id)}></i>
                                </div>

                            </div>
                            )
                        })
                    }
                </div>

                {/* clear all button */}
                <div className="showItems">
                    <button className="btn effect04" data-sm-link-text="Remove" onClick={removeAll}><span>CHECK LIST</span></button>
                </div>
            </div>
          </div>
        </>
    )
}

export default Todo













// import React, {useState, useEffect} from 'react'
// import todo from "../images/todo.svg";
// import "../App.css"


// // to get the data from LS
// const getLocalItmes = () => {
//     let list = localStorage.getItem('lists');
//     console.log(list);

//     if (list) {
//         return JSON.parse(localStorage.getItem('lists'));
//     } else {
//         return [];
//     }
// }

// const Todo = () => {

//     const [inputData, setInputData] = useState('');
//     const [items, setItems] = useState(getLocalItmes());
//     const [toggleSubmit, setToggleSubmit] = useState(true);
//     const [isEditItem, setIsEditItem] = useState(null);

//     const addItem = () => {
//         if (!inputData) {
//             alert('plzz fill data');
//         } else if(inputData && !toggleSubmit) {
//             setItems(
//                 items.map((elem) => {
//                     if (elem.id === isEditItem) {
//                         return { ...elem, name: inputData }
//                     }
//                     return elem;
//                 })
//             )
//                  setToggleSubmit(true);

//                  setInputData('');

//                  setIsEditItem(null);
//         } else {
//             const allInputData = { id: new Date().getTime().toString(), name:inputData }
//             setItems([...items, allInputData]);
//             setInputData('')
//         }
//     }

//     // delete the items
//     const deleteItem = (index) => {
//         const updateditems = items.filter((elem) => {
//             return index !== elem.id;
//         });

//         setItems(updateditems);
//     }    
    
//     const editItem = (id) => {
//         let newEditItem = items.find((elem) => {
//             return elem.id === id
//         });
//         console.log(newEditItem);

//         setToggleSubmit(false);

//         setInputData(newEditItem.name);

//         setIsEditItem(id);

//     }
    
// }

// export default Todo;