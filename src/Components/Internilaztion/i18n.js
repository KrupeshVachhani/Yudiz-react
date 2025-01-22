import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          welcome: "Welcome to Our Multilingual App",
          description: "Experience content in your preferred language",
          about: {
            title: "Our Story",
            content: "We believe in making information accessible to everyone, regardless of their language preferences."
          },
          section1: {
            title: "Our Mission",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
          },
          section2: {
            title: "What We Offer",
            content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt."
          },
          section3: {
            title: "Join Our Community",
            content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae."
          }
        }
      },
      gu: {
        translation: {
          welcome: "અમારી બહુભાષી એપ્લિકેશનમાં આપનું સ્વાગત છે",
          description: "તમારી પસંદગીની ભાષામાં સામગ્રીનો અનુભવ કરો",
          about: {
            title: "અમારી કહાની",
            content: "અમે માનીએ છીએ કે દરેક વ્યક્તિ માટે માહિતી સુલભ બનાવવી જોઈએ, તેમની ભાષા પસંદગીને ધ્યાનમાં લીધા વગર."
          },
          section1: {
            title: "અમારું મિશન",
            content: "અમારું ધ્યેય એ છે કે દરેક વ્યક્તિને તેમની પસંદગીની ભાષામાં માહિતી મળે. અમે વિશ્વભરના લોકો સુધી પહોંચવા માટે સતત પ્રયત્નશીલ છીએ."
          },
          section2: {
            title: "અમે શું આપીએ છીએ",
            content: "અમે વિવિધ ભાષાઓમાં ગુણવત્તાસભર સામગ્રી પ્રદાન કરીએ છીએ. અમારી સામગ્રી સરળ અને સમજવામાં સહેલી હોય છે."
          },
          section3: {
            title: "અમારી કોમ્યુનિટીમાં જોડાઓ",
            content: "અમારી સાથે જોડાઈને તમે વિશ્વભરના લોકો સાથે જોડાઈ શકો છો. અમારી કોમ્યુનિટી દરરોજ વધી રહી છે અને નવી માહિતી શેર કરી રહી છે."
          }
        }
      }
    }
  });

export default i18n;