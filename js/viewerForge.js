var viewer;
var md_ViewerDocument;
var md_viewables;

var inputs = document.querySelectorAll('input');

function DisplayViewer() {

    var options = {
        env: 'AutodeskProduction',
        api: 'derivativeV2', // for models uploaded to EMEA change this option to 'derivativeV2_EU'
        getAccessToken: function(onTokenReady) {
            var x = document.getElementById("access_token")
            var token = x.value;
            var timeInSeconds = 3600; // Use value provided by Forge Authentication (OAuth) API
            onTokenReady(token, timeInSeconds);
        }
    }

    
    Autodesk.Viewing.Initializer(options, function() {

        var htmlDiv = document.getElementById('forgeViewer');
        viewer = new Autodesk.Viewing.GuiViewer3D(htmlDiv);
        var startedCode = viewer.start();
        
        if (startedCode > 0) {
            console.error('Failed to create a Viewer: WebGL not supported.');
            return;
        }

        console.log('Initialization complete, loading a model next...');

    });

    /* var x = document.getElementById("source_file_urn") */
    var documentId = 'urn:dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6dV9saW1hMi9VTGltYV9Fc3RydWN0dXJhX0VkaWZJbmdlbmllcmlhLnJ2dA';
    Autodesk.Viewing.Document.load(documentId, onDocumentLoadSuccess, onDocumentLoadFailure);

    
};


function selectViewable() {
    
    var indexViewable = document.getElementById("viewables").selectedIndex;
    // Load another viewable from selectedIndex of drop-down.
    viewer.loadDocumentNode(md_ViewerDocument, md_viewables[indexViewable]);
}

function onDocumentLoadSuccess(viewerDocument) {

    var viewerapp = viewerDocument.getRoot();
    
    md_ViewerDocument=viewerDocument; // Hold the viewerDocument in a global variable so that we can access it within SelectViewable() 
    md_viewables = viewerapp.search({'type':'geometry'});

    if (md_viewables.length === 0) {
        console.error('Document contains no viewables.');
        return;
    }

    // populate the Choose viewables drop down with the viewable name
    var sel = document.getElementById('viewables');
    for(var i = 0; i < md_viewables.length; i++) {
        var opt = document.createElement('option');
        opt.innerHTML = md_viewables[i].data.name;
        opt.value =  md_viewables[i].data.name;

        sel.appendChild(opt);
    }

    viewer.loadDocumentNode(viewerDocument, md_viewables[0]);


    

    if (md_viewables.length > 1) {
        var viewablesDIV= document.getElementById("viewables_dropdown");
        viewablesDIV.style.display = "block";

    }
}

function onDocumentLoadFailure() {
    console.error('Failed fetching Forge manifest');
}
   