
/*Units Converter */
/* original code by @Jacob Banner : https://codepen.io/jacobbanner/pen/oxeoqp 
 * Modified and extended by youmna 
 */


//
// --- JAVASCRIPT UNIT CONVERTER

// If you study this file, you'll see that all the important data (namely, unit names and conversion factors) are explicitly defined as JavaScript arrays under the "Global Variable & Data Definitions" heading (which should be right under these comments).

// This is done, because: a) I figured it's the fastest way to do it, and b) it keeps everything in one file, making local storage and usage a snap.

// If you wanna mess with these array definitions, keep in mind the following (better study the definitions first before you read this; otherwise skip it altogether):

// 1) The unit[i][j] and factor[i][j] arrays should have the same j-length and their elements should correspond to each other in the j dimension; i.e. unit[0][2] should define the name and factor[0][2] the conversion factor of the SAME unit.  Duh!...

// 2) In every property (i.e. the i-dimension of the unit and factor arrays) there should be defined a 'primary' or 'base' unit, i.e. one with a conversion factor of 1.  The definitions of the other (secondary) units should use this formula:

// 1 [Secondary unit] = [Secondary unit conversion factor] [Primary Unit]
//                                   ^
//  This goes in the factor array ___|
//
//  e.g.: 1 ft = 0.3048 m

// ====================================
//  Global Variable & Data Definitions
// ====================================
var property = new Array();
var unit = new Array();
var factor = new Array();

property[0] = "Acceleration";
unit[0] = new Array("Meter/sq.sec (m/sec^2)", "Foot/sq.sec (ft/sec^2)", "G (g)", "Galileo (gal)", "Inch/sq.sec (in/sec^2)");
factor[0] = new Array(1, .3048, 9.806650, .01, 2.54E-02);

property[1] = "Area";
unit[1] = new Array("Square meter (m^2)", "Acre (acre)", "Are", "Barn (barn)", "Hectare", "Rood", "Square centimeter", "Square kilometer", "Circular mil", "Square foot (ft^2)", "Square inch (in^2)", "Square mile (mi^2)", "Square yard (yd^2)");
factor[1] = new Array(1, 4046.856, 100, 1E-28, 10000, 1011.71413184285, .0001, 1000000, 5.067075E-10, 9.290304E-02, 6.4516E-04, 2589988, .8361274);

property[2] = "Torque";
unit[2] = new Array("Newton-meter (N m)", "Dyne-centimeter(dy cm)", "Kgrf-meter (kgf m)", "lbf-inch (lbf in)", "lbf-foot (lbf ft)");
factor[2] = new Array(1, .0000001, 9.806650, .1129848, 1.355818);

property[3] = "Electricity";
unit[3] = new Array("Coulomb (Cb)", "Abcoulomb", "Ampere hour (A hr)", "Faraday (F)", "Statcoulomb", "Millifaraday (mF)", "Microfaraday (mu-F)", "Picofaraday (pF)");
factor[3] = new Array(1, 10, 3600, 96521.8999999997, .000000000333564, 96.5219, 9.65219E-02, 9.65219E-05);

property[4] = "Energy";
unit[4] = new Array("Joule (J)", "BTU (mean)", "BTU (thermochemical)", "Calorie (SI) (cal)", "Calorie (mean)(cal)", "Calorie (thermo)", "Electron volt (eV)", "Erg (erg)", "Foot-pound force", "Foot-poundal", "Horsepower-hour", "Kilocalorie (SI)(kcal)", "Kilocalorie (mean)(kcal)", "Kilowatt-hour (kW hr)", "Ton of TNT", "Volt-coulomb (V Cb)", "Watt-hour (W hr)", "Watt-second (W sec)");
factor[4] = new Array(1, 1055.87, 1054.35, 4.1868, 4.19002, 4.184, 1.6021E-19, .0000001, 1.355818, 4.214011E-02, 2684077.3, 4186.8, 4190.02, 3600000, 4.2E9, 1, 3600, 1);

property[5] = "Force";
unit[5] = new Array("Newton (N)", "Dyne (dy)", "Kilogram force (kgf)", "Kilopond force (kpf)", "Kip (k)", "Ounce force (ozf)", "Pound force (lbf)", "Poundal");
factor[5] = new Array(1, .00001, 9.806650, 9.806650, 4448.222, .2780139, .4535924, .138255);

property[6] = "Force / Length";
unit[6] = new Array("Newton/meter (N/m)", "Pound force/inch (lbf/in)", "Pound force/foot (lbf/ft)");
factor[6] = new Array(1, 175.1268, 14.5939);

