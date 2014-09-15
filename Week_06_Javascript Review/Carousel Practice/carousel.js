var url1 = "http://imgur.com/3BaIkR";
var url2 = "http://i.imgur.com/RFLYIy2.jpg";
var url3 = "http://i.imgur.com/lKOAGl8.jpg";
var url4 = "http://i.imgur.com/i1jiIJ5.jpg";
var url5 = "http://i.imgur.com/TD3HdU6.jpg";
var url6 = "http://i.imgur.com/uSJ74ZC.jpg";
var votes = [];
var images = [url1, url2, url3, url4, url5, url6];
var i = 0;

function nextImage() {
  i= i +1;
  $("#image-to-vote-on").attr("src",images[i]);  
   console.log(i);
};

function previousImage() {
  i = i-1;
  $("#image-to-vote-on").attr("src",images[i]);  
    console.log(i);
};

function saveVotes() {
  console.log("in saveVotes")
  votes[i] = parseInt($("#your-vote").val());
  
  var averageScore = finalScore(votes);
  $("#finalScore").empty(); $("#finalScore").append(finalScore(votes));
  console.log(averageScore);
}

$("#back-button").on("click",previousImage);
$("#skip-button").on("click",nextImage);

$("#your-vote").on("change", saveVotes);

function finalScore(votes) {
  var sum = 0; 
  $.each(votes, function(index, value) {
    sum += value;
  });
  var average = sum / (votes.length);

  console.log("got here");
  return average;
}