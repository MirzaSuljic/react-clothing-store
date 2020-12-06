import React from 'react';
import {Link} from 'react-router-dom';
import ShopWomen1 from '../../assets/women001prod1.svg';
import ShopWomen2 from '../../assets/women002prod1.svg';
import ShopMen1 from '../../assets/men001prod1.svg';
import ShopMen2 from '../../assets/men002prod1.svg';
import Men1 from '../../assets/750x1000_M27_HighSummer_01.svg';
import Women2 from '../../assets/750x1000_W27_HighSummer_02.svg';
import './Directory.css';

const Directory = (props) => {
    return (
       

        // <div className="directory">
        //     <Link to="/women">
        //         <div
        //         className="item"
        //         style={{
        //             backgroundImage:`url(${ShopWomen})`
        //         }}>
            
        //         </div>
        //     </Link>
        //     <Link to="/men">
        //         <div
        //         className="item"
        //         style={{
        //             backgroundImage:`url(${ShopMen})`
        //         }}>
        //         </div>
        //     </Link>
        // </div>
        <div>
            <div className="directory">
                <div className="container mr-5">
                    <Link to="/women">
                        <div className="mosaic">
                            <div className="mosaic__item">
                                <img src={ShopWomen1} alt="one"/>
                            </div>
                            <div className="mosaic__item">
                                <img src={ShopWomen2} alt="two"/>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="container mt-10">
                    <Link to="/men">
                    <div className="mosaic">
                        <div className="mosaic__item">
                            <img src={ShopMen1} alt="one"/>
                        </div>
                        <div className="mosaic__item2">
                            <img src={ShopMen2} alt="two"/>
                        </div>
                    </div>
                    </Link>
                </div>
            </div>
            <div>
            <div className="container">
                    <div className="mosaic">
                        <div className="mosaic__item">
                            <img src={Men1} alt="one"/>
                        </div>
                        <div className="mosaic__item">
                            <img src={Women2} alt="two"/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
};

export default Directory;
