var app = angular.module('redditClone', []);

app.controller("daController", function($scope){
  $scope.posts = [];
  $scope.comments = [];
  $scope.commentArea = false;
  $scope.commentInput = false;

  $scope.getPosts = function(){
    var post = {};
    post.location = $scope.location;
    post.author = $scope.author;
    $scope.imgUrl = 'http://dummyimage.com/200x200/ffb700/0000ff&text=Location+Image';
    post.imgUrl = $scope.imgUrl;
    $scope.description = 'Bacon ipsum dolor amet swine landjaeger shank pork loin rump, turducken shoulder venison cow filet mignon pork belly. Pastrami pork boudin tongue sausage tenderloin ground round, shoulder short loin pig kevin prosciutto. Doner turducken flank rump shankle filet mignon tenderloin short ribs salami tail. T-bone jerky pancetta pig, alcatra drumstick turducken picanha ball tip beef ribs chicken ground round. Turducken jerky hamburger andouille, alcatra pancetta swine ham hock tenderloin. Ham hock tail alcatra shank cow porchetta biltong.'
    post.description = $scope.description;
    post.date = new Date();
    post.upvotes = 0;
    $scope.posts.push(post);
    $scope.location = null;
    $scope.author = null;
  },

  $scope.getComments = function(){
    var comment = {};
    comment.addcomment = $scope.addcomment;
    $scope.comments.push(comment);
    console.log($scope.comments);
  }
})

// app.controller('commentController', function($scope){
//   $scope.comments = [];
//   $scope.commentArea = false;
//   $scope.commentInput = false;
//
// $scope.getComments = function(){
//   var comment = {};
//   comment.addcomment = $scope.addcomment;
//   $scope.comments.push(comment);
//   console.log($scope.comments);
// }
//
// })

// app.controller("commentController", function($scope){
//   $scope.comments = []
//   $scope.newComments = false;
//   $scope.showComments = false;
//   $scope.ToggleCommentForm = function(){
//     $scope.newComments = !$scope.newComments;
//   }
//   $scope.ToggleComment = function(){
//     $scope.showComments = !$scope.showComments;
//   }
//   $scope.submitComment = function(){
//     var comment = {};
//     comment.commentNumber = 0;
//     comment.commentAuthor = $scope.commentAuthor
//     comment.comment = $scope.comment
//     $scope.comments.push(comment);
//     console.log($scope.comments);
//     $scope.commentAuthor = null;
//     $scope.comment = null;
//   }
// })
