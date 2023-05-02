// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import SetAlphaOnEvent from "../components/SetAlphaOnEvent";
import AnswerPrefab from "../prefabs/AnswerPrefab";
/* START-USER-IMPORTS */

import PluginTest from "plugins/PluginTest";
import { InputManager, answerInputCombos } from "~/components/InputManager";
import { QuizData } from "../components/quizDataUtil";
import ScenePluginTest from "~/plugins/ScenePluginTest";

/* END-USER-IMPORTS */

export default class Game extends Phaser.Scene {

	constructor() {
		super("game");

		/* START-USER-CTR-CODE */
    // Write your code here.
    /* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// instructionText
		const instructionText = this.add.text(452, 138, "", {});
		instructionText.setOrigin(0.5, 0);
		instructionText.text = "STAND ON THE SQUARE ICONS \nTO BEGIN QUESTION";
		instructionText.setStyle({ "align": "center", "fontFamily": "arial", "fontSize": "40px", "fontStyle": "bold" });

		// questionNumberText
		const questionNumberText = this.add.text(960, 43, "", {});
		questionNumberText.setOrigin(0.5, 0);
		questionNumberText.text = "Question 1";
		questionNumberText.setStyle({ "align": "center", "fontFamily": "arial", "fontSize": "40px", "fontStyle": "bold" });

		// inputFeedback
		const inputFeedback = this.add.container(452, 572);
		inputFeedback.scaleX = 0.5134753012100363;
		inputFeedback.scaleY = 0.5134753012100363;

		// orangeRightInactive
		const orangeRightInactive = this.add.image(574, -15, "arrow-button-orange-inactive");
		inputFeedback.add(orangeRightInactive);

		// orangeRightActive
		const orangeRightActive = this.add.image(574, -14, "arrow-button-orange-active");
		orangeRightActive.alpha = 0.1;
		orangeRightActive.alphaTopLeft = 0.1;
		orangeRightActive.alphaTopRight = 0.1;
		orangeRightActive.alphaBottomLeft = 0.1;
		orangeRightActive.alphaBottomRight = 0.1;
		inputFeedback.add(orangeRightActive);

		// orangeDownInactive
		const orangeDownInactive = this.add.image(209, 398, "arrow-button-orange-inactive");
		orangeDownInactive.angle = 90;
		inputFeedback.add(orangeDownInactive);

		// orangeDownActive
		const orangeDownActive = this.add.image(209, 398, "arrow-button-orange-active");
		orangeDownActive.angle = 90;
		orangeDownActive.alpha = 0.1;
		orangeDownActive.alphaTopLeft = 0.1;
		orangeDownActive.alphaTopRight = 0.1;
		orangeDownActive.alphaBottomLeft = 0.1;
		orangeDownActive.alphaBottomRight = 0.1;
		inputFeedback.add(orangeDownActive);

		// orangeUpInactive
		const orangeUpInactive = this.add.image(169, -405, "arrow-button-orange-inactive");
		orangeUpInactive.angle = -90;
		inputFeedback.add(orangeUpInactive);

		// orangeUpActive
		const orangeUpActive = this.add.image(169, -405, "arrow-button-orange-active");
		orangeUpActive.angle = -90;
		orangeUpActive.alpha = 0.1;
		orangeUpActive.alphaTopLeft = 0.1;
		orangeUpActive.alphaTopRight = 0.1;
		orangeUpActive.alphaBottomLeft = 0.1;
		orangeUpActive.alphaBottomRight = 0.1;
		inputFeedback.add(orangeUpActive);

		// orangeCentreinactive
		const orangeCentreinactive = this.add.image(189, -2, "orange-centre-inactive");
		inputFeedback.add(orangeCentreinactive);

		// orangeCentreActive
		const orangeCentreActive = this.add.image(189, -2, "orange-centre-active");
		orangeCentreActive.alpha = 0.1;
		orangeCentreActive.alphaTopLeft = 0.1;
		orangeCentreActive.alphaTopRight = 0.1;
		orangeCentreActive.alphaBottomLeft = 0.1;
		orangeCentreActive.alphaBottomRight = 0.1;
		inputFeedback.add(orangeCentreActive);

		// blueCentreInactive
		const blueCentreInactive = this.add.image(-188, -2, "blue-centre-inactive");
		inputFeedback.add(blueCentreInactive);

		// blueCentreActive
		const blueCentreActive = this.add.image(-188, -2, "blue-centre-active");
		blueCentreActive.alpha = 0.1;
		blueCentreActive.alphaTopLeft = 0.1;
		blueCentreActive.alphaTopRight = 0.1;
		blueCentreActive.alphaBottomLeft = 0.1;
		blueCentreActive.alphaBottomRight = 0.1;
		inputFeedback.add(blueCentreActive);

		// blueUpInactive
		const blueUpInactive = this.add.image(-208, -405, "arrow-button-blue-inactive");
		blueUpInactive.angle = -90;
		inputFeedback.add(blueUpInactive);

		// blueUpActive
		const blueUpActive = this.add.image(-208, -405, "arrow-button-blue-active");
		blueUpActive.angle = -90;
		blueUpActive.alpha = 0.1;
		blueUpActive.alphaTopLeft = 0.1;
		blueUpActive.alphaTopRight = 0.1;
		blueUpActive.alphaBottomLeft = 0.1;
		blueUpActive.alphaBottomRight = 0.1;
		inputFeedback.add(blueUpActive);

		// blueDownInactive
		const blueDownInactive = this.add.image(-168, 398, "arrow-button-blue-inactive");
		blueDownInactive.angle = 90;
		inputFeedback.add(blueDownInactive);

		// blueDownActive
		const blueDownActive = this.add.image(-168, 398, "arrow-button-blue-active");
		blueDownActive.angle = 90;
		blueDownActive.alpha = 0.1;
		blueDownActive.alphaTopLeft = 0.1;
		blueDownActive.alphaTopRight = 0.1;
		blueDownActive.alphaBottomLeft = 0.1;
		blueDownActive.alphaBottomRight = 0.1;
		inputFeedback.add(blueDownActive);

		// blueLeftInactive
		const blueLeftInactive = this.add.image(-575, 29, "arrow-button-blue-inactive");
		blueLeftInactive.angle = -180;
		inputFeedback.add(blueLeftInactive);

		// blueLeftActive
		const blueLeftActive = this.add.image(-575, 30, "arrow-button-blue-active");
		blueLeftActive.angle = -180;
		blueLeftActive.alpha = 0.1;
		blueLeftActive.alphaTopLeft = 0.1;
		blueLeftActive.alphaTopRight = 0.1;
		blueLeftActive.alphaBottomLeft = 0.1;
		blueLeftActive.alphaBottomRight = 0.1;
		inputFeedback.add(blueLeftActive);

		// answerPrefab4
		const answerPrefab4 = new AnswerPrefab(this, 1055, 892);
		this.add.existing(answerPrefab4);

		// answerPrefab3
		const answerPrefab3 = new AnswerPrefab(this, 1055, 665);
		this.add.existing(answerPrefab3);

		// answerPrefab2
		const answerPrefab2 = new AnswerPrefab(this, 1055, 437);
		this.add.existing(answerPrefab2);

		// answerPrefab1
		const answerPrefab1 = new AnswerPrefab(this, 1055, 210);
		this.add.existing(answerPrefab1);

		// orangeRightActive (components)
		const orangeRightActiveSetAlphaOnEvent = new SetAlphaOnEvent(orangeRightActive);
		orangeRightActiveSetAlphaOnEvent.activateEvent = "orange-right-true";
		orangeRightActiveSetAlphaOnEvent.deactivateEvent = "orange-right-false";
		orangeRightActiveSetAlphaOnEvent.deactiveAlpha = 0.1;

		// orangeDownActive (components)
		const orangeDownActiveSetAlphaOnEvent = new SetAlphaOnEvent(orangeDownActive);
		orangeDownActiveSetAlphaOnEvent.activateEvent = "orange-down-true";
		orangeDownActiveSetAlphaOnEvent.deactivateEvent = "orange-down-false";
		orangeDownActiveSetAlphaOnEvent.deactiveAlpha = 0.1;

		// orangeUpActive (components)
		const orangeUpActiveSetAlphaOnEvent = new SetAlphaOnEvent(orangeUpActive);
		orangeUpActiveSetAlphaOnEvent.activateEvent = "orange-up-true";
		orangeUpActiveSetAlphaOnEvent.deactivateEvent = "orange-up-false";
		orangeUpActiveSetAlphaOnEvent.deactiveAlpha = 0.1;

		// orangeCentreActive (components)
		const orangeCentreActiveSetAlphaOnEvent = new SetAlphaOnEvent(orangeCentreActive);
		orangeCentreActiveSetAlphaOnEvent.activateEvent = "orange-centre-true";
		orangeCentreActiveSetAlphaOnEvent.deactivateEvent = "orange-centre-false";
		orangeCentreActiveSetAlphaOnEvent.deactiveAlpha = 0.1;

		// blueCentreActive (components)
		const blueCentreActiveSetAlphaOnEvent = new SetAlphaOnEvent(blueCentreActive);
		blueCentreActiveSetAlphaOnEvent.activateEvent = "blue-centre-true";
		blueCentreActiveSetAlphaOnEvent.deactivateEvent = "blue-centre-false";
		blueCentreActiveSetAlphaOnEvent.deactiveAlpha = 0.1;

		// blueUpActive (components)
		const blueUpActiveSetAlphaOnEvent = new SetAlphaOnEvent(blueUpActive);
		blueUpActiveSetAlphaOnEvent.activateEvent = "blue-up-true";
		blueUpActiveSetAlphaOnEvent.deactivateEvent = "blue-up-false";
		blueUpActiveSetAlphaOnEvent.deactiveAlpha = 0.1;

		// blueDownActive (components)
		const blueDownActiveSetAlphaOnEvent = new SetAlphaOnEvent(blueDownActive);
		blueDownActiveSetAlphaOnEvent.activateEvent = "blue-down-true";
		blueDownActiveSetAlphaOnEvent.deactivateEvent = "blue-down-false";
		blueDownActiveSetAlphaOnEvent.deactiveAlpha = 0.1;

		// blueLeftActive (components)
		const blueLeftActiveSetAlphaOnEvent = new SetAlphaOnEvent(blueLeftActive);
		blueLeftActiveSetAlphaOnEvent.activateEvent = "blue-left-true";
		blueLeftActiveSetAlphaOnEvent.deactivateEvent = "blue-left-false";
		blueLeftActiveSetAlphaOnEvent.deactiveAlpha = 0.1;

		this.instructionText = instructionText;
		this.questionNumberText = questionNumberText;
		this.answerPrefab4 = answerPrefab4;
		this.answerPrefab3 = answerPrefab3;
		this.answerPrefab2 = answerPrefab2;
		this.answerPrefab1 = answerPrefab1;

		this.events.emit("scene-awake");
	}

	private instructionText!: Phaser.GameObjects.Text;
	private questionNumberText!: Phaser.GameObjects.Text;
	private answerPrefab4!: AnswerPrefab;
	private answerPrefab3!: AnswerPrefab;
	private answerPrefab2!: AnswerPrefab;
	private answerPrefab1!: AnswerPrefab;

	/* START-USER-CODE */

  /*
	0		1		2		3		4		5		6		7		8		9		10		11		12		13		14		15		16
	[false, false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false],

	   [o] [ ]
	[ ][ ] [ ][o]
	   [ ] [ ]
	[false, false, 	false, 	true, 	false, 	false, 	false, 	false, 	false, 	true, 	false, 	false, 	false, 	false, 	false, 	false, 	false],

	   [ ] [o]
	[ ][ ] [ ][ ]
	   [o] [ ]
	[false, true, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	true, 	false],

	   [ ] [ ]
	[ ][ ] [ ][o]
	   [ ] [o]
	[false, false, 	false, 	true, 	false, 	true, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false],

	   [ ] [ ]
	[o][ ] [o][ ]
	   [ ] [ ]
	[true, false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	true, 	false, 	false, 	false, 	false],

	   [ ] [o]
	[ ][ ] [ ][ ]
	   [o] [ ]
	[false, true, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	true, 	false],

	   [ ] [o]
	[ ][ ] [ ][ ]
	   [ ] [o]
	[false, true, 	false, 	false, 	false, 	true, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false],

	   [ ] [ ]
	[ ][ ] [ ][o]
	   [o] [ ]
	[false, false, 	false, 	true, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	true, 	false],


	   [ ] [ ]
	[ ][o] [ ][ ]
	   [o] [ ]
	[false, false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	true, 	false, 	true, 	false],

	   [ ] [ ]
	[ ][ ] [ ][ ]
	   [o] [o]
	[false, false, 	false, 	false, 	false, 	true, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	true, 	false],

	   [o] [ ]
	[ ][ ] [ ][ ]
	   [ ] [o]
	[false, false, 	false, 	false, 	false, 	true, 	false, 	false, 	false, 	true, 	false, 	false, 	false, 	false, 	false, 	false, 	false],

	   [ ] [ ]
	[o][ ] [ ][o]
	   [ ] [ ]
	[false, false, 	false, 	true, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	true, 	false, 	false, 	false, 	false],

*/

  // question data

  private answer1 = [
    "Sixty-three",
    "Nineveh",
    "Psalm",
    "Elijah",
    "Syntactic",
    "Patmos",
    "Storge",
    "mene mene tekel uparsin",
  ];
  private answer1Buttons = [
    //  0		1		2		3		4		5		6		7		8		9		10		11		12		13		14		15		16
    [false, false, 	false, 	true, 	false, 	false, 	false, 	false, 	false, 	true, 	false, 	false, 	false, 	false, 	false, 	false, 	false],
    [false, true, 	false, 	false, 	false, 	true, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false],
		[false, false, 	false, 	false, 	false, 	true, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	true, 	false],
    [false, false, 	false, 	true, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	true, 	false, 	false, 	false, 	false],
		[false, false, 	false, 	true, 	false, 	false, 	false, 	false, 	false, 	true, 	false, 	false, 	false, 	false, 	false, 	false, 	false],
		[false, true, 	false, 	false, 	false, 	true, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false],
		[false, false, 	false, 	true, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	true, 	false, 	false, 	false, 	false],
		[false, false, 	false, 	true, 	false, 	false, 	false, 	false, 	false, 	true, 	false, 	false, 	false, 	false, 	false, 	false, 	false],
		[true, false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	true, 	false, 	false, 	false, 	false],
		[false, false, 	false, 	true, 	false, 	false, 	false, 	false, 	false, 	true, 	false, 	false, 	false, 	false, 	false, 	false, 	false],
		[false, false, 	false, 	true, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	true, 	false, 	false, 	false, 	false],
		[false, false, 	false, 	true, 	false, 	false, 	false, 	false, 	false, 	true, 	false, 	false, 	false, 	false, 	false, 	false, 	false],



  ];
  private answer2 = [
    "Fourty-two",
    "Tarsus",
    "Colossians",
    "Philo",
    "Simplistic",
    "Ephesus",
    "Eros",
    "eli eli sabatchani",
  ];
  private answer2Buttons = [
    //  0		1		2		3		4		5		6		7		8		9		10		11		12		13		14		15		16
    [false, true, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	true, 	false],
    [false, false, 	false, 	true, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	true, 	false],
		[true, false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	true, 	false, 	false, 	false, 	false],
		[false, false, 	false, 	true, 	false, 	false, 	false, 	false, 	false, 	true, 	false, 	false, 	false, 	false, 	false, 	false, 	false],
		[false, false, 	false, 	true, 	false, 	true, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false],
		[false, false, 	false, 	true, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	true, 	false, 	false, 	false, 	false],
    [false, false, 	false, 	true, 	false, 	true, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false],
		[false, false, 	false, 	true, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	true, 	false, 	false, 	false, 	false],
		[false, false, 	false, 	false, 	false, 	true, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	true, 	false],
		[false, true, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	true, 	false],
		[false, true, 	false, 	false, 	false, 	true, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false],
		[false, true, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	true, 	false],


  ];
  private answer3 = [
    "Sixty-six",
    "Rome",
    "Jude",
    "Moses",
    "Synaptic",
    "Crete",
    "Philia",
    "mene une tekel parsin",
  ];
  private answer3Buttons = [
    //  0		1		2		3		4		5		6		7		8		9		10		11		12		13		14		15		16
    [false, true, 	false, 	false, 	false, 	true, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false],
		[false, false, 	false, 	false, 	false, 	true, 	false, 	false, 	false, 	true, 	false, 	false, 	false, 	false, 	false, 	false, 	false],
		[false, false, 	false, 	true, 	false, 	false, 	false, 	false, 	false, 	true, 	false, 	false, 	false, 	false, 	false, 	false, 	false],
    [false, false, 	false, 	true, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	true, 	false],
		[false, false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	true, 	false, 	true, 	false],
		[false, false, 	false, 	false, 	false, 	true, 	false, 	false, 	false, 	true, 	false, 	false, 	false, 	false, 	false, 	false, 	false],
		[false, true, 	false, 	false, 	false, 	true, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false],
		[false, false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	true, 	false, 	true, 	false],
		[false, false, 	false, 	true, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	true, 	false],
		[false, false, 	false, 	false, 	false, 	true, 	false, 	false, 	false, 	true, 	false, 	false, 	false, 	false, 	false, 	false, 	false],
		[false, true, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	true, 	false],
		[false, true, 	false, 	false, 	false, 	true, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false],
  ];
  private answer4 = [
    "Seventy-one",
    "Tarshish",
    "Galatians",
    "Jesus",
    "Synoptic",
    "Phillipi",
    "Agape",
    "Be excellent to each other",
  ];
  private answer4Buttons = [
    //  0		1		2		3		4		5		6		7		8		9		10		11		12		13		14		15		16
    [false, false, 	false, 	true, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	true, 	false, 	false, 	false, 	false],
		[false, true, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	true, 	false],
    [false, false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	true, 	false, 	true, 	false],
		[false, true, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	true, 	false],
		[false, false, 	false, 	false, 	false, 	true, 	false, 	false, 	false, 	true, 	false, 	false, 	false, 	false, 	false, 	false, 	false],
		[false, false, 	false, 	true, 	false, 	false, 	false, 	false, 	false, 	true, 	false, 	false, 	false, 	false, 	false, 	false, 	false],
		[false, false, 	false, 	true, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	true, 	false],
		[false, true, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	true, 	false],
		[false, true, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	true, 	false],
		[false, false, 	false, 	true, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	true, 	false, 	false, 	false, 	false],
		[false, false, 	false, 	true, 	false, 	false, 	false, 	false, 	false, 	true, 	false, 	false, 	false, 	false, 	false, 	false, 	false],
		[false, false, 	false, 	true, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	false, 	true, 	false, 	false, 	false, 	false],
  ];
  private correctAnswerIndex = [3, 2, 1, 4, 4, 1, 3, 1];

  // quiz data
  private quizData: QuizData;

  // input
  private inputManager:InputManager;

  // game state
  private currentQuestion = 0;
  private phase: "waiting" | "deciding" | "drumroll" | "reveal" = "waiting";

  private buttonBackings: Array<Phaser.GameObjects.Rectangle>;
  private answerBackings: Array<Phaser.GameObjects.Rectangle>;

  private downButtons = [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ];
  private beginButtons = [
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    true,
    false,
    false,
    false,
  ];


  private scenePluginMap!: ScenePluginTest;
  private NGIOPlugin!: PluginTest;

  create() {
    console.debug("create");

    this.editorCreate();

    // json loading test
    this.quizData = this.cache.json.get("test-quiz");

    this.setupButtonBackings();
    this.setupAnswerBackings();

    this.inputManager = new InputManager(this);

	this.inputManager.setAnswerCombos();
	this.answerPrefab1.setButtonCombo(0);
	this.answerPrefab2.setButtonCombo(1);
	this.answerPrefab3.setButtonCombo(2);
	this.answerPrefab4.setButtonCombo(3);
	// TODO - randomize answer index


    // DEPRECATED
    // MARKED FOR DELETION
    // this.input.gamepad.on(
    //   "down",
    //   (
    //     pad: Phaser.Input.Gamepad.Gamepad,
    //     button: Phaser.Input.Gamepad.Button,
    //     index: number
    //   ) => {
    //     console.debug(button.index, "down");
    //     if (this.buttonBackings[button.index] != null) {
    //       this.buttonBackings[button.index].fillAlpha = 1;
    //       this.downButtons[button.index] = true;
    //     }
    //     this.checkInput();
    //   }
    // );
    // this.input.gamepad.on(
    //   "up",
    //   (
    //     pad: Phaser.Input.Gamepad.Gamepad,
    //     button: Phaser.Input.Gamepad.Button,
    //     index: number
    //   ) => {
    //     console.debug(button.index, "up");
    //     if (this.buttonBackings[button.index] != null) {
    //       this.buttonBackings[button.index].fillAlpha = 0.2;
    //       this.downButtons[button.index] = false;
    //     }
    //     this.checkInput();
    //   }
    // );

    // TEMP - keyboard question select
    this.input.keyboard.on("keydown", (event: any) => {
      // console.debug(event);

      if (this.phase !== "waiting") return;

      switch (event.key) {
        case "1":
          this.setCurrentQuestion(0);
          break;
        case "2":
          this.setCurrentQuestion(1);
          break;
        case "3":
          this.setCurrentQuestion(2);
          break;
        case "4":
          this.setCurrentQuestion(3);
          break;
        case "5":
          this.setCurrentQuestion(4);
          break;
        case "6":
          this.setCurrentQuestion(5);
          break;
        case "7":
          this.setCurrentQuestion(6);
          break;
        case "8":
          this.setCurrentQuestion(7);
          break;
        case "9":
          this.setCurrentQuestion(8);
          break;
        case "0":
          this.setCurrentQuestion(9);
          break;
        case "-":
          this.setCurrentQuestion(10);
          break;
        case "=":
          this.setCurrentQuestion(11);
          break;
      }
    });

    this.setWaiting();
  }

  update(time: number, delta: number): void
  {

  }

  setCurrentQuestion(question: number) {
    this.currentQuestion = question;
    this.questionNumberText.setText(`Question ${this.currentQuestion + 1}`);
  }

  setAnswers() {
	// DEPRECATED - to be made obsolete by answerPrefab - marked for deletion.

    // // answer 1
    // this.answer1Text.setText(this.quizData.questions[this.currentQuestion].answers[0]);
    // this.orangeCentre.fillAlpha = this.input
    //   ? 1
    //   : 0.2;
    // this.orangeUp.fillAlpha = this.answer1Buttons[this.currentQuestion][1]
    //   ? 1
    //   : 0.2;
    // this.orangeRight.fillAlpha = this.answer1Buttons[this.currentQuestion][3]
    //   ? 1
    //   : 0.2;
    // this.orangeDown.fillAlpha = this.answer1Buttons[this.currentQuestion][5]
    //   ? 1
    //   : 0.2;
    // this.blueUp.fillAlpha = this.answer1Buttons[this.currentQuestion][9]
    //   ? 1
    //   : 0.2;
    // this.blueLeft.fillAlpha = this.answer1Buttons[this.currentQuestion][12]
    //   ? 1
    //   : 0.2;
    // this.blueCentre.fillAlpha = this.answer1Buttons[this.currentQuestion][13]
    //   ? 1
    //   : 0.2;
    // this.blueDown.fillAlpha = this.answer1Buttons[this.currentQuestion][15]
    //   ? 1
    //   : 0.2;
    // this.answer1Backing.strokeColor = 8224125;

    // // answer 2
    // this.answer2Text.setText(this.quizData.questions[this.currentQuestion].answers[1]);
    // this.orangeCentre_1.fillAlpha = this.answer2Buttons[this.currentQuestion][0]
    //   ? 1
    //   : 0.2;
    // this.orangeUp_1.fillAlpha = this.answer2Buttons[this.currentQuestion][1]
    //   ? 1
    //   : 0.2;
    // this.orangeRight_1.fillAlpha = this.answer2Buttons[this.currentQuestion][3]
    //   ? 1
    //   : 0.2;
    // this.orangeDown_1.fillAlpha = this.answer2Buttons[this.currentQuestion][5]
    //   ? 1
    //   : 0.2;
    // this.blueUp_1.fillAlpha = this.answer2Buttons[this.currentQuestion][9]
    //   ? 1
    //   : 0.2;
    // this.blueLeft_1.fillAlpha = this.answer2Buttons[this.currentQuestion][12]
    //   ? 1
    //   : 0.2;
    // this.blueCentre_1.fillAlpha = this.answer2Buttons[this.currentQuestion][13]
    //   ? 1
    //   : 0.2;
    // this.blueDown_1.fillAlpha = this.answer2Buttons[this.currentQuestion][15]
    //   ? 1
    //   : 0.2;
    // this.answer2Backing.strokeColor = 8224125;

    // // answer 3
    // this.answer3Text.setText(this.quizData.questions[this.currentQuestion].answers[2]);
    // this.orangeCentre_2.fillAlpha = this.answer3Buttons[this.currentQuestion][0]
    //   ? 1
    //   : 0.2;
    // this.orangeUp_2.fillAlpha = this.answer3Buttons[this.currentQuestion][1]
    //   ? 1
    //   : 0.2;
    // this.orangeRight_2.fillAlpha = this.answer3Buttons[this.currentQuestion][3]
    //   ? 1
    //   : 0.2;
    // this.orangeDown_2.fillAlpha = this.answer3Buttons[this.currentQuestion][5]
    //   ? 1
    //   : 0.2;
    // this.blueUp_2.fillAlpha = this.answer3Buttons[this.currentQuestion][9]
    //   ? 1
    //   : 0.2;
    // this.blueLeft_2.fillAlpha = this.answer3Buttons[this.currentQuestion][12]
    //   ? 1
    //   : 0.2;
    // this.blueCentre_2.fillAlpha = this.answer3Buttons[this.currentQuestion][13]
    //   ? 1
    //   : 0.2;
    // this.blueDown_2.fillAlpha = this.answer3Buttons[this.currentQuestion][15]
    //   ? 1
    //   : 0.2;
    // this.answer3Backing.strokeColor = 8224125;

    // // answer 4
    // this.answer4Text.setText(this.quizData.questions[this.currentQuestion].answers[3]);
    // this.orangeCentre_3.fillAlpha = this.answer4Buttons[this.currentQuestion][0]
    //   ? 1
    //   : 0.2;
    // this.orangeUp_3.fillAlpha = this.answer4Buttons[this.currentQuestion][1]
    //   ? 1
    //   : 0.2;
    // this.orangeRight_3.fillAlpha = this.answer4Buttons[this.currentQuestion][3]
    //   ? 1
    //   : 0.2;
    // this.orangeDown_3.fillAlpha = this.answer4Buttons[this.currentQuestion][5]
    //   ? 1
    //   : 0.2;
    // this.blueUp_3.fillAlpha = this.answer4Buttons[this.currentQuestion][9]
    //   ? 1
    //   : 0.2;
    // this.blueLeft_3.fillAlpha = this.answer4Buttons[this.currentQuestion][12]
    //   ? 1
    //   : 0.2;
    // this.blueCentre_3.fillAlpha = this.answer4Buttons[this.currentQuestion][13]
    //   ? 1
    //   : 0.2;
    // this.blueDown_3.fillAlpha = this.answer4Buttons[this.currentQuestion][15]
    //   ? 1
    //   : 0.2;
    // this.answer4Backing.strokeColor = 8224125;

    this.sound.stopAll();
    this.sound.play("question");

    this.instructionText.setVisible(false);

    this.phase = "deciding";
  }

  /**
   * Compares input to answers
   * DEPRECATED - handled by InputManager - marked for deletion
   */
//   private checkInput() {
//     if (
//       this.downButtons.toString() === this.beginButtons.toString() &&
//       this.phase === "waiting"
//     ) {
//       this.setAnswers();
//     } else if (
//       this.downButtons.toString() ===
//       this.answer1Buttons[this.currentQuestion].toString()
//     ) {
//       console.debug("answered 1");
//       this.setAnswer(1);
//     } else if (
//       this.downButtons.toString() ===
//       this.answer2Buttons[this.currentQuestion].toString()
//     ) {
//       console.debug("answered 2");
//       this.setAnswer(2);
//     } else if (
//       this.downButtons.toString() ===
//       this.answer3Buttons[this.currentQuestion].toString()
//     ) {
//       console.debug("answered 3");
//       this.setAnswer(3);
//     } else if (
//       this.downButtons.toString() ===
//       this.answer4Buttons[this.currentQuestion].toString()
//     ) {
//       console.debug("answered 4");
//       this.setAnswer(4);
//     }
//   }

  setAnswer(answer: number) {
    if (this.phase !== "deciding") return;

    this.answerBackings[answer].strokeColor = 16579836;
    this.tweens.add({
      targets: this.answerBackings[answer],
      duration: 400,
      repeat: 999,
      ease: Phaser.Math.Easing.Quadratic.InOut,
      yoyo: true,
      strokeAlpha: 0,
    });

    this.sound.stopAll();
    this.sound.play("drumroll");

    this.phase = "drumroll";

    this.time.addEvent({
      delay: 6000,
      callback: () => {
        this.answerBackings[answer].strokeColor =
          this.correctAnswerIndex[this.currentQuestion] === answer
            ? 6025287
            : 15750215;
        this.answerBackings[answer].strokeAlpha = 1;
        this.tweens.killAll();

        this.sound.play(
          this.correctAnswerIndex[this.currentQuestion] === answer
            ? "correct"
            : "incorrect"
        );

        this.phase = "reveal";

        this.time.addEvent({
          delay: 4000,
          callback: () => {
            // this.currentQuestion++;
            if (this.currentQuestion !== 11)
              this.setCurrentQuestion(this.currentQuestion + 1);

            this.setWaiting();
          },
        });
      },
    });
  }

  setWaiting() {
    this.sound.stopAll();
    // this.sound.play("theme");

    this.instructionText.setVisible(true);

    this.phase = "waiting";
  }

  private setupButtonBackings() {
	// DEPRECATED
    // this.buttonBackings = new Array(16);
    // this.buttonBackings[0] = this.orangeBackingCentre;
    // this.buttonBackings[1] = this.orangeBackingUp;
    // this.buttonBackings[3] = this.orangeBackingRight;
    // this.buttonBackings[8] = this.orangeBackingDown; // 5 if using wii u adaptor
    // this.buttonBackings[9] = this.blueBackingUp;
    // this.buttonBackings[12] = this.blueBackingLeft;
    // this.buttonBackings[13] = this.blueBackingCentre;
    // this.buttonBackings[15] = this.blueBackingDown;
  }

  private setupAnswerBackings() {
	// DEPRECATED
    // this.answerBackings = new Array(5);
    // this.answerBackings[1] = this.answer1Backing;
    // this.answerBackings[2] = this.answer2Backing;
    // this.answerBackings[3] = this.answer3Backing;
    // this.answerBackings[4] = this.answer4Backing;
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
