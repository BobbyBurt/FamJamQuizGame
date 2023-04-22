// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */

import PluginTest from "plugins/PluginTest";
import { InputManager, twoButtonInputCombos } from "~/components/InputManager";
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
    // answer1Backing
    const answer1Backing = this.add.rectangle(1398, 202, 950, 128);
    answer1Backing.isFilled = true;
    answer1Backing.fillColor = 3355443;
    answer1Backing.isStroked = true;
    answer1Backing.strokeColor = 8224125;
    answer1Backing.lineWidth = 10;

    // answer1Text
    const answer1Text = this.add.text(1106, 164, "", {});
    answer1Text.setStyle({ fontFamily: "arial", fontSize: "64px" });

    // answer2Backing
    const answer2Backing = this.add.rectangle(1398, 436, 950, 128);
    answer2Backing.isFilled = true;
    answer2Backing.fillColor = 3355443;
    answer2Backing.isStroked = true;
    answer2Backing.strokeColor = 8224125;
    answer2Backing.lineWidth = 10;

    // answer2Text
    const answer2Text = this.add.text(1106, 401, "", {});
    answer2Text.setStyle({ fontFamily: "arial", fontSize: "64px" });

    // answer3Backing
    const answer3Backing = this.add.rectangle(1398, 677, 950, 128);
    answer3Backing.isFilled = true;
    answer3Backing.fillColor = 3355443;
    answer3Backing.isStroked = true;
    answer3Backing.strokeColor = 8224125;
    answer3Backing.lineWidth = 10;

    // answer3Text
    const answer3Text = this.add.text(1106, 639, "", {});
    answer3Text.setStyle({ fontFamily: "arial", fontSize: "64px" });

    // answer4Backing
    const answer4Backing = this.add.rectangle(1398, 915, 950, 128);
    answer4Backing.isFilled = true;
    answer4Backing.fillColor = 3355443;
    answer4Backing.isStroked = true;
    answer4Backing.strokeColor = 8224125;
    answer4Backing.lineWidth = 10;

    // answer4Text
    const answer4Text = this.add.text(1106, 878, "", {});
    answer4Text.setStyle({ fontFamily: "arial", fontSize: "64px" });

    // answer4Buttons
    const answer4Buttons = this.add.container(960, 895);
    answer4Buttons.scaleX = 0.25;
    answer4Buttons.scaleY = 0.25;

    // backing_3
    const backing_3 = this.add.rectangle(0, 0, 750, 550);
    backing_3.isFilled = true;
    backing_3.fillColor = 6184542;
    backing_3.isStroked = true;
    backing_3.lineWidth = 7;
    answer4Buttons.add(backing_3);

    // blueLeft_3
    const blueLeft_3 = this.add.rectangle(-260, 1, 128, 110);
    blueLeft_3.isFilled = true;
    blueLeft_3.fillColor = 1946367;
    blueLeft_3.fillAlpha = 0.2;
    blueLeft_3.isStroked = true;
    blueLeft_3.strokeColor = 1946367;
    blueLeft_3.lineWidth = 5;
    answer4Buttons.add(blueLeft_3);

    // blueDown_3
    const blueDown_3 = this.add.rectangle(-90, 176, 110, 128);
    blueDown_3.isFilled = true;
    blueDown_3.fillColor = 1946367;
    blueDown_3.fillAlpha = 0.2;
    blueDown_3.isStroked = true;
    blueDown_3.strokeColor = 1946367;
    blueDown_3.lineWidth = 5;
    answer4Buttons.add(blueDown_3);

    // blueCentre_3
    const blueCentre_3 = this.add.ellipse(-90, 2, 128, 128);
    blueCentre_3.isFilled = true;
    blueCentre_3.fillColor = 1946367;
    blueCentre_3.fillAlpha = 0.2;
    blueCentre_3.isStroked = true;
    blueCentre_3.strokeColor = 1946367;
    blueCentre_3.lineWidth = 5;
    answer4Buttons.add(blueCentre_3);

    // blueUp_3
    const blueUp_3 = this.add.rectangle(-90, -175, 110, 128);
    blueUp_3.isFilled = true;
    blueUp_3.fillColor = 1946367;
    blueUp_3.fillAlpha = 0.2;
    blueUp_3.isStroked = true;
    blueUp_3.strokeColor = 1946367;
    blueUp_3.lineWidth = 5;
    answer4Buttons.add(blueUp_3);

    // orangeRight_3
    const orangeRight_3 = this.add.rectangle(270, 1, 128, 110);
    orangeRight_3.isFilled = true;
    orangeRight_3.fillColor = 16228608;
    orangeRight_3.fillAlpha = 0.2;
    orangeRight_3.isStroked = true;
    orangeRight_3.strokeColor = 16228608;
    orangeRight_3.lineWidth = 5;
    answer4Buttons.add(orangeRight_3);

    // orangeDown_3
    const orangeDown_3 = this.add.rectangle(88, 175, 110, 128);
    orangeDown_3.isFilled = true;
    orangeDown_3.fillColor = 16228608;
    orangeDown_3.fillAlpha = 0.2;
    orangeDown_3.isStroked = true;
    orangeDown_3.strokeColor = 16228608;
    orangeDown_3.lineWidth = 5;
    answer4Buttons.add(orangeDown_3);

    // orangeCentre_3
    const orangeCentre_3 = this.add.ellipse(88, 1, 128, 128);
    orangeCentre_3.isFilled = true;
    orangeCentre_3.fillColor = 16228608;
    orangeCentre_3.fillAlpha = 0.2;
    orangeCentre_3.isStroked = true;
    orangeCentre_3.strokeColor = 16228608;
    orangeCentre_3.lineWidth = 5;
    answer4Buttons.add(orangeCentre_3);

    // orangeUp_3
    const orangeUp_3 = this.add.rectangle(88, -176, 110, 128);
    orangeUp_3.isFilled = true;
    orangeUp_3.fillColor = 16228608;
    orangeUp_3.fillAlpha = 0.2;
    orangeUp_3.isStroked = true;
    orangeUp_3.strokeColor = 16228608;
    orangeUp_3.lineWidth = 5;
    answer4Buttons.add(orangeUp_3);

    // answer3Buttons
    const answer3Buttons = this.add.container(960, 647);
    answer3Buttons.scaleX = 0.25;
    answer3Buttons.scaleY = 0.25;

    // backing_2
    const backing_2 = this.add.rectangle(1, 2, 750, 550);
    backing_2.isFilled = true;
    backing_2.fillColor = 6184542;
    backing_2.isStroked = true;
    backing_2.lineWidth = 7;
    answer3Buttons.add(backing_2);

    // blueLeft_2
    const blueLeft_2 = this.add.rectangle(-259, 3, 128, 110);
    blueLeft_2.isFilled = true;
    blueLeft_2.fillColor = 1946367;
    blueLeft_2.fillAlpha = 0.2;
    blueLeft_2.isStroked = true;
    blueLeft_2.strokeColor = 1946367;
    blueLeft_2.lineWidth = 5;
    answer3Buttons.add(blueLeft_2);

    // blueDown_2
    const blueDown_2 = this.add.rectangle(-89, 178, 110, 128);
    blueDown_2.isFilled = true;
    blueDown_2.fillColor = 1946367;
    blueDown_2.fillAlpha = 0.2;
    blueDown_2.isStroked = true;
    blueDown_2.strokeColor = 1946367;
    blueDown_2.lineWidth = 5;
    answer3Buttons.add(blueDown_2);

    // blueCentre_2
    const blueCentre_2 = this.add.ellipse(-89, 4, 128, 128);
    blueCentre_2.isFilled = true;
    blueCentre_2.fillColor = 1946367;
    blueCentre_2.fillAlpha = 0.2;
    blueCentre_2.isStroked = true;
    blueCentre_2.strokeColor = 1946367;
    blueCentre_2.lineWidth = 5;
    answer3Buttons.add(blueCentre_2);

    // blueUp_2
    const blueUp_2 = this.add.rectangle(-89, -173, 110, 128);
    blueUp_2.isFilled = true;
    blueUp_2.fillColor = 1946367;
    blueUp_2.fillAlpha = 0.2;
    blueUp_2.isStroked = true;
    blueUp_2.strokeColor = 1946367;
    blueUp_2.lineWidth = 5;
    answer3Buttons.add(blueUp_2);

    // orangeRight_2
    const orangeRight_2 = this.add.rectangle(271, 3, 128, 110);
    orangeRight_2.isFilled = true;
    orangeRight_2.fillColor = 16228608;
    orangeRight_2.fillAlpha = 0.2;
    orangeRight_2.isStroked = true;
    orangeRight_2.strokeColor = 16228608;
    orangeRight_2.lineWidth = 5;
    answer3Buttons.add(orangeRight_2);

    // orangeDown_2
    const orangeDown_2 = this.add.rectangle(89, 177, 110, 128);
    orangeDown_2.isFilled = true;
    orangeDown_2.fillColor = 16228608;
    orangeDown_2.fillAlpha = 0.2;
    orangeDown_2.isStroked = true;
    orangeDown_2.strokeColor = 16228608;
    orangeDown_2.lineWidth = 5;
    answer3Buttons.add(orangeDown_2);

    // orangeCentre_2
    const orangeCentre_2 = this.add.ellipse(89, 3, 128, 128);
    orangeCentre_2.isFilled = true;
    orangeCentre_2.fillColor = 16228608;
    orangeCentre_2.fillAlpha = 0.2;
    orangeCentre_2.isStroked = true;
    orangeCentre_2.strokeColor = 16228608;
    orangeCentre_2.lineWidth = 5;
    answer3Buttons.add(orangeCentre_2);

    // orangeUp_2
    const orangeUp_2 = this.add.rectangle(89, -174, 110, 128);
    orangeUp_2.isFilled = true;
    orangeUp_2.fillColor = 16228608;
    orangeUp_2.fillAlpha = 0.2;
    orangeUp_2.isStroked = true;
    orangeUp_2.strokeColor = 16228608;
    orangeUp_2.lineWidth = 5;
    answer3Buttons.add(orangeUp_2);

    // answer2Buttons
    const answer2Buttons = this.add.container(960, 409);
    answer2Buttons.scaleX = 0.25;
    answer2Buttons.scaleY = 0.25;

    // backing_1
    const backing_1 = this.add.rectangle(1, 3, 750, 550);
    backing_1.isFilled = true;
    backing_1.fillColor = 6184542;
    backing_1.isStroked = true;
    backing_1.lineWidth = 7;
    answer2Buttons.add(backing_1);

    // blueLeft_1
    const blueLeft_1 = this.add.rectangle(-259, 4, 128, 110);
    blueLeft_1.isFilled = true;
    blueLeft_1.fillColor = 1946367;
    blueLeft_1.fillAlpha = 0.2;
    blueLeft_1.isStroked = true;
    blueLeft_1.strokeColor = 1946367;
    blueLeft_1.lineWidth = 5;
    answer2Buttons.add(blueLeft_1);

    // blueDown_1
    const blueDown_1 = this.add.rectangle(-89, 179, 110, 128);
    blueDown_1.isFilled = true;
    blueDown_1.fillColor = 1946367;
    blueDown_1.fillAlpha = 0.2;
    blueDown_1.isStroked = true;
    blueDown_1.strokeColor = 1946367;
    blueDown_1.lineWidth = 5;
    answer2Buttons.add(blueDown_1);

    // blueCentre_1
    const blueCentre_1 = this.add.ellipse(-89, 5, 128, 128);
    blueCentre_1.isFilled = true;
    blueCentre_1.fillColor = 1946367;
    blueCentre_1.fillAlpha = 0.2;
    blueCentre_1.isStroked = true;
    blueCentre_1.strokeColor = 1946367;
    blueCentre_1.lineWidth = 5;
    answer2Buttons.add(blueCentre_1);

    // blueUp_1
    const blueUp_1 = this.add.rectangle(-89, -172, 110, 128);
    blueUp_1.isFilled = true;
    blueUp_1.fillColor = 1946367;
    blueUp_1.fillAlpha = 0.2;
    blueUp_1.isStroked = true;
    blueUp_1.strokeColor = 1946367;
    blueUp_1.lineWidth = 5;
    answer2Buttons.add(blueUp_1);

    // orangeRight_1
    const orangeRight_1 = this.add.rectangle(271, 4, 128, 110);
    orangeRight_1.isFilled = true;
    orangeRight_1.fillColor = 16228608;
    orangeRight_1.fillAlpha = 0.2;
    orangeRight_1.isStroked = true;
    orangeRight_1.strokeColor = 16228608;
    orangeRight_1.lineWidth = 5;
    answer2Buttons.add(orangeRight_1);

    // orangeDown_1
    const orangeDown_1 = this.add.rectangle(89, 178, 110, 128);
    orangeDown_1.isFilled = true;
    orangeDown_1.fillColor = 16228608;
    orangeDown_1.fillAlpha = 0.2;
    orangeDown_1.isStroked = true;
    orangeDown_1.strokeColor = 16228608;
    orangeDown_1.lineWidth = 5;
    answer2Buttons.add(orangeDown_1);

    // orangeCentre_1
    const orangeCentre_1 = this.add.ellipse(89, 4, 128, 128);
    orangeCentre_1.isFilled = true;
    orangeCentre_1.fillColor = 16228608;
    orangeCentre_1.fillAlpha = 0.2;
    orangeCentre_1.isStroked = true;
    orangeCentre_1.strokeColor = 16228608;
    orangeCentre_1.lineWidth = 5;
    answer2Buttons.add(orangeCentre_1);

    // orangeUp_1
    const orangeUp_1 = this.add.rectangle(89, -173, 110, 128);
    orangeUp_1.isFilled = true;
    orangeUp_1.fillColor = 16228608;
    orangeUp_1.fillAlpha = 0.2;
    orangeUp_1.isStroked = true;
    orangeUp_1.strokeColor = 16228608;
    orangeUp_1.lineWidth = 5;
    answer2Buttons.add(orangeUp_1);

    // answer1Buttons
    const answer1Buttons = this.add.container(960, 162);
    answer1Buttons.scaleX = 0.25;
    answer1Buttons.scaleY = 0.25;

    // backing
    const backing = this.add.rectangle(0, 0, 750, 550);
    backing.isFilled = true;
    backing.fillColor = 6184542;
    backing.isStroked = true;
    backing.lineWidth = 7;
    answer1Buttons.add(backing);

    // orangeUp
    const orangeUp = this.add.rectangle(88, -176, 110, 128);
    orangeUp.isFilled = true;
    orangeUp.fillColor = 16228608;
    orangeUp.fillAlpha = 0.2;
    orangeUp.isStroked = true;
    orangeUp.strokeColor = 16228608;
    orangeUp.lineWidth = 5;
    answer1Buttons.add(orangeUp);

    // orangeCentre
    const orangeCentre = this.add.ellipse(88, 1, 128, 128);
    orangeCentre.isFilled = true;
    orangeCentre.fillColor = 16228608;
    orangeCentre.fillAlpha = 0.2;
    orangeCentre.isStroked = true;
    orangeCentre.strokeColor = 16228608;
    orangeCentre.lineWidth = 5;
    answer1Buttons.add(orangeCentre);

    // orangeDown
    const orangeDown = this.add.rectangle(88, 175, 110, 128);
    orangeDown.isFilled = true;
    orangeDown.fillColor = 16228608;
    orangeDown.fillAlpha = 0.2;
    orangeDown.isStroked = true;
    orangeDown.strokeColor = 16228608;
    orangeDown.lineWidth = 5;
    answer1Buttons.add(orangeDown);

    // orangeRight
    const orangeRight = this.add.rectangle(270, 1, 128, 110);
    orangeRight.isFilled = true;
    orangeRight.fillColor = 16228608;
    orangeRight.fillAlpha = 0.2;
    orangeRight.isStroked = true;
    orangeRight.strokeColor = 16228608;
    orangeRight.lineWidth = 5;
    answer1Buttons.add(orangeRight);

    // blueUp
    const blueUp = this.add.rectangle(-90, -175, 110, 128);
    blueUp.isFilled = true;
    blueUp.fillColor = 1946367;
    blueUp.fillAlpha = 0.2;
    blueUp.isStroked = true;
    blueUp.strokeColor = 1946367;
    blueUp.lineWidth = 5;
    answer1Buttons.add(blueUp);

    // blueCentre
    const blueCentre = this.add.ellipse(-90, 2, 128, 128);
    blueCentre.isFilled = true;
    blueCentre.fillColor = 1946367;
    blueCentre.fillAlpha = 0.2;
    blueCentre.isStroked = true;
    blueCentre.strokeColor = 1946367;
    blueCentre.lineWidth = 5;
    answer1Buttons.add(blueCentre);

    // blueDown
    const blueDown = this.add.rectangle(-90, 176, 110, 128);
    blueDown.isFilled = true;
    blueDown.fillColor = 1946367;
    blueDown.fillAlpha = 0.2;
    blueDown.isStroked = true;
    blueDown.strokeColor = 1946367;
    blueDown.lineWidth = 5;
    answer1Buttons.add(blueDown);

    // blueLeft
    const blueLeft = this.add.rectangle(-260, 1, 128, 110);
    blueLeft.isFilled = true;
    blueLeft.fillColor = 1946367;
    blueLeft.fillAlpha = 0.2;
    blueLeft.isStroked = true;
    blueLeft.strokeColor = 1946367;
    blueLeft.lineWidth = 5;
    answer1Buttons.add(blueLeft);

    // buttonFeedback
    const buttonFeedback = this.add.container(367, 816);

    // orangeBackingUp
    const orangeBackingUp = this.add.rectangle(88, -176, 110, 128);
    orangeBackingUp.isFilled = true;
    orangeBackingUp.fillColor = 15513685;
    orangeBackingUp.fillAlpha = 0.2;
    orangeBackingUp.isStroked = true;
    orangeBackingUp.strokeColor = 16228608;
    orangeBackingUp.lineWidth = 10;
    buttonFeedback.add(orangeBackingUp);

    // orangeBackingIcon
    const orangeBackingIcon = this.add.triangle(88, -176, 0, 60, 30, 0, 60, 60);
    orangeBackingIcon.isStroked = true;
    orangeBackingIcon.lineWidth = 10;
    buttonFeedback.add(orangeBackingIcon);

    // orangeBackingCentre
    const orangeBackingCentre = this.add.ellipse(88, 1, 128, 128);
    orangeBackingCentre.isFilled = true;
    orangeBackingCentre.fillColor = 15513685;
    orangeBackingCentre.fillAlpha = 0.2;
    orangeBackingCentre.isStroked = true;
    orangeBackingCentre.strokeColor = 16228608;
    orangeBackingCentre.lineWidth = 10;
    buttonFeedback.add(orangeBackingCentre);

    // orangeIconCentre
    const orangeIconCentre = this.add.rectangle(88, 1, 60, 60);
    orangeIconCentre.fillColor = 15513685;
    orangeIconCentre.isStroked = true;
    orangeIconCentre.lineWidth = 10;
    buttonFeedback.add(orangeIconCentre);

    // orangeBackingDown
    const orangeBackingDown = this.add.rectangle(88, 175, 110, 128);
    orangeBackingDown.isFilled = true;
    orangeBackingDown.fillColor = 15513685;
    orangeBackingDown.fillAlpha = 0.2;
    orangeBackingDown.isStroked = true;
    orangeBackingDown.strokeColor = 16228608;
    orangeBackingDown.lineWidth = 10;
    buttonFeedback.add(orangeBackingDown);

    // orangeIconDown
    const orangeIconDown = this.add.triangle(88, 175, 0, 60, 30, 0, 60, 60);
    orangeIconDown.angle = -180;
    orangeIconDown.isStroked = true;
    orangeIconDown.lineWidth = 10;
    buttonFeedback.add(orangeIconDown);

    // orangeBackingRight
    const orangeBackingRight = this.add.rectangle(270, 1, 128, 110);
    orangeBackingRight.isFilled = true;
    orangeBackingRight.fillColor = 15513685;
    orangeBackingRight.fillAlpha = 0.2;
    orangeBackingRight.isStroked = true;
    orangeBackingRight.strokeColor = 16228608;
    orangeBackingRight.lineWidth = 10;
    buttonFeedback.add(orangeBackingRight);

    // orangeIconRight
    const orangeIconRight = this.add.triangle(270, 1, 0, 60, 30, 0, 60, 60);
    orangeIconRight.angle = 90;
    orangeIconRight.isStroked = true;
    orangeIconRight.lineWidth = 10;
    buttonFeedback.add(orangeIconRight);

    // blueBackingUp
    const blueBackingUp = this.add.rectangle(-90, -175, 110, 128);
    blueBackingUp.isFilled = true;
    blueBackingUp.fillColor = 5606124;
    blueBackingUp.fillAlpha = 0.2;
    blueBackingUp.isStroked = true;
    blueBackingUp.strokeColor = 32247;
    blueBackingUp.lineWidth = 10;
    buttonFeedback.add(blueBackingUp);

    // blueIconUp
    const blueIconUp = this.add.triangle(-90, -175, 0, 60, 30, 0, 60, 60);
    blueIconUp.isStroked = true;
    blueIconUp.lineWidth = 10;
    buttonFeedback.add(blueIconUp);

    // blueBackingCentre
    const blueBackingCentre = this.add.ellipse(-90, 2, 128, 128);
    blueBackingCentre.isFilled = true;
    blueBackingCentre.fillColor = 5606124;
    blueBackingCentre.fillAlpha = 0.2;
    blueBackingCentre.isStroked = true;
    blueBackingCentre.strokeColor = 32247;
    blueBackingCentre.lineWidth = 10;
    buttonFeedback.add(blueBackingCentre);

    // blueIconCentre
    const blueIconCentre = this.add.rectangle(-90, 2, 60, 60);
    blueIconCentre.fillColor = 15513685;
    blueIconCentre.isStroked = true;
    blueIconCentre.lineWidth = 10;
    buttonFeedback.add(blueIconCentre);

    // blueBackingDown
    const blueBackingDown = this.add.rectangle(-90, 176, 110, 128);
    blueBackingDown.isFilled = true;
    blueBackingDown.fillColor = 5606124;
    blueBackingDown.fillAlpha = 0.2;
    blueBackingDown.isStroked = true;
    blueBackingDown.strokeColor = 32247;
    blueBackingDown.lineWidth = 10;
    buttonFeedback.add(blueBackingDown);

    // blueIconDown
    const blueIconDown = this.add.triangle(-90, 176, 0, 60, 30, 0, 60, 60);
    blueIconDown.angle = -180;
    blueIconDown.isStroked = true;
    blueIconDown.lineWidth = 10;
    buttonFeedback.add(blueIconDown);

    // blueBackingLeft
    const blueBackingLeft = this.add.rectangle(-260, 1, 128, 110);
    blueBackingLeft.isFilled = true;
    blueBackingLeft.fillColor = 5606124;
    blueBackingLeft.fillAlpha = 0.2;
    blueBackingLeft.isStroked = true;
    blueBackingLeft.strokeColor = 32247;
    blueBackingLeft.lineWidth = 10;
    buttonFeedback.add(blueBackingLeft);

    // blueIconLeft
    const blueIconLeft = this.add.triangle(-260, 1, 0, 60, 30, 0, 60, 60);
    blueIconLeft.angle = -90;
    blueIconLeft.isStroked = true;
    blueIconLeft.lineWidth = 10;
    buttonFeedback.add(blueIconLeft);

    // instructionText
    const instructionText = this.add.text(366, 432, "", {});
    instructionText.setOrigin(0.5, 0);
    instructionText.text = "STAND ON THE SQUARE ICONS \nTO BEGIN QUESTION";
    instructionText.setStyle({
      align: "center",
      fontFamily: "arial",
      fontSize: "40px",
      fontStyle: "bold",
    });

    // famJam_logo
    const famJam_logo = this.add.image(363, 211, "FamJam-logo");
    famJam_logo.scaleX = 0.7593104765732959;
    famJam_logo.scaleY = 0.7593104765732959;

    // questionNumberText
    const questionNumberText = this.add.text(1194, 43, "", {});
    questionNumberText.setOrigin(0.5, 0);
    questionNumberText.text = "Question 1";
    questionNumberText.setStyle({
      align: "center",
      fontFamily: "arial",
      fontSize: "40px",
      fontStyle: "bold",
    });

    this.answer1Backing = answer1Backing;
    this.answer1Text = answer1Text;
    this.answer2Backing = answer2Backing;
    this.answer2Text = answer2Text;
    this.answer3Backing = answer3Backing;
    this.answer3Text = answer3Text;
    this.answer4Backing = answer4Backing;
    this.answer4Text = answer4Text;
    this.blueLeft_3 = blueLeft_3;
    this.blueDown_3 = blueDown_3;
    this.blueCentre_3 = blueCentre_3;
    this.blueUp_3 = blueUp_3;
    this.orangeRight_3 = orangeRight_3;
    this.orangeDown_3 = orangeDown_3;
    this.orangeCentre_3 = orangeCentre_3;
    this.orangeUp_3 = orangeUp_3;
    this.blueLeft_2 = blueLeft_2;
    this.blueDown_2 = blueDown_2;
    this.blueCentre_2 = blueCentre_2;
    this.blueUp_2 = blueUp_2;
    this.orangeRight_2 = orangeRight_2;
    this.orangeDown_2 = orangeDown_2;
    this.orangeCentre_2 = orangeCentre_2;
    this.orangeUp_2 = orangeUp_2;
    this.blueLeft_1 = blueLeft_1;
    this.blueDown_1 = blueDown_1;
    this.blueCentre_1 = blueCentre_1;
    this.blueUp_1 = blueUp_1;
    this.orangeRight_1 = orangeRight_1;
    this.orangeDown_1 = orangeDown_1;
    this.orangeCentre_1 = orangeCentre_1;
    this.orangeUp_1 = orangeUp_1;
    this.orangeUp = orangeUp;
    this.orangeCentre = orangeCentre;
    this.orangeDown = orangeDown;
    this.orangeRight = orangeRight;
    this.blueUp = blueUp;
    this.blueCentre = blueCentre;
    this.blueDown = blueDown;
    this.blueLeft = blueLeft;
    this.orangeBackingUp = orangeBackingUp;
    this.orangeBackingCentre = orangeBackingCentre;
    this.orangeBackingDown = orangeBackingDown;
    this.orangeBackingRight = orangeBackingRight;
    this.blueBackingUp = blueBackingUp;
    this.blueBackingCentre = blueBackingCentre;
    this.blueBackingDown = blueBackingDown;
    this.blueBackingLeft = blueBackingLeft;
    this.instructionText = instructionText;
    this.questionNumberText = questionNumberText;

    this.events.emit("scene-awake");
  }

  private answer1Backing!: Phaser.GameObjects.Rectangle;
  private answer1Text!: Phaser.GameObjects.Text;
  private answer2Backing!: Phaser.GameObjects.Rectangle;
  private answer2Text!: Phaser.GameObjects.Text;
  private answer3Backing!: Phaser.GameObjects.Rectangle;
  private answer3Text!: Phaser.GameObjects.Text;
  private answer4Backing!: Phaser.GameObjects.Rectangle;
  private answer4Text!: Phaser.GameObjects.Text;
  private blueLeft_3!: Phaser.GameObjects.Rectangle;
  private blueDown_3!: Phaser.GameObjects.Rectangle;
  private blueCentre_3!: Phaser.GameObjects.Ellipse;
  private blueUp_3!: Phaser.GameObjects.Rectangle;
  private orangeRight_3!: Phaser.GameObjects.Rectangle;
  private orangeDown_3!: Phaser.GameObjects.Rectangle;
  private orangeCentre_3!: Phaser.GameObjects.Ellipse;
  private orangeUp_3!: Phaser.GameObjects.Rectangle;
  private blueLeft_2!: Phaser.GameObjects.Rectangle;
  private blueDown_2!: Phaser.GameObjects.Rectangle;
  private blueCentre_2!: Phaser.GameObjects.Ellipse;
  private blueUp_2!: Phaser.GameObjects.Rectangle;
  private orangeRight_2!: Phaser.GameObjects.Rectangle;
  private orangeDown_2!: Phaser.GameObjects.Rectangle;
  private orangeCentre_2!: Phaser.GameObjects.Ellipse;
  private orangeUp_2!: Phaser.GameObjects.Rectangle;
  private blueLeft_1!: Phaser.GameObjects.Rectangle;
  private blueDown_1!: Phaser.GameObjects.Rectangle;
  private blueCentre_1!: Phaser.GameObjects.Ellipse;
  private blueUp_1!: Phaser.GameObjects.Rectangle;
  private orangeRight_1!: Phaser.GameObjects.Rectangle;
  private orangeDown_1!: Phaser.GameObjects.Rectangle;
  private orangeCentre_1!: Phaser.GameObjects.Ellipse;
  private orangeUp_1!: Phaser.GameObjects.Rectangle;
  private orangeUp!: Phaser.GameObjects.Rectangle;
  private orangeCentre!: Phaser.GameObjects.Ellipse;
  private orangeDown!: Phaser.GameObjects.Rectangle;
  private orangeRight!: Phaser.GameObjects.Rectangle;
  private blueUp!: Phaser.GameObjects.Rectangle;
  private blueCentre!: Phaser.GameObjects.Ellipse;
  private blueDown!: Phaser.GameObjects.Rectangle;
  private blueLeft!: Phaser.GameObjects.Rectangle;
  private orangeBackingUp!: Phaser.GameObjects.Rectangle;
  private orangeBackingCentre!: Phaser.GameObjects.Ellipse;
  private orangeBackingDown!: Phaser.GameObjects.Rectangle;
  private orangeBackingRight!: Phaser.GameObjects.Rectangle;
  private blueBackingUp!: Phaser.GameObjects.Rectangle;
  private blueBackingCentre!: Phaser.GameObjects.Ellipse;
  private blueBackingDown!: Phaser.GameObjects.Rectangle;
  private blueBackingLeft!: Phaser.GameObjects.Rectangle;
  private instructionText!: Phaser.GameObjects.Text;
  private questionNumberText!: Phaser.GameObjects.Text;

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

    	this.events.on('A', () =>
    	{
    		console.log('game A');
    	})

    // json loading test
    this.quizData = this.cache.json.get("test-quiz");

    this.setupButtonBackings();
    this.setupAnswerBackings();

    this.inputManager = new InputManager(this);

    this.input.gamepad.on(
      "down",
      (
        pad: Phaser.Input.Gamepad.Gamepad,
        button: Phaser.Input.Gamepad.Button,
        index: number
      ) => {
        console.debug(button.index, "down");
        if (this.buttonBackings[button.index] != null) {
          this.buttonBackings[button.index].fillAlpha = 1;
          this.downButtons[button.index] = true;
        }
        this.checkInput();
      }
    );
    this.input.gamepad.on(
      "up",
      (
        pad: Phaser.Input.Gamepad.Gamepad,
        button: Phaser.Input.Gamepad.Button,
        index: number
      ) => {
        console.debug(button.index, "up");
        if (this.buttonBackings[button.index] != null) {
          this.buttonBackings[button.index].fillAlpha = 0.2;
          this.downButtons[button.index] = false;
        }
        this.checkInput();
      }
    );

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
    // answer 1
    this.answer1Text.setText(this.quizData.questions[this.currentQuestion].answers[0]);
    this.orangeCentre.fillAlpha = this.input
      ? 1
      : 0.2;
    this.orangeUp.fillAlpha = this.answer1Buttons[this.currentQuestion][1]
      ? 1
      : 0.2;
    this.orangeRight.fillAlpha = this.answer1Buttons[this.currentQuestion][3]
      ? 1
      : 0.2;
    this.orangeDown.fillAlpha = this.answer1Buttons[this.currentQuestion][5]
      ? 1
      : 0.2;
    this.blueUp.fillAlpha = this.answer1Buttons[this.currentQuestion][9]
      ? 1
      : 0.2;
    this.blueLeft.fillAlpha = this.answer1Buttons[this.currentQuestion][12]
      ? 1
      : 0.2;
    this.blueCentre.fillAlpha = this.answer1Buttons[this.currentQuestion][13]
      ? 1
      : 0.2;
    this.blueDown.fillAlpha = this.answer1Buttons[this.currentQuestion][15]
      ? 1
      : 0.2;
    this.answer1Backing.strokeColor = 8224125;

    // answer 2
    this.answer2Text.setText(this.quizData.questions[this.currentQuestion].answers[1]);
    this.orangeCentre_1.fillAlpha = this.answer2Buttons[this.currentQuestion][0]
      ? 1
      : 0.2;
    this.orangeUp_1.fillAlpha = this.answer2Buttons[this.currentQuestion][1]
      ? 1
      : 0.2;
    this.orangeRight_1.fillAlpha = this.answer2Buttons[this.currentQuestion][3]
      ? 1
      : 0.2;
    this.orangeDown_1.fillAlpha = this.answer2Buttons[this.currentQuestion][5]
      ? 1
      : 0.2;
    this.blueUp_1.fillAlpha = this.answer2Buttons[this.currentQuestion][9]
      ? 1
      : 0.2;
    this.blueLeft_1.fillAlpha = this.answer2Buttons[this.currentQuestion][12]
      ? 1
      : 0.2;
    this.blueCentre_1.fillAlpha = this.answer2Buttons[this.currentQuestion][13]
      ? 1
      : 0.2;
    this.blueDown_1.fillAlpha = this.answer2Buttons[this.currentQuestion][15]
      ? 1
      : 0.2;
    this.answer2Backing.strokeColor = 8224125;

    // answer 3
    this.answer3Text.setText(this.quizData.questions[this.currentQuestion].answers[2]);
    this.orangeCentre_2.fillAlpha = this.answer3Buttons[this.currentQuestion][0]
      ? 1
      : 0.2;
    this.orangeUp_2.fillAlpha = this.answer3Buttons[this.currentQuestion][1]
      ? 1
      : 0.2;
    this.orangeRight_2.fillAlpha = this.answer3Buttons[this.currentQuestion][3]
      ? 1
      : 0.2;
    this.orangeDown_2.fillAlpha = this.answer3Buttons[this.currentQuestion][5]
      ? 1
      : 0.2;
    this.blueUp_2.fillAlpha = this.answer3Buttons[this.currentQuestion][9]
      ? 1
      : 0.2;
    this.blueLeft_2.fillAlpha = this.answer3Buttons[this.currentQuestion][12]
      ? 1
      : 0.2;
    this.blueCentre_2.fillAlpha = this.answer3Buttons[this.currentQuestion][13]
      ? 1
      : 0.2;
    this.blueDown_2.fillAlpha = this.answer3Buttons[this.currentQuestion][15]
      ? 1
      : 0.2;
    this.answer3Backing.strokeColor = 8224125;

    // answer 4
    this.answer4Text.setText(this.quizData.questions[this.currentQuestion].answers[3]);
    this.orangeCentre_3.fillAlpha = this.answer4Buttons[this.currentQuestion][0]
      ? 1
      : 0.2;
    this.orangeUp_3.fillAlpha = this.answer4Buttons[this.currentQuestion][1]
      ? 1
      : 0.2;
    this.orangeRight_3.fillAlpha = this.answer4Buttons[this.currentQuestion][3]
      ? 1
      : 0.2;
    this.orangeDown_3.fillAlpha = this.answer4Buttons[this.currentQuestion][5]
      ? 1
      : 0.2;
    this.blueUp_3.fillAlpha = this.answer4Buttons[this.currentQuestion][9]
      ? 1
      : 0.2;
    this.blueLeft_3.fillAlpha = this.answer4Buttons[this.currentQuestion][12]
      ? 1
      : 0.2;
    this.blueCentre_3.fillAlpha = this.answer4Buttons[this.currentQuestion][13]
      ? 1
      : 0.2;
    this.blueDown_3.fillAlpha = this.answer4Buttons[this.currentQuestion][15]
      ? 1
      : 0.2;
    this.answer4Backing.strokeColor = 8224125;

    this.sound.stopAll();
    this.sound.play("question");

    this.instructionText.setVisible(false);

    this.phase = "deciding";
  }

  /**
   * Compares input to answers
   */
  private checkInput() {
    if (
      this.downButtons.toString() === this.beginButtons.toString() &&
      this.phase === "waiting"
    ) {
      this.setAnswers();
    } else if (
      this.downButtons.toString() ===
      this.answer1Buttons[this.currentQuestion].toString()
    ) {
      console.debug("answered 1");
      this.setAnswer(1);
    } else if (
      this.downButtons.toString() ===
      this.answer2Buttons[this.currentQuestion].toString()
    ) {
      console.debug("answered 2");
      this.setAnswer(2);
    } else if (
      this.downButtons.toString() ===
      this.answer3Buttons[this.currentQuestion].toString()
    ) {
      console.debug("answered 3");
      this.setAnswer(3);
    } else if (
      this.downButtons.toString() ===
      this.answer4Buttons[this.currentQuestion].toString()
    ) {
      console.debug("answered 4");
      this.setAnswer(4);
    }
  }

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
    this.sound.play("theme");

    this.instructionText.setVisible(true);

    this.phase = "waiting";
  }

  private setupButtonBackings() {
    this.buttonBackings = new Array(16);
    this.buttonBackings[0] = this.orangeBackingCentre;
    this.buttonBackings[1] = this.orangeBackingUp;
    this.buttonBackings[3] = this.orangeBackingRight;
    this.buttonBackings[8] = this.orangeBackingDown; // 5 if using wii u adaptor
    this.buttonBackings[9] = this.blueBackingUp;
    this.buttonBackings[12] = this.blueBackingLeft;
    this.buttonBackings[13] = this.blueBackingCentre;
    this.buttonBackings[15] = this.blueBackingDown;
  }

  private setupAnswerBackings() {
    this.answerBackings = new Array(5);
    this.answerBackings[1] = this.answer1Backing;
    this.answerBackings[2] = this.answer2Backing;
    this.answerBackings[3] = this.answer3Backing;
    this.answerBackings[4] = this.answer4Backing;
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
