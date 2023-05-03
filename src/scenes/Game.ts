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

		// famJam_logo_simplified
		const famJam_logo_simplified = this.add.image(684, 653, "FamJam-logo-simplified");
		famJam_logo_simplified.alpha = 0.1;
		famJam_logo_simplified.alphaTopLeft = 0.1;
		famJam_logo_simplified.alphaTopRight = 0.1;
		famJam_logo_simplified.alphaBottomLeft = 0.1;
		famJam_logo_simplified.alphaBottomRight = 0.1;

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

		// lists
		const answerPrefabArray = [answerPrefab1, answerPrefab2, answerPrefab3, answerPrefab4];

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
		this.answerPrefabArray = answerPrefabArray;

		this.events.emit("scene-awake");
	}

	private instructionText!: Phaser.GameObjects.Text;
	private questionNumberText!: Phaser.GameObjects.Text;
	private answerPrefab4!: AnswerPrefab;
	private answerPrefab3!: AnswerPrefab;
	private answerPrefab2!: AnswerPrefab;
	private answerPrefab1!: AnswerPrefab;
	private answerPrefabArray!: AnswerPrefab[];

	/* START-USER-CODE */

  // quiz data
  private quizData: QuizData;

  // input
  private inputManager: InputManager;

  // game state
  private currentQuestion = 0;
  private currentQuestionTextTween:Phaser.Tweens.Tween;

  private buttonBackings: Array<Phaser.GameObjects.Rectangle>;
  private answerBackings: Array<Phaser.GameObjects.Rectangle>;

  private scenePluginMap!: ScenePluginTest;
  private NGIOPlugin!: PluginTest;

  /** Array of numbers 0-3 in random order, correlating answer index to answerPrefabArray index. `answerIndexToPrefabMap[0] points to the prefab with the correct answer. */
  private answerIndexToPrefabMap = [0, 1, 2, 3];

  create() {
    console.debug("create");

    this.editorCreate();

    // json loading test
    this.quizData = this.cache.json.get("test-quiz");

    this.inputManager = new InputManager(this);

    // ready input
    this.game.events.on("ready-input", () => {
      if (phase === "waiting") {
        this.setAnswers();
      }
    });

    // question select input
    this.game.events.on("plus-false", () => {
      this.setCurrentQuestion(this.currentQuestion + 1);
    });
    this.game.events.on("minus-false", () => {
      this.setCurrentQuestion(this.currentQuestion - 1);
    });

    // answer select input
    this.game.events.on("answer-0", () => {
      if (phase === "deciding") {
        this.answerDecide(0);
      }
    });
    this.game.events.on("answer-1", () => {
      if (phase === "deciding") {
        this.answerDecide(1);
      }
    });
    this.game.events.on("answer-2", () => {
      if (phase === "deciding") {
        this.answerDecide(2);
      }
    });
    this.game.events.on("answer-3", () => {
      if (phase === "deciding") {
        this.answerDecide(3);
      }
    });

    this.setWaiting();
  }

  update(time: number, delta: number): void {}

  setCurrentQuestion(index: number)
  {
    const quizLength = this.quizData.questions.length;

    // set within range
    this.currentQuestion = index
    if (this.currentQuestion < 0)
      this.currentQuestion = 0;
    else if (this.currentQuestion > quizLength - 1)
      this.currentQuestion = quizLength - 1;

    // question number text update & tweeen
    this.questionNumberText.setText(`Question ${this.currentQuestion + 1}`);
    if (this.currentQuestionTextTween)
      this.currentQuestionTextTween.stop();
    this.questionNumberText.setY(60);
    this.currentQuestionTextTween = this.tweens.add({
      targets: this.questionNumberText,
      y: 43,
      duration: 300,
      ease: Phaser.Math.Easing.Quintic.Out

    })
  }

  /**
   * Set up the answers, randomizing their order and input combo.
   */
  setAnswers() {
    // randomize answer order
    Phaser.Math.RND.shuffle(this.answerIndexToPrefabMap);
    console.debug(`answerIndexToPrefabMap: ${this.answerIndexToPrefabMap}`);

    this.answerPrefabArray[this.answerIndexToPrefabMap[0]].setText(
      this.quizData.questions[this.currentQuestion].answers[0]
    );
    this.answerPrefabArray[this.answerIndexToPrefabMap[1]].setText(
      this.quizData.questions[this.currentQuestion].answers[1]
    );
    this.answerPrefabArray[this.answerIndexToPrefabMap[2]].setText(
      this.quizData.questions[this.currentQuestion].answers[2]
    );
    this.answerPrefabArray[this.answerIndexToPrefabMap[3]].setText(
      this.quizData.questions[this.currentQuestion].answers[3]
    );

    // show answer buttom combos
    this.answerPrefabArray.forEach((element) => {
      element.setButtonComboVisible(true);
    })

    // set answer button combos
    this.inputManager.setAnswerCombos();
    this.answerPrefabArray[this.answerIndexToPrefabMap[0]].setButtonCombo(0);
    this.answerPrefabArray[this.answerIndexToPrefabMap[1]].setButtonCombo(1);
    this.answerPrefabArray[this.answerIndexToPrefabMap[2]].setButtonCombo(2);
    this.answerPrefabArray[this.answerIndexToPrefabMap[3]].setButtonCombo(3);

    this.sound.stopAll();
    this.sound.play("question");

    this.instructionText.setVisible(false);

    phase = "deciding";
  }

  /**
   * Selection feedback & reveal sequence
   */
  answerDecide(answer: number) {
    if (phase !== "deciding") return;

    this.answerPrefabArray[this.answerIndexToPrefabMap[answer]].setStroke(
      "drumroll"
    );

    this.sound.stopAll();
    this.sound.play("drumroll");

    phase = "drumroll";

    this.time.addEvent({
      delay: 6000,
      callback: () => {
        this.answerPrefabArray[this.answerIndexToPrefabMap[answer]].setStroke(
          answer === 0 ? "correct" : "incorrect"
        );

        this.sound.play(answer === 0 ? "correct" : "incorrect");

        phase = "reveal";

        this.time.addEvent({
          delay: 4000,
          callback: () => {
            this.setCurrentQuestion(this.currentQuestion + 1);

            this.setWaiting();
          },
        });
      },
    });
  }

  setWaiting() {
    this.sound.stopAll();
    this.sound.play("theme");

    this.instructionText.setVisible(true);

    this.answerPrefabArray.forEach((element) => {
      element.setStroke('neutral');
      element.setText('');
      element.setButtonComboVisible(false);
    });

    phase = "waiting";
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

export var phase: "waiting" | "deciding" | "drumroll" | "reveal" = "waiting";
