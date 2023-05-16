export type PadInput = {
  blue: {
    up: boolean;
    left: boolean;
    centre: boolean;
    down: boolean;
  };
  orange: {
    up: boolean;
    right: boolean;
    centre: boolean;
    down: boolean;
  };
};

/**
 * If using 8BitDo adaptor instead of WiiU, `orange.down` is read from button
 * index 8 instead of 5.
 */
const using8BitDo = true;

export class InputManager {
  private scene: Phaser.Scene;

  public currentInput: PadInput = {
    blue: { up: false, left: false, centre: false, down: false },
    orange: { up: false, right: false, centre: false, down: false },
  };

  constructor(scene: Phaser.Scene) {
    this.scene = scene;
    this.setupInputEvents();
    1;
  }

  private setupInputEvents() {
    this.scene.input.gamepad.on(
      "down",
      (
        pad: Phaser.Input.Gamepad.Gamepad,
        button: Phaser.Input.Gamepad.Button,
        index: number
      ) => {
        this.handleInput(
          this.updateInputFromGamepad(!!button.value, button.index)
        );
      }
    );
    this.scene.input.gamepad.on(
      "up",
      (
        pad: Phaser.Input.Gamepad.Gamepad,
        button: Phaser.Input.Gamepad.Button,
        index: number
      ) => {
        this.handleInput(
          this.updateInputFromGamepad(!!button.value, button.index)
        );
      }
    );
    this.scene.input.keyboard.on("keydown", (event: any) => {
      if (event.repeat) return;
      this.handleInput(this.updateInputFromKeyboard(true, event.key));
    });
    this.scene.input.keyboard.on("keyup", (event: any) => {
      this.handleInput(this.updateInputFromKeyboard(false, event.key));
    });
  }

  /**
   * Logs input to console & emits global events. Calls for input combo check.
   * @param inputName Returned from `this.updateInputFromGamepad` or `this.updateInputFromKeyboard`. Will be emitted as a global event.
   */
  handleInput(inputName: string) {
    console.debug(inputName);
    this.scene.game.events.emit("input-change");
    this.scene.game.events.emit(inputName);
    this.checkInputCombos();
  }

  /**
   * Updates `this.currentInput`
   * @param down or up.
   * @param button directX input button number
   * @returns string specifying the input, ex: `blue-left-true`, to be used as an event name to emit.
   */
  updateInputFromGamepad(down: boolean, button: number): string {
    switch (button) {
      case 0:
        this.currentInput.orange.centre = down;
        return "orange-centre-" + down;
      case 1:
        this.currentInput.orange.up = down;
        return "orange-up-" + down;
      case 2:
        return "plus-" + down;
      case 3:
        this.currentInput.orange.right = down;
        return "orange-right-" + down;
      case using8BitDo ? 8 : 5:
        this.currentInput.orange.down = down;
        return "orange-down-" + down;
      case 9:
        this.currentInput.blue.up = down;
        return "blue-up-" + down;
      case 12:
        this.currentInput.blue.left = down;
        return "blue-left-" + down;
      case 13:
        this.currentInput.blue.centre = down;
        return "blue-centre-" + down;
      case 14:
        return "minus-" + down;
      case 15:
        this.currentInput.blue.down = down;
        return "blue-down-" + down;
      default:
        return "invalid-input";
    }
  }

  /**
   * Updates `this.currentInput`
   * @param down or up.
   * @param key `w`, `s`, etc.
   * @returns string specifying the input, ex: `blue-left-true`, to be used as an event name to emit.
   */
  updateInputFromKeyboard(down: boolean, key: string): string {
    switch (key) {
      case "w":
        this.currentInput.blue.up = down;
        return "blue-up-" + down;
      case "a":
        this.currentInput.blue.left = down;
        return "blue-left-" + down;
      case "s":
        this.currentInput.blue.centre = down;
        return "blue-centre-" + down;
      case "z":
        this.currentInput.blue.down = down;
        return "blue-down-" + down;
      case "e":
        this.currentInput.orange.up = down;
        return "orange-up-" + down;
      case "f":
        this.currentInput.orange.right = down;
        return "orange-right-" + down;
      case "d":
        this.currentInput.orange.centre = down;
        return "orange-centre-" + down;
      case "x":
        this.currentInput.orange.down = down;
        return "orange-down-" + down;
      case "=":
          return "plus-" + down;
        case "-":
          return "minus-" + down;
      default:
        return "invalid-input";
    }
  }