property[7] = "Length";
unit[7] = new Array("Meter (m)", "Angstrom (A')", "Astronomical unit (AU)", "Caliber (cal)", "Centimeter (cm)", "Kilometer (km)", "Ell", "Em", "Fathom", "Furlong", "Fermi (fm)", "Foot (ft)", "Inch (in)", "League (int'l)", "League (UK)", "Light year (LY)", "Micrometer (mu-m)", "Mil", "Millimeter (mm)", "Nanometer (nm)", "Mile (int'l nautical)", "Mile (UK nautical)", "Mile (US nautical)", "Mile (US statute)", "Parsec", "Pica (printer)", "Picometer (pm)", "Point (pt)", "Rod", "Yard (yd)");
factor[7] = new Array(1, 1E-10, 1.49598E11, .000254, .01, 1000, 1.143, 4.2323E-03, 1.8288, 201.168, 1E-15, .3048, .0254, 5556, 5556, 9.46055E+15, .000001, .0000254, .001, 1E-9, 1852, 1853.184, 1852, 1609.344, 3.08374E+16, 4.217518E-03, 1E-12, .0003514598, 5.0292, .9144);

property[8] = "Light";
unit[8] = new Array("Lumen/sq.meter (Lu/m^2)", "Lumen/sq.centimeter", "Lumen/sq.foot", "Foot-candle (ft-cdl)", "Foot-lambert", "Candela/sq.meter", "Candela/sq.centimeter", "Lux (lux)", "Phot");
factor[8] = new Array(1, 10000, 10.76391, 10.76391, 10.76391, 3.14159250538575, 31415.9250538576, 1, 10000);

property[9] = "Mass";
unit[9] = new Array("Kilogram (kgr)", "Gram (gr)", "Milligram (mgr)", "Microgram (mu-gr)", "Carat (metric)(ct)", "Hundredweight (long)", "Hundredweight (short)", "Pound mass (lbm)", "Pound mass (troy)", "Ounce mass (ozm)", "Ounce mass (troy)", "Slug", "Ton (assay)", "Ton (long)", "Ton (short)", "Ton (metric)", "Tonne");
factor[9] = new Array(1, .001, 1e-6, .000000001, .0002, 50.80235, 45.35924, .4535924, .3732417, .02834952, .03110348, 14.5939, .02916667, 1016.047, 907.1847, 1000, 1000);

property[10] = "Mass Flow";
unit[10] = new Array("Kilogram/second (kgr/sec)", "Pound mass/sec (lbm/sec)", "Pound mass/min (lbm/min)");
factor[10] = new Array(1, .4535924, .007559873);

property[11] = "Density & Mass capacity";
unit[11] = new Array("Kilogram/cub.meter", "Grain/galon", "Grams/cm^3 (gr/cc)", "Pound mass/cubic foot", "Pound mass/cubic-inch", "Ounces/gallon (UK,liq)", "Ounces/gallon (US,liq)", "Ounces (mass)/inch", "Pound mass/gal (UK,liq)", "Pound mass/gal (US,liq)", "Slug/cubic foot", "Tons (long,mass)/cub.yard");
factor[11] = new Array(1, .01711806, 1000, 16.01846, 27679.91, 6.236027, 7.489152, 1729.994, 99.77644, 119.8264, 515.379, 1328.939);

property[12] = "Power";
unit[12] = new Array("Watt (W)", "Kilowatt (kW)", "Megawatt (MW)", "Milliwatt (mW)", "BTU (SI)/hour", "BTU (thermo)/second", "BTU (thermo)/minute", "BTU (thermo)/hour", "Calorie (thermo)/second", "Calorie (thermo)/minute", "Erg/second", "Foot-pound force/hour", "Foot-pound force/minute", "Foot-pound force/second", "Horsepower(550 ft lbf/s)", "Horsepower (electric)", "Horsepower (boiler)", "Horsepower (metric)", "Horsepower (UK)", "Kilocalorie (thermo)/min", "Kilocalorie (thermo)/sec");
factor[12] = new Array(1, 1000, 1000000, .001, .2930667, 1054.35, 17.5725, .2928751, 4.184, 6.973333E-02, .0000001, .0003766161, .02259697, 1.355818, 745.7, 746, 9809.5, 735.499, 745.7, 69.7333, 4184);

property[13] = "Pressure & Stress";
unit[13] = new Array("Newton/sq.meter", "Atmosphere (normal)", "Atmosphere (techinical)", "Bar", "Centimeter mercury(cmHg)", "Centimeter water (4'C)", "Decibar", "Kgr force/sq.centimeter", "Kgr force/sq.meter", "Kip/square inch", "Millibar", "Millimeter mercury(mmHg)", "Pascal (Pa)", "Kilopascal (kPa)", "Megapascal (Mpa)", "Poundal/sq.foot", "Pound-force/sq.foot", "Pound-force/sq.inch (psi)", "Torr (mmHg,0'C)");
factor[13] = new Array(1, 101325, 98066.5, 100000, 1333.22, 98.0638, 10000, 98066.5, 9.80665, 6894757, 100, 133.3224, 1, 1000, 1000000, 47.88026, 47.88026, 6894.757, 133.322);

