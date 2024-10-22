const monsterTable = `
DrakSlime  45 13 16 10 13  8 20 16 BeDragon  FireAir   SuckAir Slime
SpotSlime  35 10 17  1 17  4 17  8 CallHelp  LushLicks Imitate Slime
WingSlime  35 10 13  2 11 11 24  8 WindBeast SquallHit TailWind Slime
TreeSlime  50 11 13 11  8 14 17 17 Sap       Paralyze  SleepAir Slime
Snaily     35  8 11 10 17 20 20  8 Icebolt   NumbOff   CallHelp Slime
SlimeNite  40 15 14  1 15 14 20 14 Heal      Upper     BeastCut Slime
Babble     45 12 17  7 17  8 14 13 Surround  PoisonHit EerieLite Slime
BoxSlime   50 11 11 10 14 19 14 13 Blaze     Upper     Ramming Slime
PearlGel   40 10 10 16  8 22 14  9 Upper     ChargeUp  Radiant Slime
Slime      40 16 22 11 14 17 11 13 Firebal   MegaMagic Radiant Slime
Healer     50 11 11 15 11 11 20 18 Heal      HealUs    Upper Slime
FangSlime  35 10 25  1 18 13 20 13 CallHelp  ChargeUp  WarCry Slime
RockSlime  45 11 13 10 14 23 16 14 HighJump  Ramming   StrongD Slime
SlimeBorg  50 11 18 11 20 15 14 13 Lightning RainSlash BladeD Slime
Slabbit    35 10 15  7 14  8 21 15 SideStep  LegSweep  Whistle Slime
KingSlime  45 12 18 14 15 14 20 15 Mpass     Barrier   Vivify Slime
Metaly     20 25  0 30 11 30 31 13 Blaze     Icebolt   Beat Slime
Metabble   35 27  0 30 14 31 31 15 Firebal   Bang      Sacrifice Slime
SpotKing   45  9 18 11 18 11 20 15 CleanCut  NapAttack MouthShut Slime
TropicGel  40 14 15 20 19  9 14 15 Mpass     SleepAir  LushLicks Slime
MimeSlime  40 17 10 12  8 19 20 17 PanicAll  Ahhh      LoveRain Slime
HaloSlime  35 16  9 20 11 13 12 22 Sleep     SealPray  LifeSong Slime
MetalKing  55 29  0 31 15 31 31 18 Bolt      Ironize   HellBlast Slime
GoldSlime  70 31  0 31 19 31 31 18 Chance    BigBang   Surge Slime
GranSlime  80 30 25 29 27 31  6 31 Farewell  Focus     Informer Slime
WonderEgg  40  4  8 13 11 19 11 20 Sacrifice Ironize   Chance Slime
DragonKid  30  7 10  3 17  2  5  5 FireAir   SleepAir  Dodge Dragon
Tortragon  35 17 15 11 18  6  7 13 Ironize   MagicBack Lightning Dragon
Pteranod   35 16 14 11 18  2 20  4 Firebal   WindBeast TailWind Dragon
Gasgon     50 18 17 15 13 11  7 18 Sacrifice Farewell  Beserker Dragon
FairyDrak  30 15  9 13 17 16 14  4 Surround  SleepAir  LushLicks Dragon
LizardMan  45 20 17 10 19 13  5 16 AquaCut   GigaSlash EvilSlash Dragon
Poisongon  45 19 21 16 15 13  7  1 PoisonHit PoisonGas LushLicks Dragon
Swordgon   50 20  9  3 23  6  1  5 CleanCut  RainSlash BladeD Dragon
Drygon     35 16 11  2 19 13  7  5 Sap       Ramming   WarCry Dragon
Dragon     40 20 17  1 20 16  7  4 FireAir   FireSlash SealAll Dragon
MiniDrak   35 16 14  8 17 14 18 10 CallHelp  Ramming   SandStorm Dragon
MadDragon  35 19 19  0 21  5  8  0 EvilSlash Massacre  CureDance Dragon
Rayburn    35 17 14  2 17 16 15  5 VacuSlash DevilCut  PoisonHit Dragon
Chamelgon  40 19 17 18 11  6  8 13 PanicAll  Paralyze  PalsyAir Dragon
LizardFly  30 16 11 11 17 17 13  5 Firebal   Sap       FireAir Dragon
Andreal    50 22 21 15 19 17 19 12 Infernos  Surround  PoisonGas Dragon
KingCobra  40 20 18  8 16 13 19 11 PoisonHit Curse     K.O. Dance Dragon
Vampirus   35  8 14  7 10  8 19  8 Infernos  CallHelp  BiAttack Dragon
SnakeBat   35  7 10  9 21 15  9  8 RockThrow LushLicks Errand Dragon
Spikerous  35 19 20  8 19 24  1  2 RockThrow Beserker  Kamikaze Dragon
GreatDrak  60 23 21  5 23 14 16 11 FrigidAir IceSlash  SealAll Dragon
Crestpent  35 18 14  4 15  5 19  8 StopSpell BeDragon  PoisonHit Dragon
WingSnake  45 20 15  8 20 17 14 11 SquallHit HighJump  PoisonGas Dragon
Coatol     60 23 25 14 20 22 18 14 Bang      BoltSlash EvilSlash Dragon
Orochi     60 22 24 13 24 21 11  8 FireAir   FireSlash BiAttack Dragon
BattleRex  60 22 23 16 26 20 17 16 FireAir   MetalCut  EvilSlash Dragon
SkyDragon  40 18 15 11 20 14 18  8 FireAir   MultiCut  SuckAir Dragon
Serpentia  55 24 23  7 24 21 18  8 SlimeBlow DevilCut  RainSlash Dragon
Divinegon  70 28 26 25 28 24 20 23 BigBang   FrigidAir Meditate Dragon
Orligon    75 29 25 24 28 25 21 24 TwinHits  Beserker  StrongD Dragon
GigaDraco  70 24 30 24 29 12  6 11 FireAir   RockThrow Massacre Dragon
Tonguella  40 12 14  5 15 12 11 16 NapAttack SleepAir  LushLicks Beast
Almiraj    45 13 18  5 14  9 15  4 Sleep     ChargeUp  Beserker Beast
CatFly     35 10 11 10 13  8 18 14 Slow      StopSpell OddDance Beast
PillowRat  35 11 14 17  8  8 19 13 Slow      Ramming   SideStep Beast
Saccer     40  9 16  5  9 17  0 13 Upper     PsycheUp  PalsyAir Beast
GulpBeast  45 13 24  1 26 13  7  1 Massacre  Ramming   WarCry Beast
Skullroo   45 12 14 10 11  8 16  2 ChargeUp  PaniDance EagleEye Beast
WindBeast  50 12 13 20 13 15 15 13 Infernos  Icebolt   VacuSlash Beast
Beavern    40 14 22  8  8 21 10  7 Icebolt   ChargeUp  Geyser Beast
Antbear    40  8 14  7 17 11  9 11 MetalCut  SquallHit LushLicks Beast
SuperTen   45  9 18  7 13 12 11  7 K.O. Dance Hustle    Imitate Beast
IronTurt   45 10 18  5 17 23  2 11 MagicWall StrongD   Cover Beast
Mommonja   35  9 14 11 16 14 20  8 CureDance MouthShut EagleEye Beast
HammerMan  50 11 17 19 17 11 17 10 ChargeUp  EvilSlash Kamikaze Beast
Grizzly    45 14 20  0 27  7  9  1 SquallHit BiAttack  LegSweep Beast
Yeti       40 13 18 11 15  9 10  8 Icebolt   IceSlash  WarCry Beast
ArrowDog   40  5  9  7 21 19 13 14 Blaze     CallHelp  MouthShut Beast
NoctoKing  40 13 22 13 18 15 20  8 Surround  SleepAir  ThickFog Beast
BeastNite  40  8 21  4 22 14  8  6 Sleep     RainSlash GigaSlash Beast
MadGopher  40 12 14 13 17  9  8 11 BirdBlow  ZombieCut Informer Beast
FairyRat   45 11 12  5 13 14 17  7 Slow      Surround  SlimeBlow Beast
Unicorn    50 14 19 21 14 13 12 25 Heal      Vivify    Errand Beast
Goategon   40 11 19  9 17 13 17  3 Firebal   Slow      SleepAir Beast
WildApe    35 13 13  1 20 10  8  4 TwinSlash SideStep  Errand Beast
Trumpeter  50 14 17  8 21 17 14 13 Beserker  SandStorm WarCry Beast
KingLeo    60 15 20 14 24 23 17 14 Firebal   FrigidAir BiAttack Beast
DarkHorn   50 13 17  4 19 18 10 12 Sleep     StopSpell PsycheUp Beast
MadCat     40 12 15  7 18 14 17 11 VacuSlash SquallHit LegSweep Beast
BigEye     40 11 14  8 14 11  7  9 Icebolt   FrigidAir LoveRain Beast
Gorago     65 29 29 28 30 24 24  6 Bang      Massacre  EerieLite Beast
CatMage    40  4  7  6 10  4  6 15 Blaze     Surround  Transform Beast
Dumbira    45  7 15 10  9  8 14  7 MetalCut  RainSlash TwinSlash Beast
Picky      40  4 11 12 14  8 18 13 Sap       Surround  BugBlow Bird
Wyvern     45  6 17 13 19 11 16 20 Heal      Sleep     FrigidAir Bird
BullBird   35  5 14  8 17  9  6  4 Shears    ChargeUp  Ramming Bird
Florajay   50  5  6 18 12  3 21 19 Speed     BeastCut  LifeSong Bird
DuckKite   30  3 11 11  9 12 18  7 Sleep     PanicAll  Curse Bird
MadPecker  40  4  9  7 20 14 23 13 Infernos  Sap       VacuSlash Bird
MadRaven   40  5  6 14 17 12 18  5 HighJump  TailWind  EagleEye Bird
MistyWing  50  5 12 17  8 15 22 13 Barrier   EerieLite Informer Bird
AquaHawk   40 12  7  8  6 13 14 19 CurseOff  SquallHit AquaWall Bird
Dracky     50  2 11  4  8 13 17 11 Antidote  Sleep     RobMagic Bird
KiteHawk   40  5 13  8  8  7  9  1 MagicWall Curse     TailWind Bird
BigRoost   40  3  8  5 14 12 17  8 VacuSlash SandStorm Dodge Bird
StubBird   40  6 16 12 20 20 14 11 TwinHits  BugBlow   RainSlash Bird
LandOwl    35  5 15 10 21 13 11 18 Infernos  BoltSlash SideStep Bird
MadGoose   30  3 17  6 17 15 20  8 Heal      WindBeast CureDance Bird
MadCondor  45  6 14 11 18 12 17 13 Firebal   HealUs    MultiCut Bird
Emyu       40  4  9 13 20 19 23 30 WindBeast Hustle    Errand Bird
Blizzardy  50  7 20  7 11 17 19 11 Beat      FrigidAir IceSlash Bird
Phoenix    50  7 16 13 19  8 19 12 FireAir   SquallHit TailWind Bird
ZapBird    50  7 20  7 19 17 22 12 HellBlast Lightning BoltSlash Bird
Garudian   50  8 10  7  8 14 22  9 Infernos  WindBeast AquaCut Bird
WhipBird   60 15 27 19 12 20 23 23 Ironize   ThickFog  TatsuCall Bird
FunkyBird  50  5 14 20  8  9 16 20 PaniDance LifeDance Hustle Bird
RainHawk   70 24 25 27 15 24 18 24 MegaMagic Surge     StrongD Bird
Azurile    75 28 27 24 24 12 24 12 HellBlast Meditate  LifeSong Bird
Shantak    60 22 24 22 18 20 24 22 HealUs    FireAir   SealAll Bird
CragDevil  35  4  7  8 13  5 14 11 Infernos  PanicAll  EagleEye Bird
MadPlant   40 10 15 24 11 13  6 18 NumbOff   Sap       Slow Plant
FireWeed   45 15 14 26 10 12  5 17 Blaze     Dechaos   PalsyAir Plant
FloraMan   40  7 17 20  6  9  2 19 Firebal   Antidote  CurseOff Plant
WingTree   35  7 12 20  6 11 14  7 Farewell  ZombieCut StepGuard Plant
CactiBall  30  6 18 18 12 15  9  5 Paralyze  HighJump  OddDance Plant
Gulpple    40 11 16 17  9  6  2 14 NapAttack HighJump  SleepAir Plant
Toadstool  45  9 14 18  8  9 13 13 NapAttack SleepAir  MouthShut Plant
AmberWeed  50 12 12 24  8 17 12 10 TwinHits  Barrier   MagicWall Plant
Slurperon  40  3  8  5  7  2  7  2 Sleep     OddDance  LushLicks Plant
Stubsuck   40  8 17 11  4  2  9 14 Sleep     ZombieCut StepGuard Plant
Oniono     35  9 13 20 14 11  3 16 RobMagic  ChargeUp  SleepAir Plant
DanceVegi  40 12 11 21  7  6 20 11 K.O. Dance CureDance SideStep Plant
TreeBoy    40 11 15 18  8  3 12 15 Mpass     CurseOff  Hustle Plant
Devipine   40 10 14  7  8  4  5  3 Beat      SleepAir  PoisonGas Plant
FaceTree   45  9 12 20 11  8 10 17 StopSpell Curse     OddDance Plant
HerbMan    40 13 19 17  7 10 15 23 Curse     Focus     DanceShut Plant
BeanMan    35 10 14 15 12 14 15  9 TwinHits  RobMagic  MapMagic Plant
EvilSeed   30  6  8 11  8  5  1  3 CleanCut  Paralyze  Radiant Plant
ManEater   45  9 14 12 19  7 10  6 DrakSlash PsycheUp  SleepAir Plant
Snapper    50 11 17 14 20 13 10 16 StopSpell CallHelp  RainSlash Plant
GhosTree   50  9  8 13  9  6  7 15 RobMagic  CureDance EerieLite Plant
Rosevine   70 24 24 30 23 21 18 18 BiAttack  UltraDown BladeD Plant
Egdracil   70 24 25 18 21 24 15 23 Vivify    SleepAir  SealAll Plant
Warubou    80 15 22  7 12 13 24  4 Mpass     DeMagic   Pheromone Plant
Watabou    80  0 10 27 11 14 24 30 Chance    Imitate   Whistle Plant
Eggplaton  30  3  8 14 13 19  7 14 Mpass     OddDance  CureDance Plant
FooHero    45 16  8  4  7  4  9  7 Bolt      Heal      GigaSlash Plant
GiantSlug  35  2 11  8 14  9 11  7 LushLicks Dodge     Whistle Bug
Catapila   40  4 13  5 11 14 11  9 Upper     PoisonHit ThickFog Bug
Gophecada  30  1  6 11 14 18  8  7 Beat      MagicBack CallHelp Bug
Butterfly  30  0 11  2 13  7 12  8 Surround  CallHelp  Curse Bug
WeedBug    40  4 17 13 10 12  5 19 RobMagic  Barrier   MagicWall Bug
GiantWorm  35  6 13  8 16  8 13 14 BeastCut  OddDance  StepGuard Bug
Lipsy      40  4 12  8  9  9  4  1 LushLicks Ahhh      Pheromone Bug
StagBug    45  3 13  7 16 20  9  7 Sleep     FireAir   LegSweep Bug
Pyuro      40  7  8  8  7 13 11 14 Speed     WindBeast MouthShut Bug
ArmyAnt    35  2  8  4 11 17 13  1 CallHelp  NapAttack Kamikaze Bug
GoHopper   35  0 11  4  8 14 14  4 RobMagic  CallHelp  ChargeUp Bug
TailEater  45  5 12 10 16 11 14  5 IceSlash  PoisonGas Radiant Bug
ArmorPede  35  6 15 10 17 20 11  2 Upper     TwinHits  TwinSlash Bug
Eyeder     45  4  9 11  6  3 10  9 Firebal   Heal      MapMagic Bug
GiantMoth  30  2 14  9 16 12 20 12 WindBeast Paralyze  Radiant Bug
Droll      40  5 17 10 15 16  7 14 Slow      Shears    StepGuard Bug
ArmyCrab   40  6 16  8 14 19  5  1 Upper     CallHelp  MetalCut Bug
MadHornet  40  7 20  5 19 13 20  4 PoisonHit Paralyze  TailWind Bug
Belzebub   35 12 23 19  8  7 14  3 Firebal   Farewell  Ramming Bug
WarMantis  50 18 23 16 12  9 11  8 VacuSlash Shears    GigaSlash Bug
HornBeet   50  7 21 19 23 20 12 14 RockThrow BoltSlash DevilCut Bug
Sickler    45  7 19 13  9  7 14  5 Infernos  DevilCut  SquallHit Bug
Armorpion  55 24 22 20 24 23 15 18 ZombieCut RainSlash EvilSlash Bug
Digster    50 11 24 10 19 26  1 15 Farewell  StrongD   SealAll Bug
Skularach  65 25 18 23 25 24 30 21 Lightning BiAttack  PoisonGas Bug
MultiEyes  35  4 14 15 19 13  2  3 Sap       TwinHits  PalsyAir Bug
Pixy       40 19 11  7 15  8 15  4 Antidote  TwinHits  SealPray Demon
MedusaEye  30 19 11 13 14 15  8 11 Sap       Surround  Shears Demon
AgDevil    35 16 16 11 18 12 16 19 Firebal   Sacrifice SleepAir Demon
Demonite   30 13 13  1  5  4  9 20 Blaze     FireAir   FrigidAir Demon
DarkEye    40 18 11 18 10 16  9 12 CleanCut  PalsyAir  Radiant Demon
EyeBall    35 16 16 17 14 14 13  8 MagicBack WarCry    Outside Demon
SkulRider  45 18 17 11 17 13 15 12 FireSlash RainSlash LegSweep Demon
EvilBeast  50 20 16 10 20 22  4 12 Firebal   Ironize   FrigidAir Demon
Bubblemon  45 12 14 13 15  7  7  4 Watershot IceSlash  BladeD Demon
1EyeClown  25 13 10  1  5  9  9 17 Blaze     Firebal   Icebolt Demon
Gremlin    25 13 13  7  8  4  2 18 Firebal   Heal      StopSpell Demon
ArcDemon   45 20 14 13 17 12  7 21 Bang      VacuSlash BoltSlash Demon
Lionex     45 21 15 11 14 15 12 19 Infernos  HealUs    VacuSlash Demon
GoatHorn   40 22 20 11 17 13 11 20 Bang      Infernos  Icebolt Demon
Orc        50 17 19  7 19 13 13 18 Vivify    Sap       BirdBlow Demon
Ogre       40 19 15  8 20 12 10 12 MetalCut  PsycheUp  Massacre Demon
GateGuard  50 23 18 12 18 14 10 14 Blaze     CleanCut  ThickFog Demon
ChopClown  50 22 17 12 20 11 20 15 TwinHits  VacuSlash SquallHit Demon
BossTroll  50 24 24  3 25 22  4  1 Massacre  Ramming   Cover Demon
Grendal    60 20 23  1 18 24 12 12 FireSlash DrakSlash Cover Demon
Akubar     70 30 24 30 23 21 18 21 Bang      FrigidAir Focus Demon
MadKnight  55 23 17  9 18 20 10 12 BeastCut  GigaSlash Massacre Demon
EvilWell   50 15 23 14 10 15  6  8 Blaze     ChargeUp  WarCry Demon
Gigantes   45 22 27  0 27  7  0  0 SlimeBlow ChargeUp  EvilSlash Demon
Centasaur  45 23 20  1 24 21 18 19 StopSpell FireSlash RainSlash Demon
EvilArmor  40 22 16  1 17 29  5 13 FireSlash BoltSlash AquaCut Demon
Jamirus    60 21 24  9 21 24 23 18 Blaze     BiAttack  TailWind Demon
Durran     70 28 25 24 23 15 17 20 WindBeast DrakSlash BirdBlow Demon
Titanis    75 27 25 24 25 22 23 13 Bang      Beserker  UltraDown Demon
LampGenie  60 21 10 12 11 22 15 10 Heal      Sleep     TailWind Demon
Spooky     40 11 11 12 13  8 18 15 Radiant   MouthShut Outside Zombie
Skullgon   45 13  6  1 23 15  4  6 FrigidAir IceSlash  TwinSlash Zombie
PutrePup   35  6 17 13 17  8 11  4 Sap       Slow      MagicBack Zombie
RotRaven   35  5 14  8 12 11 18  9 Lightning BoltSlash Kamikaze Zombie
Mummy      50 10 15 17 12  9  4  8 CallHelp  Paralyze  EvilSlash Zombie
DarkCrab   30  8 12  8 15 20  1 11 Ironize   MagicWall StepGuard Zombie
DeadNite   45 13 17  7 19  9 12  8 Heal      Dechaos   CurseOff Zombie
Shadow     50 12  9  6  6 20  8 12 FrigidAir K.O. Dance ThickFog Zombie
Skulpent   45  9 17 19 23  9 12 10 Beat      PoisonHit Dodge Zombie
Hork       40  8 17 13 16  8 11 10 PoisonGas EerieLite LushLicks Zombie
Mudron     30 10  6 10 11 17  7 14 Beat      Mpass     Vivify Zombie
NiteWhip   35 12 17  4 10  3 15  9 WindBeast Lightning Informer Zombie
WindMerge  35  9 16 19 19 12 13  6 Infernos  CurseOff  BirdBlow Zombie
Reaper     40 10 19  3 21 17 19  6 DevilCut  Curse     EerieLite Zombie
Inverzon   35  4  7  2 14  7  4  1 Surround  PoisonGas SideStep Zombie
FoxFire    40  7  9 15  6  8 13  4 Blaze     Firebal   Outside Zombie
CaptDead   40 13  9 20 17 16  8  5 CallHelp  AquaCut   SquallHit Zombie
DeadNoble  50 16 21  2 26 19 15 13 HealUs    AquaCut   TatsuCall Zombie
WhiteKing  60 25 20 24 14 20 15 27 Infernos  Bolt      Chance Zombie
BoneSlave  40 10 14 13 17 12  7  1 Bang      BoltSlash BiAttack Zombie
Skeletor   55 12 16 11 18 12 16 19 Sap       BirdBlow  BiAttack Zombie
Servant    70 20 23 21 25 18 15 20 Blaze     Icebolt   Focus Zombie
Lazamanus  75 26 24 20 30 20 12 14 TakeMagic K.O. Dance LifeDance Zombie
Copycat    40  1 11 20  1  2 21  5 Transform OddDance  Imitate Zombie
MadSpirit  50 13 14 12 15 12 16 10 SleepAir  Radiant   ThickFog Zombie
PomPomBom  40  8  5 21 13 11 14 21 Beat      ThickFog  LifeDance Zombie
Niterich   65 20 27 13 24 23 19 21 Beat      ThickFog  BladeD Zombie
JewelBag   40 12 13 11  9 18 17 15 Firebal   StopSpell PanicAll Material
EvilWand   50 14 14 15 17 12  9 13 Dechaos   FrigidAir MapMagic Material
MadCandle  35 10 12 10 14  6 17 12 Blaze     PsycheUp  Whistle Material
CoilBird   35 10 16 13  5 14 14  7 Dechaos   NumbOff   SealAll Material
Facer      45 12  8 23 11 12  3 19 Infernos  Sacrifice LifeSong Material
SpikyBoy   30  8  9 13 14 17  7 11 Sacrifice SlimeBlow HighJump Material
MadMirror  45 14 15 11  8  6 11 19 MagicBack Transform Outside Material
RogueNite  45 12 14  4 20 21 10 13 Heal      MetalCut  EvilSlash Material
Puppetor   35  6 13  9  7  4  7 11 OddDance  CureDance Pheromone Material
Goopi      40  8  8 13 11 14  7  4 CallHelp  LegSweep  Dodge Material
Voodoll    35 11 14 17 12 12  8 14 Sap       Surround  PanicAll Material
MetalDrak  45 15 18 13 20 23  9 10 FireAir   Massacre  SandStorm Material
Balzak     35 13 21 11 23 21 18 19 Bang      Bolt      MultiCut Material
SabreMan   30 11  8  3  9 11 12  6 RobMagic  DevilCut  Paralyze Material
CurseLamp  45  9 12 18  9 19 13 15 Upper     Speed     TwinHits Material
Brushead   30  8  7  6 14  4  4  3 OddDance  SandStorm LoveRain Material
Roboster   40 13 12  5 21 22 24 17 SquallHit BiAttack  RainSlash Material
Roboster2  45 22 23 13 24 26 22 12 BoltSlash MetalCut  GigaSlash Material
EvilPot    40 11 18 19 15 18  9 19 Beat      Massacre  Outside Material
Gismo      40  9 13 15 11 14 20 18 FireAir   FrigidAir SuckAir Material
LavaMan    45 13 18 12 17 24  4  7 Blaze     FireAir   Cover Material
IceMan     45 13 16  6 18 24  4  7 Icebolt   FrigidAir StrongD Material
Mimic      40 11 25 10 20 12  1 20 Blaze     Beat      EagleEye Material
Exaucers   45 11 20 13 15  6  7  4 TakeMagic WindBeast PaniDance Material
MudDoll    40  8 12  3 13 14  1 15 OddDance  Hustle    SideStep Material
Golem      45 18 17  4 12 21  4  6 ChargeUp  PsycheUp  Meditate Material
StoneMan   50 15 24 10 23 24  1 14 StrongD   Cover     SealAll Material
BombCrag   50 14 15 11 17 20  0 13 Sacrifice Farewell  RockThrow Material
GoldGolem  75 18 24 21 24 27 17 23 BigBang   Surge     TatsuCall Material
DarkMate   70 24 24 21 12 25 21 10 Beat      HellBlast EerieLite Material
ProtoMech  40  5  3  2  6  3  4  6 SlimeBlow ChargeUp  Ramming Material
CloudKing  45  8  8 24 14 16 11 26 Infernos  Barrier   Surge Material
Petiteel   35  3 15 17 12  9 14 10 Speed     TwinHits  Ramming Water
Moray      40  5 12 17 18 19 22  9 Sleep     PsycheUp  PoisonGas Water
WalrusMan  40 13 23  8 23 16  7  8 BugBlow   EvilSlash Massacre Water
RayGigas   40 10 22  9 24 19  9  7 Firebal   MouthShut AquaWall Water
Anemon     40  4  9 14 10 13  5  7 Firebal   Paralyze  PoisonGas Water
Aquarella  45  6 11  8 17 14  6  4 Barrier   SquallHit Geyser Water
Merman     35  9 16 17 14 18 20 19 Vivify    Sap       SleepAir Water
Octokid    35 10  7 15  7 13 17 21 Heal      Mpass     CureDance Water
PutreFish  35  4  5  4  8  3 14  7 PanicAll  Watershot Ramming Water
Octoreach  40 14 23 21 24 20  8 14 OddDance  PaniDance Geyser Water
Angleron   45 12 17 16 23 20  9 19 Bolt      Surround  SleepAir Water
FishRider  50 13 18 19 16 22 13  7 BoltSlash RainSlash Dodge Water
RushFish   40  8  9  6 12  7 18  6 Upper     Kamikaze  SandStorm Water
Gamanian   40 14 11 10 21 17 22 15 Firebal   NapAttack LushLicks Water
Clawster   45 11 12 20 24 18 20 14 DrakSlash MetalCut  BiAttack Water
CancerMan  45 15 23 13 24 21 14  9 BoltSlash BeastCut  RainSlash Water
RogueWave  40  9 11  7 18  9 24 19 Watershot PoisonGas AquaWall Water
Scallopa   35 10 17 19  9 23  7 19 Upper     MagicWall Radiant Water
SeaHorse   40 12 21  9 17 14 15  8 FrigidAir Geyser    BladeD Water
HoodSquid  45 17 11 21 16 10 14 19 CallHelp  BiAttack  CureDance Water
MerTiger   50 16 23  5 26 24 10 13 Icebolt   Sleep     WarCry Water
AxeShark   50 25 25 20 28 21 14 13 Sap       RainSlash Cover Water
Octogon    45 19 24  9 25 18  9 20 Mpass     BiAttack  Hustle Water
KingSquid  55 24 25 14 26 23 12 21 Vivify    RainSlash PsycheUp Water
Digong     55 21 18 23 25 11 10 10 FireAir   Ramming   PoisonGas Water
WhaleMage  45 30 29 21 23 18  3 10 Antidote  Watershot Geyser Water
Aquadon    50 24 24 20 26 10 17  9 RobMagic  WindBeast Beserker Water
Octoraid   50 26 18  9 27 21 21 13 DrakSlash SquallHit GigaSlash Water
Grakos     55 21 23 18 25 18 16 10 TwinHits  HighJump  SandStorm Water
Poseidon   65 30 28 22 23 24 13  9 Bolt      Focus     Dodge Water
Pumpoise   35 12 17  8 13 22  7  8 CallHelp  SuckAir   Dodge Water
Starfish   30  5  7 19  5  9  9 15 Upper     PoisonHit OddDance Water
DracoLord  50 24 20 30 21 20 23 23 Firebal   BeDragon  Meditate Boss
DracoLord2 70 25 21 30 24 21 23 21 FireAir   Massacre  Surge Boss
LordDraco  80 27 22 31 24 22 24 22 Bolt      HellBlast Focus Boss
Hargon     60 24 19 30 20 21 23 23 Firebal   Bang      TatsuCall Boss
Sidoh      70 25 24 30 24 21 23 23 HellBlast FireAir   FrigidAir Boss
Genosidoh  80 30 25 31 25 17 18 22 Barrier   WindBeast MultiCut Boss
Baramos    60 24 20 30 20 20 22 21 Bang      HellBlast RockThrow Boss
Zoma       70 25 24 30 26 21 23 23 BigBang   FrigidAir DeMagic Boss
AsuraZoma  80 29 26 30 29 22 23 12 FireAir   GigaSlash Focus Boss
Pizzaro    70 24 21 30 26 21 23 23 HellBlast FireAir   BiAttack Boss
PsychoPiz  80 29 30 30 27 18 24 21 BigBang   FrigidAir DeMagic Boss
Esterk     80 31 29 30 26 24 23 23 BiAttack  RainSlash GigaSlash Boss
Mirudraas  70 30 21 30 26 21 23 23 Blaze     Bang      Bolt Boss
Mirudraas2 80 31 29 30 26 21 23 23 FireAir   DeMagic   SuckAir Boss
Mudou      60 28 21 30 26 24 23 23 FireAir   FrigidAir PoisonGas Boss
DeathMore  60 27 21 30 26 21 23 23 BigBang   HellBlast TatsuCall Boss
DeathMore2 70 29 24 30 26 21 23 23 FireAir   Ramming   UltraDown Boss
DeathMore3 80 31 29 30 30 24 23 23 BigBang   DeMagic   Focus Boss
Darkdrium  80 30 31 30 31 24 23 23 Bolt      FireAir   FrigidAir Boss
Orgodemir  65 30 24 25 26 23 22 31 Bang      EvilSlash Focus Boss
Orgodemir2 70 31 27 31 30 23 24 31 MegaMagic DeMagic   LifeSong Boss
Darck      60 26 23 25 18 23 14 17 Firebal   Bang      ChargeUp Boss
`;

function parseMonsterTable(monsterTable) {
  const rows = monsterTable.trim().split('\n');  // Split by new lines
  const monsters = [];

  rows.forEach(row => {
    // Split by spaces (adjust if your delimiter is different)
    const cleanedRow = row.split(/\s+/).map(item => item.trim());

    // Create a monster object with keys
    const monster = {
      name: cleanedRow[0],
      ML: parseInt(cleanedRow[1], 10),
      EP: parseInt(cleanedRow[2], 10),
      HP: parseInt(cleanedRow[3], 10),
      MP: parseInt(cleanedRow[4], 10),
      AT: parseInt(cleanedRow[5], 10),
      DF: parseInt(cleanedRow[6], 10),
      AG: parseInt(cleanedRow[7], 10),
      IN: parseInt(cleanedRow[8], 10),
      skills: [cleanedRow[9], cleanedRow[10], cleanedRow[11]],
      family: cleanedRow[12]
    };

    monsters.push(monster);
  });

  return monsters;
}

// Convert the monster data to JSON
const monsterData = parseMonsterTable(monsterTable);

// Log the result to the browser's console
console.log(JSON.stringify(monsterData, null, 2));