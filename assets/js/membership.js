
function sortListByLastName(list) {
  list.sort(function (a, b) { return a[1].localeCompare(b[1]); });
}

//////////////////////////////////////////////////////////////////////

function generateExecCard(firstName, lastName, position) {
  var col = document.createElement("div");
  // Use a grid that supports 3 per row on large screens, 3 on medium, 2 on small
  col.className = 'col-lg-4 col-md-4 col-6'
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

function addExecPositions() {
  const EXEC = membersList.ExecBoard;
  var ExecSection = document.getElementById("exec");
  // Create a single row and let Bootstrap's grid wrap columns responsively
  var currRow = document.createElement("div");
  currRow.className = "row justify-content-center";
  for (var position in EXEC) {
    currRow.appendChild(generateExecCard(EXEC[position][0], EXEC[position][1], position))
  }
  ExecSection.appendChild(currRow);

}

function addChairs() {
  const CHAIRS = membersList.Chairs;
  var ChairSection = document.getElementById("chairs");
  var currRow = document.createElement("div");
  currRow.className = "row justify-content-center";
  for (var position in CHAIRS) {
    currRow.appendChild(generateExecCard(CHAIRS[position][0], CHAIRS[position][1], position))
  }
  ChairSection.appendChild(currRow);
}

//////////////////////////////////////////////////////////////////////


function addBrothers() {
  const BROTHERS = membersList.Brothers;
  sortListByLastName(BROTHERS);
  var membersSection = document.getElementById("brothers");
  // Single row container; Bootstrap will wrap the cols for different breakpoints
  var currRow = document.createElement("div");
  currRow.className = "row justify-content-center";
  for (var i = 0; i < BROTHERS.length; i++) {
    var memberInfo = BROTHERS[i];
    currRow.appendChild(generateMemberCard(memberInfo[0], memberInfo[1]));
  }
  membersSection.appendChild(currRow);

}


function generateMemberCard(firstName, lastName) {
  var col = document.createElement("div");
  // Support 3 per row on large screens, 3 on medium, 2 on small/mobile
  col.className = 'col-lg-4 col-md-4 col-6'
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

//////////////////////////////////////////////////////////////////////

function addAlumni() {
  const ALUMNI = membersList.Alumni;
  var alumniSection = document.getElementById("alumni");
  newRow = document.createElement("div");
  newRow.className = "row";
  for (var key in ALUMNI) {
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
    sortListByLastName(ALUMNI[key]);
    for (var alumInfo = 0; alumInfo < ALUMNI[key].length; alumInfo++) {
      alumniNames.textContent += ALUMNI[key][alumInfo][0] + " " + ALUMNI[key][alumInfo][1] + "\r\n";
    }
    alumniNamesDiv.appendChild(alumniNames);
    newRow.appendChild(alumniNamesDiv);
    alumniSection.appendChild(newRow);
  }
}
