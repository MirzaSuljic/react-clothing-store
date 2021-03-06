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
        <div>
            <div className="main-page">
            <div className="directory">
                <div className="container mr-10px">
                    <Link to="/women">
                        <div className="mosaic">
                            <div className="mosaic__item">
                                <img src={ShopWomen1} alt="one"/>
                            </div>
                            <div className="mosaic__item">
                                <img src={ShopWomen2} alt="two"/>
                            </div>
                        </div>
                        <div className="text-woman">Women</div>
                        <div className="sale-woman"> <span className="sale">Sale</span> <span>(Women)</span></div>
                       
                    </Link>
                </div>
                <div className="container mt-10">
                    <Link to="/men">
                    <div className="mosaic">
                        <div className="mosaic__item">
                            <img src={ShopMen1} alt="one"/>
                        </div>
                        <div className="text-mens">Men</div>
                        <div className="mosaic__item2">
                            <img src={ShopMen2} alt="two"/>
                        </div>
                    </div>
                    <div className="sale-men"> <span className="sale">Sale</span> <span>(Men)</span></div>
                    
                    </Link>
                </div>
            </div>
            <div>
            <div className="container-bottom">
                    <div className="mosaic-bottom">
                        <div className="mosaic__item-bottom">
                            <img src={Men1} alt="one"/>
                        </div>
                        <div className="mosaic__item-bottom">
                            <img src={Women2} alt="two"/>
                        </div>
                    </div>
                </div>

            </div>
            </div>
        </div>
    )
};

export default Directory;
