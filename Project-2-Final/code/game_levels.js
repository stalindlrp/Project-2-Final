var GAME_LEVELS = [
  ["  x                                                                          x  ",
   "  x                                                                          x  ",
   "  x                                                                          x  ",
   "  x                                                               x^^     ^^xx  ",
   "  x                                                             x |         ox  ",
   "  x                                                                         ox  ",
   "  x                                                                         ox  ",
   "  x                                                xx      xx       |   xxxxxx  ",
   "  x  x        x  o ~x               o o      xx        ^^        x!!!x       x  ",
   "  x  ^        xxxxxxx                                            xx!xx       x  ",
   "  x  ^x                            xxxxx                          xvx        x  ",
   "  xo         x                      X                                       xx  ",
   "  xo                                      o o                                x  ",
   "  xxx    xx             o                                                    x  ",
   "  x                           x          xxxxx                             o x  ",
   "  x          x^^x       o                                                    x  ",
   "  x ~     @           ~x            x    ~  ooo     ~x           xxxxx       x  ",
   "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxx+    xxxxxxxxxxxxxxxxxx     xxxxxxx   xxxxxxxxx  ",
   "                              x     x                x     x                    ",
   "                              x!!!!!x                x!!!!!x                    ",
   "                              x!!!!!x                x!!!!!x                    ",
   "                              xxxxxxx                xxxxxxx                    ",
   "                                                                                ",
   "                                                                                "],
  ["                                                                                              x              xxx  ",
   "                                                                                              x              xxx  ",
   "                                                           xxxxxxxxxxxxxxxxx                  x     #   #    xxx  ",
   "                                                 xxx       xx*xx*xx*xx*xx*xx                  x                x  ",
   "                     x^^^x                       x!x       xx xx xx xx xx xx                  x   o   o   o    x  ",
   "                     x^^^x                       x!x       xx xx xx xx xx xx                  xxxxxxxxxxxxxxx  x  ",
   "                     x^^^x                       x!x          xx xx xx xx xx                                   x  ",
   "                     xx*xx                       xvx                                     xx~                   x  ",
   "                                                              o  o  o  o         xxx      xxxxxxxxxxxxxxxxxxxxxx  ",
   "                                                            xxxxxxxxxxxxxxxxx             x                       ",
   "  o                            o                               xxxxxxxx^^^^^^^^^^^^^^^^^^^^                       ",
   "xxxxx     xxxx     x        xxxxx              xxxxxxxxxxx           x                                            ",
   "    ^     x  x     x                   ^^^^x   x     x!!!x           x                                            ",
   "          xxxx    xx                   x!!!xx  x     x!!!x   xxxxx   x                                            ",
   "                   xxxxxxx             x!!!x   x     xx^^x           x                                            ",
   "    x ~    o      ~x                   xxvxx   x^^^^^x              xx                                            ",
   "    xxxxxxxxxxxxxxxx                           x                     x                                            ",
   "          ^                                   xx             o  o    x                                            ",
   "          ^                      o             x             x^^x    x                                            ",
   "          #                                    x    xx               x                                            ",
   "     @                       xxxx^^^xx         x     xxxx            x                                            ",
   "^   xxx      xxxxxxxxxxx        xxxxxxx    xxxxx     x        o~x    x                                            ",
   "    xxx      x         x       xxxxxxx!!!!!!!!!x     x      xxxxx^^^^x                                            ",
   "    xxx      x         x!!!!!!xxxxxxxxx!!!!!!!!xx    x!!!!!!!!x                                                   ",
   "    xxx      x         x!!!!!xx       xxxxxxxxxx     x!!!!!!!xx                                                   ",
   "   ^xxx    xxx         x!!!!!x   o                  xx!!!!!!xx                                                    ",
   "    xxx      x         x!!!!!x                 o   xx!!!!!!xx                                                     ",
   "             x         x!!!!!xx~     ~xxxxxxxxxxxxxx!!!!!!xx                                                      ",
   "~  o     o  ~x         x!!!!!!xxxxxxxxx!!!!!!!!!!!!!!!!!!xx                                                       ",
   "xxxxxxxxxxxxxx         x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xx                                                        "],
  ["                         xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx           ",
   "                         xx#xx xx xx xx xx xx#xx xx xx xx xx xx#xx xx xx xx xx xx#xx xx xx xx xx xx           ",
   "                         xx xx#xx xx xx xx#xx xx#xx xx xx xx#xx xx#xx xx xx xx#xx xx#xx xx xx xx#xx           ",
   "                                 #     #           #     #           #     #           #     #                ",
   "                         o  o  o  o #o  o  o  o  o  o #o  o  o  o  o  o #o  o  o  o  o  o #o  o  o            ",
   "                     xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx         ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                       xxx^^^^",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                              xxxxxx          ",
   "                                                                                     xxxx                     ",
   "                                                                             ^  ^                             ",
   "                                                                             ^  ^                             ",
   "                                                                         ^   ^  ^                             ",
   "                                                                  #      #   ^  ^                             ",
   "                                                                                                              ",
   "                                          x~      x   x  o  ~x                 o                              ",
   "                               ^xx     ^  xxxxxxxxx   xxxxxxxx     xxxxx   xxxxx                              ",
   "                               ^       ^                       #                                              ",
   "                               ^       ^                       ^^^^      ^                                    ",
   "                               ^       ^                                                                      ",
   "                               ^     xx^                                                                      ",
   "                               ^       ^                                                                      ",
   "                               ^       ^                                                                      ",
   "                               ^xx     ^                                                                      ",
   "xxxxxxxxxxxxxxx                ^       ^                                                                      ",
   "x       #     x                ^       ^                                                                      ",
   "xo            x                ^     xx^                                                                      ",
   "x             x                                                                                               ",
   "xxx          ox                                                                                               ",
   "x         xxxxx               @ o                                                                             ",
   "x                             xxxx                                                                            ",
   "x               ~x                                                                                            ",
   "xxxxxxxxxxxxxxxxxxxxxxx                                                                                       ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                        x      ~x     o                                                       ",
   "                           xx      xx   xxxxxxxxx    xx                                                                                   ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^  ",
   "                                                                                                              ",
   "                                                                                                              "],
  ["                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "              x     x                     x          x          x   x                                         ",
   "               x   x                       x        x x        x                                              ",
   "                xxx     xxxx   x  x         x      x   x      x     x   xxxxx                                 ",
   "                 x      x  x   x  x          x    x     x    x      x   x   x                                 ",
   "                 x      x  x   x  x           x  x       x  x       x   x   x                                 ",
   "                 x      xxxx   xxxx            xx         xx        x   x   x                                 ",
   "                                                                                                              ",
   "    @                                                                       o                                 ",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"]
];

if (typeof module != "undefined" && module.exports)
  module.exports = GAME_LEVELS;