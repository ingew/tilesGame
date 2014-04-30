$(document).ready(function(){
	var app = {

		createHandlers: function(){
			var that = this;
			$('.overlay-container').click(function(){
				that.startOver();
			});
		},

		loadInitialState: function(){
			$('.overlay-container').addClass('hidden');
			$('.message.over').addClass('hidden');
			$('.message.start').addClass('hidden');
		},

		pickRandomTiles: function(numberOfSelectedTiles){
			var that = this;
			var $tiles = $('span');
			var tilesLength= $tiles.length;

			this.arrayTiles=[];
			for (var i=0;i<numberOfSelectedTiles;i++){
				var $tile = $($tiles[Math.floor(Math.random() * (tilesLength-1))]);
				if ($tile.hasClass('selected')){
					i -= 1;
				}else{
					this.arrayTiles.push($tile.addClass('selected'));
					this.hideAfterTimeout($tile);
				}
			}
		}, 

		hideAfterTimeout: function($tile){
			var that = this;
			setTimeout(function(){
				$tile.addClass('hidden');
				that.addClickHandlers();
			}, 5000);
		}, 

		addClickHandlers: function(){
			var that = this;
			$('span').click(function(e){
				var $element =  $(e.target);

				if(!$('span.hidden').length){
					that.success();
				}
				if ($element.hasClass('selected')){
					$element.removeClass('hidden');
				}else{
					that.gameOver();
				}
			});
		},

		gameOver: function(){
			$('.overlay-container').removeClass('hidden');
			$('.message.over').removeClass('hidden');
		},

		success: function(){
			$('.overlay-container').removeClass('hidden');
			$('.message.start').removeClass('hidden');
		},

		startOver: function(){
			$('span').each(function(index){
				$(this).removeClass();
			});
			
			this.loadInitialState();
			this.pickRandomTiles(9);

		}		
	};


	app.createHandlers();
	app.loadInitialState();
	app.pickRandomTiles(9);

	
});