// !!! Caution: Temperature requires an increment as well as a multiplying factor
// !!! and that's why it's handled differently
// !!! Be VERY careful in how you change this behavior
property[14] = "Temperature";
unit[14] = new Array("Degrees Celsius ('C)", "Degrees Fahrenheit ('F)", "Degrees Kelvin ('K)", "Degrees Rankine ('R)");
factor[14] = new Array(1, 0.555555555555, 1, 0.555555555555);
tempIncrement = new Array(0, -32, -273.15, -491.67);

property[15] = "Time";
unit[15] = new Array("Second (sec)", "Day (mean solar)", "Day (sidereal)", "Hour (mean solar)", "Hour (sidereal)", "Minute (mean solar)", "Minute (sidereal)", "Month (mean calendar)", "Second (sidereal)", "Year (calendar)", "Year (tropical)", "Year (sidereal)");
factor[15] = new Array(1, 8.640E4, 86164.09, 3600, 3590.17, 60, 60, 2628000, .9972696, 31536000, 31556930, 31558150);

property[16] = "Velocity & Speed";
unit[16] = new Array("Meter/second (m/sec)", "Foot/minute (ft/min)", "Foot/second (ft/sec)", "Kilometer/hour (kph)", "Knot (int'l)", "Mile (US)/hour (mph)", "Mile (nautical)/hour", "Mile (US)/minute", "Mile (US)/second", "Speed of light (c)", "Mach (STP)(a)");
factor[16] = new Array(1, 5.08E-03, .3048, .2777778, .5144444, .44707, .514444, 26.8224, 1609.344, 299792458, 340.0068750);

property[17] = "Viscosity";
unit[17] = new Array("Newton-second/meter", "Centipoise", "Centistoke", "Sq.foot/second", "Poise", "Poundal-second/sq.foot", "Pound mass/foot-second", "Pound force-second/sq.foot", "Rhe", "Slug/foot-second", "Stoke");
factor[17] = new Array(1, .001, .000001, 9.290304E-02, .1, 1.488164, 1.488164, 47.88026, 10, 47.88026, .0001);

property[18] = "Volume & Capacity";
unit[18] = new Array("Cubic Meter (m^3)", "Cubic centimeter", "Cubic millimeter", "Acre-foot", "Barrel (oil)", "Board foot", "Bushel (US)", "Cup", "Fluid ounce (US)", "Cubic foot", "Gallon (UK)", "Gallon (US,dry)", "Gallon (US,liq)", "Gill (UK)", "Gill (US)", "Cubic inch (in^3)", "Liter (new)", "Liter (old)", "Ounce (UK,fluid)", "Ounce (US,fluid)", "Peck (US)", "Pint (US,dry)", "Pint (US,liq)", "Quart (US,dry)", "Quart (US,liq)", "Stere", "Tablespoon", "Teaspoon", "Ton (register)", "Cubic yard");
factor[18] = new Array(1, .000001, .000000001, 1233.482, .1589873, .002359737, .03523907, .0002365882, .00002957353, .02831685, .004546087, .004404884, .003785412, .0001420652, .0001182941, .00001638706, .001, .001000028, .00002841305, .00002957353, 8.8097680E-03, .0005506105, 4.7317650E-04, .001101221, 9.46353E-04, 1, .00001478676, .000004928922, 2.831685, .7645549);

property[19] = "Volume Flow";
unit[19] = new Array("Cubic meter/second", "Cubic foot/second", "Cubic foot/minute", "Cubic inches/minute", "Gallons (US,liq)/minute)");
factor[19] = new Array(1, .02831685, .0004719474, 2.731177E-7, 6.309020E-05);

// ===========
//  Functions
// ===========

function UpdateUnitMenu(propMenu, unitMenu) {
  // Updates the units displayed in the unitMenu according to the selection of property in the propMenu.
  var i;
  i = propMenu.selectedIndex;
  FillMenuWithArray(unitMenu, unit[i]);
}

function FillMenuWithArray(myMenu, myArray) {
  // Fills the options of myMenu with the elements of myArray.
  // !CAUTION!: It replaces the elements, so old ones will be deleted.
  var i;
  myMenu.length = myArray.length;
  for (i = 0; i < myArray.length; i++) {
    myMenu.options[i].text = myArray[i];
  }
}

function CalculateUnit(sourceForm, targetForm) {
  // A simple wrapper function to validate input before making the conversion
  var sourceValue = sourceForm.unit_input.value;

  // First check if the user has given numbers or anything that can be made to one...
  sourceValue = parseFloat(sourceValue);
  if (!isNaN(sourceValue) || sourceValue == 0) {
    // If we can make a valid floating-point number, put it in the text box and convert!
    sourceForm.unit_input.value = sourceValue;
    ConvertFromTo(sourceForm, targetForm);
  }
}

