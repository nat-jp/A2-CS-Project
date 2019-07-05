const SIZE = 10, TILE_SIZE = 32;

let type = "WebGL"
if (!PIXI.utils.isWebGLSupported())
{
    type = "canvas"
}

PIXI.utils.sayHello(type)

let app = new PIXI.Application( { width: window.innerWidth, height: window.innerHeight } )
const loader = PIXI.Loader.shared

document.body.appendChild(app.view);

const renderer = PIXI.autoDetectRenderer()

start()
//var cells = new Array(Math.min(window.innerWidth/TILE_SIZE))

function start(loader, resources)
{
    let graphics = new PIXI.Graphics()
    graphics.beginFill(0x878787) 
    graphics.lineStyle(2, 0x787878, 1)
    graphics.drawRect(0, 0, TILE_SIZE, TILE_SIZE)
    graphics.endFill()

    let texture = renderer.generateTexture(graphics)

    for (var x = 0; x < Math.min(window.innerWidth/TILE_SIZE); x++)
    {
        //cells[x] = new Array(Math.min(window.innerHeight/TILE_SIZE));
        for (var y = 0; y < Math.min(window.innerHeight/TILE_SIZE); y++)
        {
            var s = new PIXI.Sprite(texture)
            //console.log("x " + x + " y " + y + " " + s.visible)
            s.position.x = x * s.width
            s.position.y = y * s.height
            s.name = x + ":" + y
            app.stage.addChild(s)
            
        }   
    }

    app.stage.children.forEach(c => {
        console.log(c.name);
    });

    app.ticker.add(delta => gameLoop(delta))

}

function gameLoop(delta)
{

}

function play(delta)
{

}

function end()
{

}