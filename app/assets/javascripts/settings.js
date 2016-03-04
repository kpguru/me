// JavaScript Document


jQuery(document).ready(function(jQuery){
"use strict";
//  Settings Panel 
	jQuery('.open-buttton').click(function(){
	
		if(jQuery('.open-buttton').hasClass('closed')){
			jQuery(this).parent('.settings-panel').stop().animate({left:225},400);
			jQuery(this).removeClass('closed').addClass('opened');
		} else {
			jQuery(this).parent('.settings-panel').stop().animate({left:0},400);
			jQuery(this).removeClass('opened').addClass('closed');
		}
	});

jQuery('#box').click(function(){
			jQuery('#boxed').addClass('shadow');
	});
jQuery('#wide').click(function(){
			jQuery('#boxed').removeClass('shadow');
	});
// Bacground Patterns and Background Colour 
	
jQuery('.settings-panel .bg_patterns ul li').click(function(){
		var thisBGimg = jQuery(this).css('background-image');
		jQuery('.pattern_bg').css('background-image', thisBGimg);
		jQuery('.ban_pat1').css('background-image', thisBGimg);
		jQuery('.ban_pat2').css('background-image', thisBGimg);
		jQuery('.ban_pat3').css('background-image', thisBGimg);
	});

jQuery('.color').click(function(){
		var thisBGcol = jQuery(this).css('background-color');
		jQuery('body').css('background-color', thisBGcol);
	});
	
		jQuery('.settings-panel .card_patterns ul li').click(function(){
		var thisBGimg = jQuery(this).css('background-image');
		jQuery('.gray_bg').css('background-image', thisBGimg);
	});
	
		 jQuery("ul.c_patterns li").click(function () {
			 var myClass = jQuery(this).attr("class");
			if(myClass == 'default'){
			jQuery('#color').attr('href','assets/color1.css');
					
		}else if(myClass == 'c1'){
		jQuery('#color').attr('href','assets/color1.css');
		
			} else if(myClass == 'c2'){
		jQuery('#color').attr('href','assets/color2.css');
				
			} else if(myClass == 'c3'){
		jQuery('#color').attr('href','assets/color3.css');
						
			} else if(myClass == 'c4'){
		jQuery('#color').attr('href','assets/color4.css');
								
			} else if(myClass == 'c5'){
		jQuery('#color').attr('href','assets/color5.css');
								
			} else if(myClass == 'c6'){
		jQuery('#color').attr('href','assets/color6.css');
		
			} else if(myClass == 'c7'){
		jQuery('#color').attr('href','assets/color7.css');
		
			} else if(myClass == 'c8'){
		jQuery('#color').attr('href','assets/color8.css');
								
			} else if(myClass == 'c9'){
		jQuery('#color').attr('href','assets/color9.css');
								
			} else if(myClass == 'c10'){
		jQuery('#color').attr('href','assets/color10.css');
								
			} else if(myClass == 'c11'){
		jQuery('#color').attr('href','assets/color11.css');
								
			
			} else if(myClass == 'c12'){
		jQuery('#color').attr('href','assets/color12.css');
								
			
			} else if(myClass == 'c13'){
		jQuery('#color').attr('href','assets/color13.css');
								
			 
			} else if(myClass == 'c14'){
		jQuery('#color').attr('href','assets/color14.css');
								
			 
			} else if(myClass == 'c15'){
		jQuery('#color').attr('href','assets/color15.css');
								
			 
			} else if(myClass == 'c16'){
		jQuery('#color').attr('href','assets/color16.css');
								
			
			} else if(myClass == 'c17'){
		jQuery('#color').attr('href','assets/color17.css');
								
			
			} else if(myClass == 'c18'){
		jQuery('#color').attr('href','assets/color18.css');
								
		
			} else if(myClass == 'c19'){
		jQuery('#color').attr('href','assets/color19.css');
								
			} else if(myClass == 'c20'){
		jQuery('#color').attr('href','assets/color20.css');
								
			}  else if(myClass == 'c21'){
		jQuery('#color').attr('href','assets/color21.css');
								
			}  else if(myClass == 'c22'){
		jQuery('#color').attr('href','assets/color22.css');
								
			}  else if(myClass == 'c23'){
		jQuery('#color').attr('href','assets/color23.css');
								
			}  else if(myClass == 'c24'){
		jQuery('#color').attr('href','assets/color24.css');
								
			}  else if(myClass == 'c25'){
		jQuery('#color').attr('href','assets/color25.css');
								
			}   else if(myClass == 'c26'){
		jQuery('#color').attr('href','assets/color26.css');
								
			}
			  else if(myClass == 'c27'){
		jQuery('#color').attr('href','assets/color27.css');
								
			}
			  								
	});
	// Heading  Font and CSS Changes 
	
		
	jQuery('#cfont').change(function(){
		var fontName = jQuery('#cfont').val();
		if(fontName == 'default'){
			jQuery('#customFont').attr('href','css/typography.css');
		}else if(fontName == 'cardo'){
			jQuery('#customFont').attr('href','css/cardo.css');
			} else if(fontName == 'IMFell'){
			jQuery('#customFont').attr('href','css/IMFell.css');
		} else if(fontName == 'Josefin'){
			jQuery('#customFont').attr('href','css/Josefin.css');
		}  else if(fontName == 'OpenSansCondensed'){
			jQuery('#customFont').attr('href','css/OpenSansCondensed.css');
		}   else if(fontName == 'OpenSans'){
			jQuery('#customFont').attr('href','css/OpenSans.css');
		} else if(fontName == 'Vollkorn'){
			jQuery('#customFont').attr('href','css/Vollkorn.css');
		} else if(fontName == 'DroidSans'){
			jQuery('#customFont').attr('href','css/DroidSans.css');
		}
		else if(fontName == 'cabin'){
			jQuery('#customFont').attr('href','css/cabin.css');
		}else {
			jQuery('#customFont').attr('href','css/typography.css');
		}
	});
	
	
	// Content Font and CSS Changes 
	jQuery('.open-buttton1').click(function(){
	
		if(jQuery('.open-buttton1').hasClass('closed')){
			jQuery(this).parent('.settings-panel1').stop().animate({left:225},400);
			jQuery(this).removeClass('closed').addClass('opened');
		} else {
			jQuery(this).parent('.settings-panel1').stop().animate({left:0},400);
			jQuery(this).removeClass('opened').addClass('closed');
		}
	});
	
	});
	
jQuery('.settings-panel1 .bg_patterns ul li').click(function(){
		var thisBGimg = jQuery(this).css('background-image');
		jQuery('body').css('background-image', thisBGimg);
	});


