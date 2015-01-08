app.controller('AnimalController', function($scope) {
	var animal = {
		'Name': 'Pesho',
		'Born': 'Asia',
		'BirthDate': 2006,
		'Live': 'Sofia Zoo'
	};
	animal.type = 'Tiger';
	animal.imageURL = 'http://tigerday.org/wp-content/uploads/2013/04/tiger.jpg';
	
	var style = {
        main: {
            padding: '0px 0px 0px 50px'
        },
        article: {
            backgroundColor: 'rgb(202,202,202)',
            color: 'rgb(27,47,67)',
            fontFamily: 'Arial',
            fontWeight: 'Bolder',
            fontSize: '22px',
            border: 'none',
            width: '60%'
        },
        side: {
            border: 'none',
            width: '40%',
            display: 'inline-block'
        },
        img: {
            width: '100%'
        },
		span: {
			fontWeight: 'Normal'
		},
		h3: {
            textTransform: 'uppercase',
			textAlign: 'center'
        }
    }
	
    $scope.animal = animal;
    $scope.style = style;
})