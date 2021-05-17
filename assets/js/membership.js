/*
 * The following are basic functions to ensure that when we hover over a brother's
 * picture, the linkedin logo shows and that clicking on the pic links to the right
 * linkedin page.
 */

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
  window.open(link);
}

/*
 ******************************************************************
 *
 *
 * EXEC BOARD
 *
 *
 ******************************************************************
 */




/*
 * This variable maps positions to brother information. The format of brother
 * information is a list wit first name, last name, and linkedin URL. When an exec
 * member graduates, simply cut their information and paste it into the appropriate
 * section in the alumni section. PLEASE STICK TO THE FORMAT THAT HAS BEEN ESTABLISHED!!!
 */

EXEC = {

  'President': ['Samantha', 'Tang', 'https://www.linkedin.com/in/stang10/'],
  'Vice President': ['Devika', 'Govindarajan'],
  'Director of Membership': ['Vid', 'Vashist', 'https://www.linkedin.com/in/vidushivashist/'],
  'Director of Standards': ['Katie', 'Kemp', 'https://www.linkedin.com/in/katherineekemp/'],
  'Director of Professional Development': ['Sahir', 'Mody', 'https://www.linkedin.com/in/sahir-mody/'],
  'Director of Finance': ['Edmund', 'Li', 'https://www.linkedin.com/in/liedmund/'],
  'Director of Philanthropy': ['Matthew', 'Gouzoulis', 'https://www.linkedin.com/in/mgouz/'],
  'Director of Technology': ['Austin', 'Hwa', 'https://www.linkedin.com/in/austin-hwa-574b10156/'],
  'Director of Engagement': ['Janaki', 'Patel', 'https://www.linkedin.com/in/janaki-patel-147437198/']

}

/*
 * This function generates the rows of exec member names and pictures.
 * Feel free to change the ENTRIES_PER_ROW or the styling.
 * PLEASE DO NOT MODIFY ANY OF THE LOGIC!!!
 *
 */
function addExecPositions() {
  const ENTRIES_PER_ROW = 3;
  var ExecSection = document.getElementById("exec");
  var rowNum = 0;
  var entriesInRow = 0;
  var i = 0;

  for(var position in EXEC) {
    if(entriesInRow == 0) {
      var currRow = document.createElement("div");
      currRow.className = "row";
    }
    currRow.appendChild(generateExecCard(EXEC[position][0], EXEC[position][1], position))
    entriesInRow += 1
    if(entriesInRow == ENTRIES_PER_ROW) {
      ExecSection.appendChild(currRow)
      entriesInRow = 0
    }
  }

}

function generateExecCard(firstName, lastName, position) {
  var col = document.createElement("div");
  col.className = 'col-md-4'
  var teamPlayer = document.createElement("div");
  teamPlayer.className = 'team-player'
  var img = document.createElement("img");
  img.src = "assets/img/brothers/" + firstName + "_" + lastName + ".jpg"
  img.alt = "Thumbnail Image"
  img.className = "rounded-circle img-fluid img-raised"
  execName = document.createElement("h4");
  execName.className = "bold";
  execName.textContent = firstName + " " + lastName;
  positionName = document.createElement("p");
  positionName.className = "category text-primary"
  positionName.textContent = position
  teamPlayer.appendChild(img);
  teamPlayer.appendChild(execName);
  teamPlayer.appendChild(positionName);
  col.appendChild(teamPlayer);
  return col
}

/*
 ******************************************************************
 *
 *
 * BROTHERS
 *
 *
 ******************************************************************
 */


/*
 * This variable stores brother names and linkedins in a list of lists. When adding
 * new pledge classes, please insert them in sorted oder and add their photo to
 * the brothers directory with the naming convention "First_Last.jpg". When a brother
 * graduates, simply cut their info from this list and paste it into the appropriate
 * pledge class in the alumni section. PLEASE STICK TO THE FORMAT THAT HAS BEEN ESTABLISHED!!!
 */

