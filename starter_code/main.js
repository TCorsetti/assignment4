// Prevent default page-top reload 

$('.readmore a, .readless a, .readmore2 a, .readless2 a').click(function(event){
    event.preventDefault()
})

// Interactive code for first blog post

$('.readmore a').click(function(){
    $('.hide').slideDown()    
})

$('.readmore a').click(function(){
    $('.readmore a').hide()    
})

$('.readless a').click(function(){
    $('.hide').slideUp()
    $('.readmore a').css('display', 'block')
})

// Extra Practice: Amended HTML and CSS to create same elements/objects in second blog post and then adapted the jQuery code to replicate the functionality. 

$('.readmore2 a').click(function(){
    $('.hide2').slideDown()    
})

$('.readmore2 a').click(function(){
    $('.readmore2 a').hide()    
})

$('.readless2 a').click(function(){
    $('.hide2').slideUp()
    $('.readmore2 a').css('display', 'block')
})

// Sidebar interaction. Added a "Read less" link for user to click on to collapse .hide content. 

$('.learnmore').click(function(){
    $('#learnmoretext').slideDown()
    $('.readless3').slideDown()    
})

$('.learnmore').click(function(){
    $('.learnmore').hide()    
})

$('.readless3').click(function(){
    $('#learnmoretext').slideUp()
    $('.readless3').slideUp()
})