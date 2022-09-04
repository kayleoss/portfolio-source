import React from 'react';
import Topbar from './Blog/Topbar';

class Payment extends React.Component {
    render() {
        return(
            <div>
                <Topbar title="" />
                <div className="container p-5" style={{minHeight: '500px'}}>
                    <div class="row">
                        <div class="col-sm-6 offset-md-3">
                            <h1 class="title-h1 text-center font-weight-bold">Thank you! <span role="img" aria-label="happy face">😊</span></h1>
                            <p class="text-secondary mt-5">
                                The original, full resolution artwork you have purchased will be emailed to you within 2 business days.<br/>
                                <br/>Have questions? Don't hesitate to contact me through the form below.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
} 

export default Payment;
