const apiUrl = "http://20.244.56.144/test/register";
const data = {
  companyName: "ManGmed",
  ownerName: "Ehtishamul haq",
  rollNo: "4CB21IS017",
  ownerEmail: "ehtishamulhaq9632@gmail.com",
  accessCode: "sRKegk",
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