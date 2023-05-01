// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */

import { answerInputCombos, currentAnswersComboIndex } from "~/components/InputManager";

/* END-USER-IMPORTS */

export default class AnswerPrefab extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 0, y ?? 0);

		// answer1Backing
		const answer1Backing = scene.add.rectangle(434, 40, 950, 128);
		answer1Backing.isFilled = true;
		answer1Backing.fillColor = 3355443;
		answer1Backing.isStroked = true;
		answer1Backing.strokeColor = 8224125;
		answer1Backing.lineWidth = 10;
		this.add(answer1Backing);

		// answer1Text
		const answer1Text = scene.add.text(146, 2, "", {});
		answer1Text.setOrigin(0.5, 0.5);
		answer1Text.setStyle({ "fontFamily": "arial", "fontSize": "64px" });
		this.add(answer1Text);

		// backing
		const backing = scene.add.rectangle(0, 0, 750, 550);
		backing.scaleX = 0.25;
		backing.scaleY = 0.25;
		backing.isFilled = true;
		backing.fillColor = 6184542;
		backing.isStroked = true;
		backing.lineWidth = 7;
		this.add(backing);

		// orangeUp
		const orangeUp = scene.add.rectangle(28, -45, 110, 128);
		orangeUp.scaleX = 0.25;
		orangeUp.scaleY = 0.25;
		orangeUp.isFilled = true;
		orangeUp.fillColor = 16228608;
		orangeUp.fillAlpha = 0.2;
		orangeUp.isStroked = true;
		orangeUp.strokeColor = 16228608;
		orangeUp.lineWidth = 5;
		this.add(orangeUp);

		// orangeCentre
		const orangeCentre = scene.add.ellipse(28, 1, 128, 128);
		orangeCentre.scaleX = 0.25;
		orangeCentre.scaleY = 0.25;
		orangeCentre.isFilled = true;
		orangeCentre.fillColor = 16228608;
		orangeCentre.fillAlpha = 0.2;
		orangeCentre.isStroked = true;
		orangeCentre.strokeColor = 16228608;
		orangeCentre.lineWidth = 5;
		this.add(orangeCentre);

		// orangeDown
		const orangeDown = scene.add.rectangle(28, 46, 110, 128);
		orangeDown.scaleX = 0.25;
		orangeDown.scaleY = 0.25;
		orangeDown.isFilled = true;
		orangeDown.fillColor = 16228608;
		orangeDown.isStroked = true;
		orangeDown.strokeColor = 16228608;
		orangeDown.lineWidth = 5;
		this.add(orangeDown);

		// orangeRight
		const orangeRight = scene.add.rectangle(71, 1, 128, 110);
		orangeRight.scaleX = 0.25;
		orangeRight.scaleY = 0.25;
		orangeRight.isFilled = true;
		orangeRight.fillColor = 16228608;
		orangeRight.fillAlpha = 0.2;
		orangeRight.isStroked = true;
		orangeRight.strokeColor = 16228608;
		orangeRight.lineWidth = 5;
		this.add(orangeRight);

		// blueUp
		const blueUp = scene.add.rectangle(-21, -44, 110, 128);
		blueUp.scaleX = 0.25;
		blueUp.scaleY = 0.25;
		blueUp.isFilled = true;
		blueUp.fillColor = 1946367;
		blueUp.fillAlpha = 0.2;
		blueUp.isStroked = true;
		blueUp.strokeColor = 1946367;
		blueUp.lineWidth = 5;
		this.add(blueUp);

		// blueCentre
		const blueCentre = scene.add.ellipse(-21, 2, 128, 128);
		blueCentre.scaleX = 0.25;
		blueCentre.scaleY = 0.25;
		blueCentre.isFilled = true;
		blueCentre.fillColor = 1946367;
		blueCentre.fillAlpha = 0.2;
		blueCentre.isStroked = true;
		blueCentre.strokeColor = 1946367;
		blueCentre.lineWidth = 5;
		this.add(blueCentre);

		// blueDown
		const blueDown = scene.add.rectangle(-21, 47, 110, 128);
		blueDown.scaleX = 0.25;
		blueDown.scaleY = 0.25;
		blueDown.isFilled = true;
		blueDown.fillColor = 1946367;
		blueDown.fillAlpha = 0.2;
		blueDown.isStroked = true;
		blueDown.strokeColor = 1946367;
		blueDown.lineWidth = 5;
		this.add(blueDown);

		// blueLeft
		const blueLeft = scene.add.rectangle(-74, 1, 128, 110);
		blueLeft.scaleX = 0.25;
		blueLeft.scaleY = 0.25;
		blueLeft.isFilled = true;
		blueLeft.fillColor = 1946367;
		blueLeft.fillAlpha = 0.2;
		blueLeft.isStroked = true;
		blueLeft.strokeColor = 1946367;
		blueLeft.lineWidth = 5;
		this.add(blueLeft);

		this.answer1Backing = answer1Backing;
		this.answer1Text = answer1Text;
		this.orangeUp = orangeUp;
		this.orangeCentre = orangeCentre;
		this.orangeDown = orangeDown;
		this.orangeRight = orangeRight;
		this.blueUp = blueUp;
		this.blueCentre = blueCentre;
		this.blueDown = blueDown;
		this.blueLeft = blueLeft;

		/* START-USER-CTR-CODE */
    // Write your code here.
    /* END-USER-CTR-CODE */
	}

	private answer1Backing: Phaser.GameObjects.Rectangle;
	private answer1Text: Phaser.GameObjects.Text;
	private orangeUp: Phaser.GameObjects.Rectangle;
	private orangeCentre: Phaser.GameObjects.Ellipse;
	private orangeDown: Phaser.GameObjects.Rectangle;
	private orangeRight: Phaser.GameObjects.Rectangle;
	private blueUp: Phaser.GameObjects.Rectangle;
	private blueCentre: Phaser.GameObjects.Ellipse;
	private blueDown: Phaser.GameObjects.Rectangle;
	private blueLeft: Phaser.GameObjects.Rectangle;

	/* START-USER-CODE */

  public setButtonCombo(
    answerIndex: number
  )
  {
    console.debug(answerInputCombos[currentAnswersComboIndex[answerIndex]]);
    const inputCombo = answerInputCombos[currentAnswersComboIndex[answerIndex]];
    // this.blueUp.fillAlpha = inputCombo.blue.up ? 1 : 0.2;
    // this.blueLeft.fillAlpha = inputCombo.blue.left ? 1 : 0.2;
    // this.blueCentre.fillAlpha = inputCombo.blue.centre ? 1 : 0.2;
    // this.blueDown.fillAlpha = inputCombo.blue.down ? 1 : 0.2;
	this.orangeCentre.fillAlpha = 1;
  }

  public setText(text: string) {
    this.answer1Text.setText(text);
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
