import React, { useState } from 'react';

const App = () => {
  const [isExpand, setIsExpand] = useState(false);

  const handleToggleExpand = () => {
    setIsExpand(prevExpand => !prevExpand);
  };

  return (
    <div>
      <h1 className="enchanted-title">Enchanted</h1>
      {!isExpand ? (
        <div className="button-container">
          <button className="view-button" onClick={handleToggleExpand}>View</button>
        </div>    
      ) : (
        <div>
          <div className="button-container">
            <button className="hide-button" onClick={handleToggleExpand}>Hide</button>
          </div>
          <p className="enchanted-text">This is me praying that <br />
            This was the very first page <br />
            Not where the story line ends <br />
            My thoughts will echo your name, until I see you again <br />
            These are the words I held back, as I was leaving too soon <br />
            I was enchanted to meet you</p>
        </div>
      )}
    </div>
  );
}

export default App;
