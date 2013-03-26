/******************************************************************************\
 * IPMDAT_custom.js                                                           *
 * -------------------------------------------------------------------------- *
 * This file contains the custom code for the IPMDAT project.                 *
\******************************************************************************/

/***********************************************\
 * Save_Cookie                                 *
 * ------------------------------------------- *
 * cookieData (array of saved data)            *
 * stepNumber (current step number on save)    *
 * completedSteps (array of completed step #'s *
\***********************************************/
function Save_Cookie(cookieData, stepNumber, completedSteps){
    var name = $('#cookie_name').val(),
        savedData = $.JSONCookie(name),
        cookieArray = {
            // Populate with all values
        };

    for(var i=0; i<completedSteps.length; i++){
        if(completedSteps[i] === "1"){
            if(stepNumber === "stepOne"){
                // Entering NEW data from cookieData
            }else{
                // Recall OLD data from savedData
            }
        }else if(completedSteps[i] === "2"){
            if(stepNumber === "stepTwo"){
                // Entering NEW data from cookieData
            }else{
                // Recall OLD data from savedData
            }
        }else if(completedSteps[i] === "3"){
            if(stepNumber === "stepThree"){
                // Entering New data from cookieData
            }else{
                // Recall OLD data from savedData
            }
        }
    }
    $.JSONCookie(name, cookieArray, {path: '/'});
};
/***********************************************\
 * Check_Available_Steps                       *
 * ------------------------------------------- *
 * cookieData (array of saved data)            *
 * completedSteps (array of completed step #'s *
 * currentStep (integer)                       *
\***********************************************/
function Check_Available_Steps(cookieData, completedSteps, currentStep){
    // Clear Forward/Back Nav Bars
    if($('#content_nav_forward').hasClass('content_nav_base_active')){
        $('#content_nav_forward').removeClass('content_nav_base_active').addClass('content_nav_base_inactive');
    }
    if($('#content_nav_back').hasClass('content_nav_base_active')){
        $('#content_nav_back').removeClass('content_nav_base_active').addClass('content_nav_base_inactive');
    }

    // Unbind Recurring Buttons
    $('#content_nav_forward').unbind('click');
    $('#content_nav_back').unbind('click');
    $('#content_progress_bar_one').unbind('click');
    $('#content_progress_bar_two').unbind('click');
    $('#content_progress_bar_three').unbind('click');
    $('#content_progress_bar_four').unbind('click');
    $('#content_progress_bar_five').unbind('click');

    // Control Step Progress
    for(var i=0; i<completedSteps.length; i++){
        if(completedSteps[i] === "1"){
            // One
            if($('#content_progress_bar_one').hasClass('progress_bar_active')){
                $('#content_progress_bar_one').removeClass('progress_bar_active');
            }
            if($('#content_progress_bar_one').hasClass('progress_bar_inactive')){
                $('#content_progress_bar_one').removeClass('progress_bar_inactive');
            }
            if($('#content_progress_bar_one').hasClass('progress_bar_available')){
            }else{
                $('#content_progress_bar_one').addClass('progress_bar_available');
            }

            // Two
            if($('#content_progress_bar_two').hasClass('progress_bar_active')){
                $('#content_progress_bar_two').removeClass('progress_bar_active');
            }
            if($('#content_progress_bar_two').hasClass('progress_bar_inactive')){
                $('#content_progress_bar_two').removeClass('progress_bar_inactive');
            }
            if($('#content_progress_bar_two').hasClass('progress_bar_available')){
            }else{
                $('#content_progress_bar_two').addClass('progress_bar_available');
            }
        }
        if(completedSteps[i] === "2"){
            // Three
            if($('#content_progress_bar_three').hasClass('progress_bar_active')){
                $('#content_progress_bar_three').removeClass('progress_bar_active');
            }
            if($('#content_progress_bar_three').hasClass('progress_bar_inactive')){
                $('#content_progress_bar_three').removeClass('progress_bar_inactive');
            }
            if($('#content_progress_bar_three').hasClass('progress_bar_available')){
            }else{
                $('#content_progress_bar_three').addClass('progress_bar_available');
            }
        }
        if(completedSteps[i] === "3"){
            // Four
            if($('#content_progress_bar_four').hasClass('progress_bar_active')){
                $('#content_progress_bar_four').removeClass('progress_bar_active');
            }
            if($('#content_progress_bar_four').hasClass('progress_bar_inactive')){
                $('#content_progress_bar_four').removeClass('progress_bar_inactive');
            }
            if($('#content_progress_bar_four').hasClass('progress_bar_available')){
            }else{
                $('#content_progress_bar_four').addClass('progress_bar_available');
            }
        }
        if(completedSteps[i] === "4"){
        }
        if(completedSteps[i] === "5"){
        }
    }

    // Fire Correct Step
    // Also - we need to clear the fields in preparation for input of fields.
    // This needs to be done even if the step is completed. The user could have
    //      backed a step (only partially completed). The fields that are
    //      completed will be automatically filled on step function fired.
    if(currentStep === "1"){
        // Clear Questions
        $('#content_step_one_question_one').prop('selectedIndex', -1);
        $('#content_step_one_question_two').empty();
        if($('#content_step_one_question_three_box_one').is(':checked')){
            $('#content_step_one_question_three_box_one').prop('checked', false);
        }
        if($('#content_step_one_question_three_box_two').is(':checked')){
            $('#content_step_one_question_three_box_two').prop('checked', false);
        }
        if($('#content_step_one_question_three_box_three').is(':checked')){
            $('#content_step_one_question_three_box_three').prop('checked', false);
        }

        // Progress Bars
        if($('#content_progress_bar_one').hasClass('progress_bar_inactive')){
            $('#content_progress_bar_one').removeClass('progress_bar_inactive');
        }
        if($('#content_progress_bar_one').hasClass('progress_bar_available')){
            $('#content_progress_bar_one').removeClass('progress_bar_available');
        }
        if($('#content_progress_bar_one').hasClass('progress_bar_active')){
        }else{
            $('#content_progress_bar_one').addClass('progress_bar_active');
        }
        JSON_Cookie_Step_One(cookieData, completedSteps, currentStep);
    } else if(currentStep === "2"){
        // Clear Questions
        $('#content_step_two_scientific_name').prop('selectedIndex', -1);
        $('#content_step_two_common_name').prop('selectedIndex', -1);
        $('#content_step_two_scale').prop('value', "");
        $('#content_step_two_weed_management_area').prop('value', "");
        $('#content_step_two_conservation_target_impacted').prop('value', "");
        $('#content_step_two_project_area_name_and_size').prop('value', "");
        $('#content_step_two_property_owner').prop('value', "");
        $('#content_step_two_ipmdat_date_assessed').prop('value', "");
        $('#content_step_two_assessors').prop('value', "");
        $('#content_step_two_reviewers').prop('value', "");

        // Progress Bars
        if($('#content_progress_bar_two').hasClass('progress_bar_inactive')){
            $('#content_progress_bar_two').removeClass('progress_bar_inactive');
        }
        if($('#content_progress_bar_two').hasClass('progress_bar_available')){
            $('#content_progress_bar_two').removeClass('progress_bar_available');
        }
        if($('#content_progress_bar_two').hasClass('progress_bar_active')){
        }else{
            $('#content_progress_bar_two').addClass('progress_bar_active');
        }
        JSON_Cookie_Step_Two(cookieData, completedSteps, currentStep);
    } else if(currentStep === "3"){
        // Clear Questions
        $('#content_step_three_main_category').prop('selectedIndex', -1);

        // Progress Bars
        if($('#content_progress_bar_three').hasClass('progress_bar_inactive')){
            $('#content_progress_bar_three').removeClass('progress_bar_inactive');
        }
        if($('#content_progress_bar_three').hasClass('progress_bar_available')){
            $('#content_progress_bar_three').removeClass('progress_bar_available');
        }
        if($('#content_progress_bar_three').hasClass('progress_bar_active')){
        }else{
            $('#content_progress_bar_three').addClass('progress_bar_active');
        }
        JSON_Cookie_Step_Three(cookieData, completedSteps, currentStep);
    } else if(currentStep === "4"){

    } else if(currentStep === "5"){

    }
};

function IPMDAT_Init(){

};
