test(
  'CharsTest',

  [
    'ephox.compass.Arr',
    'ephox.polaris.pattern.Chars',
    'global!RegExp'
  ],

  function (Arr, Chars, RegExp) {
// ["fr","en_au","pt","it","nl","en_uk","pt_pt","de","nb","en_br","sv","da","en","es","en_gb","fi","en_us"]}

    /*
     * https://www.cs.tut.fi/~jkorpela/html/french.html
     */
    var regex = new RegExp(Chars.wordchar(), '');
    var french = 'àÀâÂèÈéÉêÊëËîÎïÏôÔùÙûÛüÜÿŸçÇœŒ';

    var checkAllKnown = function (label, str) {
      var chars = str.split('');
      var breaks = Arr.filter(chars, function (c) {
        return !regex.test(c);
      });

      var leftovers = breaks.join('').trim();
      assert.eq(
        0,
        leftovers.length,
        'Test: ' + label + '\nExpected all characters in: \n\n"' + str + '" to be known. \nUnknown: ' + leftovers
      );
    };

    checkAllKnown('Checking French string', 'àÀâÂèÈéÉêÊëËîÎïÏôÔùÙûÛüÜÿŸçÇœŒ');
  }
);