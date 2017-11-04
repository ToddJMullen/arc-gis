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
	Page("basic-2d.html", "2d MapView", "Basic 2D MapView", Page.CAT_2D )
	,Page( "basic-3d.html", "#d SceneView", "Intro to SceneView - Create a 3D map", Page.CAT_3D )
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
			btns += `<li><a href="${pg.path}" title="${pg.title}" class="btn btn-sm">${pg.label}</a></li>`;
		});
		nav.append( btns );
	}
}//Menu()

menu = new Menu( pageAry );
menu.build();



