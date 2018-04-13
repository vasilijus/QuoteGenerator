jQuery(document).ready(function($) {
	
	
	 $('#btnSubmit').click( function(){
	
		var randomNumber = Math.floor(Math.random() * quotes.length);		
		
		$('#displayQuotes').html(quotes[randomNumber]);
		
	});
	
	
	var quotes = [
		"Do you want to know who you are? Don’t ask. Act! Action will delineate and define you.",
		"The path to success is to take massive, determined actions.",
		"An idea not coupled with action will never get any bigger than the brain cell it occupied.",
		"God provides the wind, but man must raise the sails." ,
		"Be content to act, and leave the talking to others.",
		"People may doubt what you say, but they will believe what you do.",
		"Let your performance do the thinking.",
		"Well done is better than well said.",
		"Inaction breeds doubt and fear. Action breeds confidence and courage. If you want to conquer fear, do not sit home and think about it. Go out and get busy.",
		"Action is the antidote to despair.",
		"Outstanding people have one thing in common: an absolute sense of mission.",
		"There is only one proof of ability—action.",
		"Action is a great restorer and builder of confidence. Inaction is not only the result, but the cause, of fear.",
	];
	
});