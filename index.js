'use strict';
resourceLoader,loadFiles([
	// resources
], db).then(() => {
	for(let i in scenes) scenes[i] = new Scene(scenes[i]);
	Scene.set(scenes.main);
	requestAnimationFrame(_updata);
});
