//http://localhost:8888/area51/nunezball-3d/

var NunezBall = function() {
    this.balls = [];
    this.x = 2;

    this.init = function(container) {
        let _this = this;

        _this.container = container;

        _this.scene = new THREE.Scene();

        _this.camera = new THREE.PerspectiveCamera(75, container.width()/container.height(), 0.1, 1000);
        _this.camera.position.z = 5;

        _this.renderer = new THREE.WebGLRenderer();

        _this.renderer.setSize(container.width(), container.height());

        container.append(_this.renderer.domElement);
        //document.body.appendChild( _this.renderer.domElement );
    }

    this.addBall = function() {
        let _this = this;

        let geometry = new THREE.BoxGeometry( 1, 1, 1 );
        let material = new THREE.MeshBasicMaterial({
            color: '#FF0000'
        });

        let ball = new THREE.Mesh(geometry, material);

        _this.balls.push(ball);

        _this.scene.add(ball);
    }

    this.modifyBalls = function(plusX, plusY) {
        let _this = this;

        for (let i = 0; i < _this.balls.length; i++) {
            _this.balls[i].rotation.x += plusX;
            _this.balls[i].rotation.y += plusY;

            _this.balls[i].position.x += plusX * Math.random();

            _this.balls[i].position.y += 2 * Math.random();
        }
    }

    this.gameLoop = function() {
        let _this = this;

        var animate = function () {
            requestAnimationFrame( animate );

            console.log('animate fired');

            //_this.addBall();

            _this.modifyBalls(0.01, 0.01);

            _this.renderer.render( _this.scene, _this.camera );
        };

        animate();
    }
}

NunezBall.prototype.GamePad = function() {
    function Enter() {
        this.addBall();
    }
}