		$(function () { 
			$("[data-toggle='tooltip']").tooltip(); 
		});
		var r = "e";
		var t = 2;
		var text2 = $(".col-md-9.hght-2").html();
		var text1r = "<div class='obert'>Всем привет:) Меня зовут Иван Луценко и я начинающий front-end разработчик. Владею HTML5, CSS3, LESS, JavaScript, Jquery, AngularJS, AJAX и Git. На данный момент являюсь студентом БГУИР, а чуть ранее закончил Филиал БГУИР. Имею среднее-специальное образование по специальности ПОИТ(Программное обеспечение информационных технологий). Ранее обучаясь в данном заведении были проекты, один из которых представлен на сайте:) В связи с тем, что я увлекаюсь спидкубингом(сборка кубика Рубика на скорость), мне стало интересно предумать такой проект, который бы смог обучить людей сборке кубика Рубика. В данном проекте представлена обучающая информация с видео по обучению, таймер по сборке и 3D модель. 3D модель была задумана с целью показать сам процесс сборки и показать методы сборки. Не углубляясь в сферу спидкубинга и самого проекта в целом, все остальные мои работы представлены в разделе Профиль.</div><div class='container-fluid'><div class='row'><div class='col-md-3 col-sm-3 col-xs-3 thumb'><a class='fancyimage' rel='group' href='gallery/1.jpg'><img class='img-responsive' src='gallery/1.jpg'></a></div><div class='col-md-3 col-sm-3 col-xs-3 thumb'><a class='fancyimage' rel='group' href='gallery/2.jpg'><img class='img-responsive' src='gallery/2.jpg'></a></div><div class='col-md-3 col-sm-3 col-xs-3 thumb'><a class='fancyimage' rel='group' href='gallery/3.jpg'><img class='img-responsive' src='gallery/3.jpg'></a></div><div class='col-md-3 col-sm-3 col-xs-3 thumb'><a class='fancyimage' rel='group' href='gallery/4.jpg'><img class='img-responsive' src='gallery/4.jpg'></a></div></div></div>";
		var text1e = "<div class='obert'>Hello :) My name is Ivan Lutsenko and I start front-end developer. Spoken HTML5, CSS3, LESS, JavaScript, Jquery, AngularJS, AJAX and Git. At present I am a student BSUIR and ended a little earlier BSUIR branch. I have secondary education degree in watered (Software Information Technology). Previously, studying at the institution were projects, one of which is presented on the site :) Due to the fact that I enjoy spidkubingom (assembly Rubik's Cube for speed), I was wondering predumat such a project, which would be able to educate people assemble the Rubik's Cube. This project is presented training information with video for training, a timer and 3D assembly model. 3D model has been designed to show the actual build process and show the assembly methods. Without going into the sphere spidkubinga and the project as a whole, all the rest of my work is presented in the section profile.</div><div class='container-fluid'><div class='row'><div class='col-md-3 col-sm-3 col-xs-3 thumb'><a class='fancyimage' rel='group' href='gallery/1.jpg'><img class='img-responsive' src='gallery/1.jpg'></a></div><div class='col-md-3 col-sm-3 col-xs-3 thumb'><a class='fancyimage' rel='group' href='gallery/2.jpg'><img class='img-responsive' src='gallery/2.jpg'></a></div><div class='col-md-3 col-sm-3 col-xs-3 thumb'><a class='fancyimage' rel='group' href='gallery/3.jpg'><img class='img-responsive' src='gallery/3.jpg'></a></div><div class='col-md-3 col-sm-3 col-xs-3 thumb'><a class='fancyimage' rel='group' href='gallery/4.jpg'><img class='img-responsive' src='gallery/4.jpg'></a></div></div></div>";
		var text2r = "<div class='obert'>Это не нужный пункт меню, у меня нет работы:)</div>";
		var text2e = "<div class='obert'>This is not the desired menu item , I do not work :)</div>";
		var app = angular.module("myApp", ['ngSanitize']);
		app.controller("myCtrl", function($scope) {
			$scope.lang = "engl";
			$scope.count = 2;
			$scope.tx = "Skills";
			$scope.records = 
			[
				{
					"name" : "Ivan Lutsenko",
					"adress" : "Belarus, Minsk",
					"profile" : "Profile",
					"skills" : "Skills",
					"work" : "Work"
				},
				{
					"name" : "Иван Луценко",
					"adress" : "Беларусь, Минск",
					"profile" : "Профиль",
					"skills" : "Навыки",
					"work" : "Работа"
				}
			]
			$scope.name = $scope.records[0].name;
			$scope.adress = $scope.records[0].adress;
			$scope.profile = $scope.records[0].profile;
			$scope.skills = $scope.records[0].skills;
			$scope.work = $scope.records[0].work;
			$scope.language = function(lng){
				switch(lng){
					case 'rus':
						$scope.name = $scope.records[1].name;
						$scope.adress = $scope.records[1].adress;
						$scope.profile = $scope.records[1].profile;
						$scope.skills = $scope.records[1].skills;
						$scope.work = $scope.records[1].work;
						$scope.lang = "rus";
						switch($scope.count){
							case 1:
								$scope.tx = "Профиль";
								break;
							case 2:
								$scope.tx = "Навыки";
								break;
							case 3:
								$scope.tx = "Работа";
								break;
						}
						r = "r";
						break;
					case 'engl':
						$scope.name = $scope.records[0].name;
						$scope.adress = $scope.records[0].adress;
						$scope.profile = $scope.records[0].profile;
						$scope.skills = $scope.records[0].skills;
						$scope.work = $scope.records[0].work;
						$scope.lang = "engl";
						switch($scope.count){
							case 1:
								$scope.tx = "Profile";
								break;
							case 2:
								$scope.tx = "Skills";
								break;
							case 3:
								$scope.tx = "Work";
								break;
						}
						r = "e";
						break;
				}
			};
			$scope.text = function(n){
				$scope.count = n;
				if ($scope.lang == "rus")
				{
					switch(n){
						case 1:
							$scope.tx = "Профиль";
							break;
						case 2:
							$scope.tx = "Навыки";
							break;
						case 3:
							$scope.tx = "Работа";
							break;
					}
				}
				else
				{
					switch(n){
						case 1:
							$scope.tx = "Profile";
							break;
						case 2:
							$scope.tx = "Skills";
							break;
						case 3:
							$scope.tx = "Work";
							break;
					}
				}
			};
		});
		$('.menu ul li:nth-child(1)').click(function(){
			if (r == "e")
				$(".col-md-9.hght-2").html(text1e);
			else
				$(".col-md-9.hght-2").html(text1r);
			t = 1;
		});
		$('.menu ul li:nth-child(2)').click(function(){
			$(".col-md-9.hght-2").html(text2);
			t = 2;
		});
		$('.menu ul li:nth-child(3)').click(function(){
			if (r == "e")
				$(".col-md-9.hght-2").html(text2e);
			else
				$(".col-md-9.hght-2").html(text2r);
			t = 3;
		});
		$('.rus').click(function(){
			r = "r";
				switch(t){
					case 1:
						if (r == "e")
							$(".col-md-9.hght-2").html(text1e);
						else
							$(".col-md-9.hght-2").html(text1r);
						break;
					case 2:
						$(".col-md-9.hght-2").html(text2);
						break;
					case 3:
						if (r == "e")
							$(".col-md-9.hght-2").html(text2e);
						else
							$(".col-md-9.hght-2").html(text2r);
						break;
				}
		});
		$('.engl').click(function(){
			r = "e";
				switch(t){
					case 1:
						if (r == "e")
							$(".col-md-9.hght-2").html(text1e);
						else
							$(".col-md-9.hght-2").html(text1r);
						break;
					case 2:
						$(".col-md-9.hght-2").html(text2);
						break;
					case 3:
						if (r == "e")
							$(".col-md-9.hght-2").html(text2e);
						else
							$(".col-md-9.hght-2").html(text2r);
						break;
				}
		});