
COMPANY_IMAGES = [
    "google.png",
    "amazon.png",
    "facebook.png",
    "microsoft.png",
    "capitalone.png",
    "blackstone.png",
    "nasa.gif",
    "adobe.png",
    "ibm.jpg",
    "chewy.png",
    "twosigma.png",
    "EY.png"
]

function generateCompanyBoxes() {

  var companySection = $( "#COMPANIES" );

  COMPANY_IMAGES.forEach((item, i) => {

    companySection.append('<div class="col-lg-3 col-md-4 col-6 d-block mb-4 h-100" id="company' + i.toString() + '"></div>');

    var companyImage = $( "#company" +  i.toString());
    companyImage.append('<img class="img-fluid img-thumbnail" src="assets/alumni-connections/' + item + '">');

  });


}
