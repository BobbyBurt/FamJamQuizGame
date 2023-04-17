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
  }

  private setupInputEvents() {
    this.scene.input.gamepad.on(
      "down",
      (
        pad: Phaser.Input.Gamepad.Gamepad,
        button: Phaser.Input.Gamepad.Button,
        index: number
      ) => {
        this.updateInputFromGamepad(!!button.value, button.index);
        console.debug(this.currentInput);
        this.checkInputCombos();
      }
    );
    this.scene.input.gamepad.on(
      "up",
      (
        pad: Phaser.Input.Gamepad.Gamepad,
        button: Phaser.Input.Gamepad.Button,
        index: number
      ) => {
        this.updateInputFromGamepad(!!button.value, button.index);
        console.debug(this.currentInput);
        this.checkInputCombos();
      }
    );
    this.scene.input.keyboard.on("keydown", (event: any) => {
      this.updateInputFromKeyboard(true, event.key)
    });
  }

  updateInputFromGamepad(down: boolean, button: number) {
    switch (button) {
      case 0:
        this.currentInput.orange.centre = down;
        break;
      case 1:
        this.currentInput.orange.up = down;
        break;
      case 3:
        this.currentInput.orange.right = down;
        break;
      case using8BitDo ? 8 : 5:
        this.currentInput.orange.down = down;
        break;
      case 9:
        this.currentInput.blue.up = down;
        break;
      case 12:
        this.currentInput.blue.left = down;
        break;
      case 13:
        this.currentInput.blue.centre = down;
        break;
      case 15:
        this.currentInput.blue.down = down;
        break;
    }
  }

  updateInputFromKeyboard(down: boolean, key: 'string')
  {

  }

  /**
   * Compares `currentInput` to active answer combos
   */
  private checkInputCombos() {
    if (
      JSON.stringify(this.currentInput) ===
      JSON.stringify(twoButtonInputCombos[0])
    ) {
      /* Make sure these objects' properties are initialzied in the same 
      order, otherwise this simple comparison method will evaluated false. */

      // TODO: check all active answer combos

      console.debug("answer inputed!!");
    }
  }
}

export var twoButtonInputCombos: Array<PadInput> = [
  {
    //    [ ] [o]
    // [ ][ ] [ ][ ]
    //    [o] [ ]
    blue: { up: false, left: false, centre: false, down: true },
    orange: { up: true, right: false, centre: false, down: false },
  },
  {
    //    [ ] [ ]
    // [o][ ] [ ][o]
    //    [ ] [ ]
    blue: { up: false, left: false, centre: false, down: true },
    orange: { up: true, right: false, centre: false, down: false },
  },
];

export var threeButtonInputCombos: Array<PadInput> = [
  {
    //    [o] [ ]
    // [ ][ ] [o][ ]
    //    [o] [ ]
    blue: { up: true, left: false, centre: false, down: false },
    orange: { up: false, right: false, centre: true, down: false },
  },
  {
    //    [ ] [o]
    // [o][ ] [ ][o]
    //    [ ] [ ]
    blue: { up: false, left: true, centre: false, down: false },
    orange: { up: true, right: true, centre: false, down: false },
  },
];
