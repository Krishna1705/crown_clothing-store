import React from 'react';
import {SpinnerContainer,SpinnerOverlay} from './with-spinner.styles';

const WithSpinner=WrappedComponent=>{
   const Spinner= ({isLoading,...otherProps})=>{
            return isLoading?
            (
            <SpinnerContainer>
                <SpinnerOverlay/>
            </SpinnerContainer>
            )
            :
            (<WrappedComponent {...otherProps}/>)
       }
   return Spinner;
}

export default WithSpinner;
//hoc i a component that returns another modified functional component
//here Spinner is a functiona;l component which is returned by WithSpinner HOC