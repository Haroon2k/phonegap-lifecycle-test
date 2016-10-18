var key1 ="pen";
var value1 ="blue";
var key2 ="wallet";
var value2 ="black";
var key3 ="phone";
var value3="grey";
var key4 ="bag";
var value4 ="brown";
var key5 ="watch";
var value5 ="silver";


    function onLoad() {
window.localStorage.setItem( key1, value1 );
window.localStorage.setItem( key2, value2 );
window.localStorage.setItem( key3, value3 );        
window.localStorage.setItem( key4, value4 ); 
window.localStorage.setItem( key5, value5 );
alert(window.localStorage.getItem(key1);
    }

	
	/*function updateDisplay() {
		$("#launched").text("Application launched: " + launched_count);
		$("#resumed").text("Application paused: " + paused_count);
		$("#paused").text("Application resumed: " + resumed_count);
	}

 
    // device APIs are available
    //
    function onDeviceReady() {
		alert("device ready");
        
		document.addEventListener("resume", onResume, false);
		document.addEventListener("pause", onPause, false);
		
		launched_count++;
		updateDisplay();
    }

    // Handle the pause event
    //
    function onPause() {
		alert("pause");
		paused_count++;
		updateDisplay();
    }
	
	function onResume() {
		alert("resume");
		resumed_count++;
		updateDisplay();
    }
