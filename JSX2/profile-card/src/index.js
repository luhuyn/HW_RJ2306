import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const ProfileCard = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="card--header" />
        <img
          className="avatar"
          src="https://media.licdn.com/dms/image/D5603AQH417xuwrtQNw/profile-displayphoto-shrink_800_800/0/1682308051070?e=1694044800&v=beta&t=XWbzNoIizChU6UnrTBxScC3akP3AkuxqINBEA7RP8YE"
          alt="avatar"
        />
        <div className="card--body">
          <div>
            <p className="text-header">Luu Huyen</p>
            <p className="text-sub">
              The world is a really nice place. You just to experience it with the right people.
            </p>
            <button className="btn third">FOLLOW</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ProfileCard />);
