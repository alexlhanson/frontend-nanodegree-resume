/*
This is empty on purpose! Your code to build the resume will go here.
 */
var formattedName = HTMLheaderName.replace("%data%", "Alex Hanson")
var formattedRole = HTMLheaderRole.replace("%data%", "Environmental/Data Scientist")

$("#header").prepend(formattedRole);

$("#header").prepend(formattedName);

