import './UsersAdminMenu.css';
const UsersAdminMenu = () => {
  return (
    <div className='users-admin-menu'>
      <div>
        <h1>12 Products</h1>
        <div className='users-admin-menu-text'>
          <div>
            <p className='users-admin-menu-p'>Name</p>
            <p className='users-admin-menu-p2'>Makhmud</p>
          </div>
          <div>
            <p className='users-admin-menu-p'>Email</p>
            <p className='products-admin-menu-p2'>mahkmud@email.com</p>
          </div>
          <div>
            <p className='users-admin-menu-p'>Role</p>
            <p className='users-admin-menu-p2'>admin</p>
          </div>
          <div>
            <p className='users-admin-menu-p'>Actions</p>
            <div>
              <a className='users-admin-menu-a' href='/admin/products/upload_images'>
                .
              </a>
              <a className='users-admin-menu-a' href='/admin/products'>
                .
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersAdminMenu;