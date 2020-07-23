export const UserSignIn = (actions, navigation, username, password, check) => {
  //alert(username);
  //actions.setSubmitting(false);
  // navigation.navigate("home");
  fetch('https://zerofornothing.com/SignIn', {
    headers: {
      'Content-Type': 'application/json'
    },
    mode: 'cors',
    method: 'post',
    body: JSON.stringify({username: username, password: password, check: check})
  }).then(function(response) {
    return response.json();
  }).then(function(username) {
    if (username != null) {
      navigation.navigate("home");
    }
  }).catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });
};
