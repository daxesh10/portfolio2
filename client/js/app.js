
var app = angular.module("portfoliApp", ["ngRoute"]); 

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
      
      .when('/', {
        templateUrl: 'client/views/myProfile.html',
     
      })
      .when('/about', {
        templateUrl: 'client/views/about/about.html',
     
      })
      .when('/portfolio', {
        templateUrl: 'client/views/p.html',
        
      })
      .when('/contact', {
        templateUrl: 'client/views/contact/contact.html',
        
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  });


app.controller("myCtrl", function($scope,$log,$timeout,$interval,$http) {
    
    $scope.name = "DEXTER"
    $scope.imagePath = "/client/assets/images/dexter1.jpg"
    $scope.skill ="Node js"
    $scope.jobTitle = "Web Developer - UI/UX Design - Testing Engineer"
    $scope.skillAni="wow bounce"
  $scope.resumeUrl= "https://drive.google.com/file/d/0B1qcmAuEz1ShTUVVWWcwWTVBZDk2ZUhqOUliMHFCYVNRNFN3/view"



    $scope.mailme = (msg)=>{

        $log.info(msg)

        $http({
            method:"POST",
            url:"/contact",
            params:{"name":msg.name,"email":msg.email,"message":msg.content}
        }).then((response)=>{

            $log.info(response.data)
            $scope.myRes = response.data;
            $scope.statuscode = response.status;

            $timeout(()=>{
                $scope.myRes= ""
            },4000)


        })


    }





    let imgPath = ()=>{

          let index = 1 + Math.floor(Math.random()*6)

         
          $scope.imagePath =""
         $scope.imagePath = "/client/assets/images/dexter"+index+".jpg"
         $log.info( $scope.imagePath)

    }
    
    let skills =()=>{

        $scope.skillAni=""
        let validSkills  = ["NOde js", " Angular" , "Firebase" , "HTMl5" , "CSS ", "PHP", "SQL", "MySQL", "MongoDB" , "PL/SQL" , 
        "SELENIUM" , "WEB DRIVER", "NIGHTWATCH JS","MOCHA","CHAI","CHAKRAM","COFFEE SCRIPT","JAVA","C","NodeJS", "Angular", "React JS" , "JavaScript(ES5/ES6)", "CSS", "HTML" , "JQUERY", "Express", "Loadash",  "angular-material" , "Word press", "Firebase" , "Git" , "Heroku", "Angular-fire"," ng-route", "ng-directive", "ng-controller", "WebStorm"," Visual studio code", "Git" , "Heroku", "JSON" , "Third party APIs", "  Firebase deployment"," Selenium Web Driver", "Page Object Model", "Cucumber", "Maven", "TestNG", "Firebug", "Eclipse", "Java", "Nightwatch", "Mocha", "chai", "XPath", "FirePath", "Postman", "NightmareJs", "PhantomJs", "CasperJS", "SQL", "NoSQl", "JSON", "Api",
        "Git", "Heroku"]

        let index = 1 + Math.floor(Math.random()*validSkills.length)
       $scope.skillAni="animated bounce"
        $scope.skill = validSkills[index]
    }



    let jobTitles = ()=>{

        let jobTitle = [ " WEB Developer" , "Software Engineer" , "Testing Enginner" , "MEAN Developer" , " full stack developer",
        "   -FREELANCER-", " QA TESTING","UI TESTING", "Andrioid Developer", "Automation BOts", "BOTS DEVELOPER" , "part-time developer"]

        let index = 1 + Math.floor(Math.random()*jobTitle.length)
        $scope.jobTitle = jobTitle[index]
    }

    $interval(imgPath,15000,[50])
    $interval(skills,5000)
    $interval(jobTitles,9000)

    




    $scope.downloadResume = ()=>{

        $http({
             method : "GET",
             url : "/resumeDownload"
        }).then((res)=>{

            $log.info("resume donloading")
        },(res)=>{
            $log.info("error"+res.statusText)
        })

    }

});
app.directive("myProfile",()=>{

return{
    restrict:"ACE",
    templateUrl:"client/views/myProfile.html"
     }
})

app.directive("webDev",()=>{

return{
    restrict:"ACE",
    templateUrl:"client/views/work/webDev.html"
     }
})

app.directive("testDev",()=>{

return{
    restrict:"ACE",
    templateUrl:"client/views/work/testingEng.html"
     }
})

app.directive("javaDev",()=>{

return{
    restrict:"ACE",
    templateUrl:"client/views/work/javaDev.html"
     }
})
app.directive("andDev",()=>{

return{
    restrict:"ACE",
    templateUrl:"client/views/work/andDev.html"
     }
})

app.directive("project1",()=>{

return{
    restrict:"ACE",
    templateUrl:"client/views/project1.html"
     }
})
app.directive("accProject",()=>{

return{
    restrict:"ACE",
    templateUrl:"client/views/accProjects.html"
     }
})





app.directive("blogWebsite",()=>{

return{
    restrict:"ACE",
    templateUrl:"client/views/personalPro/blogWebsite.html"
     }
})

app.directive("imageDown",()=>{

return{
    restrict:"ACE",
    templateUrl:"client/views/personalPro/imageDown.html"
     }
})

app.directive("jobScraper",()=>{

return{
    restrict:"ACE",
    templateUrl:"client/views/personalPro/jobScraper.html"
     }
})
app.directive("jobBot",()=>{

return{
    restrict:"ACE",
    templateUrl:"client/views/personalPro/jobBot.html"
     }
})



//acc projects
app.directive("bitFire",()=>{

return{
    restrict:"ACE",
    templateUrl:"client/views/accPro/bitfire.html"
     }
})
app.directive("ets",()=>{

return{
    restrict:"ACE",
    templateUrl:"client/views/accPro/ets.html"
     }
})
app.directive("leaseMan",()=>{

return{
    restrict:"ACE",
    templateUrl:"client/views/accPro/leaseMan.html"
     }
})

//education
app.directive("education",()=>{

return{
    restrict:"ACE",
    templateUrl:"client/views/edu/education.html"
     }
})
app.directive("csula",()=>{

return{
    restrict:"ACE",
    templateUrl:"client/views/edu/csula.html"
     }
})
app.directive("csulaMap",()=>{

return{
    restrict:"ACE",
    templateUrl:"client/views/edu/csulaMap.html"
     }
})
app.directive("csulaSlideShow",()=>{

return{
    restrict:"ACE",
    templateUrl:"client/views/edu/csulaSlideShow.html"
     }
})

app.directive("gtu",()=>{

return{
    restrict:"ACE",
    templateUrl:"client/views/edu/gtu.html"
     }
})

//about
app.directive("aboutSlideShow",()=>{

return{
    restrict:"ACE",
    templateUrl:"client/views/about/aboutSlideShow.html"
     }
})

app.directive("objective",()=>{

return{
    restrict:"ACE",
    templateUrl:"client/views/about/objective.html"
     }
})

app.directive("summary",()=>{

return{
    restrict:"ACE",
    templateUrl:"client/views/about/summary.html"
     }
})

app.directive("aboutskills",()=>{

return{
    restrict:"ACE",
    templateUrl:"client/views/about/skills.html"
     }
})

app.directive("onlySkills",()=>{

return{
    restrict:"ACE",
    templateUrl:"client/views/about/onlySkills.html"
     }
})