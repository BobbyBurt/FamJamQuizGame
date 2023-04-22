export default class PluginTest extends Phaser.Plugins.BasePlugin {
  constructor(pluginManager: Phaser.Plugins.PluginManager) {
    super(pluginManager);
  }

  start() {
    console.debug("plugin start");
  }

  update(text: Phaser.GameObjects.Text) {
    
  }
}
