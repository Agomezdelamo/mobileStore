//App angular para la tienda
//**dentro de una función autoejecutable creo mi modulo principal y 
//le injecto mis directivas en el array que nos proporciona la creación del modulo**//
(function() {
	var app = angular.module('mobileStore', [ 'store-directives' ]);
	//controlador de la tienda, con un servicio inyectado http
	app.controller('StoreController', [ '$http',  function($http) {
		var store = this;
		store.products = [];
		$http.get('js/store-products.json').success(function(data) {
			store.products = data;
		});
	} ]);
	
	//controlador de las reseñas
	app.controller('ReviewController', function() {
		this.review = {};
		//método que añade las reseñas, recibe un producto como parámetro y luego 
		//le añade una nueva review
		this.addReview = function(product) {
			product.reviews.push(this.review);
			//limpiamos los valroes de los inputs
			this.review = {};
		};
	});
})();