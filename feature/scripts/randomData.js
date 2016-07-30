//var tags = [];


    var stName = ['DH-PRESSURE1', 'DNHL-CURRENT', 'DH-PRESSURE3', 'DNHL-VOLTAGE', 'MTR_OVERL', 'DH-PRESSURE6', 'FREQ-SP', 'DNHL-SNSR-FAULT-CODE'];
    var uiLabel = ['Downhole Pressure', 'Downhole Pressure2', 'Downhole Voltage', 'Motor Overlads', 'Frequency Setpoint', 'Downhole Pressure6', 'Downhole Pressure7', 'Downhole Pressure8', 'Downhole Pressure9', 'Downhole Pressure10'];
    var description = ['Maximum 40 char(s)', 'Check read type value before con', 'The description is too lon to dispel', '5', 'Some description'];
    var gridStatus = ['active'];
    var test = ['tests'];
    var appTypes = ["Down hole", "ROD PUMP"];
    var datatypes = ['String', 'Short', 'Double', 'Float', 'Boolean'];
    var units = ['Amps', 'psi', 'volts', 'milli volts', 'Hz', 'default'];
    var lookups = ['Enums', 'Bitmapped'];
    var category = ['String', 'Short', 'Double', 'Float', 'Boolean'];
    var stlCategory = ['Configuration', 'Device Error', 'Core'];
    var scanMax = [10, 20, 100];
    var scanDefault = [4];
    var scanMaxPD = [4, 8, 10, 20];
    var visibility = [true, false];
    var trendable = [true, false];
    var digitalSourceTags = ['...'];
    var registerAddresses = ['...'];
    var scalings = [0];
    var compression = ['...'];
    var calc = ['...'];
    var expression = ['...'];
    var dmdScans = [4, 10, 3, 9, 6];
    var dmsScans = [4, 10, 3, 9, 6];



//var tags = generateData(50);

    function randomizeData(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    function generateSTLData(totalRecords) {
        var tags = [];
        for (var i = 0; i < totalRecords; i++) {
            tags.push({
                id: 1000 + i,
                stName: randomizeData(stName),
                uiLabel: randomizeData(uiLabel),
                description: randomizeData(description),
                appType: randomizeData(appTypes),

                datatype: randomizeData(datatypes),
                unit: randomizeData(units),
                lookup: randomizeData(lookups),
                category: randomizeData(category),

                dataType: randomizeData(datatypes),
                unit: randomizeData(units),
                lookup: randomizeData(lookups),
                stlCategory: randomizeData(stlCategory),

                scanMax: randomizeData(scanMax),
                scanDefault: randomizeData(scanDefault),
                scanMaxPD: randomizeData(scanMaxPD),
                visibility: randomizeData(visibility),

                trendable: randomizeData(trendable)
            });
        }
        return tags;
    }


    function generateDSMData(totalRecords) {
        var dsmData = [];
        for (var i = 0; i < totalRecords; i++) {
            dsmData.push({
                id: 1000 + i,
                stName: randomizeData(stName),
                uiLabel: randomizeData(uiLabel),
                description: randomizeData(description),
                digitalSourceTag: randomizeData(digitalSourceTags),
                registerAddress: randomizeData(registerAddresses),
                datatype: randomizeData(datatypes),
                scaling: randomizeData(scalings),
                lookup: randomizeData(lookups),
                compression: randomizeData(compression),
                calc: randomizeData(calc),

                expression: randomizeData(expression)
            });
        }
        return dsmData;
    }




    //records = 10;
    //generateData(records);



