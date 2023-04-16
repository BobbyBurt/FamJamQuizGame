export default class PluginTest extends Phaser.Plugins.BasePlugin {
  constructor(pluginManager: Phaser.Plugins.PluginManager) {
    super(pluginManager);
  }

  start() {
    // var eventEmitter = this.game.events;
    // eventEmitter.on('destroy', this.destroy, this);
    // eventEmitter.on('update', this.update, this);

    console.debug("plugin reporting");
  }

  testFunction(text: Phaser.GameObjects.Text) {
    console.debug("plugin funciton called");

    text.alpha = 0.5;
  }
}
