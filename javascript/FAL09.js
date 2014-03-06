

/* video Player */
function sendToPlayer(movieURL) {
        $("videoPlayer").SwitchVideo(movieURL);
     }

/* email message */
function showProgress(messageID)
{
	$(messageID).style.visibility ='visible';
	$(messageID).innerHTML =('<img src="/Images/gfx_loader_small.gif"/>Sending, please wait.');
}

function slideTo (workID,exampleIndex,navigatorID,length,isfeatured) {
		exampleContainer = "exampleContainer_"+workID;
		informationContainer ="informationContainer_"+workID;
		currentLeftPostion = $(exampleContainer).style.left;
		newExampleLeftPosition = (exampleIndex)*980;
		newInfoBottomPosition = (exampleIndex)*400;
				
		i= 0;
		for( i; i<length; i++){
			navigatorDivID = "navigator_"+workID+"_"+i;
			if(i != exampleIndex ){
			new Effect.Opacity(navigatorDivID,{ from: 1, to: 1, duration: 0.5 });
			}else{
			new Effect.Opacity(navigatorDivID,{ from: 1.0, to: 0.5, duration: 0.4 });
			}
		}
		
		
		
		new Effect.Move(exampleContainer, { x: -newExampleLeftPosition, y: 0, mode: 'absolute' });
		
		
		if (isfeatured){
		new Effect.Move(informationContainer, { x: 0, y: -newInfoBottomPosition, mode: 'absolute' ,duration: .8});
		}
};

function showExampleInfo(exampleinfoID){

		new Effect.Appear(exampleinfoID, {duration: .5});

};

function hideExampleInfo(exampleinfoID){
	if($(exampleinfoID).style.display !='none'){
		new Effect.Fade(exampleinfoID, {duration: .5});
	}
};


function showComments(bodyOfWorkID, linkID){
	hiddenComments = $('bodyOfWork_'+bodyOfWorkID+'_hiddenComments');
	new Effect.Appear(hiddenComments);
	$(linkID).hide();
	
}


function showCommentForm(commentFormID){
	new Effect.Appear(commentFormID);
	
	};
	
function hideCommentForm(commentFormID){
	new Effect.BlindUp(commentFormID);
	
	};
	
function highlightPost(postID){
	new Effect.Pulsate(postID, {pulses: 1, duration: .5 ,from: 0.5});
	//new Effect.Highlight(postID, {startcolor: '#000000', endcolor: '#555555', restorecolor:'#000000'});	
};





