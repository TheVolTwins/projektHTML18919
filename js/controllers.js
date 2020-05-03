var portfolioApp = angular.module('portfolioApp',[]); 
portfolioApp.controller('GalleryListCtrl', function($scope) {
    $scope.title = "Oferta";

    $scope.galleries = [
        
    { 'title':'Porsche 911',
     'when':'2015-02-12',
     'price':'100000',
     'thumbnailUrl':'img/911.jpg'
    },
    { 'title':'Porsche Panamera',
    'when':'2011-02-11',
    'price':'120000',
    'thumbnailUrl':'img/panamera.jpg'
   },
   { 'title':'Porsche Cayenne',
     'when':'2013-10-22',
     'price':'150000',
     'thumbnailUrl':'img/cayenne.jpeg'
    },
   { 'title':'Porsche Taycan',
   'when':'2018-03-21',
   'price':'200000',
   'thumbnailUrl':'img/taycan.jpg'
  },
  { 'title':'Porsche Macan',
  'when':'2009-08-19',
  'price':'60000',
  'thumbnailUrl':'img/macan.jpg'
 },
 { 'title':'Porsche 918 Spyder',
 'when':'2012-10-27',
 'price':'220000',
 'thumbnailUrl':'img/spyder.jpeg'
}
   
    ];
    $scope.sortList = [
        {
        'label':'Alfabetycznie',
        'value':'title'
        },
            {
                'label':'Od najdroższego',
                'value':'-price'
                },
                {
                    'label':'Od najtańszego',
                    'value':'price'
                    }
        ]; 
        $scope.orderProp = $scope.sortList[0];
    });
    $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000 );
      }
    }
  });
