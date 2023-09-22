import PropTypes from 'prop-types'
import Feature from '../Feature/Feature';


const Prices = ({ option }) => {
    const { name, price, features } = option;


    return (
        <div className='bg-blue-500 rounded-lg flex flex-col p-5 text-yellow-100'>
            <h2 className='text-center'>
                <span className='text-7xl font-extrabold'>{price}</span>
                <span className='text-2xl'>/mon</span>

            </h2>
            <h4 className='text-3xl text-center my-8'>{name}</h4>

           <div className=' flex-grow'> {
             features.map((feature, idx) => <Feature key ={idx} feature ={feature}> </Feature>)
            }</div>
            <button className='mt-12 bg-green-700 w-full  hover:bg-green-900 p-4 rounded-lg font-bold text-2xl'>Buy now </button>
        </div>
    );
};


Prices.propTypes = {
    option: PropTypes.object
}
export default Prices;