BROTHERS = [

  ['Akriti', 'Tripathi', 'https://www.linkedin.com/in/akriti-tripathi/'],
  ['Amanda', 'Ma', 'https://www.linkedin.com/in/amandama2300/'],
  ['Ananya', 'Nadig', 'https://www.linkedin.com/in/ananyanadig/'],
  ['Andrew', 'Stehman', 'https://www.linkedin.com/in/andrewstehman/'],
  ['Casey', 'Puentes', 'https://www.linkedin.com/in/caseypuentes/'],
  ['Christian', 'Tonti', 'https://www.linkedin.com/in/christian-tonti/'],

  ['Christopher', 'Tang', 'https://www.linkedin.com/in/christopher-tang-25aa101b8'],
  ['Diana', 'Kerr', 'https://www.linkedin.com/in/diana-kerr-2249a1193/'],
  ['Emily', 'Chang', 'https://www.linkedin.com/in/e-chang/'],
  ['Eric', 'Gorner', 'https://www.linkedin.com/in/eric-gorner-53851a17a'],
  ['Esther', 'Zhang', 'https://www.linkedin.com/in/esther-zhang-036237184/'],
  ['Ethan', 'Smiley', 'https://www.linkedin.com/in/ethan-smiley-123463181/'],

  ['Grant', 'Tamrakar', 'https://www.linkedin.com/in/grant-tamrakar-802b90181/'],
  ['Harleen', 'Kaur', 'https://www.linkedin.com/in/kaur-h/'],
  ['Hira', 'Mahmood', 'https://www.linkedin.com/in/h-mahmood/'],
  ['Jasmine', 'Okebugwu', 'https://www.linkedin.com/in/jasmineokebugwu/'],
  ['Joshua', 'Choi', 'https://www.linkedin.com/in/joshua--choi/'],
  ['June', 'Tian', 'https://www.linkedin.com/in/chengzi-tian-ab2923198/'],

  ['Kate', 'Vo', 'https://www.linkedin.com/in/katherine-vo/'],
  ['Katie', 'Vincler', 'https://www.linkedin.com/in/katherine-vincler/'],
  ['Kevin', 'Hall', 'https://www.linkedin.com/in/khall04/'],
  ['Lauren', 'LaTeef', 'https://www.linkedin.com/in/lauren-lateef-325446192/'],
  ['Leo', 'Wu', 'https://www.linkedin.com/in/leowu39'],
  ['Lillian', 'Nose', 'https://www.linkedin.com/in/lillian-nose/'],

  ['Lily', 'Etareri', 'https://www.linkedin.com/in/eloho-etareri'],
  ['Maggie', 'Zhou', 'https://www.linkedin.com/in/maggie-zhou-991b93194/'],
  ['Mahum', 'Qadeer', 'https://www.linkedin.com/in/mahumqadeer'],
  ['Mei', 'Blatchford', 'https://www.linkedin.com/in/mei-an-blatchford-39b839187/'],
  ['Nik', 'Nair', 'https://www.linkedin.com/in/nik-nair/'],
  ['Rafay', 'Khan', 'https://www.linkedin.com/in/muhammadrafaykhan/'],

  ['Richard', 'Bui', 'https://www.linkedin.com/in/richard-bui-6ba38719a/'],
  ['Rida', 'Habib', 'https://www.linkedin.com/in/rida-habib-29065316b/'],
  ['Rishi', 'Papani', 'https://www.linkedin.com/in/rishi-s-papani-736149190/'],
  ['Rishi', 'Parikh', 'https://www.linkedin.com/in/rrparikh/'],
  ['Shreyas', 'Vaderiyattil', 'https://www.linkedin.com/in/shreyasvaderiyattil'],
  ['Sophie', 'Jorgensen', 'https://www.linkedin.com/in/sophie-jorgensen/'],

  ['Steven', 'Garrido', 'https://www.linkedin.com/in/stevenagarrido/'],
  ['Suraj', 'Narang', 'https://www.linkedin.com/in/suraj-narang'],
  ['Thy', 'Hoang', 'https://www.linkedin.com/in/thy-hoang-8730b81a4/'],
  ['Tina', 'Le', 'https://www.linkedin.com/in/tina-le218/'],
  ['Vidit', 'Makwana', 'https://bit.ly/viditmakwana'],
  ['Vikram', 'Adipudi', 'https://www.linkedin.com/in/vikram-adipudi-27025519b/'],

  ['Vivek', 'Waghray', 'https://www.linkedin.com/in/vivek-waghray-812079208/'],
  ['blank','blank'],
  ['blank','blank'],
  ['blank','blank'],
  ['blank','blank'],
  ['blank','blank']

]

function addBrothers() {
  const ENTRIES_PER_ROW = 6;
  var membersSection = document.getElementById("brothers");
  var entriesInRow = 0;
  for(var i = 0; i < BROTHERS.length; i++) {
    var memberInfo = BROTHERS[i]
    if(entriesInRow == 0) {
      var currRow = document.createElement("div");
      currRow.className = "row";
    }
    currRow.appendChild(generateMemberCard(memberInfo[0], memberInfo[1]))
    entriesInRow += 1
    if(entriesInRow == ENTRIES_PER_ROW) {
      membersSection.appendChild(currRow)
      entriesInRow = 0
    }
  }
}