function ConvertFromTo(sourceForm, targetForm) {
  // Converts the contents of the sourceForm input box to the units specified in the targetForm unit menu and puts the result in the targetForm input box.In other words, this is the heart of the whole script...
  var propIndex;
  var sourceIndex;
  var sourceFactor;
  var targetIndex;
  var targetFactor;
  var result;

  // Start by checking which property we are working in...
  propIndex = document.property_form.the_menu.selectedIndex;

  // Let's determine what unit are we converting FROM (i.e. source) and the factor needed to convert that unit to the base unit.
  sourceIndex = sourceForm.unit_menu.selectedIndex;
  sourceFactor = factor[propIndex][sourceIndex];

  // Cool! Let's do the same thing for the target unit - the units we are converting TO:
  targetIndex = targetForm.unit_menu.selectedIndex;
  targetFactor = factor[propIndex][targetIndex];

  // Simple, huh? let's do the math: a) convert the source TO the base unit: (The input has been checked by the CalculateUnit function).

  result = sourceForm.unit_input.value;
  // Handle Temperature increments!
  if (property[propIndex] == "Temperature") {
    result = parseFloat(result) + tempIncrement[sourceIndex];
  }
  result = result * sourceFactor;

  // not done yet... now, b) use the targetFactor to convert FROM the base unit
  // to the target unit...
  result = result / targetFactor;
  // Again, handle Temperature increments!
  if (property[propIndex] == "Temperature") {
    result = parseFloat(result) - tempIncrement[targetIndex];
  }

  // Ta-da! All that's left is to update the target input box:
  targetForm.unit_input.value = result;
}






/*Moral Mass Caclulator */

var compounds=[ { id: "non" , name: "Select Compound"},
{ id:"C19H29COOH" , name: "Abietic acid [C19H29COOH]"},
{ id:"C12H10", name:"Acenaphthene [C12H10]"},
{ id:"C12H6O2", name:"Acenaphthoquinone [C12H6O2]"},
{ id:"C12H8", name:"Acenaphthylene [C12H8]"},
{ id:"CH3CHO", name:"Acetaldehyde [CH3CHO]"},
{ id:"C8H9NO", name:"Acetanilide [C8H9NO]"},
{ id:"CH3COOH", name:"Acetic acid [CH3COOH]"},
{ id:"CH3COCH3", name:"Acetone [CH3COCH3]"},
{ id:"CH3CN", name:"Acetonitrile [CH3CN]"},
{ id:"C8H8O", name:"Acetophenone [C8H8O]"},
{ id:"C6H5CHO", name:"Benzaldehyde [C6H5CHO]"},
{ id:"C6H6", name:"Benzene [C6H6]"},
{ id:"C6H5COOH", name:"Benzoic Acid [C6H5COOH]"},
{ id:"C7H8O", name:"Benzyl Alcohol [C7H8O]"},
{ id:"C6H5Br", name:"Bromobenzene [C6H5Br]"},
{ id:"CH3Br", name:"Bromomethane [CH3Br]"},
{ id:"C4H8O", name:"Butanal [C4H8O]"},
{ id:"C4H10", name:"Butane [C4H10]"},
{ id:"C4H10O", name:"2-Butanol [C4H10O]"},
{ id:"CO2", name:"Carbon Dioxide [CO2]"},
{ id:"H2CO3", name:"Carbonic Acid [H2CO3]"},
{ id:"C6H10O5", name:"Cellulose [C6H10O5]"},
{ id:"C2HCl3O.H2O", name:"Chloral Hydrate [C2HCl3O.H2O]"},
{ id:"C2H3Cl", name:"Chloroethene [C2H3Cl]"},
{ id:"CHCl3", name:"Chloroform [CHCl3]"},
{ id:"C3H4OH(COOH)3", name:"Citric Acid [C3H4OH(COOH)3]"},
{ id:"C6H12", name:"Cyclohexane [C6H12]"},
{ id:"C4H10O", name:"Diethyl Ether [C4H10O]"},
{ id:"C2H6", name:"Ethane [C2H6]"},
{ id:"CH3CH2OH", name:"Ethanol [CH3CH2OH]"},
{ id:"C2H4", name:"Ethene [C2H4]"},
{ id:"C21H20BrN3", name:"Ethidium Bromide [C21H20BrN3]"},
{ id:"C4H8O2", name:"Ethyl Acetate [C4H8O2]"},
{ id:"C2H7N", name:"Ethylamine [C2H7N]"},
{ id:"C8H10", name:"Ethylbenzene [C8H10]"},
{ id:"C2H4", name:"Ethylene [C2H4]"},
{ id:"HOCH2CH2OH", name:"Ethylene Glycol [HOCH2CH2OH]"},
{ id:"HCHO", name:"Formaldehyde [HCHO]"},
{ id:"C6H12O6", name:"Glucose [C6H12O6]"},
{ id:"C3H8O3", name:"Glycerol [C3H8O3]"},
{ id:"NH2CH2COOH", name:"Glycine [NH2CH2COOH]"},
{ id:"C7H16", name:"Heptane [C7H16]"},
{ id:"C6H14", name:"Hexane [C6H14]"},
{ id:"NH2CH(C4H5N2)COOH", name:"Histidine [NH2CH(C4H5N2)COOH]"},
{ id:"C10H18O", name:"Isoborneol [C10H18O]"},
{ id:"CH3CH(OH)COOH", name:"Lactic Acid [CH3CH(OH)COOH]"},
{ id:"C12H22O11", name:"Lactose [C12H22O11]"},
{ id:"C6H14N2O2", name:"Lysine [C6H14N2O2]"},
{ id:"C4H2O3", name:"Maleic Anhydride [C4H2O3]"},
{ id:"CH4", name:"Methane [CH4]"},
{ id:"CH3OH", name:"Methanol [CH3OH]"},
{ id:"C3H6O2", name:"Methyl Acetate [C3H6O2]"},
{ id:"CH3CH(CH3)CH3", name:"2-Methylpropene [CH3CH(CH3)CH3]"},
{ id:"C10H8", name:"Naphthalene [C10H8]"},
{ id:"C8H18", name:"Octane [C8H18]"},
{ id:"C5H12", name:"Pentane [C5H12]"},
{ id:"CH3CONHC6H4OC2H5", name:"Phenacetin [CH3CONHC6H4OC2H5]"},
{ id:"C3H8", name:"Propane [C3H8]"},
{ id:"CH3CH2COOH", name:"Propionic Acid [CH3CH2COOH]"},
{ id:"C7H6O3", name:"Salicylie Acid [C7H6O3]"},
{ id:"C8H8", name:"Styrene [C8H8]"},
{ id:"C12H22O11", name:"Sucrose [C12H22O11]"},
{ id:"C6H5CH3", name:"Toluene [C6H5CH3]"},
{ id:"C5H11NO2", name:"Valine [C5H11NO2]"},
{ id:"H2O", name:"Water [H2O]"},
 ];

