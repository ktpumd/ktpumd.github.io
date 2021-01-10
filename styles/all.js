
/*
 * Functions to generate the header and footer to be used on every page
 */

function generateNavbar (activePage) {

  var navbar = $( "#NAV" );

  navbar.append('<a class="navbar-brand" href="index.html" id="navLogo"></a>');

  var navLogo = $( "#navLogo" );
  navLogo.append("<img src=\"assets/ktpninjalogo-removebg-preview.png\" style='width: 15%; height:15%;' class=\"d-inline-block align-top\" alt>");
  navLogo.append('<b>&ensp; &Kappa;&Theta;&Pi; </b>');

  navbar.append('<button class="navbar-toggler" id="navButton" type="button" data-toggle="collapse" data-target="#navbar1"><span class="navbar-toggler-icon"></span></button>');

  navbar.append('<div class="collapse navbar-collapse" id="navbar1"></div>');

  var menu = $( "#navbar1" );
  menu.append('<ul class="navbar-nav mr-auto"></ul>');

  menu.append('<ul class="navbar-nav" id="navButtons"></ul>');

  var navButtons = $( "#navButtons" );

  navButtons.append('<li class="nav-item"><a class="nav-link ' + (activePage == 'Home' ? 'active' : '') + '" href="index.html">Home</a></li>');
  navButtons.append('<li class="nav-item"><a class="nav-link ' + (activePage == 'Contact' ? 'active' : '') + '" href="contact.html">Get Involved</a></li>');
  navButtons.append('<li class="nav-item"><a class="nav-link ' + (activePage == 'Membership' ? 'active' : '') + '" href="membership.html">Meet Our Members</a></li>');

}


function generateFooter () {

  var footer = $( "#footer" );
  footer.append('<div class="row justify-content-center" id="footerRow"></div>');

  var footerRow = $( "#footerRow" );
  footerRow.append('<div class="col-sm text-center" id="footerLinks"></div>');

  var footerLinks = $( "#footerLinks" );

  footerLinks.append('<a href="https://www.facebook.com/KappaThetaPiUMD" style="margin:1.25%;color:rgb(16, 98, 250)" target="_blank"><i class="fa fa-facebook-square fa-3x" aria-hidden="true"></i></a>');
  footerLinks.append('<a href="https://www.instagram.com/ktpumd/" style="margin:1.25%;color:rgb(165, 70, 255)" target="_blank"><i class="fa fa-instagram fa-3x" aria-hidden="true"></i></a>');
  footerLinks.append('<a href="https://www.linkedin.com/company/kappa-theta-pi/" style="margin:1.25%;color:rgb(0, 89, 148)" target="_blank"><i class="fa fa-linkedin-square fa-3x" aria-hidden="true"></i></a>');
  footerLinks.append('<a href="https://twitter.com/KappaThetaPiUMD" style="margin:1.25%;color:rgb(57, 136, 255)" target="_blank"><i class="fa fa-twitter-square fa-3x" aria-hidden="true"></i></a>');

  footerLinks.append('<br>');

  footerLinks.append('<div class="footer-copyright text-center py-3">© 2020 Copyright Kappa Theta Pi Epsilon Chapter</div>');

}
