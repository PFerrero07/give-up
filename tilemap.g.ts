// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001010101010101010101010202020202050202020202020202020101010101020202010102010101020202020202010101020201020102010101010101020303010102010101020101020202010201010101020202020202020201010102010201020202020202020202010202020202010201010101010101030101010101020102010303030303030303010202020202020103010101030303030101020202010101030103010101030303010202020103010303030103030301030101010101030101030301010103030303030103010303030303010101030101030301030403030301030301010303030303010301010103030101010101030101010103`, img`
2 2 2 2 2 2 2 2 2 2 2 . . . . . 
. . . . . . . . . . 2 2 2 2 2 . 
. . 2 2 . 2 2 2 . . . . . . 2 2 
2 . . 2 . 2 . 2 2 2 2 2 2 . . . 
2 2 . 2 2 2 . 2 2 . . . 2 . 2 2 
2 2 . . . . . . . . 2 2 2 . 2 . 
2 . . . . . . . . . 2 . . . . . 
2 . 2 2 2 2 2 2 2 . 2 2 2 2 2 . 
2 . 2 . . . . . . . . 2 . . . . 
. . 2 . 2 2 2 . . . . 2 2 . . . 
2 2 2 . 2 . 2 2 2 . . . 2 . . . 
2 . 2 . . . 2 . . . 2 . 2 2 2 2 
2 . 2 2 . . 2 2 2 . . . . . 2 . 
2 . . . . . 2 2 2 . 2 2 . . 2 . 
. . . . 2 . . 2 2 . . . . . 2 . 
2 2 2 . . 2 2 2 2 2 . 2 2 2 2 . 
`, [myTiles.transparency16,sprites.dungeon.darkGroundNorthWest1,sprites.castle.tileDarkGrass2,sprites.castle.tileGrass2,sprites.dungeon.chestOpen,sprites.dungeon.collectibleInsignia], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
