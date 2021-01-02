
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

  'President' : ['Dominique', 'Rafael', 'https://www.linkedin.com/in/dominique-r-a853ab123/'],
  'Vice President' : ['Sahir', 'Mody', 'https://www.linkedin.com/in/sahir-mody/'],
  'Director of Membership' : ['Samantha', 'Tang', 'https://www.linkedin.com/in/stang10/'],
  'Director of Standards' : ['Jenny', 'Corzo', 'https://www.linkedin.com/in/jencorzo/'],
  'Director of Professional Development' : ['Shlok', 'Khandelwal', 'https://www.linkedin.com/in/shlokkh/'],
  'Director of Finance' : ['Rida', 'Habib', 'https://www.linkedin.com/in/rida-habib-29065316b/'],
  'Director of Philanthropy' : ['Ummey', 'Hossain', 'https://www.linkedin.com/in/ummey-hossain/'],
  'Director of Technology' : ['Esther', 'Zhang', 'https://www.linkedin.com/in/esther-zhang-036237184/'],
  'Director of Engagement' : ['Devika', 'Govindarajan']

}

/*
 * This function generates the rows of exec member names and pictures.
 * Feel free to change the ENTRIES_PER_ROW or the styling.
 * PLEASE DO NOT MODIFY ANY OF THE LOGIC!!!
 */
