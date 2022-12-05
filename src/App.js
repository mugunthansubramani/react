import 'bootstrap/dist/css/bootstrap.min.css';
import { useState,useEffect } from 'react';
import "./App.css"


export default function Tablet(){
    const [tablelist,setTablelist]=useState([]);

    useEffect(()=>{
      fetch('https://fakestoreapi.com/products')
      .then(response=>response.json())
      .then(json=>setTablelist(json))
    });
  
    return(
        <>
            <div className='conatainer'>
                 <div className='table table-bordered '>
                    
                    {
                        tablelist.map((value,index)=>(

                            <table className=''>
                                <tbody>
                                    <thead>
                                        <tr col-lg-12>
                                        
                                        <th className='col-lg-2'>Product Image</th>
                                        <th className='col-lg-2'>Product name</th> 
                                        <th className='col-lg-2'>Product description</th>
                                        <th className='col-lg-2'>Product rating</th>
                                        <th className='col-lg-2'>Product category</th>
                                        <th className='col-lg-2'>Product count</th>
                                        </tr>
                                        
                                        <tr>
                                            <td><img className="image"  src={value.image} alt="sample"/></td>
                                            <td>{value.title}</td>
                                            <td>{value.description}</td>
                                            <td>{value.price}</td>
                                            <td>{value.category}</td>
                                            <td>{value.rating.count}</td>
                                        </tr>
                                        
                                    </thead>
                                </tbody>
                            </table>
                            
                        ))
                    }
                </div>
        </div>    


    

        </>
    );
}

//  tablelist.map((value,index)=>());