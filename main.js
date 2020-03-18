$(document).ready(function() {
    $('button').on('click', function(e) {
        console.log('e', e.target.innerHTML);
    });
});

var displayValue = '0';   
    $('.answer').text(displayValue);
 
    $('.calc-btn').each(function(index, key){       
        $(this).click(function(e){
            if(displayValue == '0') displayValue = '';
            if($(this).text() == 'C')
            {
                displayValue = '0';
                $('.answer').text(displayValue);
            }
            else if($(this).text() == '=')
            {
                try
                {
                    displayValue = eval(displayValue);
                    $('.answer').text(displayValue);
                    displayValue = '0';
                }
                catch (e)
                {
                    displayValue = '0';
                    $('.answer').text('ERROR');
                }               
            }
            else
            {
                displayValue += $(this).text();
                $('.answer').text(displayValue);
            }
            e.preventDefault()
        })
    })