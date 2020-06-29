import $ from 'jquery';
export const  UserSignUp = (data , button) => {

  console.log(data);
  
  $.ajax({
  url : 'https://zerofornothing.com/SignUp',
  type : 'POST',
  data : data,
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


