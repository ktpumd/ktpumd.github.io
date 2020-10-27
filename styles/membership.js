var brother_pic_src = ""
const LINKEDIN_LOGO_URL = 'https://cdn.iconscout.com/icon/free/png-256/linkedin-36-151077.png'

function hoverBrotherPic(element) {
  brother_pic_src = element.getAttribute('src');
  element.setAttribute('src', LINKEDIN_LOGO_URL);
}

function unhoverBrotherPic(element) {
  element.setAttribute('src', brother_pic_src);
}

function redirectBrotherPic(element, link) {
  element.setAttribute('src', brother_pic_src);
  window.location.href = link;
}
