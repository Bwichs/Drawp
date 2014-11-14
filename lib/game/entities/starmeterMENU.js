ig.module(
	'game.entities.starmeterMENU'
)
.requires(
	'impact.entity'
)
.defines(function(){

EntityStarmeterMENU = ig.Entity.extend({
	size: {x: 96, y: 32},
	
	type: ig.Entity.TYPE.A,
	checkAgainst: ig.Entity.NONE,
	collides: ig.Entity.COLLIDES.NEVER,
	
	animSheet: new ig.AnimationSheet( 'media/star_meter.png', 96, 32 ),

	init: function( x, y, settings ) {
		this.zIndex = 6;
		this.addAnim( 'none', 1, [0] );
		this.addAnim( 'one', 1, [1] );
		this.addAnim( 'two', 1, [2]);
		this.addAnim( 'three', 1, [3]);
		this.parent( x, y, settings );
		this.level = this.test;
	},
	
	update: function(){
	for(var i = 1; i < 11; i++){
		if(this.level == i && ig.global.myArray[i] == 0) {
			this.currentAnim = this.anims.none;
		} else if(this.level == i && ig.global.myArray[i] == 1) {
			this.currentAnim = this.anims.one;
		} else if(this.level == i && ig.global.myArray[i] == 2) {
			this.currentAnim = this.anims.two;
		}else if(this.level == i && ig.global.myArray[i] == 3) {
			this.currentAnim = this.anims.three;
		}
	}
	}
	
});


});