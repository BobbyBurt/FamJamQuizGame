import { Scene } from 'phaser';
import Game from './scenes/Game';
import Preload from './scenes/Preload';
import PluginTest from 'plugins/PluginTest'
import ScenePluginTest from './plugins/ScenePluginTest';

window.addEventListener('load', function ()
{
	var game = new Phaser.Game( 
	{
		title: 'Fam Jam Quiz Game',
		version: '1 prototype',
		
	// visuals
		type: Phaser.AUTO,
		backgroundColor: "#3F3F3F",
		pixelArt: false,
		input: {
			gamepad: true
		},
		scale: {
			mode: Phaser.Scale.FIT,
			width: 1920,
        	height: 1080,
			// autoRound: true
		},
		plugins:
		{
			global:
			[
				{
					key: 'plugin-test', 
					plugin: PluginTest, 
					start: true
				}
			],
			scene:
			[
				{
					key: 'scene-plugin-test',
					plugin: ScenePluginTest,
					mapping: 'scenePluginMap'
				}
			]
		}
	});
	
	game.scene.add("boot", Boot, true);
	game.scene.add("preload", Preload);
	game.scene.add("game", Game);
});

class Boot extends Phaser.Scene
{
	/**
	 * load preload assets, then the scene
	 */
	preload()
	{
		console.debug('preload');
		
		this.load.pack("pack", "assets/preload-asset-pack.json");
		this.load.on(Phaser.Loader.Events.COMPLETE, () => this.scene.start("preload"));
	}

	create()
	{

	}
}