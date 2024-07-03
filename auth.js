const apiUrl = "http://20.244.56.144/test/auth";
const data = {
  companyName: 'ManGmed',
  clientID: '820e3107-2d35-4065-b6ca-55341893d8a5',
  clientSecret: 'WDPgHzcPhzPbHGHU',
  ownerName: 'Ehtishamul haq',
  ownerEmail: 'ehtishamulhaq9632@gmail.com',       
  rollNo: '4CB21IS017'
};

fetch(apiUrl, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));