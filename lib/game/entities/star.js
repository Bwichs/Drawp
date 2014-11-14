ig.module(
	'game.entities.star'
)
.requires(
	'impact.entity'
)
.defines(function(){
	
ig.global.scoreNOW = 0;	
ig.global.beatALevel = false;
	
ig.global.myArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

EntityStar = ig.Entity.extend({
	size: {x: 32, y: 32},
	type: ig.Entity.TYPE.A,
	checkAgainst: ig.Entity.TYPE.B,
	collides: ig.Entity.COLLIDES.FIXED,
	sfxCollect: new ig.Sound('media/ding.mp3'),
	
	animSheet: new ig.AnimationSheet( 'media/star.png', 32, 32 ),

	init: function( x, y, settings ) {
		this.addAnim( 'idle', 1, [0] );
		this.parent( x, y, settings );
	},
	
	check: function (other) {
		if (other instanceof EntityCrate) {
			ig.global.score += 1;
			this.sfxCollect.play();	
			this.kill();
		}
	},
	
	update: function(){
		if (ig.global.myArray[ig.global.levelON-1] < ig.global.scoreNOW && ig.global.beatALevel){
				ig.global.myArray[ig.global.levelON-1] = ig.global.scoreNOW;
				ig.global.beatALevel = false;
		}
	}
	
});


});