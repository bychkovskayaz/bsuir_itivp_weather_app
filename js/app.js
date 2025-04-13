document.getElementById('weatherForm').addEventListener('submit', async function (e) {
  e.preventDefault();
  const city = document.getElementById('city').value;
  const apiKey = '0f23b366c9d0cbb6ef03b37b5585596d';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  const response = await fetch(url);
  const data = await response.json();

  const weatherInfo = document.getElementById('weatherInfo');
  weatherInfo.innerHTML = '';

  if (data.cod === 200) {
    const li = document.createElement('li');
    li.innerHTML = `
          <strong>${data.name}</strong><br>
          Temperature: ${data.main.temp} °C<br>
          Description: ${data.weather[0].description}<br>
          Wind: ${data.wind.speed} м/с
        `;
    weatherInfo.appendChild(li);
  } else {
    const li = document.createElement('li');
    li.textContent = 'Город не найден. Попробуйте снова.';
    weatherInfo.appendChild(li);
  }
});
