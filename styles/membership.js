var brother_pic_src = ""
const LINKEDIN_LOGO_URL = 'https://cdn.iconscout.com/icon/free/png-256/linkedin-36-151077.png'

function hover(element) {
  brother_pic_src = element.getAttribute('src');
  element.setAttribute('src', LINKEDIN_LOGO_URL);
}

function unhover(element) {
  element.setAttribute('src', brother_pic_src);
}


/*

ADD ONCLICK FUNCTION TO LINK TO LINKEDIN
HAVE THE ONCLICK RESET THE BROTHER PIC BEFORE LINKING

*/
