console.log("CONNECTED");
//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for tabs
$( function() {
    $( "#tabs" ).tabs();
  } );

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Chart js
// Skill 1
$(document).ready(function(){
  var myDoughnut = document.getElementById("JAVASCRIPT").getContext("2d");
  var chart = new Chart(myDoughnut, {
    type: 'doughnut',
    data: {
      labels:["Javascript / jQuery"],
      datasets: [{
        backgroundColor: [
          // "#74cfae",
          "#FFD700",
          "#3c3c3c"
        ],
        data: [70,30]
      }]
    }
  })
});
// Skill 2
$(document).ready(function(){
  var myDoughnut = document.getElementById("HTML/CSS").getContext("2d");
  var chart = new Chart(myDoughnut, {
    type: 'doughnut',
    data: {
      labels:["Node.js / MongoDB"],
      datasets: [{
        backgroundColor: [
          "#FFD700",
          "#3c3c3c"
        ],
        data: [90,10]
      }]
    }
  })
});

// Skill 3
$(document).ready(function(){
  var myDoughnut = document.getElementById("SEMANTIC UI/BOOTSTRAP").getContext("2d");
  var chart = new Chart(myDoughnut, {
    type: 'doughnut',
    data: {
      labels:["HTML / CSS"],
      datasets: [{
        backgroundColor: [
          "#FFD700",
          "#3c3c3c"
        ],
        data: [85,10]
      }]
    }
  })
});

// Skill 4
$(document).ready(function(){
  var myDoughnut = document.getElementById("NODE JS").getContext("2d");
  var chart = new Chart(myDoughnut, {
    type: 'doughnut',
    data: {
      labels:["C"],
      datasets: [{
        backgroundColor: [
          "#FFD700",
          "#3c3c3c"
        ],
        data: [80,10]
      }]
    }
  })
});

$('#education-timeline').verticalTimeline({
    startLeft: false,
    alternate: true,
    animate: "slide",
    arrows: false
});
