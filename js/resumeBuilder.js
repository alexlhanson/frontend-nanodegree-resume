/*
This is empty on purpose! Your code to build the resume will go here.
 */
var formattedName = HTMLheaderName.replace("%data%", "Alex Hanson")
var formattedRole = HTMLheaderRole.replace("%data%", "Environmental/Data Scientist")
var skills = ["Environmental Risk Assessment", "Data Analysis", "Environmental Sampling", "Technical Report Writing", "Programming(Python, HTML, CSS, JavaScript)", "Group Facilitation", "Training"]

var bio = {
	"name" : "Alex Hanson",
	"role" : "Environmental/Data Scientist",
	"contact": {
		"email" : "alexlhanson@gmail.com",
		"mobile" : "(503) 442-3458",
		"github" : "alexlhanson",
		"location" : "Beaverton, Oregon"
	},
	"welcome_message" : "Thank you for visiting my resume page.  On this page you will find my education, work experience, and skills as well as link to my programming portfolio.",
	"skills" : skills,
	"headshot" : "images/me.jpg"
};

var work = {
	"RTI" : {
	},
	"MWH" : {
	},
	"BWC" : {
	},
	"IWS" : {
	},
};

work.RTI.position = "Regional Coordinator";
work.RTI.employer = "Northwest Baha'i Regional Training Institute";
work.RTI.years = 2;
work.RTI.city = "Beaverton, Oregon";

var education = {};
education["school"] = "Western Washington University";
education["degree"] = "BS - Environmental Science: Ecotoxicology, Minor - Chemistry";
education["years"] = "2002 - 2006";
education["location"] = "Bellingham, Washington";




$("#header").prepend(formattedRole);

$("#header").prepend(formattedName);

$("#main").append(bio.name);
$("#main").append(bio.role);
$("#main").append(bio.contact.email);
$("#main").append(bio.contact.mobile);
$("#main").append(bio.contact.github);
$("#main").append(bio.contact.location);
$("#main").append(bio.headshot);
$("#main").append(bio.welcome_message);
$("#main").append(bio.skills);

$("#main").append(work.RTI.position);
$("#main").append(education.school);