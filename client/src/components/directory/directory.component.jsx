import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

import {connect} from  'react-redux';
import {selectDirectorySections} from '../../redux/directory/directory.selectors';
import {createStructuredSelector} from 'reselect';

 const Directory =({sections})=>{
    /*   //we move follow code into redux/direcory/directory.reducer.js
      constructor(){
        super();
        this.state={
        sections : [
                {
                  title: 'hats',
                  imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                  id: 1,
                  linkUrl: 'hats'
                },
                {
                  title: 'jackets',
                  imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                  id: 2,
                  linkUrl: ''
                },
                {
                  title: 'sneakers',
                  imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                  id: 3,
                  linkUrl: ''
                },
                {
                  title: 'womens',
                  imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                  size: 'large',
                  id: 4,
                  linkUrl: ''
                },
                {
                  title: 'mens',
                  imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                  size: 'large',
                  id: 5,
                  linkUrl: ''
                }
              ]
        }
    } */

        return(
            <div className="directory-menu">
              {/*   {this.state.sections.map( (section)=>
                                                   ( <MenuItem key={section.id} 
                                                             title={section.title} 
                                                            imageURL={section.imageURL}
                                                               size={section.size} /> )
                                        )
                   }
             */}
            {sections.map( ({id,title,imageUrl,size,linkUrl})=>
                                                   ( <MenuItem key={id} 
                                                             title={title} 
                                                            imageUrl={imageUrl}
                                                               size={size} 
                                                              linkUrl={linkUrl}
                                                               /> )
                                        )
            }
                
            </div>
        )
}

/* const mapStateToProps=state=>({
  sections:state.directory.sections
}) */
//use of selectors instead of above normas mapStateToProps
const mapStateToProps=createStructuredSelector({
  sections:selectDirectorySections
})

export default connect(mapStateToProps,null)(Directory);

