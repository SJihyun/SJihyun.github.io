const token = '218449808.76ef1f0.a181682bd96c428498036b26cfad5b4f';
const num_photos = 4;
const instafeed = document.getElementById( 'instafeed' );
const scriptElement = document.createElement( 'script' );
 
window.processResult = function( data ) {
  /* Loop through all the pictures in the result and add them to the instafeed div */
  for( x in data.data ){
    instafeed.innerHTML += '<img src="' + data.data[x].images.low_resolution.url + '">';
  }
}

/* Create script element with the Instagram API as source and append it to the body */
scriptElement.setAttribute( 'src', 'https://api.instagram.com/v1/users/self/media/recent?access_token=' + token + '&count=' + num_photos + '&callback=processResult' );
document.body.appendChild( scriptElement );
