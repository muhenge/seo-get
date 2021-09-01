const baseUrl = "https://api-seo.cloudhost.cm";

  const apifetch = `${baseUrl}/api/seo/get-project`;

  const apiCall = async (data) => {
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
      jsonData = await get_project.json();
      console.log(jsonData.project);
    } catch (error) {
      console.log(req.message);
    }
  }

  apiCall({
    app_key: 'SEO-Crypt237njRDYalYFeRFm7UBTNAp',
    domain: 'funny'
  });
   

