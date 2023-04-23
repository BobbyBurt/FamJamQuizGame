// You can write more code here

/* START OF COMPILED CODE */

import UserComponent from "./UserComponent";
import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class SetAlphaOnEvent extends UserComponent {
  constructor(gameObject: Phaser.GameObjects.Image) {
    super(gameObject);

    this.gameObject = gameObject;
    (gameObject as any)["__SetAlphaOnEvent"] = this;

    /* START-USER-CTR-CODE */

    this.scene = this.gameObject.scene;

    /* END-USER-CTR-CODE */
  }

  static getComponent(gameObject: Phaser.GameObjects.Image): SetAlphaOnEvent {
    return (gameObject as any)["__SetAlphaOnEvent"];
  }

  private gameObject: Phaser.GameObjects.Image;
  public activateEvent: string = "";
  public deactivateEvent: string = "";
  public activeAlpha: number = 1;
  public deactiveAlpha: number = 0.2;
  public activateTweenDuration: number = 100;
  public deactivateTweenDuration: number = 100;

  /* START-USER-CODE */

  private alphaTween: Phaser.Tweens.Tween;

  start(): void {
    this.scene.game.events.on(this.activateEvent, () => {
      this.setTween(true);
    });
    this.scene.game.events.on(this.deactivateEvent, () => {
      this.setTween(false);
    });
  }

  setTween(activate: boolean) {
    this.alphaTween = this.scene.tweens.add({
      targets: this.gameObject,
      alpha: activate ? this.activeAlpha : this.deactiveAlpha,
      duration: activate
        ? this.activateTweenDuration
        : this.deactivateTweenDuration,
      ease: Phaser.Math.Easing.Quadratic.InOut,
    });
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
