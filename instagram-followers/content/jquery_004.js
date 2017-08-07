function showmodal(){					
		if( !$('#sky-form-modal-overlay').length )
		{
			setTimeout(function(){
				$('body').append('<div id="sky-form-modal-overlay" class="sky-form-modal-overlay"></div>');
			},250);
		}		
	
		
		
		form = $('#sky-form-modal');
		setTimeout(function(){
			$('#sky-form-modal-overlay').fadeIn();
			form.css('top', '50%').css('left', '50%').css('margin-top', -form.outerHeight()/2).css('margin-left', -form.outerWidth()/2).fadeIn();
		},250);
		return false;
		


		/*setTimeout(function(){
			$('#sky-form-modal-overlay').fadeIn();
			form.css('top', '50%').css('left', '50%').css('margin-top', -form.outerHeight()/2).css('margin-left', -form.outerWidth()/2).fadeIn();
			$('body').append('<div id="sky-form-modal-overlay" class="sky-form-modal-overlay"></div>');
		},1000);
		return false;*/
};