/***********************
 *	Project		: ArcGIS-2d
 *	Author		: Todd Mullen
 *	Document	: Menu.js
 *	Created		: Nov 3, 2017, 9:29:51 PM
 *	Description	:
 *      Controls
 ***********************/

/* global Page, $ */

pageAry = [
	Page(  "/ArcGIS/", "Home", "Home", "" )
	,Page( "basic-2d.html", "2d MapView", "Basic 2D MapView", "2d" )
	,Page( "popups.html", "2d MapView", "Intro Popups", "2d" )
	,Page( "widgets.html", "2d MapView", "Intro Widgets", "2d" )
	,Page( "basic-3d.html", "3d SceneView", "Intro to SceneView", "3d" )
	,Page( "localScene.html", "3d Local Scene", "LocalScene", "3d" )
	,Page( "tileLayer.html", "3d Tile Layer", "TileLayer", "3d" )
];

function Menu( pageAry ){

	var api = {
		pageAry: pageAry
		,build	: build
	};
	return api;

	function build(){
		console.log(`Menu::build(), pageAry:`, pageAry );
		var body		= $("body")
		,nav			= body.find("#pageNav")
		,btns			= ""
		;

		if( nav.length < 1 ){
			nav = $(`<nav><ul></ul></nav>`);
			body.append( nav );
			nav = nav.find("ul");
		}

		pageAry.map(function makeLinkBtn( /*var Page*/ pg){
			btns += `<li><a href="${pg.getPath()}" title="${pg.title}"
					 class="btn btn-sm btn-default">${pg.title}</a></li>`;
		});
		nav.prepend( btns );
	}
}//Menu()

menu = new Menu( pageAry );



