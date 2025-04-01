import React, { useState, createContext, useContext } from 'react';


const languages = ['JavaScript', 'Python'];

// Create Context
const LanguageContext = createContext();

export default function Example() {
  const [languageIndex, setLanguageIndex] = useState(0);

  const toggleLanguage = () => {
    setLanguageIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
  };

  return (
    <LanguageContext.Provider value={{ language: languages[languageIndex], toggleLanguage }}>
      <MainSection />
    </LanguageContext.Provider>
  );
}

function MainSection() {
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <div>
      <p id="favoriteLanguage">Favorite programming language: {language}</p>
      <button id="changeFavorite" onClick={toggleLanguage}>Toggle Language</button>
    </div>
  );
}
