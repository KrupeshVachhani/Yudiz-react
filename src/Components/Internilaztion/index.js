import React from 'react';
import { useTranslation } from 'react-i18next';
import './i18n';

function Internalization() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="container mx-auto p-4 max-w-4xl min-h-screen">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">{t('welcome')}</h1>
        <p className="text-lg mb-4">{t('description')}</p>
        
        <div className="flex justify-center gap-2 mb-6">
          <button
            onClick={() => changeLanguage('en')}
            className={`px-4 py-2 rounded text-white ${
              i18n.language === 'en' 
                ? 'bg-blue-700'
                : 'bg-blue-500 hover:bg-blue-600'
            }`}
          >
            English
          </button>
          <button
            onClick={() => changeLanguage('gu')}
            className={`px-4 py-2 rounded text-white ${
              i18n.language === 'gu'
                ? 'bg-blue-700'
                : 'bg-blue-500 hover:bg-blue-600'
            }`}
          >
            ગુજરાતી
          </button>
        </div>
      </header>

      <main>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{t('about.title')}</h2>
          <p className="mb-6 leading-relaxed">{t('about.content')}</p>
          <h3 className="text-xl font-semibold mb-3">{t('section1.title')}</h3>
          <p className="mb-6 leading-relaxed">{t('section1.content')}</p>
          <h3 className="text-xl font-semibold mb-3">{t('section2.title')}</h3>
          <p className="mb-6 leading-relaxed">{t('section2.content')}</p>
          <h3 className="text-xl font-semibold mb-3">{t('section3.title')}</h3>
          <p className="leading-relaxed">{t('section3.content')}</p>
        </section>
      </main>
    </div>
  );
}

export default Internalization;