  public setAnswerCombos(currentQuestion: number) {
    // currentAnswersComboIndex[0] = Phaser.Math.RND.integerInRange(
    //   0,
    //   answerInputCombos.length - 1
    // );
    // currentAnswersComboIndex[1] = Phaser.Math.RND.integerInRange(
    //   0,
    //   answerInputCombos.length - 1
    // );
    // currentAnswersComboIndex[2] = Phaser.Math.RND.integerInRange(
    //   0,
    //   answerInputCombos.length - 1
    // );
    // currentAnswersComboIndex[3] = Phaser.Math.RND.integerInRange(
    //   0,
    //   answerInputCombos.length - 1
    // );

    if (currentQuestion === 0 || currentQuestion === 1)
      answerInputCombos = answerInput2Combos;
    else if (currentQuestion === 2 || currentQuestion === 3)
      answerInputCombos = answerInput3Combos;
    else if (currentQuestion === 4)
      answerInputCombos = answerInput4Combos;
    else
      answerInputCombos = (Phaser.Math.RND.between(0, 1) > .5) ? answerInput3Combos : answerInput4Combos;
      
    Phaser.Math.RND.shuffle(answerInputCombos);

    // RND needs to make sure the same combos aren't picked!
  }

  /**
   * Compares `currentInput` to active answer combos & ready input combo
   */
  private checkInputCombos() {
    if (this.compareInput(this.currentInput, readyInputCombo)) {
      console.debug("ready!");
      this.scene.game.events.emit("ready-input");
      return;
    }
    for (let i = 0; i < 4; i++) {
      if (
        this.compareInput(
          this.currentInput,
          answerInputCombos[i]
        )
      ) {
        console.debug(`answer ${i} inputed!!`);
        this.scene.game.events.emit(`answer-${i}`)
      }
    }
  }

  /**
   * Are these inputs the same?
   *
   * `PadInput` objects' properties need to be initialzied in the same order, otherwise this method will evaluate false.
   * @param input1
   * @param input2
   * @returns
   */
  private compareInput(input1: PadInput, input2: PadInput) {
    if (JSON.stringify(input1) === JSON.stringify(input2)) {
      return true;
    } else return false;
  }
}

export var readyInputCombo: PadInput = {
  //    [ ] [ ]
  // [ ][o] [o][ ]
  //    [ ] [ ]
  blue: { up: false, left: false, centre: true, down: false },
  orange: { up: false, right: false, centre: true, down: false },
};

