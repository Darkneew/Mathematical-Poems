const LAYOUT = {
    minPx: 1000,      // Minimum graph width in pixels (small phone floor)
    maxPx: 3000,     // Maximum graph width in pixels (very large desktop cap)
    uiScaleBreak: 1300, // px above which top buttons and footer also scale up
};

const PARAMETERS = {
    "graphRatio":0.85,
    "shift":{
        "x":35,
        "y":30
    }
};

const POEMS = [
{
    "position":{
        "x":280,
        "y":685
    },
    "text": ``,
    "translatedText":``,
    "isImage": false,
    "image": null,
    "imageCredit": null,
    "icon": "./assets/latex/webp/fondagroup.webp",
    "object":"",
    "translatedObject":"",
    "wikipedia":"",
    "translatedWikipedia":"",
    "author":"",
    "translator":"",
    "id":"fondagroup",
    "edges":["det0","matrix"]
},
{
    "position":{
        "x":25,
        "y":610
    },
    "text": ``,
    "translatedText":``,
    "isImage": false,
    "image": null,
    "imageCredit": null,
    "icon": "./assets/latex/webp/attract.webp",
    "object":"",
    "translatedObject":"",
    "wikipedia":"",
    "translatedWikipedia":"",
    "author":"",
    "translator":"",
    "id":"attract",
    "edges":["gradient","landau","newton"]
},
{
    "position":{
        "x":560,
        "y":810
    },
    "text": ``,
    "translatedText":``,
    "isImage": false,
    "image": null,
    "imageCredit": null,
    "icon": "./assets/latex/webp/bigbang.webp",
    "object":"",
    "translatedObject":"",
    "wikipedia":"",
    "translatedWikipedia":"",
    "author":"",
    "translator":"",
    "id":"bigbang",
    "edges":["fusion","infinity2","redshift","zero"]
},
{
    "position":{
        "x":530,
        "y":130
    },
    "text": ``,
    "translatedText":``,
    "isImage": false,
    "image": null,
    "imageCredit": null,
    "icon": "./assets/latex/webp/square.webp",
    "object":"",
    "translatedObject":"",
    "wikipedia":"",
    "translatedWikipedia":"",
    "author":"",
    "translator":"",
    "id":"square",
    "edges":["group","triangle","ptriple"]
},
{
    "position":{
        "x":680,
        "y":470
    },
    "text": ``,
    "translatedText":``,
    "isImage": false,
    "image": null,
    "imageCredit": null,
    "icon": "./assets/latex/webp/collatz.webp",
    "object":"",
    "translatedObject":"",
    "wikipedia":"",
    "translatedWikipedia":"",
    "author":"",
    "translator":"",
    "id":"collatz",
    "edges":["disjunction","division","induction","unit"]
},
{
    "position":{
        "x":110,
        "y":305
    },
    "text": ``,
    "translatedText":``,
    "isImage": false,
    "image": null,
    "imageCredit": null,
    "icon": "./assets/latex/webp/gausscurv.webp",
    "object":"",
    "translatedObject":"",
    "wikipedia":"",
    "translatedWikipedia":"",
    "author":"",
    "translator":"",
    "id":"gausscurv",
    "edges":["gausslaw","time","reuleaux"]
},
{
    "position":{
        "x":210,
        "y":530
    },
    "text": ``,
    "translatedText":``,
    "isImage": false,
    "image": null,
    "imageCredit": null,
    "icon": "./assets/latex/webp/gradient.webp",
    "object":"",
    "translatedObject":"",
    "wikipedia":"",
    "translatedWikipedia":"",
    "author":"",
    "translator":"",
    "id":"gradient",
    "edges":["matrix","newton","NN"]
},
{
    "position":{
        "x":425,
        "y":695
    },
    "text": ``,
    "translatedText":``,
    "isImage": false,
    "image": null,
    "imageCredit": null,
    "icon": "./assets/latex/webp/det0.webp",
    "object":"",
    "translatedObject":"",
    "wikipedia":"",
    "translatedWikipedia":"",
    "author":"",
    "translator":"",
    "id":"det0",
    "edges":["matrix","zero"]
},
{
    "position":{
        "x":835,
        "y":535
    },
    "text": ``,
    "translatedText":``,
    "isImage": false,
    "image": null,
    "imageCredit": null,
    "icon": "./assets/latex/webp/disjunction.webp",
    "object":"",
    "translatedObject":"",
    "wikipedia":"",
    "translatedWikipedia":"",
    "author":"",
    "translator":"",
    "id":"disjunction",
    "edges":["fission","serie"]
},
{
    "position":{
        "x":550,
        "y":370
    },
    "text": ``,
    "translatedText":``,
    "isImage": false,
    "image": null,
    "imageCredit": null,
    "icon": "./assets/latex/webp/division.webp",
    "object":"",
    "translatedObject":"",
    "wikipedia":"",
    "translatedWikipedia":"",
    "author":"",
    "translator":"",
    "id":"division",
    "edges":["prime","zero"]
},
{
    "position":{
        "x":800,
        "y":395
    },
    "text": ``,
    "translatedText":``,
    "isImage": false,
    "image": null,
    "imageCredit": null,
    "icon": "./assets/latex/webp/econst.webp",
    "object":"",
    "translatedObject":"",
    "wikipedia":"",
    "translatedWikipedia":"",
    "author":"",
    "translator":"",
    "id":"econst",
    "edges":["exponential","eulerform","serie"]
},
{
    "position":{
        "x":930,
        "y":465
    },
    "text": ``,
    "translatedText":``,
    "isImage": false,
    "image": null,
    "imageCredit": null,
    "icon": "./assets/latex/webp/radioactive.webp",
    "object":"",
    "translatedObject":"",
    "wikipedia":"",
    "translatedWikipedia":"",
    "author":"",
    "translator":"",
    "id":"radioactive",
    "edges":["exponential","fission"]
},
{
    "position":{
        "x":955,
        "y":310
    },
    "text": ``,
    "translatedText":``,
    "isImage": false,
    "image": null,
    "imageCredit": null,
    "icon": "./assets/latex/webp/exponential.webp",
    "object":"",
    "translatedObject":"",
    "wikipedia":"",
    "translatedWikipedia":"",
    "author":"",
    "translator":"",
    "id":"exponential",
    "edges":["eulerform","log"]
},
{
    "position":{
        "x":905,
        "y":645
    },
    "text": ``,
    "translatedText":``,
    "isImage": false,
    "image": null,
    "imageCredit": null,
    "icon": "./assets/latex/webp/fission.webp",
    "object":"",
    "translatedObject":"",
    "wikipedia":"",
    "translatedWikipedia":"",
    "author":"",
    "translator":"",
    "id":"fission",
    "edges":["fusion"]
},
{
    "position":{
        "x":795,
        "y":240
    },
    "text": ``,
    "translatedText":``,
    "isImage": false,
    "image": null,
    "imageCredit": null,
    "icon": "./assets/latex/webp/eulerform.webp",
    "object":"",
    "translatedObject":"",
    "wikipedia":"",
    "translatedWikipedia":"",
    "author":"",
    "translator":"",
    "id":"eulerform",
    "edges":["unit"]
},
{
    "position":{
        "x":850,
        "y":780
    },
    "text": ``,
    "translatedText":``,
    "isImage": false,
    "image": null,
    "imageCredit": null,
    "icon": "./assets/latex/webp/fusion.webp",
    "object":"",
    "translatedObject":"",
    "wikipedia":"",
    "translatedWikipedia":"",
    "author":"",
    "translator":"",
    "id":"fusion",
    "edges":[]
},
{
    "position":{
        "x":115,
        "y":305
    },
    "text": ``,
    "translatedText":``,
    "isImage": false,
    "image": null,
    "imageCredit": null,
    "icon": "./assets/latex/webp/gausslaw.webp",
    "object":"",
    "translatedObject":"",
    "wikipedia":"",
    "translatedWikipedia":"",
    "author":"",
    "translator":"",
    "id":"gausslaw",
    "edges":["unknown"]
},
{
    "position":{
        "x":460,
        "y":230
    },
    "text": ``,
    "translatedText":``,
    "isImage": false,
    "image": null,
    "imageCredit": null,
    "icon": "./assets/latex/webp/group.webp",
    "object":"",
    "translatedObject":"",
    "wikipedia":"",
    "translatedWikipedia":"",
    "author":"",
    "translator":"",
    "id":"group",
    "edges":["prime","triangle","U1"]
},
{
    "position":{
        "x":275,
        "y":295
    },
    "text": ``,
    "translatedText":``,
    "isImage": false,
    "image": null,
    "imageCredit": null,
    "icon": "./assets/latex/webp/unknown.webp",
    "object":"",
    "translatedObject":"",
    "wikipedia":"",
    "translatedWikipedia":"",
    "author":"",
    "translator":"",
    "id":"unknown",
    "edges":["NN"]
},
{
    "position":{
        "x":710,
        "y":725
    },
    "text": ``,
    "translatedText":``,
    "isImage": false,
    "image": null,
    "imageCredit": null,
    "icon": "./assets/latex/webp/infinity1.webp",
    "object":"",
    "translatedObject":"",
    "wikipedia":"",
    "translatedWikipedia":"",
    "author":"",
    "translator":"",
    "id":"infinity1",
    "edges":["serie","induction","infinity2"]
},
{
    "position":{
        "x":575,
        "y":670
    },
    "text": ``,
    "translatedText":``,
    "isImage": false,
    "image": null,
    "imageCredit": null,
    "icon": "./assets/latex/webp/infinity2.webp",
    "object":"",
    "translatedObject":"",
    "wikipedia":"",
    "translatedWikipedia":"",
    "author":"",
    "translator":"",
    "id":"infinity2",
    "edges":["zero"]
},
{
    "position":{
        "x":80,
        "y":760
    },
    "text": ``,
    "translatedText":``,
    "isImage": false,
    "image": null,
    "imageCredit": null,
    "icon": "./assets/latex/webp/landau.webp",
    "object":"",
    "translatedObject":"",
    "wikipedia":"",
    "translatedWikipedia":"",
    "author":"",
    "translator":"",
    "id":"landau",
    "edges":["time"]
},
{
    "position":{
        "x":665,
        "y":190
    },
    "text": ``,
    "translatedText":``,
    "isImage": false,
    "image": null,
    "imageCredit": null,
    "icon": "./assets/latex/webp/prime.webp",
    "object":"",
    "translatedObject":"",
    "wikipedia":"",
    "translatedWikipedia":"",
    "author":"",
    "translator":"",
    "id":"prime",
    "edges":["log","ptriple"]
},
{
    "position":{
        "x":885,
        "y":115
    },
    "text": ``,
    "translatedText":``,
    "isImage": false,
    "image": null,
    "imageCredit": null,
    "icon": "./assets/latex/webp/log.webp",
    "object":"",
    "translatedObject":"",
    "wikipedia":"",
    "translatedWikipedia":"",
    "author":"",
    "translator":"",
    "id":"log",
    "edges":[]
},
{
    "position":{
        "x":260,
        "y":420
    },
    "text": ``,
    "translatedText":``,
    "isImage": false,
    "image": null,
    "imageCredit": null,
    "icon": "./assets/latex/webp/matrix.webp",
    "object":"",
    "translatedObject":"",
    "wikipedia":"",
    "translatedWikipedia":"",
    "author":"",
    "translator":"",
    "id":"matrix",
    "edges":["U1"]
},
{
    "position":{
        "x":65,
        "y":495
    },
    "text": ``,
    "translatedText":``,
    "isImage": false,
    "image": null,
    "imageCredit": null,
    "icon": "./assets/latex/webp/newton.webp",
    "object":"",
    "translatedObject":"",
    "wikipedia":"",
    "translatedWikipedia":"",
    "author":"",
    "translator":"",
    "id":"newton",
    "edges":[]
},
{
    "position":{
        "x":300,
        "y":790
    },
    "text": ``,
    "translatedText":``,
    "isImage": false,
    "image": null,
    "imageCredit": null,
    "icon": "./assets/latex/webp/redshift.webp",
    "object":"",
    "translatedObject":"",
    "wikipedia":"",
    "translatedWikipedia":"",
    "author":"",
    "translator":"",
    "id":"redshift",
    "edges":["time"]
},
{
    "position":{
        "x":570,
        "y":530
    },
    "text": ``,
    "translatedText":``,
    "isImage": false,
    "image": null,
    "imageCredit": null,
    "icon": "./assets/latex/webp/induction.webp",
    "object":"",
    "translatedObject":"",
    "wikipedia":"",
    "translatedWikipedia":"",
    "author":"",
    "translator":"",
    "id":"induction",
    "edges":["NN","serie"]
},
{
    "position":{
        "x":430,
        "y":470
    },
    "text": ``,
    "translatedText":``,
    "isImage": false,
    "image": null,
    "imageCredit": null,
    "icon": "./assets/latex/webp/NN.webp",
    "object":"",
    "translatedObject":"",
    "wikipedia":"",
    "translatedWikipedia":"",
    "author":"",
    "translator":"",
    "id":"NN",
    "edges":[]
},
{
    "position":{
        "x":730,
        "y":595
    },
    "text": ``,
    "translatedText":``,
    "isImage": false,
    "image": null,
    "imageCredit": null,
    "icon": "./assets/latex/webp/serie.webp",
    "object":"",
    "translatedObject":"",
    "wikipedia":"",
    "translatedWikipedia":"",
    "author":"",
    "translator":"",
    "id":"serie",
    "edges":[]
},
{
    "position":{
        "x":135,
        "y":635
    },
    "text": ``,
    "translatedText":``,
    "isImage": false,
    "image": null,
    "imageCredit": null,
    "icon": "./assets/latex/webp/time.webp",
    "object":"",
    "translatedObject":"",
    "wikipedia":"",
    "translatedWikipedia":"",
    "author":"",
    "translator":"",
    "id":"time",
    "edges":["toda"]
},
{
    "position":{
        "x":330,
        "y":570
    },
    "text": ``,
    "translatedText":``,
    "isImage": false,
    "image": null,
    "imageCredit": null,
    "icon": "./assets/latex/webp/toda.webp",
    "object":"",
    "translatedObject":"",
    "wikipedia":"",
    "translatedWikipedia":"",
    "author":"",
    "translator":"",
    "id":"toda",
    "edges":["U1"]
},
{
    "position":{
        "x":400,
        "y":90
    },
    "text": ``,
    "translatedText":``,
    "isImage": false,
    "image": null,
    "imageCredit": null,
    "icon": "./assets/latex/webp/triangle.webp",
    "object":"",
    "translatedObject":"",
    "wikipedia":"",
    "translatedWikipedia":"",
    "author":"",
    "translator":"",
    "id":"triangle",
    "edges":["reuleaux","ptriple"]
},
{
    "position":{
        "x":220,
        "y":145
    },
    "text": ``,
    "translatedText":``,
    "isImage": false,
    "image": null,
    "imageCredit": null,
    "icon": "./assets/latex/webp/reuleaux.webp",
    "object":"",
    "translatedObject":"",
    "wikipedia":"",
    "translatedWikipedia":"",
    "author":"",
    "translator":"",
    "id":"reuleaux",
    "edges":[]
},
{
    "position":{
        "x":650,
        "y":35
    },
    "text": ``,
    "translatedText":``,
    "isImage": false,
    "image": null,
    "imageCredit": null,
    "icon": "./assets/latex/webp/ptriple.webp",
    "object":"",
    "translatedObject":"",
    "wikipedia":"",
    "translatedWikipedia":"",
    "author":"",
    "translator":"",
    "id":"ptriple",
    "edges":[]
},
{
    "position":{
        "x":415,
        "y":340
    },
    "text": ``,
    "translatedText":``,
    "isImage": false,
    "image": null,
    "imageCredit": null,
    "icon": "./assets/latex/webp/U1.webp",
    "object":"",
    "translatedObject":"",
    "wikipedia":"",
    "translatedWikipedia":"",
    "author":"",
    "translator":"",
    "id":"U1",
    "edges":["unit"]
},
{
    "position":{
        "x":705,
        "y":310
    },
    "text": ``,
    "translatedText":``,
    "isImage": false,
    "image": null,
    "imageCredit": null,
    "icon": "./assets/latex/webp/unit.webp",
    "object":"",
    "translatedObject":"",
    "wikipedia":"",
    "translatedWikipedia":"",
    "author":"",
    "translator":"",
    "id":"unit",
    "edges":[]
},
{
    "position":{
        "x":455,
        "y":590
    },
    "text": ``,
    "translatedText":``,
    "isImage": false,
    "image": null,
    "imageCredit": null,
    "icon": "./assets/latex/webp/zero.webp",
    "object":"",
    "translatedObject":"",
    "wikipedia":"",
    "translatedWikipedia":"",
    "author":"",
    "translator":"",
    "id":"zero",
    "edges":[]
}
];