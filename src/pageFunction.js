const creatCoinCard = (coin) => {
  const liElement = document.createElement('li');
  const dateElement = document.createElement('span');
  const valueElement = document.createElement('span');
  valueElement.className = 'yellow';
  valueElement.textContent = ` - ${coin.ask}`;

  const MIL = 1000;
  const date = new Date(coin.timestamp * MIL);
  const localDate = date.toLocaleDateString('pt-BR');
  dateElement.textContent = localDate;

  liElement.appendChild(dateElement);
  liElement.appendChild(valueElement);

  return liElement;
};

export const renderListCoins = (coins, title, section) => {
  const { code, codein } = coins[0];
  title.textContent = `Cotação de ${code}/${codein} nos últimos 30 dias`;

  const coinsEl = coins.map((coin) => creatCoinCard(coin));
  coinsEl.forEach((el) => section.appendChild(el));
};
