/***********************
 *	Project		: ArcGIS-2d
 *	Author		: Todd Mullen
 *	Document	: App.js
 *	Created		: Nov 3, 2017, 8:57:02 PM
 *	Description	:
 *      Controls
 ***********************/

/* global  */


var app = {
	MAP_TYPE	: {
		STREETS					: "streets"
		,STREET_NIGHTS_VECTOR	: "streets-night-vector"
		,TOPO					: "topo"
		,SATELLITE				: "satellite"
		,HYBRID					: "hybrid"
		,GRAY					: "gray"
		,GRAY_DARK				: "dark-gray"
		,OCEANS					: "oceans"
		,OSM					: "osm"
		,NAT_GEO				: "national-geographic"
	}
	,MAP_COORDS: {
		BOISE_IDAHO		: [-116.3031, 43.6088]
		,INDIANA		: [-86.049, 38.485]
		,SWEDEN_NORTH	: [15, 65]
		,WASHINGTON_DC	: [-77.02, 38.89]
	}
	,POSITION	: {
		TOP_RIGHT	: "top-right"
		,TOP_LEFT	: "top-left"
		,BOT_LEFT	: "bottom-left"
		,BOT_RIGHT	: "bottom-right"
	}
};


