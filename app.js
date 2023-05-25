function isLeapYear(year) {
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
      return true;
    }
     else {
      return false;
    }
  }

  function checkLeapYear() {
    var year = parseInt(document.getElementById("yearInput").value);

    var result = isLeapYear(year);

    if (result === true) {
      document.getElementById("result").textContent = "Yes, " + year + " is a leap year";
    } else {
      document.getElementById("result").textContent = "No, " + year + " is NOT a leap year";
    }
  }