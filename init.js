'use strict';
let cvs = document.querySelector('#canvas');
let {main, back} = cvs.canvasEmitCamera;

let touch = new TouchesControl(cvs, e => e.path[0].className !== 'slot');

let db = {}; // resures: [images, audios]
let em = new EventEmitter();

let cfg = {};
let scenes = {};


//========== LoopGame ==========//
function _updata(dt) {
	Scene.active_scene.updata(dt);
	touch.onNull();
	requestAnimationFrame(_updata);
};