var elementsForSelect=[
{id: "non" , name: "Select Element"},
{id: "Ac" , name: "Actinium [Ac]"},
{id: "Al" , name: "Aluminum [Al]"},
{id: "Am" , name: "Americium [Am]"},
{id: "Sb" , name: "Antimony [Sb]"},
{id: "Ar" , name: "Argon [Ar]"},
{id: "As" , name: "Arsenic [As]"},
{id: "At" , name: "Astatine [At]"},
{id: "Ba" , name: "Barium [Ba]"},
{id: "Bk" , name: "Berkelium [Bk]"},
{id: "Be" , name: "Beryllium [Be]"},
{id: "Bi" , name: "Bismuth [Bi]"},
{id: "Bh" , name: "Bohrium [Bh]"},
{id: "B" , name: "Boron [B]"},
{id: "Br" , name: "Bromine [Br]"},
{id: "Cd" , name: "Cadmium [Cd]"},
{id: "Ca" , name: "Calcium [Ca]"},
{id: "Cf" , name: "Californium [Cf]"},
{id: "C" , name: "Carbon [C]"},
{id: "Ce" , name: "Cerium [Ce]"},
{id: "Cs" , name: "Cesium [Cs]"},
{id: "Cl" , name: "Chlorine [Cl]"},
{id: "Cr" , name: "Chromium [Cr]"},
{id: "Co" , name: "Cobalt [Co]"},
{id: "Cu" , name: "Copper [Cu]"},
{id: "Cm" , name: "Curium [Cm]"},
{id: "Db" , name: "Dubnium [Db]"},
{id: "Dy" , name: "Dysprosium [Dy]"},
{id: "Es" , name: "Einsteinium [Es]"},
{id: "Er" , name: "Erbium [Er]"},
{id: "Eu" , name: "Europium [Eu]"},

];
/*
<option value="Fm">Fermium [Fm]</option> <option value="F">Fluorine [F]</option> <option value="Fr">Francium [Fr]</option> <option value="Gd">Gadolinium [Gd]</option> <option value="Ga">Gallium [Ga]</option> <option value="Ge">Germanium [Ge]</option> <option value="Au">Gold [Au]</option> <option value="Hf">Hafnium [Hf]</option> <option value="Hs">Hassium [Hs]</option> <option value="He">Helium [He]</option> <option value="Ho">Holmium [Ho]</option> <option value="H">Hydrogen [H]</option> <option value="In">Indium [In]</option> <option value="I">Iodine [I]</option> <option value="Ir">Iridium [Ir]</option> <option value="Fe">Iron [Fe]</option> <option value="Kr">Krypton [Kr]</option> <option value="La">Lanthanum [La]</option> <option value="Lr">Lawrencium [Lr]</option> <option value="Pb">Lead [Pb]</option> <option value="Li">Lithium [Li]</option> <option value="Lu">Lutetium [Lu]</option> <option value="Mg">Magnesium [Mg]</option> <option value="Mn">Manganese [Mn]</option> <option value="Mt">Meitnerium [Mt]</option> <option value="Md">Mendelevium [Md]</option> <option value="Hg">Mercury [Hg]</option> <option value="Mo">Molybdenum [Mo]</option> <option value="Nd">Neodymium [Nd]</option> <option value="Ne">Neon [Ne]</option> <option value="Np">Neptunium [Np]</option> <option value="Ni">Nickel [Ni]</option> <option value="Nb">Niobium [Nb]</option> <option value="N">Nitrogen [N]</option> <option value="No">Nobelium [No]</option> <option value="Os">Osmium [Os]</option> <option value="O">Oxygen [O]</option> <option value="Pd">Palladium [Pd]</option> <option value="P">Phosphorus [P]</option> <option value="Pt">Platinum [Pt]</option> <option value="Pu">Plutonium [Pu]</option> <option value="Po">Polonium [Po]</option> <option value="K">Potassium [K]</option> <option value="Pr">Praseodymium [Pr]</option> <option value="Pm">Promethium [Pm]</option> <option value="Pa">Protactinium [Pa]</option> <option value="Ra">Radium [Ra]</option> <option value="Rn">Radon [Rn]</option> <option value="Re">Rhenium [Re]</option> <option value="Rh">Rhodium [Rh]</option> <option value="Rb">Rubidium [Rb]</option> <option value="Ru">Ruthenium [Ru]</option> <option value="Rf">Rutherfordium [Rf]</option> <option value="Sm">Samarium [Sm]</option> <option value="Sc">Scandium [Sc]</option> <option value="Sg">Seaborgium [Sg]</option> <option value="Se">Selenium [Se]</option> <option value="Si">Silicon [Si]</option> <option value="Ag">Silver [Ag]</option> <option value="Na">Sodium [Na]</option> <option value="Sr">Strontium [Sr]</option> <option value="S">Sulfur [S]</option> <option value="Ta">Tantalum [Ta]</option> <option value="Tc">Technetium [Tc]</option> <option value="Te">Tellurium [Te]</option> <option value="Tb">Terbium [Tb]</option> <option value="Tl">Thallium [Tl]</option> <option value="Th">Thorium [Th]</option> <option value="Tm">Thulium [Tm]</option> <option value="Sn">Tin [Sn]</option> <option value="Ti">Titanium [Ti]</option> <option value="W">Tungsten [W]</option> <option value="U">Uranium [U]</option> <option value="V">Vanadium [V]</option> <option value="Xe">Xenon [Xe]</option> <option value="Yb">Ytterbium [Yb]</option> <option value="Y">Yttrium [Y]</option> <option value="Zn">Zinc [Zn]</option> <option value="Zr">Zirconium [Zr]</option> </select>
*/
var elementsTable= [
	[1, "Hydrogen", "H", 1.0079, 100, 1.0079],
	[2, "Helium", "He", 4.0026, 100, 4.0026],
  [3, "Lithium", "Li", 6.941, 100, 6.941],
  [4, "Beryllium", "Be", 9.0122, 100, 9.0122],
  [5, "Boron", "B", 10.811, 100, 10.811],
	[6, "Carbon", "C",12.0107,100,12.0107],
  [7, "Nitrogen", "N",14.0067,100,14.0067],
  [8, "Oxygen", "O",15.9994,100,15.9994],
  [9, "Fluorine", "F",18.9984,100,18.9984],
  [10, "Neon", "Ne",20.1797,100,20.1797],

  [11, "Sodium", "Na",22.9897,100,22.9897],
  [12, "Magnesium", "Mg",24.305,100,24.305],
  [13, "Aluminum", "Al",26.9815 ,100,26.9815 ],

];
  
