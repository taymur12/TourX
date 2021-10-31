import React from 'react';
import notfoundimg from '../../images/extra/404.gif'
const Page404 = () => {
    return (
        <div>
            <h2>Page Not Found 404</h2>
            <div>
                <img className='mx-auto w-100' src={notfoundimg} alt="" />
            </div>
        </div>
    );
};

export default Page404;