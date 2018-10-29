function secondsToString(temp) {
    const years = Math.floor( temp / 31536000 ),
          days = Math.floor( ( temp %= 31536000 ) / 86400 ),
          hours = Math.floor( ( temp %= 86400 ) / 3600 ),
          minutes = Math.floor( ( temp %= 3600 ) / 60 ),
          seconds = temp % 60;

    if ( days || hours || seconds || minutes ) {
      return ( years ? years + " " + "year " : "" ) +
      ( days ? days + " " + "day " : "" ) +
      ( hours ? hours + " " +"hour(s) " : ""  ) +
      ( minutes ? minutes + " " + "minute(s) " : "" ) +
      Number.parseFloat(seconds).toFixed(2) + " " +"second(s)";
    }

    return "< 1s";
}

exports.getuptime = secondsToString;