initalizeCompunds =function(myMenu){

  var i;
  myMenu.length = compounds.length;
  for (i = 0; i < compounds.length; i++) {
    myMenu.options[i].text = compounds[i].name;
    myMenu.options[i].value = compounds[i].id;
  }
}
initalizeElements =function(myMenu){

  var i;
  myMenu.length = elementsForSelect.length;
  for (i = 0; i < elementsForSelect.length; i++) {
    myMenu.options[i].text = elementsForSelect[i].name;
    myMenu.options[i].value = elementsForSelect[i].id;
  }
}


setFormula =function(ele){
	var i;
  	i = ele.selectedIndex;
  	document.getElementById('formula_input').value=compounds[i].id;
}

setFormulaElements =function(ele){
	var i;
  	i = ele.selectedIndex;
  	document.getElementById('formula_input').value=elementsForSelect[i].id;
}

CalculateMass =function(){
	var formula = document.getElementById('formula_input').value;
	var found_index =[];
	var values = [];
	var total = 0;
	var withelement = 0;
  for (var i = 0; i < formula.length; i++) {
    var current= formula[i];
    if(!isNaN(parseInt(current, 10))) //if current is number
    {
      //read complete no
        var num= "";
        var j = i
        for( j = i ; !isNaN(parseInt(formula[j], 10)); j++) //digit 
        {
          num += formula[j]; 
        }
        i = j-1;
        if(withelement == 1)  // there was an element, 
        {
          values.push(num);
          withelement=0; //mark that we are done with this element
        }
    }else{ // the current is not number, ok it's either an element or a start letter of another element
        if(withelement == 1)  // there was an element, followed by non-number 
        {
          values.push("");
          withelement=0; //mark that we are done with this element
        }

        if( i+1 <formula.length) // we walk two steps
        { 

          var next =formula[i+1];
          if(isNaN(parseInt(next, 10)) && next == next.toLowerCase())  //if the second letter is smallcase
          {
            var tempf= searchElement(current+next);
            if(tempf != -1)
            {
              found_index.push(tempf);
              withelement=1; //mark that we found an element
              i=i+1;
            }
          }else{
            var tempf= searchElement(current);
            if(tempf != -1)
            {
              found_index.push(tempf);
              withelement=1; //mark that we found an element
            }
          }
        }else{ //if the next chracter is not available then we only have 
            var tempf= searchElement(current);
            if(tempf != -1)
            {
              found_index.push(tempf);
              withelement=1; //mark that we found an element
            }
        }

        if(i+1 ==formula.length &&  withelement == 1)  // there was an element, followed by nonthing
        {
          values.push("");
          withelement=0; //mark that we are done with this element
        }
      }
  }
/*
	for (var i = 0; i < formula.length; i++) {
		var tempf= searchElement(formula[i]);
		if(tempf != -1){ //I found
			if( i+1 <formula.length ) //read next char if letter then another element if digit then we are adding to total mass
			{
				var num= "";
				for( var j = i+1 ; !isNaN(parseInt(formula[j], 10)); j++) //digit 
				{
					num += formula[j]; 
				}
			
				console.log(num);
				if(num == "") //the next is character no numbers
				{
				  var tempf2 = searchElement(formula[i]+formula[i+1] );
				  if(tempf2 != -1){ //then elements is from 2 numbers we need to read next num/character 
				  	withelement=1;
				  	found_index.push(tempf2);
				  	i = i+1;
				  }else{
					found_index.push(tempf);
				  }
				}
				else{
					if(withelement ==0)
					{
						found_index.push(tempf);
						values.push(num);
					}
					else
					{
						values.push(num);
						withelement=0;
					}
				}
			}
			else
			{
				found_index.push(tempf);
			}
		}
		else
		{ //wrong character or number
			
				var num= "";
				var j = i;
				for(  ; !isNaN(parseInt(formula[j], 10)); j++) //digit 
				{
					num += formula[j]; 
				}
				
				if(num != ""){
					values.push(num);
					i=j-1;
					console.log("i" + i);
				}
		}
	}
	*/
  //console.log(values);
  var compined = mergeSimilar(found_index,values);

	for(var k =0 ; k<compined.length; k++)
	{
			elementsTable[compined[k].i][5] = elementsTable[compined[k].i][3] * compined[k].value;
			total+= elementsTable[compined[k].i][5];
	}

	for(var k =0 ; k<compined.length; k++)
	{
		elementsTable[compined[k].i][4] = (elementsTable[compined[k].i][5]/total)*100;
	}

	setResultOutput(compined,total);
}

