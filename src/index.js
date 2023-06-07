import 'bootstrap/dist/css/bootstrap.css'; 
import { StrictMode } from 'react'; 
import { createRoot } from 'react-dom/client'; 
import App from './App';
import reportWebVitals from './reportWebVitals';

if(!localStorage.getItem('theme')) {
  localStorage.setItem('theme', 'light'); 
}
document.body.className = `bg-${localStorage.getItem('theme')}`;  

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
