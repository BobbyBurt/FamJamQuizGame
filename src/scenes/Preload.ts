
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import PreloadText from "../components/PreloadText";
/* START-USER-IMPORTS */

/* END-USER-IMPORTS */

export default class Preload extends Phaser.Scene {

	constructor() {
		super("preload");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorPreload(): void {

		
	}

	editorCreate(): void {

		// progress
		const progress = this.add.text(981, 579, "", {});
		progress.setOrigin(0.5, 0.5);
		progress.text = "0%";
		progress.setStyle({ "fontFamily": "arial", "fontSize": "30px" });

		// progress (components)
		new PreloadText(progress);

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	preload()
	{
		console.debug('preload');
		
		this.load.pack("asset-pack", "assets/asset-pack.json");
		this.load.on(Phaser.Loader.Events.COMPLETE, () => this.scene.start("game"));

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
