import './UpdateOrder.css'
import UpdateOrderMenu from './UpdateOrderMenu';

const UpdateOrder = () => {
    return (
        <div className='container update-order'>
            <div>
                <ul>
                    <li className='update-order-li'>
                        <a className='update-order-a' href="/address/new">
                            New Product
                            <span className='update-order-span'>(Admin)</span>
                        </a>
                    </li>
                    <li className='update-order-li'>
                        <a href="/products/admin">
                            All Products
                            <span className='update-order-span'>(Admin)</span>
                        </a>
                    </li>
                    <li className='update-order-li'>
                        <a href="/orders/admin">
                            All Orders
                            <span className='update-order-span'>(Admin)</span>
                        </a>
                    </li>
                    <li className='update-order-li'>
                        <a href="/users/admin">
                            All Users
                            <span className='update-order-span'>(Admin)</span>
                        </a>
                    </li >
                    <li className='update-order-li update-order-hr'>
                        <a href="/me">
                            Your Profile
                        </a>
                    </li>
                    <li className='update-order-li'>
                        <a href="/user/order">
                            Orders
                        </a>
                    </li>
                    <li className='update-order-li'>
                        <a href="/me/update">
                            Update Profile
                        </a>
                    </li>
                    <li className='update-order-li'>
                        <a href="/me/update_password">
                            Update Password
                        </a>
                    </li>
                    <li className='update-order-li'>
                        <a href='/'>
                            Logout
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <UpdateOrderMenu />
            </div>
        </div>
    );
};

export default UpdateOrder;