mergeSimilar = function(A,B){
  var compound= [];
  for(var k =0 ; k<A.length; k++)
  {
      var i = isExist(A[k],compound);
      if( i == -1)
      {
        console.log(A[k] + " - - -"+ B[k]);
        if(B[k] != "")
          compound.push({"i": A[k], "value": parseInt(B[k])});
        else
          compound.push({"i": A[k], "value": 1 });
      }
      else
      {
        if(B[k] != "")
          compound[i].value += parseInt(B[k]);
        else
          compound[i].value += 1;
      }
  }
  console.log(compound);
  return compound;
}

isExist=function(ele, array){
  for(var i=0; i<array.length; i++)
  {

    if(ele == array[i].i)
      return i;
  }
  return -1;

}
searchElement=function(value){
	for(var i=0; i<elementsTable.length; i++)
	{

		if(value == elementsTable[i][2])
			return i;
	}
	return -1;
}

setResultOutput = function(output, total){
	var elements ="";


	for (var i = 0 ; i < output.length ; i++) {
		elements +="<div class=\"row\">";		
		elements += "<div class=\"col-md-1\">"+elementsTable[output[i].i][0]+"</div>";
		elements +=	"<div class=\"col-md-1 \">"+elementsTable[output[i].i][2]+"</div>";
		elements +=	"<div class=\"col-md-3 \">"+elementsTable[output[i].i][3]+"</div>";
		elements +=	"<div class=\"col-md-3 \">"+elementsTable[output[i].i][4]+"%</div>";
		elements +=	"<div class=\"col-md-3 \">"+elementsTable[output[i].i][5]+"</div>";
		elements += "</div>";
	}
	elements += "<div class=\"col-md-11 total-result\"> Total Molecular Weight = <span>" + total +"</span> </div>" ;
	document.getElementById('mass-results-table').innerHTML = elements;
}

