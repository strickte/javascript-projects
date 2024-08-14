// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", () => {
  const flightStatus = document.getElementById("flightStatus");
  const background = document.getElementById("shuttleBackground");
  const takeoff = document.getElementById("takeoff");
  const shuttleHeight = document.getElementById("spaceShuttleHeight");
  const rocket = document.getElementById("rocket");
  rocket.style.position = "absolute";
  rocket.style.left = "0px";
  rocket.style.bottom = "0px";

  takeoff.addEventListener("click", () => {
    const result = window.confirm("Is the shuttle ready for takeoff?");
    if (result) {
      flightStatus.innerHTML = "Shuttle in flight";
      background.style.backgroundColor = "blue";
      shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) + 10000;
      rocket.style.bottom = "10px";
    }
  });
  const land = document.getElementById("landing");
  land.addEventListener("click", () => {
    const result = window.confirm(
      "The shuttle is landing. Landing gear engaged."
    );
    flightStatus.innerHTML = "The shuttle has landed.";
    background.style.backgroundColor = "green";
    shuttleHeight.innerHTML = 0;
    rocket.style.bottom = "0px";
    rocket.style.left = "0px";
  });
  const abort = document.getElementById("missionAbort");
  abort.addEventListener("click", () => {
    const result = window.confirm(
      "Confirm that you want to abort the mission."
    );
    if (result) {
      flightStatus.innerHTML = "Mission aborted.";
      background.style.backgroundColor = "green";
      shuttleHeight.innerHTML = 0;
      rocket.style.bottom = "0px";
      rocket.style.left = "0px";
    }
  });
  const up = document.getElementById("up");
  up.addEventListener("click", () => {
    if (shuttleHeight.innerHTML < 240000) {
      rocket.style.bottom = parseInt(rocket.style.bottom) + 10 + "px";
      shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) + 10000;
    }
  });
  const down = document.getElementById("down");
  down.addEventListener("click", () => {
    if (shuttleHeight.innerHTML > 0) {
      rocket.style.bottom = parseInt(rocket.style.bottom) - 10 + "px";
      shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) - 10000;
    }
  });
  const left = document.getElementById("left");
  left.addEventListener("click", () => {
    if (parseInt(rocket.style.left) > 0) {
      rocket.style.left = parseInt(rocket.style.left) - 10 + "px";
    }
  });
  const right = document.getElementById("right");
  right.addEventListener("click", () => {
    if (parseInt(rocket.style.left) < 200) {
      rocket.style.left = parseInt(rocket.style.left) + 10 + "px";
    }
  });
});
