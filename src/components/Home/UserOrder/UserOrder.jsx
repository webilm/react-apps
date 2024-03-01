import UserOrderCard from "./UserOrderCard";
import './UserOrder.css'

const UserOrder = () => {
    return (
        <div className='container user-order'>
            <div>
                <ul>
                    <li className='user-order-li'>
                        <a className='user-order-a' href="/address/new">
                            New Product
                            <span className='user-order-span'>(Admin)</span>
                        </a>
                    </li>
                    <li className='user-order-li'>
                        <a href="/products/admin">
                            All Products
                            <span className='user-order-span'>(Admin)</span>
                        </a>
                    </li>
                    <li className='user-order-li'>
                        <a href="/orders/admin">
                            All Orders
                            <span className='user-order-span'>(Admin)</span>
                        </a>
                    </li>
                    <li className='user-order-li'>
                        <a href="/users/admin">
                            All Users
                            <span className='user-order-span'>(Admin)</span>
                        </a>
                    </li >
                    <li className='user-order-li user-order-hr'>
                        <a href="/me">
                            Your Profile
                        </a>
                    </li>
                    <li className='user-order-li'>
                        <a href="/user/order">
                            Orders
                        </a>
                    </li>
                    <li className='user-order-li'>
                        <a href="/me/update">
                            Update Profile
                        </a>
                    </li>
                    <li className='user-order-li'>
                        <a href="/me/update_password">
                            Update Password
                        </a>
                    </li>
                    <li className='user-order-li'>
                        <a href='/'>
                            Logout
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <UserOrderCard />
            </div>
        </div>
    );
};

export default UserOrder;