// $(document).ready(function(){
// var xhr = new XMLHttpRequest();
// xhr.setHeader("Access-Control-Allow-Origin:", "http://192.168.2.23:3000/fetch_repos");
// xhr.setHeader("Access-Control-Allow-Methods", "GET, POST,PUT");
// xhr.open('POST', 'http://192.168.2.23:3000/fetch_repos', false);
// xhr.send();
// xhr.responseText;

// $.ajax({
//   type: 'POST',
//   url: 'http://192.168.2.23:3000/fetch_repos',
//   data: JSON.stringify(['{"organization_name":"Qwinix"}']),
//   contentType: "application/json; charset=utf-8",
//   success:  function(data){
//        var abc = $.parseJSON(data); // create an object with the key of the array
//        alert(abc.html); // where html is the key of array that you want, $response['html'] = "<a>something..</a>";
//    },
//   contentType: "application/json; charset=utf-8",
//   dataType:'json'
// });


        // $.ajax(
        //     {
        //         accepts: {
        //             json: "application/json"
        //         }
        //         , type: "POST"
        //         ,headers: { 
        //                     "Accept" : "application/json"
        //                     }
        //         , contentType : "application/json"
        //         , url: 'http://192.168.2.23:3000/fetch_repos'
        //         , async: false
        //         , cache: false
        //         , crossDomain: false
        //         , data: JSON.stringify(['{"organization_name":"Qwinix"}'])
        //         , dataType: "json"
        //         , global: false
        //         , ifModified: false
        //         , timeout: 500000
        //         , beforeSend: function(jqXHR) {
        //             jqXHR.overrideMimeType('application/json');
        //             // jqXHR.setHeader("Access-Control-Allow-Origin:", "http://192.168.2.23:3000/fetch_repos");
        //             jqXHR.setRequestHeader("Access-Control-Allow-Origin", '*');
        //             jqXHR.setRequestHeader("Access-Control-Allow-Headers", "Content-Type, Accept");
        //             jqXHR.setRequestHeader("Access-Control-Allow-Methods","POST, GET");
        //         }
        //     }
        // )



// $.ajax({
//  type: "POST",
//  crossDomain: true,
//   dataType: "json", // jsonp
//   url: 'http://192.168.2.23:3000/initial_details',
//  data: '{"organization_name":"Qwinix"}',
//  success: function(xhr) {
//     alert(xhr.responseText);
//  },
//  error: function() {
//     alert("Am here");
//  }
// });



jQuery.support.cors = true;

var labelType, useGradients, nativeTextSupport, animate;

(function() {
  var ua = navigator.userAgent,
      iStuff = ua.match(/iPhone/i) || ua.match(/iPad/i),
      typeOfCanvas = typeof HTMLCanvasElement,
      nativeCanvasSupport = (typeOfCanvas == 'object' || typeOfCanvas == 'function'),
      textSupport = nativeCanvasSupport 
        && (typeof document.createElement('canvas').getContext('2d').fillText == 'function');
  //I'm setting this based on the fact that ExCanvas provides text support for IE
  //and that as of today iPhone/iPad current text support is lame
  labelType = (!nativeCanvasSupport || (textSupport && !iStuff))? 'Native' : 'HTML';
  nativeTextSupport = labelType == 'Native';
  useGradients = nativeCanvasSupport;
  animate = !(iStuff || !nativeCanvasSupport);
})();

var Log = {
  elem: false,
  write: function(text){
    if (!this.elem) 
      this.elem = document.getElementById('log');
    this.elem.innerHTML = text;
    this.elem.style.left = (500 - this.elem.offsetWidth / 2) + 'px';
  }
};


