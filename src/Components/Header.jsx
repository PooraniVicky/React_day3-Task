import React from 'react';
const Header = () => {
    return (
        <header
            className="py-5 text-center text-dark"
            style={{
                backgroundImage: `url('https://i.pinimg.com/originals/23/0a/c0/230ac0efc96f59ee054d060452ec2503.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div className="container px-4 px-lg-5 my-5">
                <h1 className="display-4 fw-bolder pacifico-regular">Trendy Boutique</h1>
                <p className="lead fw-normal mb-0 asap" style={{color: 'black'}}>
                    Discover the latest fashion trends and timeless elegance at our trendy boutique, where style meets sophistication.
                </p>
            </div>
        </header>
    );
};

export default Header;
