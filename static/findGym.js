window.addEventListener('load', function () {
  var x = document.getElementById("closestGym");
  var data = [
    {
      name: 'Blochaus Bouldering North Melbourne',
      lat: -37.8322558,
      long: 144.9194795
    },
    {
      name: 'Brunswick Northside Boulders',
      lat: -37.766382,
      long: 144.959253
    },
    {
      name: 'Northcote Northside Boulders',
      lat: -37.769583,
      long: 144.997394
    },
    {
      name: 'The Lactic Factory',
      lat: -37.801386,
      long: 144.9933838
    },
    {
      name: 'La Roca Boulders',
      lat: -37.916183,
      long: 145.106006
    },
    {
      name: 'Bayside Rock Climbing',
      lat: -38.0938945,
      long: 145.1688953
    },
    {
      name: 'Urban climb collingwood',
      lat: -37.802795,
      long: 144.9875493
    },
    {
      name: 'Boulder Lab',
      lat: -37.8835218,
      long: 145.2690388
    },
  ]

  function getLocation() {
    if (navigator.geolocation) {
      console.log(navigator.geolocation.getCurrentPosition(showPosition))
    } else {
      x.innerText = "Geolocation is not supported by this browser.";
    }
  }

  function showPosition(position) {
    let closest = {}
    let closest_path = Infinity

    for (let i = 0; i < data.length; i++) {
      const location = data[i];
      const rel_lat = location.lat - position.coords.latitude
      const rel_long = location.long - position.coords.longitude
      const path = rel_lat**2 + rel_long**2

      console.log({name: location.name, rel_lat: rel_lat, rel_long: rel_long, path: path})

      if (path < closest_path) {
        closest_path = path
        closest = location
      }
    }

    console.log(closest)
    x.innerText = closest.name
  }

  getLocation()
});