var symbolsTags=["Danger symbols GHS", "Danger symbols (old)","Requirement sign","Ban sign","Warning sign","Hazardous good classes GHS"];
var labels=["GHS","OLD","RS","BS","WS","GHSS"];
var imageslabels=[ ["GHS01: Explosives; Self-Reactive Substances and Mixtures; Organic Peroxides",
"GHS02: Flammable Gases; Flammable Aerosols; Flammable Liquids; Flammable Solids; Self-Reactive Substances and Mixtures; Pyrophoric Liquids; Pyrophoric Solids; Self-Heating Substances and Mixtures; Substances and Mixtures, which in Contact with Water, emit Flammable Gases; Organic Peroxides" ,
"GHS03: Oxidizing Gases; Oxidizing Liquids; Oxidizing Solids;",
"GHS04: Gases under pressure",
"GHS05: Corrosive to Metals; Skin Corrosion/Irritation; Serious Eye Damage/Eye Irritation",
"GHS06: Acute Toxicity: Oral; Acute Toxicity: Skin; Acute Toxicity: Inhalation",
"GHS07: Warning",
"GHS08: Respiratory Sensitization; Germ Cell Mutagenicity; Carcinogenicity; Toxic to Reproduction; Specific Target Organ Toxicity (Single Exposure); Specific Target Organ Toxicity (Repeated Exposure); Aspiration Hazard",
"GHS09: Aquatic Toxicity (Acute); Aquatic Toxicity (Chronic);"] ,

 ["hazard symbol for explosive substances",
"hazard symbol for extremly flammable substances",
"hazard symbol for easily flammable substances",
"hazard symbol for oxidating substances",
"hazard symbol for highly toxic substances",
"hazard symbol for highly toxic substances",
"hazard symbol for harmful substances",
"hazard symbol for corrosive substances",
"hazard symbol for irritating substances",
"hazard symbol for nature polluting substances"]

,["generic mandatory action sign",
"Use protective eyewear",
"",
"Use hearing protection",
"Use respiratory protection",
"Use protective footwear",
"",
"Use protective clothing",
"", "",
"Use safety belt",
"Pull mains cord before opening",
"",
"Read Operating Instructions",
"","","","",""],

["Generic prohibition sign",
"Smoking prohibited"],

["Warning sign",
"Flammable materials"],

["Class 1.1",
"Class 1.2",
"Class 1.3"]

];




initalizeSymbols =function(myMenu){
	var i;
		myMenu.length = symbolsTags.length;
		for (i = 0; i < symbolsTags.length; i++) {
			myMenu.options[i].text = symbolsTags[i];
		}
}

UpdateSympols = function(propMenu){
	var i;
  	i = parseInt(propMenu.selectedIndex);
  
  	fillRow(i,labels[i]);

}	

function fillRow(j,symbolname)
{
	var elements="<ul class=\"flexslider-signs\" ><ul class=\"slides\" >";
	var firstpart="";


	for (var i = 1; i<= imageslabels[j].length ; i+=2)
	{
		
		firstpart += "<li> <div class=\"slide-block\"> <div class=\"col-single\" style=\"" ; 
		firstpart += "background-image: url('bio-images/signs/"+symbolname+i+".jpg'); \"></div> ";
		firstpart +=  "<p>"+ imageslabels[j][i-1]+"</p></div>";

		if( i+1 <= imageslabels[j].length )
		{
			firstpart += "<div class=\"slide-block\"> <div class=\"col-single\" style=\"" ; 
			firstpart += "background-image: url('bio-images/signs/"+symbolname+(i+1)+".jpg'); \"></div>";
			firstpart +=  "<p>"+ imageslabels[j][i]+"</p></div></li>";
	    }
	    
	}

	elements += firstpart  ;
	elements += "</ul></div>"
	document.getElementById('movablebg').innerHTML = elements; 
	$('.flexslider-signs').flexslider({
	animation: "fadeInLeft",
	directionNav: true,
	});

}	



window.onload = function(e) {
  FillMenuWithArray(document.property_form.the_menu, property);
  UpdateUnitMenu(document.property_form.the_menu, document.form_A.unit_menu);
  UpdateUnitMenu(document.property_form.the_menu, document.form_B.unit_menu)
  initalizeCompunds(document.compunds_form.compund_list);
  initalizeElements(document.form_AZ.compund_innerlist);
  
  initalizeSymbols(document.getElementById('symbolsList'));
  UpdateSympols(document.getElementById('symbolsList'));
}

document.getElementsByClass('numbersonly').addEventListener('keydown', function(e) {
  var key = e.keyCode ? e.keyCode : e.which;

  if (!([8, 9, 13, 27, 46, 110, 190].indexOf(key) !== -1 ||
      (key == 65 && (e.ctrlKey || e.metaKey)) || // Select All 
      (key == 67 && (e.ctrlKey || e.metaKey)) || // Copy
      (key == 86 && (e.ctrlKey || e.metaKey)) || // Paste
      (key >= 35 && key <= 40) || // End, Home, Arrows
      (key >= 48 && key <= 57 && !(e.shiftKey || e.altKey)) || // Numeric Keys
      (key >= 96 && key <= 105) // Numpad
      (key == 190) // Numpad
    )) e.preventDefault();
});
