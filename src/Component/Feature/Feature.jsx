import PropTypes from 'prop-types'
import { AiOutlineCheck } from "react-icons/ai";

const Feature = ({ feature }) => {

    return (
        <div>
          
           <p className='flex items-center'> <AiOutlineCheck className='text-green-300 mr-2 font-medium'> </AiOutlineCheck> {feature} </p> 
        </div>
    );
};

Feature.propTypes = {
    feature: PropTypes.string 
}


export default Feature;