import './Profile.css'
import image from '../Profile/ProgileImg/reactloge.png'

const Profile = () => {
    const profileDate = new Date().toLocaleDateString('en-US', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    });
    return (
        <div className='profile'>
            <div className="container proafil-menu">
                <div>
                    <ul>
                        <li className='proafil-menu-li'>
                            <a className='profile-navbar-a' href="/address/new">
                                New Product
                                <span className='proafil-menu-span'>(Admin)</span>
                            </a>
                        </li>
                        <li className='proafil-menu-li'>
                            <a href="/products/admin">
                                All Products
                                <span className='proafil-menu-span'>(Admin)</span>
                            </a>
                        </li>
                        <li className='proafil-menu-li'>
                            <a href="/orders/admin">
                                All Orders
                                <span className='proafil-menu-span'>(Admin)</span>
                            </a>
                        </li>
                        <li className='proafil-menu-li'>
                            <a href="/users/admin">
                                All Users
                                <span className='proafil-menu-span'>(Admin)</span>
                            </a>
                        </li >
                        <li className='proafil-menu-li proafil-menu-hr'>
                            <a href="/me">
                                Your Profile
                            </a>
                        </li>
                        <li className='proafil-menu-li'>
                            <a href="/user/order">
                                Orders
                            </a>
                        </li>
                        <li className='proafil-menu-li'>
                            <a href="/me/update">
                                Update Profile
                            </a>
                        </li>
                        <li className='proafil-menu-li'>
                            <a href="/me/update_password">
                                Update Password
                            </a>
                        </li>
                        <li className='proafil-menu-li'>
                            <a href='/'>
                                Logout
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='proafil-menu-box'>
                    <div className='proafil-menu-account'>
                        <img src={image} alt="alt" width={64} height={64}/>
                        <div className=''>
                            <h5 className='proafil-menu-name'>Makhmud</h5>
                            <p className='proafil-menu-email'>
                                <b>Email: </b>
                                <a href="/">mahmud@gmail.com </a>
                                <b>Joined On: </b>
                                <span>{profileDate}</span>
                            </p>
                        </div>
                    </div>
                    <hr className='proafil-menu-hr-1'/>
                    <div className='proafil-menu-cart '>
                        <div className='proafil-menu-box-span'>.</div>
                        <p className='proafil-menu-email proafil-menu-email-1'>123 street <br /> Orlando, FL, 34456, US <br /> Phone no: 1234568746</p>
                    </div>
                    <button className='proafil-menu-button'>Add new address</button>
                    <hr className='proafil-menu-hr-1'/>
                </div>
            </div>
        </div>
    );
};

export default Profile;