//TODO: Add Your Code Below
window.addEventListener("load", () => {
  fetch(
    "https://handlers.education.launchcode.org/static/astronauts.json"
  ).then((response) => {
    response.json().then((json) => {
      json.sort(function (a, b) {
        return a.hoursInSpace - b.hoursInSpace;
      });

      for (let i = 0; i < json.length; i++) {
        const container = document.getElementById("container");
        container.innerHTML += `
      <div class="astronaut">
      <div class="bio">
          <h2>${json[i].firstName + json[i].lastName}</h2>
          <ul>
          <li>Hours in space: ${json[i].hoursInSpace}</li>
          <li class ="${
            json[i].active ? "activeTrue" : "activeFalse"
          }"> Active: ${json[i].active}</li>
          <li>Skills: ${json[i].skills}</li>
          </ul>
          </div>
      <img class="avatar" src="${json[i].picture}" alt = "Photo of ${
          json[i].firstName + json[i].lastName
        }">`;
      }
      container.innerHTML += `<h3>There are ${json.length} astronauts.</h3>`;
    });
  });
});
/* <div class="astronaut">
    <div class="bio">
        <h3>Mae Jemison</h3>
        <ul>
        <li>Hours in space: 190</li>
        <li>Active: false</li>
        <li>Skills: Physician, Chemical Engineer</li>
        </ul>
    </div>
    <img class="avatar" src="images/mae-jemison.jpg">
    json.sort(function(a, b){
    return a.id - b.id;
});

 */
