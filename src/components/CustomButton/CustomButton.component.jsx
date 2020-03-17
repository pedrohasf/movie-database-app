import React from 'react'
import {CustomButtonContainer} from './CustomButton.styles.jsx'

const CustomButton = ({children, ...props}) =>(
    <CustomButtonContainer {...props}>
        {children}
    </CustomButtonContainer>
)
export default CustomButton