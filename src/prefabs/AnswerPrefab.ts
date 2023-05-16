// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */

import {
  answerInputCombos,
} from "~/components/InputManager";

/* END-USER-IMPORTS */

export default class AnswerPrefab extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 0, y ?? 0);

		// answerBacking
		const answerBacking = scene.add.rectangle(-41, 40, 950, 128);
		answerBacking.scaleX = 0.8787662174331119;
		answerBacking.scaleY = 1.1969853140739937;
		answerBacking.setOrigin(0, 0.5);
		answerBacking.isFilled = true;
		answerBacking.fillColor = 3355443;
		answerBacking.isStroked = true;
		answerBacking.strokeColor = 8224125;
		answerBacking.lineWidth = 10;
		this.add(answerBacking);

		// answerText
		const answerText = scene.add.text(124, 40, "", {});
		answerText.setOrigin(0, 0.5);
		answerText.text = "Lorem ipsum dolor sit amet, ";
		answerText.setStyle({ "fontFamily": "readex", "fontSize": "50px", "maxLines":2});
		answerText.setWordWrapWidth(650);
		this.add(answerText);

		// backing
		const backing = scene.add.rectangle(0, 0, 750, 550);
		backing.scaleX = 0.25;
		backing.scaleY = 0.25;
		backing.isFilled = true;
		backing.fillColor = 1842204;
		backing.isStroked = true;
		backing.lineWidth = 12;
		this.add(backing);

		// blueLeftActive
		const blueLeftActive = scene.add.image(-61, 1, "arrow-button-blue-active");
		blueLeftActive.scaleX = 0.1;
		blueLeftActive.scaleY = 0.1;
		blueLeftActive.angle = -180;
		blueLeftActive.alpha = 0;
		blueLeftActive.alphaTopLeft = 0;
		blueLeftActive.alphaTopRight = 0;
		blueLeftActive.alphaBottomLeft = 0;
		blueLeftActive.alphaBottomRight = 0;
		this.add(blueLeftActive);

		// blueLeftInactive
		const blueLeftInactive = scene.add.image(-61, 1, "arrow-button-blue-inactive");
		blueLeftInactive.scaleX = 0.1;
		blueLeftInactive.scaleY = 0.1;
		blueLeftInactive.angle = -180;
		blueLeftInactive.alpha = 0.5;
		blueLeftInactive.alphaTopLeft = 0.5;
		blueLeftInactive.alphaTopRight = 0.5;
		blueLeftInactive.alphaBottomLeft = 0.5;
		blueLeftInactive.alphaBottomRight = 0.5;
		this.add(blueLeftInactive);

		// blueDownActive
		const blueDownActive = scene.add.image(-18, 40, "arrow-button-blue-active");
		blueDownActive.scaleX = 0.1;
		blueDownActive.scaleY = 0.1;
		blueDownActive.angle = 90;
		blueDownActive.alpha = 0;
		blueDownActive.alphaTopLeft = 0;
		blueDownActive.alphaTopRight = 0;
		blueDownActive.alphaBottomLeft = 0;
		blueDownActive.alphaBottomRight = 0;
		this.add(blueDownActive);

		// blueDownInactive
		const blueDownInactive = scene.add.image(-18, 40, "arrow-button-blue-inactive");
		blueDownInactive.scaleX = 0.1;
		blueDownInactive.scaleY = 0.1;
		blueDownInactive.angle = 90;
		blueDownInactive.alpha = 0.5;
		blueDownInactive.alphaTopLeft = 0.5;
		blueDownInactive.alphaTopRight = 0.5;
		blueDownInactive.alphaBottomLeft = 0.5;
		blueDownInactive.alphaBottomRight = 0.5;
		this.add(blueDownInactive);

		// blueUpActive
		const blueUpActive = scene.add.image(-22, -40, "arrow-button-blue-active");
		blueUpActive.scaleX = 0.1;
		blueUpActive.scaleY = 0.1;
		blueUpActive.angle = -90;
		blueUpActive.alpha = 0;
		blueUpActive.alphaTopLeft = 0;
		blueUpActive.alphaTopRight = 0;
		blueUpActive.alphaBottomLeft = 0;
		blueUpActive.alphaBottomRight = 0;
		this.add(blueUpActive);

		// blueUpInactive
		const blueUpInactive = scene.add.image(-22, -40, "arrow-button-blue-inactive");
		blueUpInactive.scaleX = 0.1;
		blueUpInactive.scaleY = 0.1;
		blueUpInactive.angle = -90;
		blueUpInactive.alpha = 0.5;
		blueUpInactive.alphaTopLeft = 0.5;
		blueUpInactive.alphaTopRight = 0.5;
		blueUpInactive.alphaBottomLeft = 0.5;
		blueUpInactive.alphaBottomRight = 0.5;
		this.add(blueUpInactive);

		// blueCentreActive
		const blueCentreActive = scene.add.image(-20, 0, "blue-centre-active");
		blueCentreActive.scaleX = 0.1;
		blueCentreActive.scaleY = 0.1;
		blueCentreActive.alpha = 0;
		blueCentreActive.alphaTopLeft = 0;
		blueCentreActive.alphaTopRight = 0;
		blueCentreActive.alphaBottomLeft = 0;
		blueCentreActive.alphaBottomRight = 0;
		this.add(blueCentreActive);

		// blueCentreInactive
		const blueCentreInactive = scene.add.image(-20, 0, "blue-centre-inactive");
		blueCentreInactive.scaleX = 0.1;
		blueCentreInactive.scaleY = 0.1;
		blueCentreInactive.alpha = 0.5;
		blueCentreInactive.alphaTopLeft = 0.5;
		blueCentreInactive.alphaTopRight = 0.5;
		blueCentreInactive.alphaBottomLeft = 0.5;
		blueCentreInactive.alphaBottomRight = 0.5;
		this.add(blueCentreInactive);

		// orangeCentreActive
		const orangeCentreActive = scene.add.image(20, 0, "orange-centre-active");
		orangeCentreActive.scaleX = 0.1;
		orangeCentreActive.scaleY = 0.1;
		orangeCentreActive.alpha = 0;
		orangeCentreActive.alphaTopLeft = 0;
		orangeCentreActive.alphaTopRight = 0;
		orangeCentreActive.alphaBottomLeft = 0;
		orangeCentreActive.alphaBottomRight = 0;
		this.add(orangeCentreActive);

		// orangeCentreinactive
		const orangeCentreinactive = scene.add.image(20, 0, "orange-centre-inactive");
		orangeCentreinactive.scaleX = 0.1;
		orangeCentreinactive.scaleY = 0.1;
		orangeCentreinactive.alpha = 0.5;
		orangeCentreinactive.alphaTopLeft = 0.5;
		orangeCentreinactive.alphaTopRight = 0.5;
		orangeCentreinactive.alphaBottomLeft = 0.5;
		orangeCentreinactive.alphaBottomRight = 0.5;
		this.add(orangeCentreinactive);

		// orangeUpActive
		const orangeUpActive = scene.add.image(18, -41, "arrow-button-orange-active");
		orangeUpActive.scaleX = 0.1;
		orangeUpActive.scaleY = 0.1;
		orangeUpActive.angle = -90;
		orangeUpActive.alpha = 0;
		orangeUpActive.alphaTopLeft = 0;
		orangeUpActive.alphaTopRight = 0;
		orangeUpActive.alphaBottomLeft = 0;
		orangeUpActive.alphaBottomRight = 0;
		this.add(orangeUpActive);

		// orangeUpInactive
		const orangeUpInactive = scene.add.image(18, -41, "arrow-button-orange-inactive");
		orangeUpInactive.scaleX = 0.1;
		orangeUpInactive.scaleY = 0.1;
		orangeUpInactive.angle = -90;
		orangeUpInactive.alpha = 0.5;
		orangeUpInactive.alphaTopLeft = 0.5;
		orangeUpInactive.alphaTopRight = 0.5;
		orangeUpInactive.alphaBottomLeft = 0.5;
		orangeUpInactive.alphaBottomRight = 0.5;
		this.add(orangeUpInactive);

		// orangeDownActive
		const orangeDownActive = scene.add.image(22, 39, "arrow-button-orange-active");
		orangeDownActive.scaleX = 0.1;
		orangeDownActive.scaleY = 0.1;
		orangeDownActive.angle = 90;
		orangeDownActive.alpha = 0;
		orangeDownActive.alphaTopLeft = 0;
		orangeDownActive.alphaTopRight = 0;
		orangeDownActive.alphaBottomLeft = 0;
		orangeDownActive.alphaBottomRight = 0;
		this.add(orangeDownActive);

		// orangeDownInactive
		const orangeDownInactive = scene.add.image(22, 39, "arrow-button-orange-inactive");
		orangeDownInactive.scaleX = 0.1;
		orangeDownInactive.scaleY = 0.1;
		orangeDownInactive.angle = 90;
		orangeDownInactive.alpha = 0.5;
		orangeDownInactive.alphaTopLeft = 0.5;
		orangeDownInactive.alphaTopRight = 0.5;
		orangeDownInactive.alphaBottomLeft = 0.5;
		orangeDownInactive.alphaBottomRight = 0.5;
		this.add(orangeDownInactive);

		// orangeRightActive
		const orangeRightActive = scene.add.image(61, -1, "arrow-button-orange-active");
		orangeRightActive.scaleX = 0.1;
		orangeRightActive.scaleY = 0.1;
		orangeRightActive.alpha = 0;
		orangeRightActive.alphaTopLeft = 0;
		orangeRightActive.alphaTopRight = 0;
		orangeRightActive.alphaBottomLeft = 0;
		orangeRightActive.alphaBottomRight = 0;
		this.add(orangeRightActive);

		// orangeRightInactive
		const orangeRightInactive = scene.add.image(61, -1, "arrow-button-orange-inactive");
		orangeRightInactive.scaleX = 0.1;
		orangeRightInactive.scaleY = 0.1;
		orangeRightInactive.alpha = 0.5;
		orangeRightInactive.alphaTopLeft = 0.5;
		orangeRightInactive.alphaTopRight = 0.5;
		orangeRightInactive.alphaBottomLeft = 0.5;
		orangeRightInactive.alphaBottomRight = 0.5;
		this.add(orangeRightInactive);

		this.answerBacking = answerBacking;
		this.answerText = answerText;
		this.blueLeftActive = blueLeftActive;
		this.blueLeftInactive = blueLeftInactive;
		this.blueDownActive = blueDownActive;
		this.blueDownInactive = blueDownInactive;
		this.blueUpActive = blueUpActive;
		this.blueUpInactive = blueUpInactive;
		this.blueCentreActive = blueCentreActive;
		this.blueCentreInactive = blueCentreInactive;
		this.orangeCentreActive = orangeCentreActive;
		this.orangeCentreinactive = orangeCentreinactive;
		this.orangeUpActive = orangeUpActive;
		this.orangeUpInactive = orangeUpInactive;
		this.orangeDownActive = orangeDownActive;
		this.orangeDownInactive = orangeDownInactive;
		this.orangeRightActive = orangeRightActive;
		this.orangeRightInactive = orangeRightInactive;

		/* START-USER-CTR-CODE */
    // Write your code here.
    /* END-USER-CTR-CODE */
	}

	private answerBacking: Phaser.GameObjects.Rectangle;
	private answerText: Phaser.GameObjects.Text;
	private blueLeftActive: Phaser.GameObjects.Image;
	private blueLeftInactive: Phaser.GameObjects.Image;
	private blueDownActive: Phaser.GameObjects.Image;
	private blueDownInactive: Phaser.GameObjects.Image;
	private blueUpActive: Phaser.GameObjects.Image;
	private blueUpInactive: Phaser.GameObjects.Image;
	private blueCentreActive: Phaser.GameObjects.Image;
	private blueCentreInactive: Phaser.GameObjects.Image;
	private orangeCentreActive: Phaser.GameObjects.Image;
	private orangeCentreinactive: Phaser.GameObjects.Image;
	private orangeUpActive: Phaser.GameObjects.Image;
	private orangeUpInactive: Phaser.GameObjects.Image;
	private orangeDownActive: Phaser.GameObjects.Image;
	private orangeDownInactive: Phaser.GameObjects.Image;
	private orangeRightActive: Phaser.GameObjects.Image;
	private orangeRightInactive: Phaser.GameObjects.Image;

	/* START-USER-CODE */

  drumrollTween: Phaser.Tweens.Tween;

  public setButtonComboVisible(visible: boolean)
  {
    this.blueUpActive.alpha = visible ? 1 : 0;
    this.blueLeftActive.alpha = visible ? 1 : 0;
    this.blueCentreActive.alpha = visible ? 1 : 0;
    this.blueDownActive.alpha = visible ? 1 : 0;
    this.orangeUpActive.alpha = visible ? 1 : 0;
    this.orangeRightActive.alpha = visible ? 1 : 0;
    this.orangeCentreActive.alpha = visible ? 1 : 0;
    this.orangeDownActive.alpha = visible ? 1 : 0;
  }

  public setButtonCombo(answerIndex: number) {
    const inputCombo = answerInputCombos[answerIndex];
    this.blueUpActive.alpha = inputCombo.blue.up ? 1 : 0;
    this.blueLeftActive.alpha = inputCombo.blue.left ? 1 : 0;
    this.blueCentreActive.alpha = inputCombo.blue.centre ? 1 : 0;
    this.blueDownActive.alpha = inputCombo.blue.down ? 1 : 0;
    this.orangeUpActive.alpha = inputCombo.orange.up ? 1 : 0;
    this.orangeRightActive.alpha = inputCombo.orange.right ? 1 : 0;
    this.orangeCentreActive.alpha = inputCombo.orange.centre ? 1 : 0;
    this.orangeDownActive.alpha = inputCombo.orange.down ? 1 : 0;
  }

  public setText(text: string) {
    this.answerText.setText(text);
  }

  public setStroke(setting: "neutral" | "drumroll" | "correct" | "incorrect") {
    if (setting === "drumroll") {
      this.answerBacking.strokeColor = 16579836;
      this.drumrollTween = this.scene.tweens.add({
        targets: this.answerBacking,
        duration: 400,
        repeat: 999,
        ease: Phaser.Math.Easing.Quadratic.InOut,
        yoyo: true,
        strokeAlpha: 0,
      });
    }
    else {
      if (this.drumrollTween)
        this.drumrollTween.stop();
      this.answerBacking.strokeAlpha = 1;

      if (setting === 'neutral')
        this.answerBacking.strokeColor = 8224125;
        else if (setting === 'correct')
        this.answerBacking.strokeColor = 6025287;
        else if (setting === 'incorrect')
        this.answerBacking.strokeColor = 15750215;
    }
  }
  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
