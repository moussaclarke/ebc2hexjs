# Ebc2Hex.js #
Convert EBC to Hex colour codes.

## Purpose ##
This is a very rough EBC to hex colour converter, developed for the front end of my Oat Soda Brewery ERP and for Tiny Rebel Brewing's Online Export Catalogue. It gives some quick and dirty visual feedback for EBC (European Brewing Convention) colour measurement amounts.

It's not trying to be a scientifically accurate colour representation. That would need viewing conditions properly defined, and is arguably impossible anyway due to display limitations.

It is pretty useful for marketing purposes though.

## Solution ##
My solution is based on this thread here:
http://www.homebrewtalk.com/showthread.php?t=78018

What I did was to take the SRM to Hex lookup table and work my way back to three approximate formulas for the Red, Green and Blue channels, with more than a little help from Wolfram Alpha.

I'm assuming that SRM = EBC * 0.508. I'm also cutting things off at an EBC of 80 and just returning the same (dark ruby) for anything after that - the formulas start to give weird blue results from 85 onwards rather than continuing on towards pitch black. That range (0-80) covers pretty much all beers styles anyway.

I also added a saturation level setting to help fit a bit better with any overall colour scheme. 

## Usage ##
First include `ebc2hex.js` in your page using your preferred method - script tag or build tool or whatever. Then do something like:

```
var ebc2hex = new Ebc2Hex;
var ebc = 40; // ebc amount
var sat = 0.5; // saturation level, a number between 0 and 1
var ebccolour = ebc2hex.convert(ebc,sat); // ta da 
```

That's pretty much it. Have a look at the included example too.

## To do, or not to do ##
This could very easily be extended to handle SRM or Lovibond to Hex, or to output decimal RGB values, or to convert between SRM, Lovibond & EBC, but I didn't really have any need for the specific projects I'm working on. If you're after something (much) more full featured, check out [Brauhaus](https://github.com/homebrewing/brauhausjs), which handles a whole host of brewing calculations.

### Maintained
By [Moussa Clarke](https://github.com/moussaclarke/)

## License ##
MIT