export var answerInputCombos: Array<PadInput> = [];
var answerInput2Combos: Array<PadInput> = [
  {
    //    [ ] [o]
    // [ ][ ] [ ][ ]
    //    [o] [ ]
    blue: { up: false, left: false, centre: false, down: true },
    orange: { up: true, right: false, centre: false, down: false },
  },
  {
    //    [o] [ ]
    // [ ][ ] [ ][ ]
    //    [ ] [o]
    blue: { up: true, left: false, centre: false, down: false },
    orange: { up: false, right: false, centre: false, down: true },
  },
  {
    //    [ ] [ ]
    // [o][ ] [ ][o]
    //    [ ] [ ]
    blue: { up: false, left: true, centre: false, down: false },
    orange: { up: false, right: true, centre: false, down: false },
  },
  {
    //    [ ] [ ]
    // [ ][ ] [ ][ ]
    //    [o] [o]
    blue: { up: false, left: false, centre: false, down: true },
    orange: { up: false, right: false, centre: false, down: true },
  },
  {
    //    [o] [o]
    // [ ][ ] [ ][ ]
    //    [ ] [ ]
    blue: { up: true, left: false, centre: false, down: false },
    orange: { up: true, right: false, centre: false, down: false },
  },
  {
    //    [ ] [ ]
    // [o][ ] [ ][ ]
    //    [ ] [o]
    blue: { up: false, left: true, centre: false, down: false },
    orange: { up: false, right: false, centre: false, down: true },
  },
  {
    //    [ ] [ ]
    // [o][ ] [ ][ ]
    //    [o] [ ]
    blue: { up: false, left: true, centre: false, down: true },
    orange: { up: false, right: false, centre: false, down: false },
  },
  {
    //    [o] [ ]
    // [o][ ] [ ][ ]
    //    [ ] [ ]
    blue: { up: true, left: true, centre: false, down: false },
    orange: { up: false, right: false, centre: false, down: false },
  },
  {
    //    [ ] [o]
    // [o][ ] [ ][ ]
    //    [ ] [ ]
    blue: { up: false, left: true, centre: false, down: false },
    orange: { up: true, right: false, centre: false, down: false },
  },
  {
    //    [ ] [ ]
    // [ ][ ] [ ][o]
    //    [o] [ ]
    blue: { up: false, left: false, centre: false, down: true },
    orange: { up: false, right: true, centre: false, down: false },
  },
  {
    //    [ ] [ ]
    // [ ][ ] [ ][o]
    //    [ ] [o]
    blue: { up: false, left: false, centre: false, down: false },
    orange: { up: false, right: true, centre: false, down: true },
  },
  {
    //    [ ] [o]
    // [ ][ ] [ ][o]
    //    [ ] [ ]
    blue: { up: false, left: false, centre: false, down: false },
    orange: { up: true, right: true, centre: false, down: false },
  },
  {
    //    [o] [ ]
    // [ ][ ] [ ][o]
    //    [ ] [ ]
    blue: { up: true, left: false, centre: false, down: false },
    orange: { up: false, right: true, centre: false, down: false },
  },
  {
    //    [o] [ ]
    // [ ][ ] [ ][ ]
    //    [o] [ ]
    blue: { up: true, left: false, centre: false, down: true },
    orange: { up: false, right: false, centre: false, down: false },
  },
  {
    //    [ ] [o]
    // [ ][ ] [ ][ ]
    //    [ ] [o]
    blue: { up: false, left: false, centre: false, down: false },
    orange: { up: true, right: false, centre: false, down: true },
  }];
  var answerInput3Combos: Array<PadInput> = [
  {
    //    [o] [ ]
    // [ ][o] [ ][ ]
    //    [o] [ ]
    blue: { up: true, left: false, centre: true, down: true },
    orange: { up: false, right: false, centre: false, down: false },
  },
  {
    //    [ ] [o]
    // [ ][ ] [o][ ]
    //    [ ] [o]
    blue: { up: false, left: false, centre: false, down: false },
    orange: { up: true, right: false, centre: true, down: true },
  },
  {
    //    [o] [ ]
    // [ ][ ] [o][ ]
    //    [o] [ ]
    blue: { up: true, left: false, centre: false, down: true },
    orange: { up: false, right: false, centre: true, down: false },
  },
  {
    //    [ ] [o]
    // [ ][o] [ ][ ]
    //    [ ] [o]
    blue: { up: false, left: false, centre: true, down: false },
    orange: { up: true, right: false, centre: false, down: true },
  },
  {
    //    [o] [ ]
    // [ ][ ] [ ][o]
    //    [o] [ ]
    blue: { up: true, left: false, centre: false, down: true },
    orange: { up: false, right: true, centre: false, down: false },
  },
  {
    //    [ ] [o]
    // [o][ ] [ ][ ]
    //    [ ] [o]
    blue: { up: false, left: true, centre: false, down: false },
    orange: { up: true, right: false, centre: false, down: true },
  },
  {
    //    [o] [ ]
    // [o][ ] [o][ ]
    //    [ ] [ ]
    blue: { up: true, left: true, centre: false, down: false },
    orange: { up: false, right: false, centre: true, down: false },
  },
  {
    //    [ ] [ ]
    // [ ][o] [ ][o]
    //    [ ] [o]
    blue: { up: false, left: false, centre: true, down: false },
    orange: { up: false, right: true, centre: false, down: true },
  },
  // {
  //   //    [ ] [ ]
  //   // [o][o] [ ][o]
  //   //    [ ] [ ]
  //   blue: { up: false, left: true, centre: true, down: false },
  //   orange: { up: false, right: true, centre: false, down: false },
  // },
  {
    //    [ ] [ ]
    // [o][ ] [o][o]
    //    [ ] [ ]
    blue: { up: false, left: true, centre: false, down: false },
    orange: { up: false, right: true, centre: true, down: false },
  },
  {
    //    [o] [ ]
    // [ ][ ] [ ][ ]
    //    [o] [o]
    blue: { up: true, left: false, centre: false, down: true },
    orange: { up: false, right: false, centre: false, down: true },
  },
  {
    //    [ ] [o]
    // [ ][ ] [ ][ ]
    //    [o] [o]
    blue: { up: false, left: false, centre: false, down: true },
    orange: { up: true, right: false, centre: false, down: true },
  },
  {
    //    [o] [o]
    // [ ][ ] [ ][ ]
    //    [o] [ ]
    blue: { up: true, left: false, centre: false, down: true },
    orange: { up: true, right: false, centre: false, down: false },
  },
  {
    //    [o] [o]
    // [ ][ ] [ ][ ]
    //    [ ] [o]
    blue: { up: true, left: false, centre: false, down: false },
    orange: { up: true, right: false, centre: false, down: true },
  },
  {
    //    [o] [ ]
    // [o][ ] [ ][ ]
    //    [o] [ ]
    blue: { up: true, left: true, centre: false, down: true },
    orange: { up: false, right: false, centre: false, down: false },
  },
  {
    //    [ ] [o]
    // [ ][ ] [ ][o]
    //    [ ] [o]
    blue: { up: false, left: false, centre: false, down: false },
    orange: { up: true, right: true, centre: false, down: true },
  },
  {
    //    [ ] [ ]
    // [o][ ] [ ][o]
    //    [o] [ ]
    blue: { up: false, left: true, centre: false, down: true },
    orange: { up: false, right: true, centre: false, down: false },
  },
  {
    //    [ ] [ ]
    // [o][ ] [ ][o]
    //    [ ] [o]
    blue: { up: false, left: true, centre: false, down: false },
    orange: { up: false, right: true, centre: false, down: true },
  },
  {
    //    [o] [ ]
    // [o][ ] [ ][o]
    //    [ ] [ ]
    blue: { up: true, left: true, centre: false, down: false },
    orange: { up: false, right: true, centre: false, down: false },
  },
  {
    //    [ ] [o]
    // [o][ ] [ ][o]
    //    [ ] [ ]
    blue: { up: false, left: true, centre: false, down: false },
    orange: { up: true, right: true, centre: false, down: false },
  }];
  // {
  //   //    [ ] [ ]
  //   // [ ][ ] [ ][ ]
  //   //    [ ] [ ]
  //   blue: { up: false, left: false, centre: false, down: false },
  //   orange: { up: false, right: false, centre: false, down: false },
  // },
  // {
  //   //    [ ] [ ]
  //   // [o][o] [o][o]
  //   //    [ ] [ ]
  //   blue: { up: false, left: true, centre: true, down: false },
  //   orange: { up: false, right: true, centre: true, down: false },
  // },
  var answerInput4Combos: Array<PadInput> = [
  {
    //    [o] [ ]
    // [o][ ] [o][ ]
    //    [o] [ ]
    blue: { up: true, left: true, centre: false, down: true },
    orange: { up: false, right: true, centre: false, down: false },
  },
  {
    //    [ ] [o]
    // [ ][o] [ ][o]
    //    [ ] [o]
    blue: { up: false, left: false, centre: true, down: false },
    orange: { up: true, right: true, centre: false, down: true },
  },
  {
    //    [o] [o]
    // [ ][ ] [ ][ ]
    //    [o] [o]
    blue: { up: true, left: false, centre: false, down: true },
    orange: { up: true, right: false, centre: false, down: true },
  },
  {
    //    [ ] [o]
    // [o][ ] [ ][o]
    //    [o] [ ]
    blue: { up: false, left: true, centre: false, down: true },
    orange: { up: true, right: true, centre: false, down: false },
  },
  {
    //    [o] [ ]
    // [o][ ] [ ][o]
    //    [ ] [o]
    blue: { up: true, left: true, centre: false, down: false },
    orange: { up: false, right: true, centre: false, down: true },
  },
  {
    //    [o] [ ]
    // [ ][ ] [o][o]
    //    [o] [ ]
    blue: { up: true, left: false, centre: false, down: true },
    orange: { up: false, right: true, centre: true, down: false },
  },
  // {
  //   //    [ ] [c]
  //   // [o][o] [ ][ ]
  //   //    [ ] [c]
  //   blue: { up: false, left: true, centre: true, down: false },
  //   orange: { up: true, right: false, centre: false, down: true },
  // },
  {
    //    [ ] [o]
    // [ ][ ] [o][o]
    //    [ ] [o]
    blue: { up: false, left: false, centre: false, down: false },
    orange: { up: true, right: true, centre: true, down: true },
  },
  // {
  //   //    [o] [ ]
  //   // [o][o] [ ][ ]
  //   //    [o] [ ]
  //   blue: { up: true, left: true, centre: true, down: true },
  //   orange: { up: false, right: false, centre: false, down: false },
  // },
  {
    //    [o] [o]
    // [ ][o] [o][ ]
    //    [ ] [ ]
    blue: { up: true, left: false, centre: true, down: false },
    orange: { up: true, right: false, centre: true, down: false },
  },
  {
    //    [ ] [ ]
    // [ ][o] [o][ ]
    //    [o] [o]
    blue: { up: false, left: false, centre: true, down: true },
    orange: { up: false, right: false, centre: true, down: true },
  },
  {
    //    [ ] [ ]
    // [o][ ] [ ][o]
    //    [o] [o]
    blue: { up: false, left: true, centre: false, down: true },
    orange: { up: false, right: true, centre: false, down: true },
  },
  {
    //    [o] [o]
    // [o][ ] [ ][o]
    //    [ ] [ ]
    blue: { up: true, left: true, centre: false, down: false },
    orange: { up: true, right: true, centre: false, down: false },
  },
];
