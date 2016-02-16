/*
This file is for entering data to be replaced in functions filling in the website.
*/

//The bio object is for contact and personal information
var bio = {
	"name" : "Alex Hanson",
	"role" : "Environmental/Data Scientist",
	"contacts": {
		"email" : "alexlhanson@gmail.com",
		"mobile" : "(503) 442-3458",
		"github" : "alexlhanson",
		"location" : "Beaverton, Oregon"
	},
	"welcomeMessage" : "Thank you for visiting my resume page.  On this page you will find my education, work experience, and skills as well as link to my programming portfolio.",
	"skills" : ["Environmental Risk Assessment", "Data Science/Analysis", "Technical Report Writing", "Environmental Sampling", "Front-End Development(Python, HTML, CSS, JS)"],
	"headshot" : "images/me.jpg"
};

var work = {
	"jobs": [
		{
			"employer" : "Northwest Baha'i Regional Training Institute",
			"title" : "Regional Coordinator",
			"dates" : "2012 - 2015",
			"location" : "Beaverton, Oregon",
			"description" : "Responsible for development, training and oversight of a service-based program for teams of young adults; Coordination of community building resource training program for Oregon/Washington."
		},
		{
			"employer" : "MWH Global Inc.",
			"title" : "Associate Risk Assessor/Environmental Scientist",
			"dates" : "2007 - 2012",
			"location" : "Portland, Oregon",
			"description" : "Wide responsibilities including: human health and ecological risk assessments, toxicology and literature reviews, water sampling, storm water and groundwater monitoring and reporting, ecological surveys, participation in mediation processes, document review, technical report writing and responses to comments documents."
		},
		{
			"employer" : "Institute for Watershed Studies",
			"title" : "Research Assistant",
			"dates" : "2004 - 2006",
			"location" : "Portland, Oregon",
			"description" : "Responsible for storm water, stream and lake sampling along with laboratory analyses and standards preparation."
		},
	],
	"volunteer": [
		{
			"organization": "Junior Youth Empowerment Program",
			"title" :  "Group Animator",
			"dates" : "2011-2015",
			"location" : "Beaverton, Oregon",
			"description" : "Worked with a service-based group of youth and middle schoolers to help them understand their capacity to better their neighborhoods, their own lives and contribute to community life."
		},
		{
			"organization": "Baha'i World Centre",
			"title" :  "Office Manager/Surveyor",
			"dates" : "2006 - 2007",
			"location" : "Haifa, Israel",
			"description" : "Managed a gardens office for nearly 50 employees from various countries and backgrounds during design and construction efforts.  Worked with payroll, purchasing, supplies, surveying and planning of construction timelines."
		},
		{
			"organization": "Dorothy Baker Environmental Studies Center",
			"title" :  "Projecct Assistant",
			"dates" : "2001",
			"location" : "Cochabamba, Bolivia",
			"description" : "Worked with education in rural villages regarding erosion control methods.  In addition, provided moral education for children and engaged in community development training with adults."
		}
	]
};

var education = {
	"schools" : {
		"name": "Western Washington University",
		"degree": "Bachelors of Science",
		"majors": ["Environmental Science: Ecotoxicology", " Chemistry - minor"],
		"dates": "2006",
		"location": "Bellingham, Washington",
		"url" : "http://www.wwu.edu/"
	},
	"onlineCourses": [
		{
		"school": "Udacity",
		"dates": "2015",
		"title" : "Intro to Computer Science",
		"url" : "https://www.udacity.com/course/viewer#!/c-cs101"
		},
		{
		"school": "Udacity",
		"dates": "2015",
		"title" : "How to Use Git and Github",
		"url" : "https://www.udacity.com/course/viewer#!/c-ud775"
		},
		{
		"school": "Udacity",
		"dates": "2015",
		"title" : "Linux Commands Line Basics",
		"url" : "https://www.udacity.com/course/viewer#!/c-ud595"
		},
		{
		"school": "Udacity",
		"dates": "2015",
		"title" : "Programming Foundations with Python",
		"url" : "https://www.udacity.com/course/viewer#!/c-ud036"
		},
		{
		"school": "Udacity",
		"dates": "2016",
		"title" : "Intro to Data Analysis",
		"url" : "https://www.udacity.com/course/viewer#!/c-ud170"
		},
		{
		"school": "Udacity",
		"dates": "2016",
		"title" : "Writing READMEs",
		"url" : "https://www.udacity.com/course/viewer#!/c-ud777"
		},
		{
		"school": "Udacity",
		"dates": "2016",
		"title" : "Intro to HTML and CSS",
		"url" : "https://www.udacity.com/course/viewer#!/c-ud304"
		},
		{
		"school": "Udacity",
		"dates": "2016",
		"title" : "JavaScript Basics",
		"url" : "https://www.udacity.com/course/viewer#!/c-ud804"
		}
	]
};

var projects = {
	"projects" : [
		{
			"title" : "Webcrawler",
			"dates" : "2015",
			"description" : "This is a basic webcrawler built with Python",
			"images" : []
		},
		{
			"title" : "Favorite Movies Website",
			"dates" : "2015",
			"description" : "This is a Python/HTML website that tiles selected movies and when clicked will play youtube trailers",
			"images" : []
		},
		{
			"title" : "Titanic Data",
			"dates" : "2016",
			"description" : "This is a Python-based analysis of survirorship data from the titanic using the Anaconda and Pandas/Numpy libraries",
			"images" : []
		},
		{
			"title" : "Portfolio Website",
			"dates" : "2016",
			"description" : "This is a JS/HTML/CSS website for presenting portfolio items and using modals to highlight project work",
			"images" : []
		},
		{
			"title" : "Resume Website",
			"dates" : "2016",
			"description" : "This is a JS/HTML/CSS website to present a resume on-line",
			"images" : []
		}
	]
};



var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
	$("#skills").append(formattedSkill);
};

education.schools.display = function() {
	$("#education").append(HTMLschoolStart);
	var formattedName = HTMLschoolName.replace("%data%", education.schools.name);
	var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools.degree);
	var formattedDates = HTMLschoolDates.replace("%data%", education.schools.dates);
	var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools.location);
	var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools.majors);
	$(".education-entry:last").append(formattedName);
	$(".education-entry:last").append(formattedDegree);
	$(".education-entry:last").append(formattedDates);
	$(".education-entry:last").append(formattedLocation);
	$(".education-entry:last").append(formattedMajor)
};

education.schools.display();

work.display = function() {
	for(job in work.jobs){
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedEmployer + formattedTitle);
		$(".work-entry:last").append(formattedDates);
		$(".work-entry:last").append(formattedLocation);
		$(".work-entry:last").append(formattedDescription)
	}
}

work.display();

projects.display = function() {
	for(project in projects.projects){
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		var formattedImages = HTMLprojectImage.replace("%data%", projects.projects[project].images);
		$(".project-entry:last").append(formattedTitle);
		$(".project-entry:last").append(formattedDates);
		$(".project-entry:last").append(formattedDescription);
		$(".project-entry:last").append(formattedImages);
	}
};

projects.display();

//Internationalize the name to make the last name UPPER case
function inName() {
    var names = bio.name.split(" ");
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    names[1] = names[1].toUpperCase();
    var finalName = names.join(" ");
    return finalName;
}

$("#main").append(internationalizeButton);


$("#mapDiv").append(googleMap);