function generateMemberCard(firstName, lastName) {
  var col = document.createElement("div");
  col.className = 'col-md-2 col-6'
  var teamPlayer = document.createElement("div");
  teamPlayer.className = 'team-player'
  var img = document.createElement("img");
  img.src = "assets/img/brothers/" + firstName + "_" + lastName + ".jpg"
  img.alt = "Thumbnail Image"
  img.className = "rounded-circle img-fluid"
  memberName = document.createElement("h5");
  memberName.className = "bold";
  if (firstName == 'blank') {
    memberName.textContent = "\r\n";
  } else {
    memberName.textContent = firstName + "\r\n" + lastName;
  }
  memberName.setAttribute('style', 'white-space: pre;');
  teamPlayer.appendChild(img);
  teamPlayer.appendChild(memberName);
  col.appendChild(teamPlayer);
  return col
}

/*
 ******************************************************************
 *
 *
 * ALUMNI
 *
 *
 ******************************************************************
 */


/*
 * This variable stores alumni names and linkedins in a dictionary seperated by
 * pledge class. When adding new alumni, please insert them in sorted order into
 * their pledge class and PLEASE STICK TO THE FORMAT THAT HAS BEEN ESTABLISHED!!!
 */

ALUMNI = {

  "Founders": [
    ['Alicia', 'Curcuru', 'https://www.linkedin.com/in/alicia-curcuru-7745bb108/'],
    ['Ben', 'Nwokeleme', 'https://www.linkedin.com/in/ben-nwokeleme/'],
    ['Chantelle', 'Rodriguez', 'https://www.linkedin.com/in/chantellerodriguez/'],
    ['Garima', 'Dewan', 'https://www.linkedin.com/in/garima-dewan-3728b6a7/'],
    ['Jonathan', 'Lee', 'https://www.linkedin.com/in/jalee2221/'],
    ['Jordyn', 'Berry', 'https://www.linkedin.com/in/jordyn-berry/'],
    ['Lydia', 'Spurrier', 'https://www.linkedin.com/in/lydia-spurrier/'],
    ['Sukhneet', 'Kaur', 'https://www.linkedin.com/in/sukhneetkaur721/']
  ],

  "Alpha": [
    ['Ava', 'Williams', 'https://www.linkedin.com/in/ava--williams/'],
    ['Chris', 'Truong', 'https://www.linkedin.com/in/christruongumd/'],
    ['Daniel', 'Aivazov', 'https://www.linkedin.com/in/daniel-aivazov-ab6933139/'],
    ['Daniel', 'Holten', 'https://www.linkedin.com/in/daniel-holten-5a9250162/'],
    ['Ekansh', 'Vinaik', 'https://www.linkedin.com/in/evinaik/'],
    ['Harry', 'Irvine', 'https://www.linkedin.com/in/harry-irvine-iv/'],
    ['Jessica', 'Kerry', 'https://www.linkedin.com/in/jdkerry/'],
    ['JT', 'Field', 'https://www.linkedin.com/in/jtfield/'],
    ['Marc', 'Marcelin', 'https://www.linkedin.com/in/marc-marcelin-6b4aab13b/'],
    ['Matthew', 'Aird', 'https://www.linkedin.com/in/matthew-aird/'],
    ['Niharika', 'Sahay', 'https://www.linkedin.com/in/niharika-sahay/'],
    ['Rachit', 'Chadha', 'https://www.linkedin.com/in/rachitchadha/'],
    ['Ryan', 'Lam', 'https://www.linkedin.com/in/ryan-lam-151b00168/'],
    ['Swati', 'Adipudi', 'https://www.linkedin.com/in/swati-adipudi'],
    ['Thaddeus', 'Lee-Tyson', 'https://www.linkedin.com/in/thaddeusleetyson/']
  ],

  "Beta": [
    ['Ameya', 'Sampath', 'https://www.linkedin.com/in/ameya-sampath-994819159/'],
    ['Corie', 'Brown', 'https://www.linkedin.com/in/corie-brown-772ba7154/'],
    ['Faatemah', 'Mallick', 'https://www.linkedin.com/in/faatemah-mallick/'],
    ['Isabelle', 'Stevens', 'https://www.linkedin.com/in/isabella-stevens/'],
    ['James', 'Bates', 'https://www.linkedin.com/in/batesj98/'],
    ['Jeffrey', 'Najmi', 'https://www.linkedin.com/in/jeffrey-najmi-192a77162/'],
    ['Michael', 'Stripling', 'https://www.linkedin.com/in/michael-stripling-898053138/'],
    ['Mike', 'Walker', 'https://www.linkedin.com/in/mwalker1380/'],
    ['Prachi', 'Gaur', 'https://www.linkedin.com/in/pgaur1/'],
    ['Rahul', 'Krishnan', 'https://www.linkedin.com/in/rahul-krishnan-/'],
    ['Ronit', 'Gopalani', 'https://www.linkedin.com/in/ronit-gopalani-7a816a62/'],
    ['Ryan', 'McCarthy', 'https://www.linkedin.com/in/ryan-mccarthy-a664b416b/'],
    ['Ryan', 'Havel', 'https://www.linkedin.com/in/havelr/'],
    ['Shad', 'Khan', 'https://www.linkedin.com/in/shadikhan/'],
    ['Shlok', 'Khandelwal', 'https://www.linkedin.com/in/shlokkh/'],
    ['Tyler', 'Behr', 'https://www.linkedin.com/in/tylerbehr/']
  ],

  "Gamma": [
    ['Deep', 'Patel', 'https://www.linkedin.com/in/dpatl/'],
    ['Dominique', 'Rafael', 'https://www.linkedin.com/in/dominique-r-a853ab123/'],
    ['Ines', 'Benmohamed', 'https://www.linkedin.com/in/ines-benmohamed-7a1717181/'],
    ['Isa', 'Ahmed', 'https://www.linkedin.com/in/isaahmad/'],
    ['Jenny', 'Corzo', 'https://www.linkedin.com/in/jencorzo/'],
    ['Kendall', 'Wong', 'https://www.linkedin.com/in/kendall-wong/'],
    ['Siraj', 'Ayornu', 'https://www.linkedin.com/in/sayornu/'],
    ['Timmy', 'Trapaidze', 'https://www.linkedin.com/in/timmy-trapaidze/']
  ],

  "Delta": [
    ['Amy', 'Zheng', 'https://www.linkedin.com/in/amy--zheng/'],
    ['Andrew', 'Cunniff', 'https://www.linkedin.com/in/andrew-cunniff/'],
    ['Kati', 'Ilieva', 'https://www.linkedin.com/in/katrin-sofi-ilieva/'],
    ['Ummey', 'Hossain', 'https://www.linkedin.com/in/ummey-hossain/'],
    ['Val', 'Arriola-Pomasoncco', 'https://www.linkedin.com/in/valeriarriola/']
  ],

  "Epsilon": [
    ['John', 'Gao', 'https://www.linkedin.com/in/jgao1238/'],
    ['Matthew', 'Leins', 'https://www.linkedin.com/in/matthew-leins/'],
    ['Melvyn', 'Hullana', 'https://www.linkedin.com/in/melvynh/'],
    ['Nithin', 'Richard', 'https://www.linkedin.com/in/nithin-richard/'],
    ['Priyanka', 'Kishore', 'https://www.linkedin.com/in/priyanka-m-kishore/']
  //  ['Yomi', 'Omogbehin', 'https://www.linkedin.com/in/yomi-omo/']

  ]

}

function addAlumni() {
  var alumniSection = document.getElementById("alumni");
  newRow = document.createElement("div");
  newRow.className = "row";
  for(var key in ALUMNI) {
    alumniClassName = document.createElement("div");
    alumniClassName.className = "col-lg-2 col-md-6";
    header = document.createElement("h3");
    header.textContent = key;
    alumniClassName.appendChild(header);
    newRow.appendChild(alumniClassName);
    alumniNamesDiv = document.createElement("div");
    alumniNamesDiv.className = "col-lg-2 col-md-6";
    alumniNames = document.createElement("p");
    alumniNames.setAttribute('style', 'white-space: pre;');
    for(var alumInfo = 0; alumInfo < ALUMNI[key].length; alumInfo++) {
      alumniNames.textContent += ALUMNI[key][alumInfo][0] + " " + ALUMNI[key][alumInfo][1] + "\r\n";
    }
    alumniNamesDiv.appendChild(alumniNames);
    newRow.appendChild(alumniNamesDiv);
    alumniSection.appendChild(newRow);
  }
}