function init(){
    //init data
    jQuery.support.cors = true;
     $.ajax({
        // Add code for Cross Domain
        // headers: getHeaders(),
        type: "POST", //GET or POST or PUT or DELETE verb
        url:'http://192.168.2.23:3000/initial_details', // Location of the service
        data: '{"organization_name":"Qwinix"}', //Data sent to server
        contentType: 'application/json', // content type sent to server
        dataType: 'json', //Expected data format from server
        processdata: true, //True or False
        crossDomain: true,
        timeout: 600000,
        success: function (xhr) {// When Service call fails
            // var jsn_data = JSON.parse(xhr.responseText);
            // console.log(jsn_data.content);
            console.log(xhr);
        },
        error: function(xhr){
            alert("Am here");
            // var jsn_data = JSON.parse(xhr.responseText);
            // console.log(jsn_data.content);
        }
    });

}

// });
    // var json = {
    //     "id": "347_0",
    //     "All_repos["Login"]": "Nine Inch Nails",
    //     "children": [{
    //         "id": "126510_1",
    //         "name": "Jerome Dillon",
    //         "data": {
    //             "band": "Nine Inch Nails",
    //             "relation": "member of band"
    //         },
    //         "children": [{
    //             "id": "52163_2",
    //             "name": "Howlin' Maggie",
    //             "data": {
    //                 "band": "Jerome Dillon",
    //                 "relation": "member of band"
    //             },
    //             "children": []
    //         }, {
    //             "id": "324134_3",
    //             "name": "nearLY",
    //             "data": {
    //                 "band": "Jerome Dillon",
    //                 "relation": "member of band"
    //             },
    //             "children": []
    //         }]
    //     }, {
    //         "id": "173871_4",
    //         "name": "Charlie Clouser",
    //         "data": {
    //             "band": "Nine Inch Nails",
    //             "relation": "member of band"
    //         },
    //         "children": []
    //     }, {
    //         "id": "235952_5",
    //         "name": "James Woolley",
    //         "data": {
    //             "band": "Nine Inch Nails",
    //             "relation": "member of band"
    //         },
    //         "children": []
    //     }, {
    //         "id": "235951_6",
    //         "name": "Jeff Ward",
    //         "data": {
    //             "band": "Nine Inch Nails",
    //             "relation": "member of band"
    //         },
    //         "children": [{
    //             "id": "2382_7",
    //             "name": "Ministry",
    //             "data": {
    //                 "band": "Jeff Ward",
    //                 "relation": "member of band"
    //             },
    //             "children": []
    //         }, {
    //             "id": "2415_8",
    //             "name": "Revolting Cocks",
    //             "data": {
    //                 "band": "Jeff Ward",
    //                 "relation": "member of band"
    //             },
    //             "children": []
    //         }, {
    //             "id": "3963_9",
    //             "name": "Pigface",
    //             "data": {
    //                 "band": "Jeff Ward",
    //                 "relation": "member of band"
    //             },
    //             "children": []
    //         }, {
    //             "id": "7848_10",
    //             "name": "Lard",
    //             "data": {
    //                 "band": "Jeff Ward",
    //                 "relation": "member of band"
    //             },
    //             "children": []
    //         }]
    //     }, {
    //         "id": "235950_11",
    //         "name": "Richard Patrick",
    //         "data": {
    //             "band": "Nine Inch Nails",
    //             "relation": "member of band"
    //         },
    //         "children": [{
    //             "id": "1007_12",
    //             "name": "Filter",
    //             "data": {
    //                 "band": "Richard Patrick",
    //                 "relation": "member of band"
    //             },
    //             "children": []
    //         }, {
    //             "id": "327924_13",
    //             "name": "Army of Anyone",
    //             "data": {
    //                 "band": "Richard Patrick",
    //                 "relation": "member of band"
    //             },
    //             "children": []
    //         }]
    //     }, {
    //         "id": "2396_14",
    //         "name": "Trent Reznor",
    //         "data": {
    //             "band": "Nine Inch Nails",
    //             "relation": "member of band"
    //         },
    //         "children": [{
    //             "id": "3963_15",
    //             "name": "Pigface",
    //             "data": {
    //                 "band": "Trent Reznor",
    //                 "relation": "member of band"
    //             },
    //             "children": []
    //         }, {
    //             "id": "32247_16",
    //             "name": "1000 Homo DJs",
    //             "data": {
    //                 "band": "Trent Reznor",
    //                 "relation": "member of band"
    //             },
    //             "children": []
    //         }, {
    //             "id": "83761_17",
    //             "name": "Option 30",
    //             "data": {
    //                 "band": "Trent Reznor",
    //                 "relation": "member of band"
    //             },
    //             "children": []
    //         }, {
    //             "id": "133257_18",
    //             "name": "Exotic Birds",
    //             "data": {
    //                 "band": "Trent Reznor",
    //                 "relation": "member of band"
    //             },
    //             "children": []
    //         }]
    //     }, {
    //         "id": "36352_19",
    //         "name": "Chris Vrenna",
    //         "data": {
    //             "band": "Nine Inch Nails",
    //             "relation": "member of band"
    //         },
    //         "children": [{
    //             "id": "1013_20",
    //             "name": "Stabbing Westward",
    //             "data": {
    //                 "band": "Chris Vrenna",
    //                 "relation": "member of band"
    //             },
    //             "children": []
    //         }, {
    //             "id": "3963_21",
    //             "name": "Pigface",
    //             "data": {
    //                 "band": "Chris Vrenna",
    //                 "relation": "member of band"
    //             },
    //             "children": []
    //         }, {
    //             "id": "5752_22",
    //             "name": "Jack Off Jill",
    //             "data": {
    //                 "band": "Chris Vrenna",
    //                 "relation": "member of band"
    //             },
    //             "children": []
    //         }, {
    //             "id": "33602_23",
    //             "name": "Die Warzau",
    //             "data": {
    //                 "band": "Chris Vrenna",
    //                 "relation": "member of band"
    //             },
    //             "children": []
    //         }, {
    //             "id": "40485_24",
    //             "name": "tweaker",
    //             "data": {
    //                 "band": "Chris Vrenna",
    //                 "relation": "is person"
    //             },
    //             "children": []
    //         }, {
    //             "id": "133257_25",
    //             "name": "Exotic Birds",
    //             "data": {
    //                 "band": "Chris Vrenna",
    //                 "relation": "member of band"
    //             },
    //             "children": []
    //         }]
    //     }, {
    //         "id": "236021_26",
    //         "name": "Aaron North",
    //         "data": {
    //             "band": "Nine Inch Nails",
    //             "relation": "member of band"
    //         },
    //         "children": []
    //     }, {
    //         "id": "236024_27",
    //         "name": "Jeordie White",
    //         "data": {
    //             "band": "Nine Inch Nails",
    //             "relation": "member of band"
    //         },
    //         "children": [{
    //             "id": "909_28",
    //             "name": "A Perfect Circle",
    //             "data": {
    //                 "band": "Jeordie White",
    //                 "relation": "member of band"
    //             },
    //             "children": []
    //         }, {
    //             "id": "237377_29",
    //             "name": "Twiggy Ramirez",
    //             "data": {
    //                 "band": "Jeordie White",
    //                 "relation": "is person"
    //             },
    //             "children": []
    //         }]
    //     }, {
    //         "id": "235953_30",
    //         "name": "Robin Finck",
    //         "data": {
    //             "band": "Nine Inch Nails",
    //             "relation": "member of band"
    //         },
    //         "children": [{
    //             "id": "1440_31",
    //             "name": "Guns N' Roses",
    //             "data": {
    //                 "band": "Robin Finck",
    //                 "relation": "member of band"
    //             },
    //             "children": []
    //         }]
    //     }, {
    //         "id": "235955_32",
    //         "name": "Danny Lohner",
    //         "data": {
    //             "band": "Nine Inch Nails",
    //             "relation": "member of band"
    //         },
    //         "children": [{
    //             "id": "909_33",
    //             "name": "A Perfect Circle",
    //             "data": {
    //                 "band": "Danny Lohner",
    //                 "relation": "member of band"
    //             },
    //             "children": []
    //         }, {
    //             "id": "1695_34",
    //             "name": "Killing Joke",
    //             "data": {
    //                 "band": "Danny Lohner",
    //                 "relation": "member of band"
    //             },
    //             "children": []
    //         }, {
    //             "id": "1938_35",
    //             "name": "Methods of Mayhem",
    //             "data": {
    //                 "band": "Danny Lohner",
    //                 "relation": "member of band"
    //             },
    //             "children": []
    //         }, {
    //             "id": "5138_36",
    //             "name": "Skrew",
    //             "data": {
    //                 "band": "Danny Lohner",
    //                 "relation": "member of band"
    //             },
    //             "children": []
    //         }, {
    //             "id": "53549_37",
    //             "name": "Angkor Wat",
    //             "data": {
    //                 "band": "Danny Lohner",
    //                 "relation": "member of band"
    //             },
    //             "children": []
    //         }, {
    //             "id": "113510_38",
    //             "name": "Puscifer",
    //             "data": {
    //                 "band": "Danny Lohner",
    //                 "relation": "member of band"
    //             },
    //             "children": []
    //         }, {
    //             "id": "113512_39",
    //             "name": "Renhold\u00ebr",
    //             "data": {
    //                 "band": "Danny Lohner",
    //                 "relation": "is person"
    //             },
    //             "children": []
    //         }]
    //     }],
    //     "data": []
    // };
    //end
    var infovis = document.getElementById('infovis');
    var w = infovis.offsetWidth - 50, h = infovis.offsetHeight - 50;
    
    //init Hypertree
    var ht = new $jit.Hypertree({
      //id of the visualization container
      injectInto: 'infovis',
      //canvas width and height
      width: w,
      height: h,
      //Change node and edge styles such as
      //color, width and dimensions.
      Node: {
          dim: 9,
          color: "#f00"
      },
      Edge: {
          lineWidth: 2,
          color: "#088"
      },
      onBeforeCompute: function(node){
          Log.write("centering");
      },
      //Attach event handlers and add text to the
      //labels. This method is only triggered on label
      //creation
      onCreateLabel: function(domElement, node){
          domElement.innerHTML = node.name;
          $jit.util.addEvent(domElement, 'click', function () {
              ht.onClick(node.id, {
                  onComplete: function() {
                      ht.controller.onComplete();
                  }
              });
          });
      },
      //Change node styles when labels are placed
      //or moved.
      onPlaceLabel: function(domElement, node){
          var style = domElement.style;
          style.display = '';
          style.cursor = 'pointer';
          if (node._depth <= 1) {
              style.fontSize = "0.8em";
              style.color = "#ddd";

          } else if(node._depth == 2){
              style.fontSize = "0.7em";
              style.color = "#555";

          } else {
              style.display = 'none';
          }

          var left = parseInt(style.left);
          var w = domElement.offsetWidth;
          style.left = (left - w / 2) + 'px';
      },
      
      onComplete: function(){
          Log.write("done");
          
          //Build the right column relations list.
          //This is done by collecting the information (stored in the data property) 
          //for all the nodes adjacent to the centered node.
          var node = ht.graph.getClosestNodeToOrigin("current");
          var html = "<h4>" + node.name + "</h4><b>Connections:</b>";
          html += "<ul>";
          node.eachAdjacency(function(adj){
              var child = adj.nodeTo;
              if (child.data) {
                  var rel = (child.data.band == node.name) ? child.data.relation : node.data.relation;
                  html += "<li>" + child.name + " " + "<div class=\"relation\">(relation: " + rel + ")</div></li>";
              }
          });
          html += "</ul>";
          $jit.id('inner-details').innerHTML = html;
      }
    });
    //load JSON data.
    // ht.loadJSON(json);
    //compute positions and plot.
    ht.refresh();
    //end
    ht.controller.onComplete();
// }
