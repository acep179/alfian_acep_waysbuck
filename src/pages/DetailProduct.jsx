import {React} from 'react'
import Pict from './../assets/large_palm.jpg'
import "./DetailProduct.css"
import Topping from '../assets/topping_1.png'
import CheckTopping from '../assets/check-icon.png'


function Detailproduct(){
    return(
        <div className='container' style={{marginTop: 87}}>
            <div className='row w-100' style={{marginTop: 30}}>
                <div className='col'>
                    <img className='w-90' src={Pict} alt="drink-pic"/>
                </div>
                <div className='col text-red'>
                   <div className='product-name'>Ice Coffee Palm Sugar</div>
                   <p>Rp.27.000</p>

                   {/* topping */}
                   <div style={{marginTop:75}}>
                    <h5 style={{fontWeight:'bold', marginBottom:22}}>Topping</h5>

                        <div className='row-cols'>
                            <div className='col-2'>
                                <div className='position-relative'>
                                <img src={Topping} alt="toppings" style={{width:'75px'}}/>
                                <img src={CheckTopping} alt="toppings" className='position-absolute top-0 end-0'/>
                                </div>
                            </div>
                        </div>

                   </div>
                </div>
            </div>
        </div>


    );
}

export default Detailproduct;