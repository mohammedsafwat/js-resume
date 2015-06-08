var bio = {
	"name" : "Mohammed Safwat",
	"role" : "Mobile Developer",
	"contacts" : {
		"mobile" : "010*******8",
		"email" : "m.safwat@spyros-games.com",
		"twitter" : "@_MohamadSafwat",
		"github" : "mohammedsafwat",
		"blog" : "http://www.mohammedsafwat.com",
		"location" : "Cairo, Egypt"
	},
	"bioPic" : "images/fry.jpg",
	"welcomeMsg" : "Welcome to my resume!",
	"skills" : ["Python", "Rails", "Ruby", "Scala", "Objective-C", "C++", "C#", "C", "Java"],
	"display" : function() {}
};

var work = {
	"jobs" : [
		{
			"employer" : "Tryvin",
			"title" : "iOS Software Developer",
			"dates" : "Jan 2015 till now",
			"location" : "Cairo, Egypt",
			"description" : "Working on Boximize iOS application."
		},
		{
			"employer" : "Bravo Agency",
			"title" : "iOS Software Developer",
			"dates" : "Feb 2014 - Sep 2014",
			"location" : "Cairo, Egypt",
			"description" : "Working on the development of rotana.net mobile applications."
		},
	]
};

var schools = [
	{
		"name" : "Mansoura University",
		"degree" : "Bachelors of Engineering",
		"dates" : "2006 - 2013",
		"location" : "Mansoura, Egypt",
		"major" : "Communications and Electronics"
	},
	{
		"name" : "Cardiff University",
		"degree" : "Masters of Computer Science",
		"dates" : "2015 - now",
		"location" : "Cardiff, UK",
		"major" : "Computer Science"
	}
];

var onlineCourses = [
	{
		"name" : "Javascript Basics",
		"data" : "April, 2015"
	},
	{
		"name" : "Fullstack Foundations",
		"data" : "April, 2015"
	}
];

var education = {
	"schools" : schools,
	"onlineCourses" : onlineCourses,
	"display" : function() {}
}

var projects = {
	"projects" : [ {
		"title" : "Athorus",
		"dates" : "Feb 2012",
		"description" : "Twin stick shoot'em up mobile game",
		"images" : ["http://38.media.tumblr.com/94db1bf261903f34490b2cb12b945113/tumblr_inline_nd4ivtXNWB1s9o6xc.png",
					"http://38.media.tumblr.com/5e669db662fb96d7111249a16af5c83c/tumblr_inline_nd4ix3BxqZ1s9o6xc.png"
					]
		} ],
	"display" : function() {} 
}

var tag_to_replace = "%data%";
function insertDataInsideTag(tag, data)
{
	return tag.replace(tag_to_replace, data);
}

bio.display = function() {
	$("#header").prepend(insertDataInsideTag(HTMLheaderRole, bio.role));
	$("#header").prepend(insertDataInsideTag(HTMLheaderName, bio.name));
	$("#header").append(insertDataInsideTag(HTMLbioPic, bio.bioPic));
	$("#header").append(insertDataInsideTag(HTMLwelcomeMsg, bio.welcomeMsg));

	if(bio.skills.length > 0)
	{
		$("#header").append(HTMLskillsStart);

		for(var i = 0; i < bio.skills.length; i++)
		{
			var skill = insertDataInsideTag(HTMLskills, bio.skills[i]);
			$("#skills").append(skill);
		}
	}

	$("#topContacts").append(insertDataInsideTag(HTMLemail, bio.contacts.email));
	$("#topContacts").append(insertDataInsideTag(HTMLgithub, bio.contacts.github));
	$("#topContacts").append(insertDataInsideTag(HTMLmobile, bio.contacts.mobile));
	$("#topContacts").append(insertDataInsideTag(HTMLtwitter, bio.contacts.twitter));
	$("#footerContacts").append(insertDataInsideTag(HTMLemail, bio.contacts.email));
	$("#footerContacts").append(insertDataInsideTag(HTMLgithub, bio.contacts.github));
	$("#footerContacts").append(insertDataInsideTag(HTMLmobile, bio.contacts.mobile));
	$("#footerContacts").append(insertDataInsideTag(HTMLtwitter, bio.contacts.twitter));
}

work.display = function() {
	for(job in work["jobs"])
	{
		$("#workExperience").append(HTMLworkStart);

		var work_entry = work["jobs"][job];
		$(".work-entry:last").append(insertDataInsideTag(HTMLworkEmployer, work_entry["employer"]) + insertDataInsideTag(HTMLworkTitle, work_entry["title"]));
		$(".work-entry:last").append(insertDataInsideTag(HTMLworkDates, work_entry.dates));
		$(".work-entry:last").append("<br>");
		$(".work-entry:last").append(insertDataInsideTag(HTMLworkLocation, work_entry.location));
		$(".work-entry:last").append(insertDataInsideTag(HTMLworkDescription, work_entry.description));
	}
}

education.display = function() {
	$("#education").append(HTMLschoolStart);
	for(var i = 0; i < education["schools"].length; i++) {
		var school = education["schools"][i];
		$(".education-entry:last").append(insertDataInsideTag(HTMLschoolName, school.name) + insertDataInsideTag(HTMLschoolDegree, school.degree));
		$(".education-entry:last").append(insertDataInsideTag(HTMLschoolDates, school.dates));
		$(".education-entry:last").append("<br>");
		$(".education-entry:last").append(insertDataInsideTag(HTMLschoolLocation, school.location));
		$(".education-entry:last").append(insertDataInsideTag(HTMLschoolMajor, school.major));
	}
}

projects.display = function() {
	for(project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		$(".project-entry:last").append(insertDataInsideTag(HTMLprojectTitle, projects.projects[project].title));
		$(".project-entry:last").append(insertDataInsideTag(HTMLprojectDates, projects.projects[project].dates));
		$(".project-entry:last").append(insertDataInsideTag(HTMLprojectDescription, projects.projects[project].description));
		for(imageURL in projects.projects[project].images) {
			$(".project-entry:last").append(insertDataInsideTag(HTMLprojectImage, projects.projects[project].images[imageURL]));
		}
	}
}

function displayMap() {
	$("#mapDiv").append(googleMap);
}

bio.display();
work.display();
education.display();
projects.display();
displayMap();