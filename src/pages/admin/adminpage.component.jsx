import React from 'react';
//import {addItem} from '../../components/firebase/firebase.utils';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

class AdminPage extends React.Component{
    constructor(){
        super();
        this.state={
            itemName:'',
            price:'',
            title:''
        }

    }
 handleChange=(event)=>{
        event.preventDefault();
        //const {name,value}=this.target;
        const name=event.target.name;
        const value=event.target.value;
    /*     console.log(name)
        console.log(value) */
        this.setState({[name]:value})

    }
    _onSelect=(e)=>{
        this.setState({title:e.value}); 
    }
   
    handleSubmit=(event)=>{
        event.preventDefault();
        const {itemName,price,title}=this.state
        console.log(itemName);
        console.log(price);
        console.log(title);
        const Items=[]
        Items.push({itemName,price}); 
        console.log(Items);
      //  addItem({Items,title})
        
          
        this.setState({
            itemName:'',
            price:'',
            title:''
        })
        console.log("item has been added");
    }
  

render(){
    const options=["Mens","Womens","Jackets","Sneakers","Hats"];
   
    const {itemName,price,title}=this.state;
    
    
    return(
        
            <div className='Admin-form'>
              <form onSubmit={this.handleSubmit}>
                <label>
                Name:
                <input type="text" name="itemName" value={itemName} onChange={this.handleChange} />
                </label>
                <label><br/>
                Price:
                <input type="text" name="price" value={price} onChange={this.handleChange} />
                </label><br/>
                <label>
                Choose Category:
                <Dropdown options={options} 
                          onChange={this._onSelect} 
                          value={title}
                          name="title"
                          placeholder="Select an option" />
                </label>

                <input type="submit" value="Add Item" />
             </form>
            </div>
        )
  }
}
  
export default AdminPage;