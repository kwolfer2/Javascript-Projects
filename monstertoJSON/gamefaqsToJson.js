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
//console.log(JSON.stringify(monsterData, null, 2));

const tableData = `
0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
1	2	5	8	2	5	8	3	3	3	3	3	2	6	5	5	5	6	5	8	8	8	8	8	8	5	8	15	5	8	15	15
2	3	8	14	3	8	14	5	5	4	5	4	3	10	8	8	8	10	8	14	14	14	14	14	14	8	14	28	8	14	28	28
2	6	11	23	6	11	23	8	9	8	9	8	6	14	11	11	11	14	11	23	23	23	23	23	23	11	23	48	11	23	48	48
3	6	14	28	6	14	28	9	9	10	14	8	7	17	14	14	14	17	14	28	28	28	28	28	28	14	28	59	14	28	59	59
4	8	18	35	8	18	35	12	12	12	17	11	9	22	19	18	18	23	18	35	35	35	35	35	35	19	35	76	19	35	76	76
5	10	23	45	10	23	45	15	15	15	20	13	11	28	24	23	23	29	23	45	45	45	45	45	45	24	45	94	24	45	94	94
5	11	27	55	11	27	55	17	17	15	21	15	11	33	28	27	27	34	27	55	55	55	55	55	55	28	55	113	28	55	113	113
5	14	32	63	14	32	63	21	21	19	26	19	14	39	33	32	32	40	32	63	63	63	63	63	63	33	63	128	33	63	128	128
6	17	36	72	17	36	72	26	26	23	30	23	16	44	37	36	36	45	36	72	72	72	72	72	72	37	72	138	37	72	138	138
6	20	39	77	20	39	77	30	30	26	30	26	19	47	40	39	39	48	39	77	77	77	77	77	77	40	77	150	40	77	150	150
7	22	44	82	22	44	82	33	33	29	33	29	21	53	44	44	44	53	44	82	82	82	82	82	82	44	82	165	44	82	165	165
7	25	48	90	25	48	90	38	38	33	38	33	24	58	48	48	48	58	48	90	90	90	90	90	90	48	90	181	48	90	181	181
7	26	52	96	26	52	96	39	39	34	39	34	25	63	51	52	52	62	52	96	96	96	96	96	96	51	96	195	51	96	195	195
8	27	57	105	27	57	105	41	41	36	41	36	27	69	56	57	57	68	57	105	105	105	105	105	105	56	105	205	56	105	205	205
8	30	60	113	30	60	113	45	45	39	45	39	30	72	60	60	60	72	60	113	113	113	113	113	113	60	113	225	60	113	225	225
9	32	62	115	35	62	118	48	53	52	48	46	40	75	65	70	62	78	70	115	118	123	115	118	123	65	118	230	70	123	235	240
9	35	65	118	38	65	121	53	57	63	53	50	48	78	68	78	65	82	78	118	121	131	118	121	131	68	121	233	78	131	243	253
9	37	67	120	41	67	124	56	62	73	56	54	56	81	71	86	67	86	86	120	124	139	120	124	139	71	124	236	86	139	251	266
9	38	68	121	44	68	127	57	66	80	57	58	61	82	74	91	68	89	91	121	127	144	121	127	144	74	127	239	91	144	256	283
10	38	68	121	48	68	131	57	72	88	57	63	67	82	78	97	68	94	97	128	131	150	121	131	150	78	131	242	97	150	261	300
11	40	70	123	53	70	136	60	80	98	60	69	75	84	83	105	70	100	105	134	136	158	123	136	158	83	136	247	105	158	268	320
11	43	73	126	57	73	140	65	86	110	65	75	84	88	87	114	73	105	114	140	140	167	126	140	167	87	140	252	114	168	277	340
12	46	76	129	62	76	145	69	93	121	69	81	93	92	92	123	76	111	123	142	145	176	129	145	176	92	145	257	123	176	285	352
12	47	77	130	66	77	149	71	99	128	71	86	98	93	96	128	77	116	128	148	149	181	130	149	181	96	149	261	128	181	290	364
12	49	79	132	69	79	152	74	104	134	74	90	103	95	99	133	79	119	133	155	152	186	132	152	186	99	152	264	133	186	295	377
13	49	79	132	74	79	157	74	111	145	74	97	111	95	104	141	79	125	141	161	157	194	132	157	194	104	157	269	141	194	301	390
14	52	82	135	78	82	161	78	117	155	78	102	119	99	108	149	82	130	149	167	161	202	135	161	202	108	160	273	149	203	309	404
14	55	85	138	82	85	165	83	123	167	83	107	128	102	112	158	85	135	158	173	165	211	138	165	211	112	164	277	158	212	318	420
14	58	88	141	87	88	170	87	131	176	87	114	135	106	117	165	88	141	165	175	170	218	141	170	218	117	169	282	165	218	328	439
15	60	90	143	90	90	173	90	135	185	90	117	142	108	120	172	90	144	172	180	173	225	143	173	225	120	173	285	172	225	335	450
16	62	92	145	93	92	176	93	140	195	93	121	150	111	123	180	92	148	180	183	176	233	145	176	233	123	176	288	180	233	343	468
17	64	94	147	96	94	179	96	144	202	96	125	155	113	126	185	94	152	185	186	179	238	147	179	238	126	179	291	185	238	348	481
17	66	96	149	100	96	183	99	150	215	99	130	165	116	130	195	96	156	195	189	183	248	149	183	248	130	183	295	195	248	358	497
17	68	98	151	104	98	187	102	156	227	102	136	174	118	134	204	98	161	204	191	187	257	151	187	257	134	187	299	204	257	367	512
17	71	101	154	109	101	192	107	165	236	112	146	183	127	144	213	107	170	214	194	197	265	158	196	266	146	200	309	218	270	374	527
17	72	102	155	114	102	197	108	174	246	122	156	192	136	154	222	116	179	224	197	207	273	165	205	275	158	213	319	232	284	382	543
18	73	103	156	119	103	202	110	184	254	135	169	202	145	164	231	125	188	234	200	217	281	172	214	284	170	226	329	246	298	388	557
19	75	105	158	122	105	205	113	193	262	146	180	212	154	174	240	134	197	244	203	227	289	181	223	293	182	239	339	260	312	394	568
20	78	108	161	126	108	209	117	203	273	156	190	222	162	184	249	143	206	254	206	237	297	190	232	302	194	252	349	274	326	403	587
20	80	110	163	130	110	213	120	212	284	168	199	232	170	195	258	152	216	264	211	247	305	199	241	311	206	265	359	288	340	411	602
21	83	111	164	133	113	214	128	222	290	178	208	242	178	206	267	161	226	274	216	257	313	208	249	320	218	278	370	302	354	431	612
21	86	111	164	136	116	214	132	231	294	188	217	251	186	216	276	170	236	284	221	267	321	217	257	329	230	293	381	317	368	444	623
22	87	112	165	137	117	215	138	240	299	198	226	260	194	226	285	179	245	294	226	277	329	224	265	338	243	306	391	332	382	461	635
23	89	113	166	139	119	216	144	249	305	209	237	269	202	236	294	186	254	304	229	289	337	229	274	347	255	319	401	346	396	477	648
23	90	113	166	140	120	216	150	258	310	222	247	279	209	243	301	196	265	313	239	298	345	239	283	355	269	333	415	360	410	491	663
23	92	113	166	142	122	216	155	267	314	235	257	289	216	250	308	206	276	322	247	307	351	249	292	363	283	347	429	374	428	508	680
24	94	114	167	144	124	217	159	276	318	248	268	299	224	257	315	216	287	331	255	313	357	259	301	371	297	361	443	388	444	524	698
24	96	114	167	146	126	217	167	286	324	261	279	309	232	264	322	226	298	340	263	319	363	269	310	377	311	375	457	402	454	534	717
25	98	115	168	148	128	218	174	295	331	274	290	319	240	271	329	236	309	349	271	325	369	279	319	383	325	387	473	416	466	546	737
25	100	115	168	150	130	219	182	304	337	287	302	329	248	279	337	248	320	360	281	332	375	289	329	389	339	399	489	430	486	560	751
26	103	116	169	153	133	219	186	314	342	301	314	339	257	287	344	260	331	371	291	339	381	299	339	395	353	411	505	444	501	574	765
27	103	117	170	153	133	220	191	324	349	315	326	348	266	295	351	272	343	382	299	346	387	309	349	403	367	423	521	457	509	589	780
27	106	117	170	156	136	220	195	334	354	329	339	357	275	303	358	283	355	393	307	353	395	320	359	411	381	435	537	470	517	606	797
28	106	118	171	156	136	221	201	344	358	343	352	366	284	311	366	294	367	404	311	360	403	331	369	419	395	447	553	483	525	626	817
29	108	119	172	158	138	222	209	353	364	357	365	375	293	319	374	305	379	413	315	367	411	342	379	427	409	461	569	496	533	638	829
30	110	120	173	160	140	223	215	363	370	371	375	384	301	327	382	316	391	422	319	373	419	353	389	435	423	475	586	509	545	651	842
30	111	120	173	161	141	223	222	372	375	385	385	394	309	335	390	327	402	431	327	379	427	364	399	443	436	489	603	522	565	662	853
30	114	120	173	164	144	223	228	382	381	399	396	404	317	343	398	339	413	440	335	385	435	374	409	453	449	500	618	535	584	673	864
31	117	121	174	167	147	224	233	392	385	412	407	414	326	350	406	351	424	449	341	391	441	384	419	462	462	512	632	547	602	693	881
31	120	121	174	170	150	224	240	398	389	418	418	423	331	355	410	357	434	458	345	394	446	390	428	470	476	526	646	561	608	710	897
32	122	122	175	172	152	225	246	404	393	424	429	432	336	360	414	363	444	467	349	397	451	396	437	478	490	540	660	575	622	720	912
32	125	122	175	175	155	225	252	410	398	430	440	441	341	365	418	369	454	476	353	400	456	402	446	486	504	554	674	589	632	732	923
32	126	122	175	176	156	225	260	416	403	436	451	451	346	370	422	375	464	485	357	403	461	408	455	494	518	568	688	603	644	750	942
33	127	123	176	177	157	226	264	422	410	442	463	461	351	375	426	381	476	494	361	406	466	414	464	504	532	582	702	617	662	769	960
33	130	123	176	180	160	226	269	428	416	448	475	471	356	380	430	387	488	503	365	409	471	423	473	514	546	596	716	631	681	785	973
34	132	124	177	182	162	227	273	434	423	454	487	481	361	386	435	394	500	512	369	412	477	432	482	524	560	610	732	644	697	805	987
34	135	124	177	185	165	227	279	441	427	460	499	491	365	392	439	401	512	521	373	415	483	441	491	534	574	624	748	657	717	819	997
35	137	125	178	187	167	228	285	447	432	466	512	501	370	398	444	408	523	530	377	418	489	450	500	542	588	638	764	671	731	833	999
35	138	125	178	188	168	228	293	453	439	473	525	511	375	404	448	415	534	539	382	421	495	459	509	550	603	652	780	685	745	848	999
35	138	125	178	188	168	228	300	459	445	480	538	521	380	410	452	422	544	548	387	424	501	467	518	560	618	666	796	699	759	863	999
36	140	126	179	190	170	228	308	465	452	487	551	532	385	416	456	428	554	557	391	427	507	475	527	570	633	680	810	713	773	875	999
36	143	126	179	193	173	229	312	472	455	494	563	541	390	422	460	434	564	566	395	429	513	483	536	580	648	695	824	728	788	885	999
37	146	127	180	196	176	230	318	478	461	501	575	550	395	427	464	440	573	575	399	431	518	491	545	588	663	709	838	743	805	901	999
37	147	127	180	197	177	230	324	484	466	508	587	559	400	432	468	446	582	584	403	433	523	499	554	597	677	723	852	758	826	918	999
37	149	127	180	199	179	230	332	489	472	518	591	561	404	435	470	451	584	587	406	435	524	502	558	601	691	737	866	772	838	934	999
38	149	128	181	199	179	231	336	493	476	528	595	563	410	438	472	456	586	590	409	437	525	505	562	605	705	751	880	786	851	950	999
39	152	129	182	202	182	232	341	498	480	538	599	565	416	441	474	461	588	593	412	439	526	508	566	609	721	765	894	800	862	963	999
39	155	129	182	205	184	232	345	502	484	549	603	567	420	444	476	466	590	596	415	441	527	511	570	613	737	779	908	814	873	980	999
39	158	130	182	208	187	233	350	507	489	560	607	569	424	447	478	471	592	599	418	443	528	514	574	619	753	793	922	828	890	999	999
40	160	130	183	210	189	233	350	512	496	571	611	571	428	451	481	476	594	602	421	445	529	517	578	625	769	807	936	844	906	999	999
41	162	131	184	212	191	234	350	516	500	582	615	573	433	455	484	481	596	605	422	447	530	520	582	631	785	821	950	860	921	999	999
42	164	131	185	214	194	234	350	520	504	593	619	575	438	459	487	487	598	608	423	449	531	524	586	637	801	837	964	876	932	999	999
42	166	132	185	216	196	235	350	524	507	604	623	577	443	463	490	493	600	611	424	451	532	528	590	643	816	853	978	892	951	999	999
42	168	132	185	218	198	235	350	528	511	616	628	579	448	467	493	499	600	614	425	453	535	532	594	649	831	869	993	908	969	999	999
42	171	133	185	221	201	236	350	532	518	628	633	581	453	471	497	505	600	617	428	455	536	536	598	653	845	885	999	924	982	999	999
42	172	133	185	222	202	236	350	536	523	640	638	583	458	475	499	511	600	620	431	457	537	540	602	657	859	901	999	940	996	999	999
43	173	134	186	222	202	237	350	540	528	652	642	585	460	480	501	517	600	622	434	459	538	544	606	661	873	917	999	954	999	999	999
44	175	134	187	224	204	237	350	544	535	662	646	587	464	485	503	523	600	624	437	460	539	547	610	665	887	933	999	968	999	999	999
45	178	135	188	227	207	238	350	548	539	672	650	589	468	489	505	528	600	626	440	460	540	551	614	669	898	947	999	982	999	999	999
45	180	135	188	229	209	238	350	552	545	683	659	598	473	493	509	531	600	632	445	464	544	557	622	677	914	964	999	999	999	999	999
46	183	136	189	232	212	239	350	555	550	694	668	607	478	497	513	534	600	638	450	468	548	563	630	685	929	974	999	999	999	999	999
46	186	136	189	235	215	239	350	559	556	705	677	616	483	501	517	537	600	644	455	472	552	572	638	693	940	986	999	999	999	999	999
47	187	137	190	236	216	240	350	563	561	716	687	624	488	505	521	540	600	650	460	476	556	579	644	701	959	999	999	999	999	999	999
48	189	138	191	238	218	241	350	566	565	728	697	632	492	509	524	544	600	656	465	480	560	587	650	709	977	999	999	999	999	999	999
48	190	138	191	239	219	241	350	570	569	740	707	640	495	513	528	547	600	663	470	485	563	595	658	716	990	999	999	999	999	999	999
48	192	138	191	241	221	241	350	574	572	752	718	649	499	517	532	550	600	670	475	492	567	603	666	723	999	999	999	999	999	999	999
48	194	138	191	243	223	241	350	578	578	764	729	658	504	521	536	553	600	677	480	502	571	611	674	730	999	999	999	999	999	999	999
49	196	139	192	246	226	242	350	582	584	774	740	667	510	524	540	556	600	684	485	515	575	619	682	737	999	999	999	999	999	999	999
`

// Convert the table to an array of rows first
const rows = tableData.trim().split("\n").map(row => row.trim().split(/\s+/).map(Number));

// Transpose rows into columns
const columns = rows[0].map((_, colIndex) => rows.map(row => row[colIndex]));

console.log(JSON.stringify(columns, null, 2));