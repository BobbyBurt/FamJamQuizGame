
// You can write more code here

/* START OF COMPILED CODE */

import UserComponent from "./UserComponent";
import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class MobileDependent extends UserComponent {

	constructor(gameObject: Phaser.GameObjects.Text | Phaser.GameObjects.Image | Phaser.GameObjects.BitmapText | Phaser.GameObjects.Sprite | Phaser.GameObjects.Rectangle) {
		super(gameObject);

		this.gameObject = gameObject;
		(gameObject as any)["__MobileDependent"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	static getComponent(gameObject: Phaser.GameObjects.Text | Phaser.GameObjects.Image | Phaser.GameObjects.BitmapText | Phaser.GameObjects.Sprite | Phaser.GameObjects.Rectangle): MobileDependent {
		return (gameObject as any)["__MobileDependent"];
	}

	private gameObject: Phaser.GameObjects.Text | Phaser.GameObjects.Image | Phaser.GameObjects.BitmapText | Phaser.GameObjects.Sprite | Phaser.GameObjects.Rectangle;
	public activeIfMobile: boolean = true;
	public visibleIfMobile: boolean = true;
	public ignoreVisibility: boolean = false;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