function generateExecEntries () {

  const ENTRIES_PER_ROW = 3;

  var htmlExecSection = $( "#EXEC" );

  var rowNum = 0;
  var entriesInRow = 0;
  var i = 0;

  for (var position in EXEC) {

    // create a new row when previous row is filled
    if (entriesInRow == 0) {
      htmlExecSection.append('<div class="row justiy-content-center" id="execRow' + rowNum.toString() + '">');
    }

    rowEl = $( "#execRow" + rowNum.toString() );
    rowEl.append('<div class="col-sm text-center" id="exec' + i.toString() + '">');

    // add brother names and images
    var entry = $( "#exec" + i.toString() );
    var item = EXEC[position];
    entry.append("<img class='img-fluid rounded-circle' src='brothers/" + item[0] + "_" + item[1] + ".jpg' data-holder-rendered='true' onmouseover='hoverBrotherPic(this);' onmouseout='unhoverBrotherPic(this);' onclick='redirectBrotherPic(this, \"" + item[2] + "\");'>");
    entry.append('<p><b><br>' + item[0] + ' ' + item[1] +'</b></p>');
    entry.append('<p>' + position + '</p>');

    rowEl.append('</div>');

    entriesInRow += 1;

    // at the end of a row, close the row div
    if (entriesInRow == ENTRIES_PER_ROW) {
      htmlExecSection.append('</div>');
      htmlExecSection.append('<br>');
      entriesInRow = 0;
      rowNum += 1;
    }

    i += 1;

  }

  // make sure the row div gets closed
  if (entriesInRow != 0) {
    htmlExecSection.append('</div>');
  }

  // fill the alumni div so that the spacing is not off
  while (entriesInRow != 0  && entriesInRow < ENTRIES_PER_ROW) {
    rowEl.append('<div class="col-sm text-center">');
    rowEl.append('</div>');
    entriesInRow += 1;
  }

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
  ['Amy', 'Zheng', 'https://www.linkedin.com/in/amy--zheng/'],
  ['Andrew', 'Cunniff', 'https://www.linkedin.com/in/andrew-cunniff/'],
  ['Andrew', 'Stehman', 'https://www.linkedin.com/in/andrewstehman/'],
  ['Austin', 'Hwa', 'https://www.linkedin.com/in/austin-hwa-574b10156/'],

  ['Christian', 'Tonti', 'https://www.linkedin.com/in/christian-tonti/'],
  ['Christopher', 'Tang', 'https://www.linkedin.com/in/christopher-tang-25aa101b8'],
  ['Daniel', 'Holten', 'https://www.linkedin.com/in/daniel-holten-5a9250162/'],
  ['Diana', 'Kerr', 'https://www.linkedin.com/in/diana-kerr-2249a1193/'],
  ['Edmund', 'Li', 'https://www.linkedin.com/in/liedmund/'],
  ['Emily', 'Chang', 'https://www.linkedin.com/in/e-chang/'],

  ['Eric', 'Gorner', 'https://www.linkedin.com/in/eric-gorner-53851a17a'],
  ['Ethan', 'Smiley', 'https://www.linkedin.com/in/ethan-smiley-123463181/'],
  ['Harleen', 'Kaur', 'https://www.linkedin.com/in/kaur-h/'],
  ['Hira', 'Mahmood', 'https://www.linkedin.com/in/h-mahmood/'],
  ['Janaki', 'Patel', 'https://www.linkedin.com/in/janaki-patel-147437198/'],
  ['Jasmine', 'Okebugwu', 'https://www.linkedin.com/in/jasmineokebugwu/'],

  ['Jessica', 'Kerry', 'https://www.linkedin.com/in/jdkerry/'],
  ['John', 'Gao', 'https://www.linkedin.com/in/jgao1238/'],
  ['Joshua', 'Choi', 'https://www.linkedin.com/in/joshua--choi/'],
  ['June', 'Tian', 'https://www.linkedin.com/in/chengzi-tian-ab2923198/'],
  ['Kate', 'Vo', 'https://www.linkedin.com/in/katherine-vo/'],
  ['Kati', 'Ilieva', 'https://www.linkedin.com/in/katrin-sofi-ilieva/'],

  ['Katie', 'Kemp', 'https://www.linkedin.com/in/katherineekemp/'],
  ['Katie', 'Vincler', 'https://www.linkedin.com/in/katherine-vincler/'],
  ['Lauren', 'LaTeef', 'https://www.linkedin.com/in/lauren-lateef-325446192/'],
  ['Leo', 'Wu', 'https://www.linkedin.com/in/leowu39'],
  ['Lillian', 'Nose', 'https://www.linkedin.com/in/lillian-nose/'],
  ['Maggie', 'Zhou', 'https://www.linkedin.com/in/maggie-zhou-991b93194/'],

  ['Matthew', 'Gouzoulis', 'https://www.linkedin.com/in/mgouz/'],
  ['Matthew', 'Leins', 'https://www.linkedin.com/in/matthew-leins/'],
  ['Mei', 'Blatchford', 'https://www.linkedin.com/in/mei-an-blatchford-39b839187/'],
  ['Melvyn', 'Hullana', 'https://www.linkedin.com/in/melvynh/'],
  ['Nik', 'Nair', 'https://www.linkedin.com/in/nik-nair/'],
  ['Nithin', 'Richard', 'https://www.linkedin.com/in/nithin-richard/'],

  ['Prachi', 'Gaur', 'https://www.linkedin.com/in/pgaur1/'],
  ['Priyanka', 'Kishore', 'https://www.linkedin.com/in/priyanka-m-kishore/'],
  ['Rafay', 'Khan', 'https://www.linkedin.com/in/muhammadrafaykhan/'],
  ['Rahul', 'Krishnan', 'https://www.linkedin.com/in/rahul-krishnan-/'],
  ['Richard', 'Bui', 'https://www.linkedin.com/in/richard-bui-6ba38719a/'],
  ['Rishi', 'Papani', 'https://www.linkedin.com/in/rishi-s-papani-736149190/'],

  ['Rishi', 'Parikh', 'https://www.linkedin.com/in/rrparikh/'],
  ['Ryan', 'Havel', 'https://www.linkedin.com/in/havelr/'],
  ['Ryan', 'Lam', 'https://www.linkedin.com/in/ryan-lam-151b00168/'],
  ['Shreyas', 'Vaderiyattil', 'https://www.linkedin.com/in/shreyasvaderiyattil'],
  ['Siraj', 'Ayornu', 'https://www.linkedin.com/in/sayornu/'],
  ['Sophie', 'Jorgensen', 'https://www.linkedin.com/in/sophie-jorgensen/'],

  ['Thy', 'Hoang', 'https://www.linkedin.com/in/thy-hoang-8730b81a4/'],
  ['Timmy', 'Trapaidze', 'https://www.linkedin.com/in/timmy-trapaidze/'],
  ['Val', 'Arriola-Pomasoncco', 'https://www.linkedin.com/in/valeriarriola/'],
  ['Vid', 'Vashist', 'https://www.linkedin.com/in/vidushivashist/'],
  ['Vikram', 'Adipudi', 'https://www.linkedin.com/in/vikram-adipudi-27025519b/'],
  ['Yomi', 'Omogbehin', 'https://www.linkedin.com/in/yomi-omo/']

]

