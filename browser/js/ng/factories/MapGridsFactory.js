app.factory('MapGridsFactory', function(){
	let mapGrid1 = [
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0],
        [0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0],
        [0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0],
        [4,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],
        [0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0],
        [0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0],
        [0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0],
        [0,0,3,1,1,1,0,0,2,0,0,1,1,1,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    ];

  	let mapGrid2 = [
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0],
        [0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,4,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0],
        [0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0],
        [0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0],
        [0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0],
        [0,0,0,0,0,1,0,0,1,3,1,1,1,0,0,0,0,0,0,0],
        [0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0],
        [0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0],
        [0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0],
        [3,1,1,1,1,1,1,1,1,0,0,0,3,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    ];

  	let mapGrid2a = [
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0],
        [0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,4,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [3,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    ];

  	let mapGrid2b = [
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0],
        [0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,4,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,1,0,0,1,3,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    ];

  	let mapGrid2c = [
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0],
        [0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,4,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0],
        [0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0],
        [0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0],
        [0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0],
        [0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0],
        [0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0],
        [0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0],
        [0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0],
        [0,0,0,0,0,1,1,1,1,0,0,0,3,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    ];

    let mapGrid2Array = [mapGrid2a,mapGrid2b,mapGrid2c];
    return {
    	mapGrid1,
    	mapGrid2,
    	mapGrid2Array,
    }

});