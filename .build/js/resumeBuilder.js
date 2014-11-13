var skills = ["HTML/5","CSS/3","JavaScript/JQuery","LESS",
 "Bootstrap3", "Node.js", "C++/C", "Python", "Java"];

var bio = {
	"name": "Yun Zhou",
	"role": "Web Developer",
	"contacts": {
		"mobile": "585-775-7749",
		"email": "zhyun1990@gmail.com",
		"github": "yunzhou2014",
		"location": "Hayward, CA"
	},
	"bioPic": "images/me.jpg",
	"welcomeMessage": "Passionate about Front-end ",
	"skills": skills
};

var education = {
	"schools": [
	{
		"name": "University of Rochester",
		"location": "Rochester, NY",
		"degree": "Master of Science",
		"major": "Electrical and Computer Engineering",
		"dates": "2012 - May 2014"
	},
	{
		"name": "Nanjing University of Posts and Telecommunications",
		"location": "Nanjing, China",
		"degree": "Bachelor of Engineering",
		"major": "Telecommunications Engineering",
		"dates": "2008 - 2012"
	}
  ]
};

var work = {
	"jobs": [
	{
		"title": "Image Processing Engineer Intern",
		"employer": "Edge 3 Technologies",
		"dates": "July 2014 - September 2014",
		"location": "Tempe, AZ",
		"description": ["Converted computer vision algorithms from Matlab to C++ using OpenCV library.",
			"Conducted testing on multiple subjects using color, monochrome and infrared cameras to determine best performance settings.",
			"Use of UML diagrams, Git to assist software development process."]
	},
	{
		"title": "Research Assistant",
		"employer": "Wireless Communication and Networking Group, University of Rochester",
		"dates": "June 2013 - May 2014",
		"location": "Rochester, NY",
		"description": ["Debugged Matlab code for emotion classification using speech feature extraction and multiclass SVM classification.", 
			"Wrote Matlab code to automate the process of choosing among kernels functions and applied feature selection and threshold-based fusion to improve the performance of SVM system.",
			"Conducted extensive analysis of the speech-based emotion classification system, including gender-dependent test, leave-one-subject-out test and test on noisy speech.", 
			"Refined and added new features to the existing Matlab GUI for the emotion classification system.", 
			"Used AndroidPlot API to create a line chart for the BaNa pitch detection android app and refined the UI design."]
	},
	{
		"title": "Research Assistant",
		"employer": "Visual Intelligence & Social Multimedia Analytics Research Group, University of Rochester",
		"dates": "Sept 2013 - March 2014",
		"location": "Rochester, NY",
		"description": ["Researched in using non-contact multimodal signals to monitor mental health state of users engaged in online social media, involved with experiment setup, data collection, and data processing.", 
			"Applied non-contact video-based analysis to obtain human vital signal, specifically heart rate.",
			"Used streaming APIs provided by Twitter to collect tweets and conducted sentiment analysis using Sentiment 140 API."]
	}
  ]
};

var projects = {
	"projects": [
	{
		"title": "Educational Website Template",
		"description":"Rewrote visually diverse, responsive educational website template to practice front-end techniques such as HTML5, CSS3, Less, Bootstrap3 and JavaScript/jQuery",
		"images": "",
		"link":"http://edu-template.herokuapp.com/"

	},
	{
		"title": "A.I.",
		"description": "Implemented machine learning algorithms including naïve bayes, perceptron, EM, logistic regression.",
		"images": ""
	},
	{
		"title": "Data Mining Projects",
		"description": "Implemented two frequent pattern mining algorithms, Apriori and FP-Growth, compared the time efficiency. Mined social media (Twitter) data about how users' interest in a topic changes.",
		"images": ""
	}
  ]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedMoblie = HTMLmobile.replace("%data%",bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
var formattedBioPic = HTMLbioPic.replace("%data%",bio.bioPic);

$("#social").before(formattedName);
$("#social").before(formattedRole);

$("#topContacts").prepend(formattedLocation);
$("#topContacts").prepend(formattedGithub);
$("#topContacts").prepend(formattedEmail);
$("#topContacts").prepend(formattedMoblie);


$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);

if(bio.skills.length > 0)
{
	$("#header").append(HTMLskillsStart);
	for(skill in bio.skills)
	{
		var formattedSkill = HTMLskills.replace("%data%", skills[skill]);
		$("#skills").append(formattedSkill);
	}	
}

function displayWork()
{
	if(work.jobs.length > 0)
	{
		for(job in work.jobs)
		{
			$("#workExperience").append(HTMLworkStart);

			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;

			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);

			$(".work-entry:last").append(formattedEmployerTitle);
			$(".work-entry:last").append(formattedDates);
			$(".work-entry:last").append(formattedLocation);

			if(work.jobs[job].description.length > 0)
			{
				for(des in work.jobs[job].description)
				{
					var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description[des]);
					$(".work-entry:last").append(formattedDescription);
				}
			}
		}	
	}
}

displayWork();

function inName()
{
	var oldName = $("#name").text();
	var nameArray = oldName.trim().split(" ");
	console.log(nameArray);
	nameArray[0] = nameArray[0].slice(0,1).toUpperCase() + nameArray[0].slice(1).toLowerCase();
	nameArray[1] = nameArray[1].toUpperCase();
	return nameArray[0] + " " + nameArray[1];
}

$("#social").after(internationalizeButton);

projects.display = function()
{
	if(projects.projects.length > 0)
	{
		for(project in projects.projects)
		{
			$("#projects").append(HTMLprojectStart);

			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
			if(projects.projects[project].hasOwnProperty('link'))
			{
				var openNewWindow = "target='_blank' data-toggle='tooltip' data-placement='top' title='Check it out'";
				formattedTitle = formattedTitle.replace("href='#'","href='"+ projects.projects[project].link + "' " + openNewWindow);
			}
			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);

			$(".project-entry:last").append(formattedTitle);
			$(".project-entry:last").append(formattedDescription);

		
			if(projects.projects[project].images.length > 0)
			{
				for(image in projects.projects[project].images)
				{
					var formattedDescription = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
					$(".project-entry:last").append(formattedImage);
				}	
			}


		}
	}

}

projects.display();

education.display = function()
{
	if(education.schools.length > 0)
	{
		for(school in education.schools)
		{
			$("#education").append(HTMLschoolStart);

			var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
			var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			
			var formattedNameDegree = formattedName + formattedDegree;
			var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);

			$(".education-entry:last").append(formattedNameDegree);
			$(".education-entry:last").append(formattedDates);
			$(".education-entry:last").append(formattedLocation);
			$(".education-entry:last").append(formattedMajor);
		}
	}

}

education.display();

$("#mapDiv").append(googleMap);