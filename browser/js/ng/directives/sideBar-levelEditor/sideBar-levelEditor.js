app.directive("sideBarLevelEditor", function(){
    return {
        restrict: "E",
        templateUrl: "js/ng/directives/sideBar-levelEditor/sideBar-levelEditor.html",
        controller: 'SideBarLevelEditorController'
    }
});
//"/images/background-tilesets/" + opts.img + ".png"

// const textureToImage = {
//     tile1: "01", tile2: "02",
//     tile3: "03", detail1: "08",
//     detail2: "09", detail3: "10",
//     detail4: "11", lights1: "04",
//     lights2: "05", lights3: "06",
//     lights4: "07", panelTop: "14",
//     panelBottom: "15", base1: "12",
//     base2: "13-1", base3: "13-2",
//     base4: "13-3", path: "13",
//     platformBL: "17",platformUL: "18",
//     platformBR: "19", platformUR: "20",
//     platformH: "21", platformV: "22",
//     platformX: "16", hangar: "23",
// };

// const terrainToTexture = {
//     0: "none",
//     1: "none",
//     3: "base1",
//     2: ["detail1", "detail2", "detail3"],
//     5: ["lights1", "lights2", "lights3", "lights4"],
//     6: ["tile1", "tile2", "tile3"],
//     4: "hangar",
//     7: "panelBottom",
//     8: "panelTop",
//     "BL": "platformBL",
//     "BR": "platformBR",
//     "H": "platformH",
//     "V": "platformV",
//     "UL": "platformUL",
//     "UR": "platformUR",
//     "X": "platformX",
// };

app.controller('SideBarLevelEditorController', function($scope, $rootScope, MapElementFactory, DesignFactory) {
	$scope.mapElements = [
		{name: "tile1", imgUrl: "/images/background-tilesets/01.png", mapNum: 6},{name: "tile2", imgUrl: "/images/background-tilesets/02.png", mapNum: 6},
		{name: "tile3", imgUrl: "/images/background-tilesets/03.png", mapNum: 6},{name: "detail1", imgUrl: "/images/background-tilesets/08.png", mapNum: 2},
		{name: "detail2", imgUrl: "/images/background-tilesets/09.png", mapNum: 2},{name: "detail3", imgUrl: "/images/background-tilesets/10.png", mapNum: 2},
		{name: "lights1", imgUrl: "/images/background-tilesets/04.png", mapNum: 5},{name: "lights2", imgUrl: "/images/background-tilesets/05.png", mapNum: 5},
		{name: "lights3", imgUrl: "/images/background-tilesets/06.png", mapNum: 5},{name: "lights4", imgUrl: "/images/background-tilesets/07.png", mapNum: 5},
		{name: "panelBottom", imgUrl: "/images/background-tilesets/15.png", mapNum: 7},{name: "panelTop", imgUrl: "/images/background-tilesets/14.png", mapNum: 8},
		{name: "platormBL", imgUrl: "/images/background-tilesets/17.png", mapNum: "BL"},{name: "platformUL", imgUrl: "/images/background-tilesets/18.png", mapNum: "UL"},
		{name: "platormBR", imgUrl: "/images/background-tilesets/19.png", mapNum: "BR"},{name: "platormUR", imgUrl: "/images/background-tilesets/20.png", mapNum: "UR"},
		{name: "platormH", imgUrl: "/images/background-tilesets/21.png", mapNum: "H"},{name: "platormV", imgUrl: "/images/background-tilesets/22.png", mapNum: "V"},
		{name: "platormX", imgUrl: "/images/background-tilesets/16.png", mapNum: "X"},{name: "hanger", imgUrl: "/images/background-tilesets/23.png", mapNum: 4},
		{name: 'path', imgUrl: "/images/background-tilesets/p.png", mapNum: 1}, {name: "base1", imgUrl: "/images/background-tilesets/12.png", mapNum: 3}
	]
	$scope.elementClicked = (element) => {
		$scope.currentElement = element;
	}
	$scope.saveMap = () => {
		let newMapGrid = $.extend(true, [], DesignFactory.blankGrid);
		console.log("DesignFactory", DesignFactory.blankGrid);
		console.log("the new map grid", newMapGrid);
		let mapElements = MapElementFactory.mapElements;
		console.log("the map elements", mapElements);
		mapElements.forEach((element) => {
			console.log("Element", element);
			let position = element.position;
			newMapGrid[position.y][position.x] = element.mapNum;
		});
		console.log("New map grid", newMapGrid);
		let mapObj = {};
		newMapGrid.forEach((row,index) => {
			mapObj[index] = row;
		})
		console.log("newMapGrid", newMapGrid);
		console.log("The mapObj", mapObj);
		let stringifyMap = JSON.stringify(mapObj);
		MapElementFactory.createMap(stringifyMap).then((savedMapGrid) => {
			console.log("Map saved string", savedMapGrid.map);
			console.log("Map saved json", JSON.parse(savedMapGrid.map));
		});
	}
});



