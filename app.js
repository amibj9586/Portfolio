'use strict';

var App = angular.module('app',["ui.router"]);

App.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
				// For any unmatched url, send to /HTMLPage
				$urlRouterProvider.otherwise("/Overview")
				
                $stateProvider
						.state('Overview', {
							url: "/Overview",
							templateUrl: "Overview.html"
						})
						
						.state('Experience', {
							url: "/Experience",
							templateUrl: "Experience.html"
						})
						.state('Experience.Responsibilities', {
							url: "/Responsibilities",
							templateUrl: "Responsibilities.html",
							controller: function($scope){
                                
                                $scope.Responsibilities = ["Design, develop, modify, debug, and evaluate Web applications/programs within the IT Customer Facing Systems framework.", "As appropriate, utilize available technologies to design code and build solutions to meet business and technical requirements.", "Implementing responsive design for different size of devices by using Bootstrap Grid System.", "Follow MVC Structure to develop Application.", "Defining new validations through AngularJS for the form field validation implemented through HTML5.", "Primarily using MongoDB and Npm packages to integrate new functionality and maintain previous code.", "Work on modules, graphics and reusable components, Lifecycle Methods, State, Specs, Props, Events to create interactive and stateful React.JS Components.", "Create Grunt tasks to minify code resources, to setup selenium web driver for end to end testing.", "Working through Cross Browser Compatibility Issues with layout and styles for all new CSS that was implemented and fixed major layout bugs for supported browsers.", "Code to implement AJAX based application by fetching the response from backend REST API as a part of JSON.", "Use of AngularJS Factory and Services for Dependency Injection.", "Follow AGILE based approach to UI Development."];
							}
						})
    					
                        .state('Experience.AmericanAirline', {
							url: "/AmericanAirline",
							templateUrl: "AmericanAirline.html",
							controller: function($scope){
                                
                                $scope.AmericanAirlines = ["Interact regularly with business stakeholders and management, as well as the authority and scope to apply your expertise to many interesting technical problems.", "Proficient in using HTML, CSS, Javascript, and Web Frameworks to build responsive, scalable, and highly performant experiences.", "Have an understanding and passion for good design, including Typography, Layout, and Interaction.", "Used Glyphicons in Buttons, Navigation, Forms.", "Used GIT to do the coding record and version control.","Bootstrap Modals are used to display information.","Bootstrap Modals are used to display information.", "Designed Dynamic Client-Side JavaScript, codes to build Web Forms and simulate process for Web Application, Page Navigation and Form Validation.","Alerts are created using .alert class and also implemented Animations using .fade and .in classes.", "Strong understanding of UI, Cross-Browser Compatibility, General Web Functions and Standards.", "Worked with Single Page Application (SPAs) frameworks (specifically AngularJS).", "Provided hands on expertise with Web Applications and Programming Languages such as HTML5, CSS, Bootstrap, JavaScript, and JQuery."];
							}
						})    
    
                        .state('Experience.ATT', {
				            url: "/ATT",
							templateUrl: "ATT.html",
							controller: function($scope){
                                
                                $scope.ATTs = ["Used Design Pattern: MVC Pattern.", "Developed web Applications using HTML5, CSS3, Bootstrap, Java IDE Eclipse, JavaScript, AJAX, JSON.", "Used CSS Media Queries to work on Responsive Web Design.", "Writing unit test with Jasmine to ensure robust code quality.", "Extensively used CSS and Bootstrap for styling the HTML elements.", "Used jQuery plugins for Drag-and-Drop, Widgets, Menus, User Interface and Forms.", "Worked on Bootstrap grid system, Pagination, Progress Bars and Buttons."];
							}
						})

                        .state('Experience.Humana', {
				            url: "/Humana",
							templateUrl: "Humana.html",
							controller: function($scope){
                                
                                $scope.Humanas = ["Involved in discussions with the System Analyst to identify the technical requirements.", "Designed and developed Web pages using HTML and CSS.", "Articulated business strategy and branded issues and to balance these with user needs and technological constraints.", "Used JavaScript for Custom Client-Side Validation.", "Extensively used jQuery in implementing various GUI Components in application portal.", "Worked on jQuery to make Drop Down Menus on web pages and display part of a web page upon user request."];                
                            }
						})    
                    
                        .state('Experience.Petrol', {
				            url: "/Petrol",
							templateUrl: "Petrol.html",
							controller: function($scope){
                                
                                $scope.Petrols = ["Used HTML and CSS created self-defined Button, List, Dropdown Menu, Form and Navigation Bar for front end layout, and utilized JavaScript to handle front-end logic.", "Implemented jQuery for Event Handling.", "Made an application responsive by using Bootstrap and CSS Media Queries.", "Used Promises in JavaScript to avoid Callback Hell and built well-structured Asynchronous Functions.", "Adopted Oracle Database to store and manage user information.", "Involved in daily SCRUM meetings to keep track of the project status."];                
                            }
						})
    
                        .state('SampleCode', {
							url: "/SampleCode",
							templateUrl: "SampleCode.html"
						})
						.state('SampleCode.AJAXCall', {
							url: "/AJAXCall",
							templateUrl: "AJAXCall.html",
							controller: function($scope){
								$scope.AJAXCalls = ["https://github.com/amibj9586/UiSmartCode/blob/master/AJAXCalls.html", "https://github.com/amibj9586/UiSmartCode/blob/master/demo.txt"]; 
							}
						})
						.state('SampleCode.DataBinding', {
							url: "/DataBinding",
							templateUrl: "DataBinding.html",
							controller: function($scope){
								$scope.DataBindings = ["https://github.com/amibj9586/UiSmartCode/blob/master/Ex%20of%20two%20way%20data%20binding.html"]; 
							}
						})
    
                        .state('SampleCode.List', {
							url: "/List",
							templateUrl: "List.html",
							controller: function($scope){
								$scope.Lists = ["https://github.com/amibj9586/UiSmartCode/blob/master/eg%20add%20del.html"]; 
							}
						})
                        
                        .state('SampleCode.Filter', {
							url: "/Filter",
							templateUrl: "Filter.html",
							controller: function($scope){
								$scope.Filters = ["https://github.com/amibj9586/UiSmartCode/blob/master/eg%20of%20filter.html"]; 
							}
						})
                        
                        .state('SampleCode.Grid', {
							url: "/Grid",
							templateUrl: "Grid.html",
							controller: function($scope){
								$scope.Grids = ["https://github.com/amibj9586/UiSmartCode/blob/master/eg%20of%20grid.html"]; 
							}
						})
    
                        .state('SampleCode.Table', {
							url: "/Table",
							templateUrl: "Table.html",
							controller: function($scope){
								$scope.Tables = ["https://github.com/amibj9586/UiSmartCode/blob/master/eg%20of%20table.html"]; 
							}
						})

    }]);