/*
 * This function generates the rows of brother names and pictures.
 * Feel free to change the ENTRIES_PER_ROW or the styling.
 * PLEASE DO NOT MODIFY ANY OF THE LOGIC!!!
 */
function generateBrotherEntries () {

  const ENTRIES_PER_ROW = 6;

  var htmlBrothersSection = $( "#BROTHERS" );

  var rowNum = 0;
  var entriesInRow = 0;

  var rowEl = null;

  BROTHERS.forEach((item, i) => {

    // create a new row when previous row is filled
    if (entriesInRow == 0) {
      htmlBrothersSection.append('<div class="row" justify-content-center id="brotherRow' + rowNum.toString() + '">');
    }

    rowEl = $( "#brotherRow" + rowNum.toString() );
    rowEl.append('<div class="col-sm text-center" id="brother' + i.toString() + '">');

    // add brother names and images
    var entry = $( "#brother" + i.toString() );
    entry.append("<img class='img-fluid rounded-circle' src='brothers/" + item[0] + "_" + item[1] + ".jpg' data-holder-rendered='true' onmouseover='hoverBrotherPic(this);' onmouseout='unhoverBrotherPic(this);' onclick='redirectBrotherPic(this, \"" + item[2] + "\");'>");
    entry.append('<p>' + item[0] + ' ' + item[1] +'</p>')

    rowEl.append('</div>');

    entriesInRow += 1;

    // at the end of a row, close the row div
    if (entriesInRow == ENTRIES_PER_ROW) {
      htmlBrothersSection.append('</div>');
      entriesInRow = 0;
      rowNum += 1;
    }

  });

  // make sure the row div gets closed
  if (entriesInRow != 0) {
    htmlBrothersSection.append('</div>');
  }

  // fill the alumni div so that the spacing is not off
  while (entriesInRow != 0  && entriesInRow < ENTRIES_PER_ROW) {
    rowEl.append('<div class="col-sm text-center">');
    rowEl.append('</div>');
    entriesInRow += 1;
  }

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

  "Founders" : [
      ['Alicia', 'Curcuru', 'https://www.linkedin.com/in/alicia-curcuru-7745bb108/'],
      ['Ben', 'Nwokeleme', 'https://www.linkedin.com/in/ben-nwokeleme/'],
      ['Chantelle', 'Rodriguez', 'https://www.linkedin.com/in/chantellerodriguez/'],
      ['Garima', 'Dewan', 'https://www.linkedin.com/in/garima-dewan-3728b6a7/'],
      ['Jonathan', 'Lee', 'https://www.linkedin.com/in/jalee2221/'],
      ['Jordyn', 'Berry', 'https://www.linkedin.com/in/jordyn-berry/'],
      ['Lydia', 'Spurrier', 'https://www.linkedin.com/in/lydia-spurrier/'],
      ['Sukhneet', 'Kaur', 'https://www.linkedin.com/in/sukhneetkaur721/']
    ],

  "Alpha" : [
    ['Ava', 'Williams', 'https://www.linkedin.com/in/ava--williams/'],
    ['Daniel', 'Aivazov', 'https://www.linkedin.com/in/daniel-aivazov-ab6933139/'],
    ['Ekansh', 'Vinaik', 'https://www.linkedin.com/in/evinaik/'],
    ['Harry', 'Irvine', 'https://www.linkedin.com/in/harry-irvine-iv/'],
    ['JT', 'Field', 'https://www.linkedin.com/in/jtfield/'],
    ['Marc', 'Marcelin', 'https://www.linkedin.com/in/marc-marcelin-6b4aab13b/'],
    ['Matthew', 'Aird', 'https://www.linkedin.com/in/matthew-aird/'],
    ['Niharika', 'Sahay', 'https://www.linkedin.com/in/niharika-sahay/'],
    ['Rachit', 'Chadha', 'https://www.linkedin.com/in/rachitchadha/'],
    ['Swati', 'Adipudi', 'https://www.linkedin.com/in/swati-adipudi'],
    ['Thaddeus', 'Lee-Tyson', 'https://www.linkedin.com/in/thaddeusleetyson/']
  ],

  "Beta" : [
    ['Ameya', 'Sampath', 'https://www.linkedin.com/in/ameya-sampath-994819159/'],
    ['Corie', 'Brown', 'https://www.linkedin.com/in/corie-brown-772ba7154/'],
    ['Faatemah', 'Mallick', 'https://www.linkedin.com/in/faatemah-mallick/'],
    ['Isabelle', 'Stevens', 'https://www.linkedin.com/in/isabella-stevens/'],
    ['James', 'Bates', 'https://www.linkedin.com/in/batesj98/'],
    ['Jeffrey', 'Najmi', 'https://www.linkedin.com/in/jeffrey-najmi-192a77162/'],
    ['Michael', 'Stripling', 'https://www.linkedin.com/in/michael-stripling-898053138/'],
    ['Mike', 'Walker', 'https://www.linkedin.com/in/mwalker1380/'],
    ['Ronit', 'Gopalani', 'https://www.linkedin.com/in/ronit-gopalani-7a816a62/'],
    ['Ryan', 'McCarthy', 'https://www.linkedin.com/in/ryan-mccarthy-a664b416b/'],
    ['Shad', 'Khan', 'https://www.linkedin.com/in/shadikhan/'],
    ['Tyler', 'Behr', 'https://www.linkedin.com/in/tylerbehr/']
  ],

  "Gamma" : [
    ['Deep', 'Patel', 'https://www.linkedin.com/in/dpatl/'],
    ['Ines', 'Benmohamed', 'https://www.linkedin.com/in/ines-benmohamed-7a1717181/'],
    ['Isa', 'Ahmed', 'https://www.linkedin.com/in/isaahmad/'],
    ['Kendall', 'Wong', 'https://www.linkedin.com/in/kendall-wong/']
  ]

}


