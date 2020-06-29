import $ from 'jquery';
export const UserSignIn = (username , password , check) => {
  //console.log(username);
  
  $.ajax({
    url : 'https://zerofornothing.com/SignIn',
    type : 'POST',
    data : JSON.stringify({ username: username , password: password , check: check }),
    headers: {
        'Content-Type': 'application/json'
    },
    error : function(request,error)
    {
        console.log(JSON.stringify(request));
    }
  }).done(function( data ) {
    console.log(data);
  });

}