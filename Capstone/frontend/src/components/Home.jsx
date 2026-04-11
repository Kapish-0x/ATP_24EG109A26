import React from 'react';

function Home() {
  return (
    <div style={{ 
      textAlign: 'center', 
      marginTop: '50px', 
      fontFamily: 'Arial, sans-serif' 
    }}>
      <h1>Welcome to the Blog App</h1>
      <p style={{ fontSize: '18px', color: '#555' }}>
        Share your thoughts, read amazing articles, and connect with authors.
      </p>
      <p style={{ fontSize: '16px', color: '#777' }}>
        Register today and start your blogging journey!
      </p>
    </div>
  );
}

export default Home;
