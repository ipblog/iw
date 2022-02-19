CKEDITOR.editorConfig = function( config )
{
	// Define changes to default configuration here. For example:
	// config.autoLanguage = false;
    // config.defaultLanguage = 'pt-br';
    // config.contentsLangDirection = 'rtl'
    //config.theme = 'default';
	config.allowedContent = true;
	config.entities = false;
	//config.smiley_path = '/Data/SiteImages/emoticons/';
	config.smiley_path = '/ClientScript/ckeditor432/plugins/smiley/images/';
	config.scayt_autoStartup = false;
	config.justifyClasses = [ 'AlignLeft', 'AlignCenter', 'AlignRight', 'AlignJustify' ];
	config.indentClasses = ['Indent1', 'Indent2', 'Indent3'];
	config.extraPlugins = 'oembed,templates,onchange';
	// magicline causes false isdirty onchange
	config.removePlugins = 'magicline';
	config.oembed_maxWidth = '560';
	config.oembed_maxHeight = '315';
	//config.oembed_embedMethod = 'append';
    
	config.toolbar_CKFull =
	[
		['Source','-','Save','NewPage','Preview','-','Templates'],
		['Cut','Copy','Paste','PasteText','PasteFromWord','-','Print', 'SpellChecker', 'Scayt'],
		['Undo','Redo','-','Find','Replace','-','SelectAll','RemoveFormat'],
		['Form', 'Checkbox', 'Radio', 'TextField', 'Textarea', 'Select', 'Button', 'ImageButton', 'HiddenField'],
		'/',
		['Bold','Italic','Underline','Strike','-','Subscript','Superscript'],
		['NumberedList','BulletedList','-','Outdent','Indent','Blockquote'],
		['JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock'],
		['Link','Unlink','Anchor'],
		['Image','Flash','Table','HorizontalRule','Smiley','SpecialChar','PageBreak'],
		'/',
		['Styles','Format','Font','FontSize'],
		['TextColor','BGColor'],
		['Maximize', 'ShowBlocks','-','About']
	];

	
	config.toolbar_Full =
    [
		['Source'],
		['SelectAll', 'RemoveFormat', 'Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Print', 'SpellChecker', 'Scayt'],
		['Undo','Redo','-','Find','Replace'],
		'/',
		['Blockquote','Bold','Italic','Underline','Strike','-','Subscript','Superscript'],
		['NumberedList','BulletedList','-','Outdent','Indent'],
		['JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock'],
		['Link','Unlink','Anchor'],
		['Image','Flash','Table','HorizontalRule','Smiley','SpecialChar'],
		'/',
		['Styles','Format','Font','FontSize'],
		['TextColor','BGColor'],
		['Maximize']

    ];

	config.toolbar_Newsletter =
    [
		['Source'],
		['SelectAll', 'RemoveFormat', 'Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Print', 'SpellChecker', 'Scayt'],
		['Undo', 'Redo', '-', 'Find', 'Replace'],
		'/',
		['Blockquote', 'Bold', 'Italic', 'Underline', 'Strike', '-', 'Subscript', 'Superscript'],
		['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent'],
		['JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock'],
		['Link', 'Unlink', 'Anchor'],
		['Image', 'Table', 'HorizontalRule', 'SpecialChar'],
		'/',
		['Format', 'Font', 'FontSize'],
		['TextColor', 'BGColor'],
		['Maximize','Preview']

    ];
	
	config.toolbar_FullWithTemplates =
    [
		['Source'],
		['SelectAll', 'RemoveFormat', 'Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Print', 'SpellChecker', 'Scayt'],
		['Undo','Redo','-','Find','Replace'],
		'/',
		['Blockquote','Bold','Italic','Underline','Strike','-','Subscript','Superscript'],
		['NumberedList','BulletedList','-','Outdent','Indent'],
		['JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock'],
		['Link','Unlink','Anchor'],
		['Image','Flash','Table','HorizontalRule','Smiley','SpecialChar'],
		'/',
		['Templates','Styles','Format','Font','FontSize'],
		['TextColor','BGColor'],
		['Maximize']
	
    ];
	
	config.toolbar_Forum =
    [
		['Cut','Copy','PasteText','-'],
		['Undo', 'Redo', '-', 'Find', 'Replace', 'SpellChecker', 'Scayt', '-', 'SelectAll', 'RemoveFormat'],
		['Blockquote','Bold','Italic','Underline'],
		['NumberedList', 'BulletedList'],
		['Link','Unlink'],
		['Styles','Format','Font','FontSize'],
		['TextColor','BGColor'],
		['SpecialChar','Smiley']
	];
	
	config.toolbar_ForumWithImages =
    [
		['Cut','Copy','PasteText','-'],
		['Undo','Redo','-','Find','Replace','SpellChecker', 'Scayt','-','SelectAll','RemoveFormat'],
		['Blockquote','Bold','Italic','Underline','Image'],
		['NumberedList', 'BulletedList'],
		['Link','Unlink'],
		['Styles','Format','Font','FontSize'],
		['TextColor','BGColor'],
		['SpecialChar','Smiley']
	];
	
	config.toolbar_SimpleWithSource =
    [
		['Source','Cut','Copy','PasteText'],
		['Blockquote', 'Bold', 'Italic', '-', 'NumberedList', 'BulletedList', '-', 'Link', 'Unlink', 'SpellChecker', 'Scayt', 'Smiley']
	];
	
	config.toolbar_AnonymousUser =
    [
		['Cut','Copy','PasteText'],
		['Blockquote', 'Bold', 'Italic', '-', 'NumberedList', 'BulletedList', '-', 'Link', 'Unlink', 'Smiley']
	];

	config.toolbar_CustomOne =
    [
		['Cut', 'Copy', 'PasteText'],
		['Blockquote', 'Bold', 'Italic', '-', 'NumberedList', 'BulletedList', '-', 'Link', 'Unlink', 'Smiley']
	];

	config.toolbar_Custom2 =
    [
		['Cut', 'Copy', 'PasteText'],
		['Blockquote', 'Bold', 'Italic', '-', 'NumberedList', 'BulletedList', '-', 'Link', 'Unlink', 'Smiley']
	];
	
};
