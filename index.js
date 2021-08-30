const baseUrl = "https://api-seo.cloudhost.cm";

const key = document.getElementById("key");
const domain = document.getElementById("domain");
const form = document.forms['form']


const getProject = () => {
  const apifetch = `${baseUrl}/api/seo/get-project`;
  form.addEventListener("submit", async (e)=> {
    e.preventDefault();
    let data = {
      app_key: key.value,
      domain: domain.value
    };
    console.log(data);

    let req = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    };
    try {
      let get_project = await fetch(apifetch, req);
      let jsonData = await get_project.json();
    console.log(jsonData);
    } catch (error) {
      console.log(req.message);
    }
    
    form.reset();
  });

};

getProject();
