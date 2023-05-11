import { Doughnut } from "react-chartjs-2";
import { backgroundColors, borderColors } from "./../utils/chartColors";
import React, { useEffect, useState } from "react";

function Charts(props) {
  const { title } = props;
  const [keys, setKeys] = useState(null);
  const [values, setValues] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const characterData = await fetchData();
      setKeys(Object.keys(characterData));
      setValues(Object.values(characterData));
    };
    getData();
  }, []);

  useEffect(() => {
    document.body.style.backgroundColor = "var(--cyan)";
    document.querySelectorAll("a").forEach((link) => {
      link.style.color = "var(--black)";
    });

    return () => {
      document.body.style.backgroundColor = "var(--white)";
      document.querySelectorAll("a").forEach((link) => {
        link.style.color = "";
      });
    };
  }, []);

  const styles = {
    chartContainer: {
      maxWidth: "500px",
      width: "60%",
      height: "60%",
      margin: "20px auto"
    }
  };

  const options = {
    plugins: {
      legend: {
        display: false
      }
    }
  };

  const data = {
    labels: keys,
    datasets: [
      {
        label: false,
        data: values,
        backgroundColor: backgroundColors,
        borderColor: borderColors,
        borderWidth: 1
      }
    ]
  };

  return (
    <section className="container w-75 h-75 mt-5 rounded-2 p-5 mx-auto bg-white">
      <h1 className="mb-4">{title}</h1>
      <div style={styles.chartContainer}>
        <Doughnut data={data} options={options} />
      </div>
    </section>
  );
}

export default Charts;

async function processData(data) {
  const houses = {};
  data.forEach((character) => {
    let house = character.family;
    const lowercased = house.toLowerCase();

    // Data preprocessing - also formats output for legend if Needed
    house = lowercased.startsWith("house") ? house.slice(5).trim() : house;
    house = lowercased.includes("targ") ? "Targaryen" : house;
    house =
      lowercased.includes("lan") && lowercased.endsWith("ister")
        ? "Lannister"
        : house;
    house = lowercased.includes("barath") ? "Baratheon" : house;
    house = lowercased.includes("stark") ? "Stark" : house;
    house = lowercased.includes("joy") ? "Greyjoy" : house;
    house = house === "" || lowercased.startsWith("un") ? "Unknown" : house;

    // Assign counts
    houses[house] = house in houses ? houses[house] + 1 : 1;
  });
  return houses;
}

// need numchars in each house
async function fetchData() {
  const url = "https://thronesapi.com/api/v2/Characters";
  try {
    const response = await fetch(url);
    const data = await response.json();
    const houses = await processData(data);
    return houses;
  } catch (error) {
    console.error("Fetch failed", error);
  }
}

// Sources:
// https://stackoverflow.com/questions/5131379/how-to-change-the-color-of-the-links-with-javascript
// https://react.dev/reference/react
// https://react.dev/reference/react/useEffect
