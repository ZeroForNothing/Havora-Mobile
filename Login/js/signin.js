export const UserSignIn = (actions, navigation, username, password, check) => {
  // if (username != null) {
  //   navigation.navigate("home");
  // }else{
  //   return false;
  // }
  async function postData(url = '', data = {}) {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json'
      },
      mode: 'cors',
      method: 'post',
      body: JSON.stringify(data)
    });
    return response.text();
  }
  postData('https://89.40.13.203/SignIn', {
      username: 'whatever',
      password: 'whatever',
      check: null
    })
    .then(data => {
      alert(data);
    }).catch(error => {
      console.error('There has been a problem with your fetch operation:', error);
    });
};
