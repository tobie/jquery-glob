(function($) {
    var invariant = $.cultures.invariant,
        standard = invariant.calendars.standard,
        culture = $.cultures["sr-Cyrl-BA"] = $.extend(true, {}, invariant, {
        name: "sr-Cyrl-BA",
        englishName: "Serbian (Cyrillic, Bosnia and Herzegovina)",
        nativeName: "српски (Босна и Херцеговина)",
        numberFormat: {
            ',': ".",
            '.': ",",
            percent: {
                ',': ".",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': ".",
                '.': ",",
                symbol: "КМ"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ".",
                days: [["недеља","понедељак","уторак","среда","четвртак","петак","субота"],["нед","пон","уто","сре","чет","пет","суб"]],
                months: [["јануар","фебруар","март","април","мај","јун","јул","август","септембар","октобар","новембар","децембар",""],["јан","феб","мар","апр","мај","јун","јул","авг","сеп","окт","нов","дец",""]],
                AM: "",
                PM: "",
                eras: [{"name":"н.е.","start":null,"offset":0}],
                patterns: {
                    d: "d.M.yyyy",
                    D: "d. MMMM yyyy",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "d. MMMM yyyy H:mm",
                    F: "d. MMMM yyyy H:mm:ss",
                    M: "d. MMMM",
                    Y: "MMMM, yyyy"
                }
            })
        }
    });
    culture.calendar = culture.calendars.standard;
})(jQuery);