function submitData(name, email) {
    const url = 'http://localhost:3000/users';
    const data = {
      name: name,
      email: email
    };
  
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    };
  
    return fetch(url, config);
  }
  function submitData(name, email) {
    const url = 'http://localhost:3000/users';
    const data = {
      name: name,
      email: email
    };
  
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    };
  
    return fetch(url, config)
      .then(response => response.json())
      .then(parsedResponse => {
        const id = parsedResponse.id;
        document.body.append(id);
      });
  }
  function submitData(name, email) {
    const url = 'http://localhost:3000/users';
    const data = {
      name: name,
      email: email
    };
  
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    };
  
    return fetch(url, config)
      .then(response => response.json())
      .then(parsedResponse => {
        const id = parsedResponse.id;
        document.body.append(id);
      })
      .catch(error => {
        const errorMessage = error.message;
        document.body.append(errorMessage);
      });
  }
  function submitData(name, email) {
    const url = 'http://localhost:3000/users';
    const data = {
      name: name,
      email: email
    };
  
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    };
  
    return fetch(url, config)
      .then(response => response.json())
      .then(parsedResponse => {
        const id = parsedResponse.id;
        document.body.append(id);
      })
      .catch(error => {
        const errorMessage = error.message;
        document.body.append(errorMessage);
      });
  }
  