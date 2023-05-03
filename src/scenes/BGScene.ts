export default class BGScene extends Phaser.Scene {

	constructor() {
		super("bg-scene");

    }

    private graphics: any;
    private shapes: any;
    private rect: any;
	
    create ()
    {
        // this.cameras.main.
        
        this.graphics = this.add.graphics();

        this.shapes = new Array(15).fill(null).map(
            () => new Phaser.Geom.Circle(Phaser.Math.Between(0, 800), Phaser.Math.Between(0, 600), Phaser.Math.Between(100, 500))
        );

        this.cameras.main.setBounds(0, 0, this.cameras.main.width, this.cameras.main.height);
        this.rect = Phaser.Geom.Rectangle.Clone(this.cameras.main.getBounds());
    }

    update ()
    {
        this.shapes.forEach(function (shape: any, i: any) {
            shape.x += (1 + 0.1 * i);
            shape.y += (1 + 0.1 * i);
        });

        Phaser.Actions.WrapInRectangle(this.shapes, this.rect, 72);

        this.draw();
    }

    // Locals methods, they are not part of Phaser.scene
    color (i: any)
    {
        return 0x001100 * (i % 15) + 0x000033 * (i % 5);
    }

    draw ()
    {
        this.graphics.clear();

        this.shapes.forEach((shape: any, i: any) => {
            this.graphics
            .fillStyle(this.color(i), 0.5)
            .fillCircleShape(shape);
        }, this);
    }
}