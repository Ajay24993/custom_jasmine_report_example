var template, templateTotal, index = 1,
    suite;
template += "<table border='1'>";
templateTotal = "<table border='1'>" +
    "<thead><tr>" +
    "<td>Sr.No.</td>" +
    "<td>Suite Name</td>" +
    "<td>Spec Name</td>" +
    "<td>No. Expectations</td>" +
    "<td>Expectations Passed</td>" +
    "<td>Expectations Failed</td>" +
    "</tr></thead>";;
template += "<thead><tr>" +
    "<td>Sr.No.</td>" +
    "<td>Suite Name</td>" +
    "<td>Description</td>" +
    "<td>Expectations</td>" +
    "<td>Passed</td>" +
    "<td>Failed</td>" +
    "</tr></thead>";
var customReporter = {
    jasmineStarted: function(suiteInfo) {
        // console.log(suiteInfo);
        console.log('Running suite with ' + suiteInfo.totalSpecsDefined);
    },
    suiteStarted: function(result) {
        // console.log(result);
        suite = result.fullName;
        console.log('Suite started: ' + result.description + ' whose full description is: ' + result.fullName);
    },
    specStarted: function(result) {
        // console.log(result);
        console.log('Spec started: ' + result.description + ' whose full description is: ' + result.fullName);
    },
    specDone: function(result) {
        console.log("SAM ITS YOUR MAN:", result);
        console.log(result);
        console.log("================================================================================================================================================");
        console.log("Sr.No.", "description               ", "                     Expectations", "        status");
        // console.log('Spec: ' + result.description + ' was ' + result.status);
        for (var i = 0; i < result.failedExpectations.length; i++) {
            console.log('Failure: ' + result.failedExpectations[i].message);
            console.log(result.failedExpectations[i].stack);
        }
        for (var i = 0; i < result.passedExpectations.length; i++) {
            console.log((i + 1), "     " + result.description, result.passedExpectations[i].matcherName, "             " + result.passedExpectations[i].message);
            // console.log(result.passedExpectations[i].matcherName);
            template += "<tr>";
            template += "<td>" + (i + 1) + "</td>";
            template += "<td>" + (i + 1) + "</td>";
            template += "<td>" + result.description + "</td>";
            template += "<td>" + result.passedExpectations[i].matcherName + "</td>";
            template += "<td>" + result.passedExpectations[i].message + "</td>";
            /*if (result.failedExpectations.length != 0) {
                console.log((i + 1), "     " + result.description, result.passedExpectations[i].matcherName, "             " + "Failed");
                template += "<td>" + result.passedExpectations[i].message + "</td>";
            } else {*/
            template += "<td>" + '' + "</td>";
            /* }*/
            template += "</tr>";
        }
        console.log("================================================================================================================================================");
        console.log("Passed Expectations : ", result.passedExpectations.length);
        console.log("Failed Expectations : ", result.failedExpectations.length);
        console.log("================================================================================================================================================");

    },
    suiteDone: function(result) {
        console.log("suiteDone",result);
        templateTotal += "<tr><td>" + index + "</td>";
        templateTotal += "<td>" + suite + "</td>";
        templateTotal += "<td>" + (result.passedExpectations.length + result.failedExpectations.length) + "</td>";
        templateTotal += "<td>" + result.passedExpectations.length + "</td>";
        templateTotal += "<td>" + result.failedExpectations.length + "</td></tr>";
        index = index + 1;
        console.log('Suite: ' + result.description + ' was ' + result.status);
        for (var i = 0; i < result.failedExpectations.length; i++) {
            console.log('AfterAll ' + result.failedExpectations[i].message);
            console.log(result.failedExpectations[i].stack);
        }
    },
    jasmineDone: function() {
        template += "</table>";
        templateTotal += "</table>";
        // console.log(template);
        console.log(templateTotal);
        console.log('Finished suite');
    }
};

jasmine.getEnv().addReporter(customReporter);
