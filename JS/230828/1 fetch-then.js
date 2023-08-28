const result = fetch(
  "https://raw.githubusercontent.com/paullabkorea/coronaVaccinationStatus/main/data/data.json"
);

//.then(): 그 이전 과정이 끝나고 나서 할일!
result
  .then((res) => {
    return res.json();
  })
  .then((json) => {
    console.log(json);
  });
