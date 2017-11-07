/***********************
 *	Project		: ArcGIS-2d
 *	Author		: Todd Mullen
 *	Document	: Models.js
 *	Created		: Nov 3, 2017, 9:30:46 PM
 *	Description	:
 *      Controls
 ***********************/



function Page( relPath, name, title, cat ){
	return {
		path: relPath
		,name: name
		,title: title
		,category: cat
	};
}

Page.prototype.CAT_NONE	= "";
Page.prototype.CAT_2D	= "2d";
Page.prototype.CAT_3D	= "3d";




function PageBtn( page ){

}

