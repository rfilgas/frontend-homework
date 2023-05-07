const backgroundColors = [
  'rgba(54, 162, 235, 0.8)',
  'rgba(255, 206, 86, 0.8)',
  'rgba(255, 99, 132, 0.8)',
  'rgba(75, 192, 192, 0.8)',
  'rgba(153, 102, 255, 0.8)',
  'rgba(255, 159, 64, 0.8)',
  'rgba(199, 199, 199, 0.8)',
  'rgba(83, 102, 255, 0.8)',
  'rgba(40, 159, 64, 0.8)',
  'rgba(210, 199, 199, 0.8)',
  'rgba(78, 52, 199, 0.8)',
  'rgba(54, 130, 235, 0.8)',
  'rgba(255, 130, 86, 0.8)',
  'rgba(255,130, 132, 0.8)',
  'rgba(75, 130, 192, 0.8)',
  'rgba(153, 130, 255, 0.8)',
  'rgba(255, 130, 64, 0.8)',
  'rgba(199, 130, 199, 0.8)',
  'rgba(83, 130, 255, 0.8)',
  'rgba(40, 130, 64, 0.8)',
  'rgba(210, 130, 199, 0.8)',
  'rgba(78, 52,130, 0.8)',
  'rgba(54, 230, 235, 0.8)',
  'rgba(255, 230, 86, 0.8)',
  'rgba(255,230, 132, 0.8)',
  'rgba(75, 230, 192, 0.8)',
  'rgba(153, 230, 255, 0.8)',
  'rgba(255, 230, 64, 0.8)',
  'rgba(199, 230, 199, 0.8)',
  'rgba(83, 230, 255, 0.8)',
  'rgba(40, 230, 64, 0.8)',
  'rgba(210, 230, 199, 0.8)',
  'rgba(78, 52, 230, 0.8)',
  'rgba(210, 230, 120, 0.8)',
  'rgba(78, 52, 212, 0.8)',
];

const borderColors = [
  'rgba(54, 162, 235, 1)',
  'rgba(255, 206, 86, 1)',
  'rgba(255, 99, 132, 1)',
  'rgba(75, 192, 192, 1)',
  'rgba(153, 102, 255, 1)',
  'rgba(255, 159, 64, 1)',
  'rgba(159, 159, 159, 1)',
  'rgba(83, 102, 255, 1)',
  'rgba(40, 159, 64, 1)',
  'rgba(210, 199, 199, 1)',
  'rgba(78, 52, 199, 1)',
  'rgba(54, 130, 235, 0.8)',
  'rgba(255, 130, 86, 0.8)',
  'rgba(255,130, 132, 0.8)',
  'rgba(75, 130, 192, 0.8)',
  'rgba(153, 130, 255, 0.8)',
  'rgba(255, 130, 64, 0.8)',
  'rgba(199, 130, 199, 0.8)',
  'rgba(83, 130, 255, 0.8)',
  'rgba(40, 130, 64, 0.8)',
  'rgba(210, 130, 199, 0.8)',
  'rgba(78, 52,1309, 0.8)',
  'rgba(54, 230, 235, 0.8)',
  'rgba(255, 230, 86, 0.8)',
  'rgba(255,230, 132, 0.8)',
  'rgba(75, 230, 192, 0.8)',
  'rgba(153, 230, 255, 0.8)',
  'rgba(255, 230, 64, 0.8)',
  'rgba(199, 230, 199, 0.8)',
  'rgba(83, 230, 255, 0.8)',
  'rgba(40, 230, 64, 0.8)',
  'rgba(210, 230, 199, 0.8)',
  'rgba(78, 52, 230, 0.8)',
  'rgba(210, 230, 120, 0.8)',
  'rgba(78, 52, 212, 0.8)',
];

const renderChart = (nums) => {
  const donutChart = document.querySelector('.donut-chart');

  new Chart(donutChart, {
    type: 'doughnut',
    data: {
      // comment labels back in if needed.
      labels: Object.keys(nums),
      datasets: [
        {
          label: false,
          data: Object.values(nums),
          backgroundColor: backgroundColors,
          borderColor: borderColors,
          borderWidth: 1,
        },
      ],
    },
    options: {
      legend: {
        display: false,
      },
    },

  });
};

async function processData(data) {
  const houses = {};
  data.forEach((character) => {
    let house = character.family;
    const lowercased = house.toLowerCase();

    // Data preprocessing - also formats output for legend if Needed
    house = lowercased.startsWith('house') ? house.slice(5).trim() : house;
    house = lowercased.includes('targ') ? 'Targaryen' : house;
    house = lowercased.includes('lan') && lowercased.endsWith('ister') ? 'Lannister' : house;
    house = lowercased.includes('barath') ? 'Baratheon' : house;
    house = lowercased.includes('stark') ? 'Stark' : house;
    house = lowercased.includes('joy') ? 'Greyjoy' : house;
    house = (house === '' || lowercased.startsWith('un')) ? 'Unknown' : house;

    // Assign counts
    houses[house] = house in houses ? houses[house] + 1 : 1;
  });
  renderChart(houses);
}

// need numchars in each house
async function fetchData() {
  const url = 'https://thronesapi.com/api/v2/Characters';
  try {
    const response = await fetch(url);
    const data = await response.json();
    processData(data);
  } catch (error) {
    console.error('Fetch failed', error);
  }
}

fetchData();

// Sources:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await
// https://developer.mozilla.org/en-US/docs/Web/API/Response/json
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim
// https://www.chartjs.org/docs/latest/configuration/legend.html
