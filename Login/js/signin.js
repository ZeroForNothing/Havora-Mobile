export const UserSignIn = (actions, navigation, username, password, check) => {
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
  postData('https://zerofornothing.com/SignIn', {
      username: 'whatever',
      password: 'whatever',
      check: null
    })
    .then(data => {
      if (username != null) {
        navigation.navigate("home");
      }else{
        return false;
      }
    }).catch(error => {
      console.error('There has been a problem with your fetch operation:', error);
    });
};
