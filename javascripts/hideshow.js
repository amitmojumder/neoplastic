
$(document).ready(function()
{
	var showText='Show';
	var hideText='Hide';
	var is_visible = false;
	$('.toggle').prev().append('<a href="#" class="toggleLink">'+hideText+'</a>');
	$('.toggle').show();

	$('a.toggleLink').click(function()
	{
		is_visible = !is_visible;
		if ($(this).text()==showText)
		{
			$(this).text(hideText);
			$(this).parent().next('.toggle').slideDown('slow');
		}
		else
		{
			$(this).text(showText);
			$(this).parent().next('.toggle').slideUp('slow');
		}
		return false;
	});
	
	var is_visible = true;
	
	$('.add_form').prev().append(' <a href="#" class="form_visibility">'+showText+'</a>');
	$('.add_form').hide();

	$('a.form_visibility').click(function()
	{
		is_visible = !is_visible;
		if ($(this).text()==showText)
		{
			$(this).text(hideText);
			$(this).parent().next('.add_form').slideDown('slow');
			$(this).parent().height(38);
		}
		else
		{
			$(this).text(showText);
			$(this).parent().next('.add_form').slideUp('slow');
			$(this).parent().height(32);
		}
		return false;
	});
});


	function show_form()
	{
		$(document).ready(function()
		{
			var showText = 'Show';
			var hideText = 'Hide';		
		
			$('a.form_visibility').replaceWith('<a href="#" class="form_visibility">Hide</a>');
			$('.add_form').show();
			$('.add_form').prev().height(38);
			
			$('a.form_visibility').click(function()
			{
				if ($(this).text()==showText)
				{
					$(this).text(hideText);
					$(this).parent().next('.add_form').slideDown('slow');
					$(this).parent().height(38);
				}
				else /*if ($(this).text()==hideText)*/				
				{
					$(this).text(showText);
					$(this).parent().next('.add_form').slideUp('slow');
					$(this).parent().height(32);
				}
				return false;
			});
		});
	}