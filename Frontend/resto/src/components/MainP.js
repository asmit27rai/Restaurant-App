import React from "react";
const MainP = () => {
  return (
    <section
      style={{
        backgroundColor: '#21B573',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
      }}
    >
      <div style={{ maxWidth: '80%', color: '#ffffff' }}>
        <h1>We Welcome You To Resto!!!</h1>
        <p>Here, You Can Enjoy All Type Of Food From All Over World.........</p>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img
          src="https://media.istockphoto.com/id/1457979959/photo/snack-junk-fast-food-on-table-in-restaurant-soup-sauce-ornament-grill-hamburger-french-fries.webp?b=1&s=170667a&w=0&k=20&c=A_MdmsSdkTspk9Mum_bDVB2ko0RKoyjB7ZXQUnSOHl0="
          alt="Restaurant"
          style={{ width: '200px', height: '200px', borderRadius: '50%', marginRight: '50px' ,marginLeft: '50px' }}
        />
        <img
          src="https://img.freepik.com/premium-photo/amazing-delicious-cheese-burger_727939-299.jpg"
          alt="Restaurant"
          style={{ width: '200px', height: '200px', borderRadius: '50%', marginLeft: '50px' }}
        />
      </div>
    </section>
  );
};
export default MainP;
