import { renderListCoins } from './pageFunction';
import './style.css';

const inputCoin = document.querySelector('.input-coin');
const btnSearch = document.querySelector('.btn-search');
const coinsList = document.querySelector('.coins');
const coinTitle = document.querySelector('.coin-title');

btnSearch.addEventListener('click', (e) => {
  e.preventDefault();
  coinsList.innerHTML = '';

  const BASE_URL = 'https://economia.awesomeapi.com.br/';
  const endPoint = `json/daily/${inputCoin.value}/30`;
  fetch(`${BASE_URL}${endPoint}`)
    .then((response) => response.json())
    .then((results) => renderListCoins(results, coinTitle, coinsList))
    .catch((err) => console.log(err));
});
