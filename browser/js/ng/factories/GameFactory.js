'use strict'

app.factory('GameFactory', function(GridFactory, TowerFactory, ViewFactory, ParticleFactory, ConfigFactory, MapFactory, EnemyFactory, PlayerFactory, ProjectileFactory, WaveFactory, $rootScope) {
    let game = ConfigFactory;
    game.cellSize = game.width / game.cols;
    game.height = (game.rows / game.cols) * game.width;
    game.launchCritters = false;
    game.init = () => {

        //game.stages = {};
        game.map = {};
        ViewFactory.newStage('menu');
        ViewFactory.newStage('play');

        game.renderer = PIXI.autoDetectRenderer(game.width, game.height);
        document.body.appendChild(game.renderer.view);

        game.start();
        game.main();

    };

    game.checkNodeClear = nodeNum => {
        if(!EnemyFactory.enemies.length) return true;
        return EnemyFactory.enemies[EnemyFactory.enemies.length - 1].pathIndex === nodeNum;
    };

    var counter = 0;

    game.main = then => {

        var now = Date.now();
        var delta = (now - then)/1000;
        if (game.state === "menu"){
            //do menu stuff
        }

        if (game.state === "play") {
            game.update(delta);
            //
            //game.fire.update(delta/10);
            //game.fire.emit = true;
            //game.fire.updateOwnerPos(100, 100);
            //game.fire.rotate(counter++);

        }
        game.renderer.render(ViewFactory.stages[game.state]);
        requestAnimationFrame(game.main.bind(null, now));

    };

    game.createWave = WaveFactory.createWave;



    game.checkNodeClear = nodeNum => {
        if(!EnemyFactory.enemies.length) return true;
        return EnemyFactory.enemies[EnemyFactory.enemies.length - 1].pathIndex === nodeNum;
    };

    game.loadEnemy = () => {
        if(game.checkNodeClear(3)) {
            if(!WaveFactory.currWaveQLength()) return;
            var newEn = EnemyFactory.createEnemy(WaveFactory.popOffWaveQueue(), game.map.path);
            ViewFactory.stages.play.addChild(newEn.img);
        }
    };

    game.update = delta => {
        //if(!EnemyFactory.enemies.length) $rootScope.$emit('launchNext', {}); //FIXME
        if(game.launchCritters) game.loadEnemy();
        ProjectileFactory.updateAll();
        TowerFactory.updateAll();
        let enemies = EnemyFactory.enemies.map(function(element) {
            return element;
        });

        for(let i = 0; i < enemies.length; i++) {
            if(enemies[i].moveTowards(delta)) {
                ViewFactory.stages.play.removeChild(enemies[i].img);
                PlayerFactory.health--;
            }
        }
        //game logic
    };

    game.start = map => {
        game.map = MapFactory.maps[0];


        GridFactory.grid = game.map.grid;
        GridFactory.grid.forEach(row => {
            row.forEach(gridNode => {
                ViewFactory.stages.play.addChild(gridNode.img);
            });
        });

        game.PEContainer = new PIXI.Stage();
        ViewFactory.stages.play.addChild(game.PEContainer);
        ParticleFactory.createFire(game.PEContainer, function(emitter){

            console.log("EMITTER", emitter);
            game.fire = emitter;
        });

        // game.createCritter();

        game.state = "play";
    };

    game.initiateWave = () => {
        game.launchCritters = true;
        //game.main();
    };


    return game;
});