/*
 * This function generates the boxes with alumni names using the data above.
 * Feel free to change the CARDS_PER_ROW or the styling of any of the cards.
 * PLEASE DO NOT MODIFY ANY OF THE LOGIC!!!
 */
function generateAlumniBoxes () {

  const CARDS_PER_ROW = 4;

  var htmlAlumniSection = $( "#ALUMNI" );

  var rowNum = 0;
  var cardsInRow = 0;

  for (var key in ALUMNI) {

    // create a new row when previous row is filled
    if (cardsInRow == 0) {
      htmlAlumniSection.append('<div class="row" id="alumniRow' + rowNum.toString() + '">');
    }

    var rowEl = $( "#alumniRow" + rowNum.toString() );
    rowEl.append('<div class="col-sm text-center" id="' + key + '">');

    // create the card
    var classSection = $( "#" + key );
    classSection.append('<div class="card" id="' + key + 'Card">');

    // create the header
    var classCard = $( "#" + key + "Card" );
    classCard.append('<br>');
    classCard.append('<h2>' + key + '</h2>');

    //add all alumni names
    var alumList = ALUMNI[key];
    alumList.forEach((item, i) => {
      classCard.append('<a href="' + item[2] + '">' + item[0] + ' ' + item[1] + '</a>')
    });

    // close some of the divs
    classCard.append('<br>');
    classSection.append('</div>');
    rowEl.append('</div>');

    cardsInRow += 1;

    // at the end of a row, close the row div
    if (cardsInRow == CARDS_PER_ROW) {
      htmlAlumniSection.append('</div>');
      htmlAlumniSection.append('<br>');
      cardsInRow = 0;
      rowNum += 1;
    }

  }

  // make sure the row div gets closed
  if (cardsInRow != 0) {
    htmlAlumniSection.append('</div>');
  }

  // fill the alumni div so that the spacing is not off
  while (cardsInRow != 0  && cardsInRow < CARDS_PER_ROW) {
    rowEl.append('<div class="col-sm text-center">');
    rowEl.append('</div>');
    cardsInRow += 1;
  }

}
