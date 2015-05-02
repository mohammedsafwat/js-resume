var tag_to_replace = "%data%";

function insertDataInsideTag(tag, data)
{
	return tag.replace(tag_to_replace, data);
}

var bio = {
	"contact" : {
	"name" : "Mohammed Safwat",
	"role" : "Mobile Developer",
	"mobile" : "010*******8",
	"email" : "m.safwat@spyros-games.com",
	"twitter" : "@_MohamadSafwat",
	"github" : "mohammedsafwat",
	"blog" : "http://www.mohammedsafwat.com"
	},
	"location" : "Cairo, Egypt",
	"bioPic" : "images/fry.jpg",
	"welcomeMsg" : "Welcome to my resume!",
	"skills" : ["Python", "Rails", "Ruby", "Scala", "Objective-C", "C++", "C#", "C", "Java"]
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
		"name" : "Javascript",
		"data" : "April, 2015"
	},
	{
		"name" : "Fullstack basics",
		"data" : "April, 2015"
	}
];

var education = {
	"schools" : schools,
	"onlineCourses" : onlineCourses
}

$("#header").prepend(insertDataInsideTag(HTMLheaderRole, bio.contact.role));
$("#header").prepend(insertDataInsideTag(HTMLheaderName, bio.contact.name));
$("#header").append(insertDataInsideTag(HTMLbioPic, bio.bioPic));
$("#header").append(insertDataInsideTag(HTMLwelcomeMsg, bio.welcomeMsg));

$("#header").append(HTMLskillsStart);
for(var i = 0; i < bio.skills.length; i++)
{
	var skill = insertDataInsideTag(HTMLskills, bio.skills[i]);
	$("#skills").append(skill);
}

$("#topContacts").append(insertDataInsideTag(HTMLemail, bio.contact.email));
$("#topContacts").append(insertDataInsideTag(HTMLgithub, bio.contact.github));
$("#topContacts").append(insertDataInsideTag(HTMLmobile, bio.contact.mobile));
$("#topContacts").append(insertDataInsideTag(HTMLtwitter, bio.contact.twitter));

$("#workExperience").append(HTMLworkStart);
for(var i = 0; i < work["jobs"].length; i++)
{
	var work_entry = work["jobs"][i];
	$(".work-entry").append(insertDataInsideTag(HTMLworkEmployer, work_entry["employer"]) + insertDataInsideTag(HTMLworkTitle, work_entry["title"]));
	$(".work-entry").append(insertDataInsideTag(HTMLworkDates, work_entry.dates));
	$(".work-entry").append("<br>");
	$(".work-entry").append(insertDataInsideTag(HTMLworkLocation, work_entry.location));
	$(".work-entry").append(insertDataInsideTag(HTMLworkDescription, work_entry.description));
}

$("#education").append(HTMLschoolStart);
for(var i = 0; i < education["schools"].length; i++) {
	var school = education["schools"][i];
	$(".education-entry").append(insertDataInsideTag(HTMLschoolName, school.name) + insertDataInsideTag(HTMLschoolDegree, school.degree));
	$(".education-entry").append(insertDataInsideTag(HTMLschoolDates, school.dates));
	$(".education-entry").append("<br>");
	$(".education-entry").append(insertDataInsideTag(HTMLschoolLocation, school.location));
	$(".education-entry").append(insertDataInsideTag(HTMLschoolMajor, school.major));
}

$("#footerContacts").append(insertDataInsideTag(HTMLemail, bio.contact.email));
$("#footerContacts").append(insertDataInsideTag(HTMLgithub, bio.contact.github));
$("#footerContacts").append(insertDataInsideTag(HTMLmobile, bio.contact.mobile));
$("#footerContacts").append(insertDataInsideTag(HTMLtwitter, bio.contact.twitter));
