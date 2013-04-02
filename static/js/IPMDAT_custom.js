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
            // TODO: UPDATE HERE
            // PROJECT BACKGROUND (STEP 1)
            projectBackgroundAssessors: null,
            projectBackgroundAssessorsDate: null,
            projectBackgroundScientificName: null,
            projectBackgroundCommonName: null,
            projectBackgroundScale: null,
            projectBackgroundPRISMWMA: null,
            projectBackgroundConservationTargetImpacted: null,
            projectBackgroundProjectAreaName: null,
            projectBackgroundProjectAreaSize: null,
            projectBackgroundPropertyOwners: null,
            projectBackgroundProjectState: null,
            projectBackgroundProjectCounty: null,
            projectBackgroundProjectCoordX: null,
            projectBackgroundProjectCoordY: null,
            projectBackgroundProjectCoordSystem: null,
            projectBackgroundProjectGoal: null,
            projectBackgroundNumberOfYearsToComplete: null,
            projectBackgroundStartDate: null,
            projectBackgroundEndDate: null,
            projectBackgroundOngoingProject: null,
            projectBackgroundControlRequired: null,
            projectBackgroundGrossInvadedArea: null,
            projectBackgroundNetInvadedArea: null,
            projectBackgroundNumberOfOccurances: null,
            projectBackgroundImapShareResults: null,
            projectBackgroundImapAccount: null
            // STRATEGY SELECTION (STEP 2)
            // ERADICATION (STEP 3)
            // CONTAINMENT (STEP 4)
            // SUPPRESSION (STEP 5)
            // RECOMMENDATION SUMMARY (STEP 6)
        };

    for(var i=0; i<completedSteps.length; i++){
        if(completedSteps[i] === "1.1"){
            if(stepNumber === "1.1"){
                // Entering NEW data from cookieData
                cookieArray.projectBackgroundAssessors = cookieData.projectBackgroundAssessors;
                cookieArray.projectBackgroundAssessorsDate = cookieData.projectBackgroundAssessorsDate;
                cookieArray.projectBackgroundScientificName = cookieData.projectBackgroundScientificName;
                cookieArray.projectBackgroundCommonName = cookieData.projectBackgroundCommonName;
                cookieArray.projectBackgroundScale = cookieData.projectBackgroundScale;
                cookieArray.projectBackgroundPRISMWMA = cookieData.projectBackgroundPRISMWMA;
                cookieArray.projectBackgroundConservationTargetImpacted = cookieData.projectBackgroundConservationTargetImpacted;
                cookieArray.projectBackgroundProjectAreaName = cookieData.projectBackgroundProjectAreaName;
                cookieArray.projectBackgroundProjectAreaSize = cookieData.projectBackgroundProjectAreaSize;
                cookieArray.projectBackgroundPropertyOwners = cookieData.projectBackgroundPropertyOwners;
                cookieArray.projectBackgroundProjectState = cookieData.projectBackgroundProjectState;
                cookieArray.projectBackgroundProjectCounty = cookieData.projectBackgroundProjectCounty;
                cookieArray.projectBackgroundProjectCoordX = cookieData.projectBackgroundProjectCoordX;
                cookieArray.projectBackgroundProjectCoordY = cookieData.projectBackgroundProjectCoordY;
                cookieArray.projectBackgroundProjectCoordSystem = cookieData.projectBackgroundProjectCoordSystem;
                cookieArray.projectBackgroundProjectGoal = cookieData.projectBackgroundProjectGoal;
            }else{
                // Recall OLD data from savedData
                cookieArray.projectBackgroundAssessors = savedData.projectBackgroundAssessors;
                cookieArray.projectBackgroundAssessorsDate = savedData.projectBackgroundAssessorsDate;
                cookieArray.projectBackgroundScientificName = savedData.projectBackgroundScientificName;
                cookieArray.projectBackgroundCommonName = savedData.projectBackgroundCommonName;
                cookieArray.projectBackgroundScale = savedData.projectBackgroundScale;
                cookieArray.projectBackgroundPRISMWMA = savedData.projectBackgroundPRISMWMA;
                cookieArray.projectBackgroundConservationTargetImpacted = savedData.projectBackgroundConservationTargetImpacted;
                cookieArray.projectBackgroundProjectAreaName = savedData.projectBackgroundProjectAreaName;
                cookieArray.projectBackgroundProjectAreaSize = savedData.projectBackgroundProjectAreaSize;
                cookieArray.projectBackgroundPropertyOwners = savedData.projectBackgroundPropertyOwners;
                cookieArray.projectBackgroundProjectState = savedData.projectBackgroundProjectState;
                cookieArray.projectBackgroundProjectCounty = savedData.projectBackgroundProjectCounty;
                cookieArray.projectBackgroundProjectCoordX = savedData.projectBackgroundProjectCoordX;
                cookieArray.projectBackgroundProjectCoordY = savedData.projectBackgroundProjectCoordY;
                cookieArray.projectBackgroundProjectCoordSystem = savedData.projectBackgroundProjectCoordSystem;
                cookieArray.projectBackgroundProjectGoal = savedData.projectBackgroundProjectGoal;
            }
        }else if(completedSteps[i] === "1.2"){
            if(stepNumber === "1.2"){
                // Entering NEW data from cookieData
                cookieArray.projectBackgroundNumberOfYearsToComplete = cookieData.projectBackgroundNumberOfYearsToComplete;
                cookieArray.projectBackgroundStartDate = cookieData.projectBackgroundStartDate;
                cookieArray.projectBackgroundEndDate = cookieData.projectBackgroundEndDate;
                cookieArray.projectBackgroundOngoingProject = cookieData.projectBackgroundOngoingProject;
                cookieArray.projectBackgroundControlRequired = cookieData.projectBackgroundControlRequired;
            }else{
                // Recall OLD data from savedData
                cookieArray.projectBackgroundNumberOfYearsToComplete = savedData.projectBackgroundNumberOfYearsToComplete;
                cookieArray.projectBackgroundStartDate = savedData.projectBackgroundStartDate;
                cookieArray.projectBackgroundEndDate = savedData.projectBackgroundEndDate;
                cookieArray.projectBackgroundOngoingProject = savedData.projectBackgroundOngoingProject;
                cookieArray.projectBackgroundControlRequired = savedData.projectBackgroundControlRequired;
            }
        }else if(completedSteps[i] === "1.3"){
            if(stepNumber === "1.3"){
                // Entering NEW data from cookieData
                cookieArray.projectBackgroundGrossInvadedArea = cookieData.projectBackgroundGrossInvadedArea;
                cookieArray.projectBackgroundNetInvadedArea = cookieData.projectBackgroundNetInvadedArea;
                cookieArray.projectBackgroundNumberOfOccurances = cookieData.projectBackgroundNumberOfOccurances;
            }else{
                // Recall OLD data from savedData
                cookieArray.projectBackgroundGrossInvadedArea = savedData.projectBackgroundGrossInvadedArea;
                cookieArray.projectBackgroundNetInvadedArea = savedData.projectBackgroundNetInvadedArea;
                cookieArray.projectBackgroundNumberOfOccurances = savedData.projectBackgroundNumberOfOccurances;
            }
        }else if(completedSteps[i] === "1.4"){
            if(stepNumber === "1.4"){
                // Entering NEW data from cookieData
                cookieArray.projectBackgroundImapShareResults = cookieData.projectBackgroundImapShareResults;
                cookieArray.projectBackgroundImapAccount = cookieData.projectBackgroundImapAccount;
            }else{
                // Recall OLD data from savedData
                cookieArray.projectBackgroundImapShareResults = savedData.projectBackgroundImapShareResults;
                cookieArray.projectBackgroundImapAccount = savedData.projectBackgroundImapAccount;
            }
        }else if(completedSteps[i] === "2"){
            // TODO: UPDATE HERE
            if(stepNumber === "strategySelection"){
                // Entering NEW data from cookieData
            }else{
                // Recall OLD data from savedData
            }
        }else if(completedSteps[i] === "3"){
            // TODO: UPDATE HERE
            if(stepNumber === "eradication"){
                // Entering New data from cookieData
            }else{
                // Recall OLD data from savedData
            }
        }else if(completedSteps[i] === "4"){
            // TODO: UPDATE HERE
            if(stepNumber === "containment"){
                // Entering New data from cookieData
            }else{
                // Recall OLD data from savedData
            }
        }else if(completedSteps[i] === "5"){
            // TODO: UPDATE HERE
            if(stepNumber === "suppression"){
                // Entering New data from cookieData
            }else{
                // Recall OLD data from savedData
            }
        }else if(completedSteps[i] === "6"){
            // TODO: UPDATE HERE
            if(stepNumber === "recommendationSummary"){
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
    $('#content_progress_bar_project_background').unbind('click');
    $('#content_step_project_background_substep_one').unbind('click');
    $('#content_step_project_background_substep_two').unbind('click');
    $('#content_step_project_background_substep_three').unbind('click');
    $('#content_step_project_background_substep_four').unbind('click');
    // TODO: UPDATE HERE
    $('#content_progress_bar_strategy_selection').unbind('click');
    // TODO: UPDATE HERE
    $('#content_progress_bar_eradication').unbind('click');
    // TODO: UPDATE HERE
    $('#content_progress_bar_containment').unbind('click');
    // TODO: UPDATE HERE
    $('#content_progress_bar_suppression').unbind('click');
    // TODO: UPDATE HERE
    $('#content_progress_bar_recommendation_summary').unbind('click');

    // Control Step Progress
    // PROJECT BACKGROUND (STEP 1) - Always available
    if($('#content_progress_bar_project_background').hasClass('progress_bar_active')){
        $('#content_progress_bar_project_background').removeClass('progress_bar_active');
    }
    if($('#content_progress_bar_project_background').hasClass('progress_bar_inactive')){
        $('#content_progress_bar_project_background').removeClass('progress_bar_inactive');
    }
    if($('#content_progress_bar_project_background').hasClass('progress_bar_available')){
    }else{
        $('#content_progress_bar_project_background').addClass('progress_bar_available');
    }
    for(var i=0; i<completedSteps.length; i++){
        if(completedSteps[i] === "1.1"){
            if($('#content_step_project_background_substep_two').hasClass('progress_bar_active')){
                $('#content_step_project_background_substep_two').removeClass('progress_bar_active');
            }
            if($('#content_step_project_background_substep_two').hasClass('progress_bar_inactive')){
                $('#content_step_project_background_substep_two').removeClass('progress_bar_inactive');
            }
            if($('#content_step_project_background_substep_two').hasClass('progress_bar_available')){
            }else{
                $('#content_step_project_background_substep_two').addClass('progress_bar_available');
            }
        }
        if(completedSteps[i] === "1.2"){
            if($('#content_step_project_background_substep_three').hasClass('progress_bar_active')){
                $('#content_step_project_background_substep_three').removeClass('progress_bar_active');
            }
            if($('#content_step_project_background_substep_three').hasClass('progress_bar_inactive')){
                $('#content_step_project_background_substep_three').removeClass('progress_bar_inactive');
            }
            if($('#content_step_project_background_substep_three').hasClass('progress_bar_available')){
            }else{
                $('#content_step_project_background_substep_three').addClass('progress_bar_available');
            }
        }
        if(completedSteps[i] === "1.3"){
            if($('#content_step_project_background_substep_four').hasClass('progress_bar_active')){
                $('#content_step_project_background_substep_four').removeClass('progress_bar_active');
            }
            if($('#content_step_project_background_substep_four').hasClass('progress_bar_inactive')){
                $('#content_step_project_background_substep_four').removeClass('progress_bar_inactive');
            }
            if($('#content_step_project_background_substep_four').hasClass('progress_bar_available')){
            }else{
                $('#content_step_project_background_substep_four').addClass('progress_bar_available');
            }
        }
        if(completedSteps[i] === "1.4"){
            // STRATEGY SELECTION (STEP 2)
            if($('#content_progress_bar_strategy_selection').hasClass('progress_bar_active')){
                $('#content_progress_bar_strategy_selection').removeClass('progress_bar_active');
            }
            if($('#content_progress_bar_strategy_selection').hasClass('progress_bar_inactive')){
                $('#content_progress_bar_strategy_selection').removeClass('progress_bar_inactive');
            }
            if($('#content_progress_bar_strategy_selection').hasClass('progress_bar_available')){
            }else{
                $('#content_progress_bar_strategy_selection').addClass('progress_bar_available');
            }
        }
        if(completedSteps[i] === "2"){
            // TODO: UPDATE HERE
            // ERADICATION (STEP 3)
            if($('#content_progress_bar_eradication').hasClass('progress_bar_active')){
                $('#content_progress_bar_eradication').removeClass('progress_bar_active');
            }
            if($('#content_progress_bar_eradication').hasClass('progress_bar_inactive')){
                $('#content_progress_bar_eradication').removeClass('progress_bar_inactive');
            }
            if($('#content_progress_bar_eradication').hasClass('progress_bar_available')){
            }else{
                $('#content_progress_bar_eradication').addClass('progress_bar_available');
            }
        }
        if(completedSteps[i] === "3"){
            // TODO: UPDATE HERE
            // CONTAINMENT (STEP 4)
            if($('#content_progress_bar_containment').hasClass('progress_bar_active')){
                $('#content_progress_bar_containment').removeClass('progress_bar_active');
            }
            if($('#content_progress_bar_containment').hasClass('progress_bar_inactive')){
                $('#content_progress_bar_containment').removeClass('progress_bar_inactive');
            }
            if($('#content_progress_bar_containment').hasClass('progress_bar_available')){
            }else{
                $('#content_progress_bar_containment').addClass('progress_bar_available');
            }
        }
        if(completedSteps[i] === "4"){
            // TODO: UPDATE HERE
            // SUPPRESSION (STEP 5)
            if($('#content_progress_bar_suppression').hasClass('progress_bar_active')){
                $('#content_progress_bar_suppression').removeClass('progress_bar_active');
            }
            if($('#content_progress_bar_suppression').hasClass('progress_bar_inactive')){
                $('#content_progress_bar_suppression').removeClass('progress_bar_inactive');
            }
            if($('#content_progress_bar_suppression').hasClass('progress_bar_available')){
            }else{
                $('#content_progress_bar_suppression').addClass('progress_bar_available');
            }
        }
        if(completedSteps[i] === "5"){
            // TODO: UPDATE HERE
            // RECOMMENDATION SUMMARY (STEP 6)
            if($('#content_progress_bar_recommendation_summary').hasClass('progress_bar_active')){
                $('#content_progress_bar_recommendation_summary').removeClass('progress_bar_active');
            }
            if($('#content_progress_bar_recommendation_summary').hasClass('progress_bar_inactive')){
                $('#content_progress_bar_recommendation_summary').removeClass('progress_bar_inactive');
            }
            if($('#content_progress_bar_recommendation_summary').hasClass('progress_bar_available')){
            }else{
                $('#content_progress_bar_recommendation_summary').addClass('progress_bar_available');
            }
        }
    }

    // Fire Correct Step
    // Also - we need to clear the fields in preparation for input of fields.
    // This needs to be done even if the step is completed. The user could have
    //      backed a step (only partially completed). The fields that are
    //      completed will be automatically filled on step function fired.
    if((currentStep === "1.1")||(currentStep === "1.2")||(currentStep === "1.3")||(currentStep === "1.4")){
        // Main Progress Bars
        if($('#content_progress_bar_project_background').hasClass('progress_bar_inactive')){
            $('#content_progress_bar_project_background').removeClass('progress_bar_inactive');
        }
        if($('#content_progress_bar_project_background').hasClass('progress_bar_available')){
            $('#content_progress_bar_project_background').removeClass('progress_bar_available');
        }
        if($('#content_progress_bar_project_background').hasClass('progress_bar_active')){
        }else{
            $('#content_progress_bar_project_background').addClass('progress_bar_active');
        }
        
        // Clear Substeps
        // TODO: Check if necessary

        // SubStep Progress Bars & Clear Questions
        if(currentStep === "1.1"){
            // SubStep Progress Bar
            if($('#content_step_project_background_substep_one').hasClass('content_substep_inactive')){
                $('#content_step_project_background_substep_one').removeClass('progress_bar_inactive');
            }
            if($('#content_step_project_background_substep_one').hasClass('progress_bar_available')){
                $('#content_step_project_background_substep_one').removeClass('progress_bar_inactive');
            }
            if($('#content_step_project_background_substep_one').hasClass('progress_bar_active')){
            }else{
                $('#content_step_project_background_substep_one').addClass('progress_bar_active');
            }
            // Clear Questions
            // TODO: UPDATE HERE
        }else if(currentStep === "1.2"){
            // SubStep Progress Bar
            if($('#content_step_project_background_substep_two').hasClass('content_substep_inactive')){
                $('#content_step_project_background_substep_two').removeClass('progress_bar_inactive');
            }
            if($('#content_step_project_background_substep_two').hasClass('progress_bar_available')){
                $('#content_step_project_background_substep_two').removeClass('progress_bar_inactive');
            }
            if($('#content_step_project_background_substep_two').hasClass('progress_bar_active')){
            }else{
                $('#content_step_project_background_substep_two').addClass('progress_bar_active');
            }
            // Clear Questions
            // TODO: UPDATE HERE
        }else if(currentStep === "1.3"){
            // SubStep Progress Bar
            if($('#content_step_project_background_substep_three').hasClass('content_substep_inactive')){
                $('#content_step_project_background_substep_three').removeClass('progress_bar_inactive');
            }
            if($('#content_step_project_background_substep_three').hasClass('progress_bar_available')){
                $('#content_step_project_background_substep_three').removeClass('progress_bar_inactive');
            }
            if($('#content_step_project_background_substep_three').hasClass('progress_bar_active')){
            }else{
                $('#content_step_project_background_substep_three').addClass('progress_bar_active');
            }
            // Clear Questions
            // TODO: UPDATE HERE
        }else if(currentStep === "1.4"){
            // SubStep Progress Bar
            if($('#content_step_project_background_substep_four').hasClass('content_substep_inactive')){
                $('#content_step_project_background_substep_four').removeClass('progress_bar_inactive');
            }
            if($('#content_step_project_background_substep_four').hasClass('progress_bar_available')){
                $('#content_step_project_background_substep_four').removeClass('progress_bar_inactive');
            }
            if($('#content_step_project_background_substep_four').hasClass('progress_bar_active')){
            }else{
                $('#content_step_project_background_substep_four').addClass('progress_bar_active');
            }
            // Clear Questions
            // TODO: UPDATE HERE
        }
        
        // Execute Step Function
        JSON_Cookie_Step_Project_Background(cookieData, completedSteps, currentStep);
    }else if(currentStep === "strategySelection"){
        // Clear Questions
        // TODO: UPDATE HERE
        // Progress Bars
        if($('#content_progress_bar_strategy_selection').hasClass('progress_bar_inactive')){
            $('#content_progress_bar_strategy_selection').removeClass('progress_bar_inactive');
        }
        if($('#content_progress_bar_strategy_selection').hasClass('progress_bar_available')){
            $('#content_progress_bar_strategy_selection').removeClass('progress_bar_available');
        }
        if($('#content_progress_bar_strategy_selection').hasClass('progress_bar_active')){
        }else{
            $('#content_progress_bar_strategy_selection').addClass('progress_bar_active');
        }
        JSON_Cookie_Step_Strategy_Selection(cookieData, completedSteps, currentStep);
    } else if(currentStep === "eradication"){
        // Clear Questions
        // TODO: UPDATE HERE
        // Progress Bars
        if($('#content_progress_bar_eradication').hasClass('progress_bar_inactive')){
            $('#content_progress_bar_eradication').removeClass('progress_bar_inactive');
        }
        if($('#content_progress_bar_eradication').hasClass('progress_bar_available')){
            $('#content_progress_bar_eradication').removeClass('progress_bar_available');
        }
        if($('#content_progress_bar_eradication').hasClass('progress_bar_active')){
        }else{
            $('#content_progress_bar_eradication').addClass('progress_bar_active');
        }
        JSON_Cookie_Step_Eradication(cookieData, completedSteps, currentStep);
    } else if(currentStep === "containment"){
        // Clear Questions
        // TODO: UPDATE HERE
        // Progress Bars
        if($('#content_progress_bar_containment').hasClass('progress_bar_inactive')){
            $('#content_progress_bar_containment').removeClass('progress_bar_inactive');
        }
        if($('#content_progress_bar_containment').hasClass('progress_bar_available')){
            $('#content_progress_bar_containment').removeClass('progress_bar_available');
        }
        if($('#content_progress_bar_containment').hasClass('progress_bar_active')){
        }else{
            $('#content_progress_bar_containment').addClass('progress_bar_active');
        }
        JSON_Cookie_Step_Containment(cookieData, completedSteps, currentStep);
    } else if(currentStep === "suppression"){
        // Clear Questions
        // TODO: UPDATE HERE
        // Progress Bars
        if($('#content_progress_bar_suppression').hasClass('progress_bar_inactive')){
            $('#content_progress_bar_suppression').removeClass('progress_bar_inactive');
        }
        if($('#content_progress_bar_suppression').hasClass('progress_bar_available')){
            $('#content_progress_bar_suppression').removeClass('progress_bar_available');
        }
        if($('#content_progress_bar_suppression').hasClass('progress_bar_active')){
        }else{
            $('#content_progress_bar_suppression').addClass('progress_bar_active');
        }
        JSON_Cookie_Step_Suppression(cookieData, completedSteps, currentStep);
    } else if(currentStep === "recommendationSummary"){
        // Clear Questions
        // TODO: UPDATE HERE
        // Progress Bars
        if($('#content_progress_bar_recommendation_summary').hasClass('progress_bar_inactive')){
            $('#content_progress_bar_recommendation_summary').removeClass('progress_bar_inactive');
        }
        if($('#content_progress_bar_recommendation_summary').hasClass('progress_bar_available')){
            $('#content_progress_bar_recommendation_summary').removeClass('progress_bar_available');
        }
        if($('#content_progress_bar_recommendation_summary').hasClass('progress_bar_active')){
        }else{
            $('#content_progress_bar_recommendation_summary').addClass('progress_bar_active');
        }
        JSON_Cookie_Step_Recommendation_Summary(cookieData, completedSteps, currentStep);
    }
};

/***********************************************\
 * IPMDAT_Init()                               *
 * ------------------------------------------- *
 * Initial function being fired on page        *
\***********************************************/
function IPMDAT_Init(){
    // Declare Variables
    // TODO: UPDATE HERE
    var cookieData = {
            // PROJECT BACKGROUND (STEP 1)
            projectBackgroundAssessors: null,
            projectBackgroundAssessorsDate: null,
            projectBackgroundScientificName: null,
            projectBackgroundCommonName: null,
            projectBackgroundScale: null,
            projectBackgroundPRISMWMA: null,
            projectBackgroundConservationTargetImpacted: null,
            projectBackgroundProjectAreaName: null,
            projectBackgroundProjectAreaSize: null,
            projectBackgroundPropertyOwners: null,
            projectBackgroundProjectState: null,
            projectBackgroundProjectCounty: null,
            projectBackgroundProjectCoordX: null,
            projectBackgroundProjectCoordY: null,
            projectBackgroundProjectCoordSystem: null,
            projectBackgroundProjectGoal: null,
            projectBackgroundNumberOfYearsToComplete: null,
            projectBackgroundStartDate: null,
            projectBackgroundEndDate: null,
            projectBackgroundOngoingProject: null,
            projectBackgroundControlRequired: null,
            projectBackgroundGrossInvadedArea: null,
            projectBackgroundNetInvadedArea: null,
            projectBackgroundNumberOfOccurances: null,
            projectBackgroundImapShareResults: null,
            projectBackgroundImapAccount: null
            // STRATEGY SELECTION (STEP 2)
            // ERADICATION (STEP 3)
            // CONTAINMENT (STEP 4)
            // SUPPRESSION (STEP 5)
            // RECOMMENDATION SUMMARY (STEP 6)
        },
        completedSteps = [],
        currentStep = "1.1",
        name = $('#cookie_name').val(),
        savedData = $.JSONCookie(name);

    // Assign Functionality to console.log
    $('#console_log').click(function(){
        console.log($.JSONCookie(name));
    });

    // Assign Functionality to Clear Cookie
    // TODO: UPDATE HERE
    $('#clear_cookie').click(function(){
        cookieData = {
            // PROJECT BACKGROUND (STEP 1)
            projectBackgroundAssessors: null,
            projectBackgroundAssessorsDate: null,
            projectBackgroundScientificName: null,
            projectBackgroundCommonName: null,
            projectBackgroundScale: null,
            projectBackgroundPRISMWMA: null,
            projectBackgroundConservationTargetImpacted: null,
            projectBackgroundProjectAreaName: null,
            projectBackgroundProjectAreaSize: null,
            projectBackgroundPropertyOwners: null,
            projectBackgroundProjectState: null,
            projectBackgroundProjectCounty: null,
            projectBackgroundProjectCoordX: null,
            projectBackgroundProjectCoordY: null,
            projectBackgroundProjectCoordSystem: null,
            projectBackgroundProjectGoal: null,
            projectBackgroundNumberOfYearsToComplete: null,
            projectBackgroundStartDate: null,
            projectBackgroundEndDate: null,
            projectBackgroundOngoingProject: null,
            projectBackgroundControlRequired: null,
            projectBackgroundGrossInvadedArea: null,
            projectBackgroundNetInvadedArea: null,
            projectBackgroundNumberOfOccurances: null,
            projectBackgroundImapShareResults: null,
            projectBackgroundImapAccount: null
            // STRATEGY SELECTION (STEP 2)
            // ERADICATION (STEP 3)
            // CONTAINMENT (STEP 4)
            // SUPPRESSION (STEP 5)
            // RECOMMENDATION SUMMARY (STEP 6)
        };
        $.JSONCookie(name, cookieData, {path: '/'});
    });
    
    // Check For Previous Data
    // TODO: UPDATE HERE
    var savedData = $.JSONCookie(name),
        stepFail = false;
    
    //------------------------------------------------------------------------\\
    // Project Background                                                     \\
    //------------------------------------------------------------------------\\
    //projectBackgroundAssessors
    if(savedData.projectBackgroundAssessors !== null){
        cookieData.projectBackgroundAssessors = savedData.projectBackgroundAssessors;
    }else{ stepFail = true; }

    //projectBackgroundAssessorsDate
    if(savedData.projectBackgroundAssessorsDate !== null){
        cookieData.projectBackgroundAssessorsDate = savedData.projectBackgroundAssessorsDate;
    }else{ stepFail = true; }

    //projectBackgroundScientificName
    if(savedData.projectBackgroundScientificName !== null){
        cookieData.projectBackgroundScientificName = savedData.projectBackgroundScientificName;
    }else{ stepFail = true; }

    //projectBackgroundCommonName
    if(savedData.projectBackgroundCommonName !== null){
        cookieData.projectBackgroundCommonName = savedData.projectBackgroundCommonName;
    }else{ stepFail = true; }

    //projectBackgroundScale
    if(savedData.projectBackgroundScale !== null){
        cookieData.projectBackgroundScale = savedData.projectBackgroundScale;
    }else{ stepFail = true; }

    //projectBackgroundPRISMWMA
    if(savedData.projectBackgroundPRISMWMA !== null){
        cookieData.projectBackgroundPRISMWMA = savedData.projectBackgroundPRISMWMA;
    }else{ stepFail = true; }

    //projectBackgroundConservationTargetImpacted
    if(savedData.projectBackgroundConservationTargetImpacted !== null){
        cookieData.projectBackgroundConservationTargetImpacted = savedData.projectBackgroundConservationTargetImpacted;
    }else{ stepFail = true; }

    //projectBackgroundProjectAreaName
    if(savedData.projectBackgroundProjectAreaName !== null){
        cookieData.projectBackgroundProjectAreaName = savedData.projectBackgroundProjectAreaName;
    }else{ stepFail = true; }

    //projectBackgroundProjectAreaSize
    if(savedData.projectBackgroundProjectAreaSize !== null){
        cookieData.projectBackgroundProjectAreaSize = savedData.projectBackgroundProjectAreaSize;
    }else{ stepFail = true; }

    //projectBackgroundPropertyOwners
    if(savedData.projectBackgroundPropertyOwners !== null){
        cookieData.projectBackgroundPropertyOwners = savedData.projectBackgroundPropertyOwners;
    }else{ stepFail = true; }

    //projectBackgroundProjectState
    if(savedData.projectBackgroundProjectState !== null){
        cookieData.projectBackgroundProjectState = savedData.projectBackgroundProjectState;
    }else{ stepFail = true; }

    //projectBackgroundProjectCounty
    if(savedData.projectBackgroundProjectCounty !== null){
        cookieData.projectBackgroundProjectCounty = savedData.projectBackgroundProjectCounty;
    }else{ stepFail = true; }

    //projectBackgroundProjectCoordX
    if(savedData.projectBackgroundProjectCoordX !== null){
        cookieData.projectBackgroundProjectCoordX = savedData.projectBackgroundProjectCoordX;
    }else{ stepFail = true; }

    //projectBackgroundProjectCoordY
    if(savedData.projectBackgroundProjectCoordY !== null){
        cookieData.projectBackgroundProjectCoordY = savedData.projectBackgroundProjectCoordY;
    }else{ stepFail = true; }

    //projectBackgroundProjectCoordSystem
    if(savedData.projectBackgroundProjectCoordSystem !== null){
        cookieData.projectBackgroundProjectCoordSystem = savedData.projectBackgroundProjectCoordSystem;
    }else{ stepFail = true; }

    //projectBackgroundProjectGoal
    if(savedData.projectBackgroundProjectGoal !== null){
        cookieData.projectBackgroundProjectGoal = savedData.projectBackgroundProjectGoal;
    }else{ stepFail = true; }

    
    // 1.1
    if(stepFail === false){
        completedSteps.push("1.1");
    }
    //------------------------------------------------------------------------\\
    // Strategy Selection                                                     \\
    //------------------------------------------------------------------------\\
    // TODO: UPDATE HERE
    //------------------------------------------------------------------------\\
    // Eradication                                                            \\
    //------------------------------------------------------------------------\\
    // TODO: UPDATE HERE
    //------------------------------------------------------------------------\\
    // Containment                                                            \\
    //------------------------------------------------------------------------\\
    // TODO: UPDATE HERE
    //------------------------------------------------------------------------\\
    // Suppression                                                            \\
    //------------------------------------------------------------------------\\
    // TODO: UPDATE HERE
    //------------------------------------------------------------------------\\
    // Recommendation Summary                                                 \\
    //------------------------------------------------------------------------\\
    // TODO: UPDATE HERE

    // Being Process
    Check_Available_Steps(cookieData, completedSteps, currentStep);
};

/***********************************************\
 * Step(1) - Project Background                *
 * ------------------------------------------- *
 * cookieData (array of saved data)            *
 * completedSteps (array of completed step #'s *
 * currentStep (integer)                       *
\***********************************************/
function JSON_Cookie_Step_Project_Background(cookieData, completedSteps, currentStep){
    // Ensure Step Container is visible and all others are display:none
    if($('#content_step_project_background_container').hasClass('content_step_inactive')){
        $('#content_step_project_background_container').removeClass('content_step_inactive').addClass('content_step_active');
    }
    // TODO: UPDATE HERE
    
    // Make sure the correct substep is displayed
    if($('#content_step_project_background_content_container').hasClass('content_step_content_container_active')){
        $('#content_step_project_background_content_container').removeClass('content_step_content_container_active').addClass('content_step_content_container_inactive');
    }
    if($('#content_step_project_timeframe_content_container').hasClass('content_step_content_container_active')){
        $('#content_step_project_timeframe_content_container').removeClass('content_step_content_container_active').addClass('content_step_content_container_inactive');
    }
    if($('#content_step_distribution_and_abundance_content_container').hasClass('content_step_content_container_active')){
        $('#content_step_distribution_and_abundance_content_container').removeClass('content_step_content_container_active').addClass('content_step_content_container_inactive');
    }
    if($('#content_step_imapinvasives_content_container').hasClass('content_step_content_container_active')){
        $('#content_step_imapinvasives_content_container').removeClass('content_step_content_container_active').addClass('content_step_content_container_inactive');
    }
    if(currentStep === "1.1"){
        $('#content_step_project_background_content_container').removeClass('content_step_content_container_inactive').addClass('content_step_content_container_active');
    }else if(currentStep === "1.2"){
        $('#content_step_project_timeframe_content_container').removeClass('content_step_content_container_inactive').addClass('content_step_content_container_active');
    }else if(currentStep === "1.3"){
        $('#content_step_distribution_and_abundance_content_container').removeClass('content_step_content_container_inactive').addClass('content_step_content_container_active');
    }else if(currentStep === "1.4"){
        $('#content_step_imapinvasives_content_container').removeClass('content_step_content_container_inactive').addClass('content_step_content_container_active');
    }

    // Declare Variables
    var projectBackgroundArray = {
            projectBackgroundAssessorsAnswer: null,
            projectBackgroundAssessorsDateAnswer: null,
            projectBackgroundScientificNameAnswer: null,
            projectBackgroundCommonNameAnswer: null,
            projectBackgroundScaleAnswer: null,
            projectBackgroundPRISMWMAAnswer: null,
            projectBackgroundConservationTargetImpactedAnswer: null,
            projectBackgroundProjectAreaNameAnswer: null,
            projectBackgroundProjectAreaSizeAnswer: null,
            projectBackgroundPropertyOwnersAnswer: null,
            projectBackgroundProjectStateAnswer: null,
            projectBackgroundProjectCountyAnswer: null,
            projectBackgroundProjectCoordXAnswer: null,
            projectBackgroundProjectCoordYAnswer: null,
            projectBackgroundProjectCoordSystemAnswer: null,
            projectBackgroundProjectGoalAnswer: null,
            projectBackgroundNumberOfYearsToCompleteAnswer: null,
            projectBackgroundStartDateAnswer: null,
            projectBackgroundEndDateAnswer: null,
            projectBackgroundOngoingProjectAnswer: null,
            projectBackgroundControlRequiredAnswer: null,
            projectBackgroundGrossInvadedAreaAnswer: null,
            projectBackgroundNetInvadedAreaAnswer: null,
            projectBackgroundNumberOfOccurancesAnswer: null,
            projectBackgroundImapShareResultsAnswer: null,
            projectBackgroundImapAccountAnswer: null
        },
        saveArray = {};
    
    // Subcategory Values

    // Check if loading data
    var completedStepsLength = completedSteps.length;
    for(var i=0; i<completedStepsLength; i++){
        if(completedSteps[i] === "1.1"){
            // Load Question Answers
            projectBackgroundAssessorsAnswer = cookieData.projectBackgroundAssesors;
            projectBackgroundAssessorsDateAnswer = cookieData.projectBackgroundAssessorsDate;
            projectBackgroundScientificNameAnswer = cookieData.projectBackgroundScientificName;
            projectBackgroundCommonNameAnswer = cookieData.projectBackgroundCommonName;
            projectBackgroundScaleAnswer = cookieData.projectBackgroundScale;
            projectBackgroundPRISMWMAAnswer = cookieData.projectBackgroundPRISMWMA;
            projectBackgroundConservationTargetImpactedAnswer = cookieData.projectBackgroundConservationTargetImpacted;
            projectBackgroundProjectAreaNameAnswer = cookieData.projectBackgroundProjectAreaName;
            projectBackgroundProjectAreaSizeAnswer = cookieData.projectBackgroundProjectAreaSize;
            projectBackgroundPropertyOwnersAnswer = cookieData.projectBackgroundPropertyOwners;
            projectBackgroundProjectStateAnswer = cookieData.projectBackgroundProjectState;
            projectBackgroundProjectCountyAnswer = cookieData.projectBackgroundProjectCounty;
            projectBackgroundProjectCoordXAnswer = cookieData.projectBackgroundProjectCoordX;
            projectBackgroundProjectCoordYAnswer = cookieData.projectBackgroundProjectCoordY;
            projectBackgroundProjectCoordSystemAnswer = cookieData.projectBackgroundProjectCoordSystem;
            projectBackgroundProjectGoalAnswer = cookieData.projectBackgroundProjectGoal;
            
            // Clear Fields
            // Populate Fields w/ values
            // TODO: UPDATE HERE
        }
        if(completedSteps[i] === "1.2"){
            projectBackgroundNumberOfYearsToCompleteAnswer = cookieData.projectBackgroundNumberOfYearsToComplete;
            projectBackgroundStartDateAnswer = cookieData.projectBackgroundStartDate;
            projectBackgroundEndDateAnswer = cookieData.projectBackgroundEndDate;
            projectBackgroundOngoingProjectAnswer = cookieData.projectBackgroundOngoingProject;
            projectBackgroundControlRequiredAnswer = cookieData.projectBackgroundControlRequired;

            // Clear Fields
            // Populate Fields w/ values
            // TODO: UPDATE HERE
        }
        if(completedSteps[i] === "1.3"){
            projectBackgroundNetInvadedAreaAnswer = cookieData.projectBackgroundNetInvadedArea;
            projectBackgroundNumberOfOccurancesAnswer = cookieData.projectBackgroundNumberOfOccurances;

            // Clear Fields
            // Populate Fields w/ values
            // TODO: UPDATE HERE
        }
        if(completedSteps[i] === "1.4"){
            projectBackgroundImapShareResultsAnswer = cookieData.projectBackgroundImapShareResults;
            projectBackgroundImapAccountAnswer = cookieData.projectBackgroundImapAccount;

            // Clear Fields
            // Populate Fields w/ values
            // TODO: UPDATE HERE
        }
    }

    // Function Form Checks & Misc Functions
    function Project_Background_Substep_One_Check(form_array){
        if((form_array.projectBackgroundAssessorsAnswer !== null)&&
            (form_array.projectBackgroundAssessorsDateAnswer !== null)&&
            (form_array.projectBackgroundScientificNameAnswer !== null)&&
            (form_array.projectBackgroundCommonNameAnswer !== null)&&
            (form_array.projectBackgroundScaleAnswer !== null)&&
            (form_array.projectBackgroundPRISMWMAAnswer !== null)&&
            (form_array.projectBackgroundConservationTargetImpactedAnswer !== null)&&
            (form_array.projectBackgroundProjectAreaNameAnswer !== null)&&
            (form_array.projectBackgroundProjectAreaSizeAnswer !== null)&&
            (form_array.projectBackgroundPropertyOwnersAnswer !== null)&&
            (form_array.projectBackgroundProjectStateAnswer !== null)&&
            (form_array.projectBackgroundProjectCountyAnswer !== null)&&
            (form_array.projectBackgroundProjectCoordXAnswer !== null)&&
            (form_array.projectBackgroundProjectCoordYAnswer !== null)&&
            (form_array.projectBackgroundProjectCoordSystemAnswer !== null)&&
            (form_array.projectBackgroundProjectGoalAnswer !== null)){
            if($('#content_nav_forward').hasClass('content_nav_base_inactive')){
                $('#content_nav_forward').removeClass('content_nav_base_inactive').addClass('content_nav_base_active');
                // Progress Bar
                $('#content_step_project_background_substep_two').removeClass('content_substep_inactive').addClass('content_substep_available');
            }
        }else if((form_array.projectBackgroundAssessorsAnswer === null)||
                (form_array.projectBackgroundAssessorsDateAnswer === null)||
                (form_array.projectBackgroundScientificNameAnswer === null)||
                (form_array.projectBackgroundCommonNameAnswer === null)||
                (form_array.projectBackgroundScaleAnswer === null)||
                (form_array.projectBackgroundPRISMWMAAnswer === null)||
                (form_array.projectBackgroundConservationTargetImpactedAnswer === null)||
                (form_array.projectBackgroundProjectAreaNameAnswer === null)||
                (form_array.projectBackgroundProjectAreaSizeAnswer === null)||
                (form_array.projectBackgroundPropertyOwnersAnswer === null)||
                (form_array.projectBackgroundProjectStateAnswer === null)||
                (form_array.projectBackgroundProjectCountyAnswer === null)||
                (form_array.projectBackgroundProjectCoordXAnswer === null)||
                (form_array.projectBackgroundProjectCoordYAnswer === null)||
                (form_array.projectBackgroundProjectCoordSystemAnswer === null)||
                (form_array.projectBackgroundProjectGoalAnswer === null)){
            if($('#content_nav_forward').hasClass('content_nav_base_active')){
                $('#content_nav_forward').removeClass('content_nav_base_active').addClass('content_nav_base_inactive');
                // Progress Bar
                $('#content_step_project_background_substep_two').removeClass('content_substep_available').addClass('content_substep_inactive');
            } 
        }
    };
    function Project_Background_Substep_Two_Check(form_array){
        if((form_array.projectBackgroundNumberOfYearsToCompleteAnswer !== null)&&
            (form_array.projectBackgroundStartDateAnswer !== null)&&
            (form_array.projectBackgroundEndDateAnswer !== null)&&
            (form_array.projectBackgroundOngoingProjectAnswer !== null)&&
            (form_array.projectBackgroundControlRequiredAnswer !== null)){
            if($('#content_nav_forward').hasClass('content_nav_base_inactive')){
                $('#content_nav_forward').removeClass('content_nav_base_inactive').addClass('content_nav_base_active');
                // Progress Bar
                // TODO: UPDATE HERE
            }
        }else if((form_array.projectBackgroundNumberOfYearsToCompleteAnswer === null)||
            (form_array.projectBackgroundStartDateAnswer === null)||
            (form_array.projectBackgroundEndDateAnswer === null)||
            (form_array.projectBackgroundOngoingProjectAnswer === null)||
            (form_array.projectBackgroundControlRequiredAnswer === null)){
            if($('#content_nav_forward').hasClass('content_nav_base_active')){
                $('#content_nav_forward').removeClass('content_nav_base_active').addClass('content_nav_base_inactive');
                // Progress Bar
                // TODO: UPDATE HERE
            } 
        }
    };
    function Project_Background_Substep_Three_Check(form_array){
        if((form_array.projectBackgroundGrossInvadedAreaAnswer !== null)&&
            (form_array.projectBackgroundNetInvadedAreaAnswer !== null)&&
            (form_array.projectBackgroundNumberOfOccurancesAnswer !== null)){
            if($('#content_nav_forward').hasClass('content_nav_base_inactive')){
                $('#content_nav_forward').removeClass('content_nav_base_inactive').addClass('content_nav_base_active');
                // Progress Bar
                // TODO: UPDATE HERE
            }

        }else if((form_array.projectBackgroundGrossInvadedAreaAnswer === null)||
            (form_array.projectBackgroundNetInvadedAreaAnswer === null)||
            (form_array.projectBackgroundNumberOfOccurancesAnswer === null)){
            if($('#content_nav_forward').hasClass('content_nav_base_active')){
                $('#content_nav_forward').removeClass('content_nav_base_active').addClass('content_nav_base_inactive');
                // Progress Bar
                // TODO: UPDATE HERE
            } 
        }
    };
    function Project_Background_Substep_Four_Check(form_array){
        if((form_array.projectBackgroundImapShareResultsAnswer !== null)&&
            (form_array.projectBackgroundImapAccountAnswer !== null)){
            if($('#content_nav_forward').hasClass('content_nav_base_inactive')){
                $('#content_nav_forward').removeClass('content_nav_base_inactive').addClass('content_nav_base_active');
                // Progress Bar
                // TODO: UPDATE HERE
            }
        }else if((form_array.projectBackgroundImapShareResultsAnswer === null)||
            (form_array.projectBackgroundImapAccountAnswer === null)){
            if($('#content_nav_forward').hasClass('content_nav_base_active')){
                $('#content_nav_forward').removeClass('content_nav_base_active').addClass('content_nav_base_inactive');
                // Progress Bar
                // TODO: UPDATE HERE
            } 
        }
    };
    
    function Project_Background_Substep_One_Save(){
        // Populate saveArray
        saveArray = {
            projectBackgroundAssessors: projectBackgroundArray.projectBackgroundAssessorsAnswer,
            projectBackgroundAssessorsDate: projectBackgroundArray.projectBackgroundAssessorsDateAnswer,
            projectBackgroundScientificName: projectBackgroundArray.projectBackgroundScientificNameAnswer,
            projectBackgroundCommonName: projectBackgroundArray.projectBackgroundCommonNameAnswer,
            projectBackgroundScale: projectBackgroundArray.projectBackgroundScaleAnswer,
            projectBackgroundPRISMWMA: projectBackgroundArray.projectBackgroundPRISMWMAAnswer,
            projectBackgroundConservationTargetImpacted: projectBackgroundArray.projectBackgroundConservationTargetImpactedAnswer,
            projectBackgroundProjectAreaName: projectBackgroundArray.projectBackgroundProjectAreaNameAnswer,
            projectBackgroundProjectAreaSize: projectBackgroundArray.projectBackgroundProjectAreaSizeAnswer,
            projectBackgroundPropertyOwners: projectBackgroundArray.projectBackgroundPropertyOwnersAnswer,
            projectBackgroundProjectState: projectBackgroundArray.projectBackgroundProjectStateAnswer,
            projectBackgroundProjectCounty: projectBackgroundArray.projectBackgroundProjectCountyAnswer,
            projectBackgroundProjectCoordX: projectBackgroundArray.projectBackgroundProjectCoordXAnswer,
            projectBackgroundProjectCoordY: projectBackgroundArray.projectBackgroundProjectCoordYAnswer,
            projectBackgroundProjectCoordSystem: projectBackgroundArray.projectBackgroundCoordSystemAnswer,
            projectBackgroundProjectGoal: projectBackgroundArray.projectBackgroundProjectGoalAnswer
        };
        if((projectBackgroundArray.projectBackgroundAssessorsAnswer !== null)&&
            (projectBackgroundArray.projectBackgroundAssessorsDateAnswer !== null)&&
            (projectBackgroundArray.projectBackgroundScientificNameAnswer !== null)&&
            (projectBackgroundArray.projectBackgroundCommonNameAnswer !== null)&&
            (projectBackgroundArray.projectBackgroundScaleAnswer !== null)&&
            (projectBackgroundArray.projectBackgroundPRISMWMAAnswer !== null)&&
            (projectBackgroundArray.projectBackgroundConservationTargetImpactedAnswer !== null)&&
            (projectBackgroundArray.projectBackgroundProjectAreaNameAnswer !== null)&&
            (projectBackgroundArray.projectBackgroundProjectAreaSizeAnswer !== null)&&
            (projectBackgroundArray.projectBackgroundPropertyOwnersAnswer !== null)&&
            (projectBackgroundArray.projectBackgroundProjectStateAnswer !== null)&&
            (projectBackgroundArray.projectBackgroundProjectCountyAnswer !== null)&&
            (projectBackgroundArray.projectBackgroundProjectCoordXAnswer !== null)&&
            (projectBackgroundArray.projectBackgroundProjectCoordYAnswer !== null)&&
            (projectBackgroundArray.projectBackgroundProjectCoordSystemAnswer !== null)&&
            (projectBackgroundArray.projectBackgroundProjectGoalAnswer !== null)){
            var addStep = true;
            for(var i=0; i<completedSteps.length; i++){
                if(completedSteps[i] === "1.1"){
                    addStep = false;
                }
            }
            if(addStep === true){
                completedSteps.push("1.1");
            }
        }
        Save_Cookie(saveArray, "1.1", completedSteps);
    };

    function Project_Background_Substep_Two_Save(){
        saveArray = {
            projectBackgroundNumberOfYearsToComplete: projectBackgroundArray.projectBackgroundNumberOfYearsToCompleteAnswer,
            projectBackgroundStartDate: projectBackgroundArray.projectBackgroundStartDateAnswer,
            projectBackgroundEndDate: projectBackgroundArray.projectBackgroundEndDateAnswer,
            projectBackgroundOngoingProject: projectBackgroundArray.projectBackgroundOngoingProjectAnswer,
            projectBackgroundControlRequired: projectBackgroundArray.projectBackgroundControlRequiredAnswer
        };
        if((projectBackgroundArray.projectBackgroundNumberOfYearsToCompleteAnswer !== null)&&
            (projectBackgroundArray.projectBackgroundStartDateAnswer !== null)&&
            (projectBackgroundArray.projectBackgroundEndDateAnswer !== null)&&
            (projectBackgroundArray.projectBackgroundOngoingProjectAnswer !== null)&&
            (projectBackgroundArray.projectBackgroundControlRequiredAnswer !== null)){
            var addStep = true;
            for(var i=0; i<completedSteps.length; i++){
                if(completedSteps[i] === "1.2"){
                    addStep = false;
                }
            }
            if(addStep === true){
                completedSteps.push("1.2");
            }
        }
        Save_Cookie(saveArray, "1.2", completedSteps);
    };
    function Project_Background_Substep_Three_Save(){
        saveArray = {
            projectBackgroundGrossInvadedArea: projectBackgroundArray.projectBackgroundGrossInvadedAreaAnswer,
            projectBackgroundNetInvadedArea: projectBackgroundArray.projectBackgroundNetInvadedAreaAnswer,
            projectBackgroundNumberOfOccurances: projectBackgroundArray.projectBackgroundNumberOfOccurancesAnswer
        };
        if((projectBackgroundArray.projectBackgroundGrossInvadedAreaAnswer !== null)&&
            (projectBackgroundArray.projectBackgroundNetInvadedAreaAnswer !== null)&&
            (projectBackgroundArray.projectBackgroundNumberOfOccurancesAnswer !== null)){
            var addStep = true;
            for(var i=0; i<completedSteps.length; i++){
                if(completedSteps[i] === "1.3"){
                    addStep = false;
                }
            }
            if(addStep === true){
                completedSteps.push("1.3");
            }
        }
        Save_Cookie(saveArray, "1.3", completedSteps);
    };
    function Project_Background_Substep_Four_Save(){
        saveArray = {
            projectBackgroundImapShareResults: projectBackgroundArray.projectBackgroundImapShareResultsAnswer,
            projectBackgroundImapAccount: projectBackgroundArray.projectBackgroundImapAccountAnswer
        };
        if((projectBackgroundArray.projectBackgroundImapShareResultsAnswer !== null)&&
            (projectBackgroundArray.projectBackgroundImapAccountAnswer !== null)){
            var addStep = true;
            for(var i=0; i<completedSteps.length; i++){
                if(completedSteps[i] === "1.4"){
                    addStep = false;
                }
            }
            if(addStep === true){
                completedSteps.push("1.4");
            }
        }
        Save_Cookie(saveArray, "1.4", completedSteps);
    };


    // Base following code on substep number
    if(currentStep === "1.1"){
        Project_Background_Substep_One_Check(projectBackgroundArray);
        // Assign Events to content fields
        $('#project_background_assessors').keyup(function(){
            if($('#project_background_assessors').prop('value') === ""){
                projectBackgroundArray.projectBackgroundAssessorsAnswer = null;
            }else{
                projectBackgroundArray.projectBackgroundAssessorsAnswer = $('#project_background_assessors').val();
            }
            // Execute Form_Check
            Project_Background_Substep_One_Check(projectBackgroundArray);
        });
        $('#project_background_assessors_date').keyup(function(){
            if($('#project_background_assessors_date').prop('value') === ""){
                projectBackgroundArray.projectBackgroundAssessorsDateAnswer = null;
            }else{
                projectBackgroundArray.projectBackgroundAssessorsDateAnswer = $('#project_background_assessors_date').val();
            }
            // Execute Form_Check
            Project_Background_Substep_One_Check(projectBackgroundArray);
        });
        $('#project_background_scientific_name').keyup(function(){
            if($('#project_background_scientific_name').prop('value') === ""){
                projectBackgroundArray.projectBackgroundScientificNameAnswer = null;
            }else{
                projectBackgroundArray.projectBackgroundScientificNameAnswer = $('#project_background_scientific_name').val();
            }
            // Execute Form_Check
            Project_Background_Substep_One_Check(projectBackgroundArray);
        });
        $('#project_background_common_name').keyup(function(){
            if($('#project_background_common_name').prop('value') === ""){
                projectBackgroundArray.projectBackgroundCommonNameAnswer = null;
            }else{
                projectBackgroundArray.projectBackgroundCommonNameAnswer = $('#project_background_common_name').val();
            }
            // Execute Form_Check
            Project_Background_Substep_One_Check(projectBackgroundArray);
        });
        $('#project_background_scale').keyup(function(){
            if($('#project_background_scale').prop('value') === ""){
                projectBackgroundArray.projectBackgroundScaleAnswer = null;
            }else{
                projectBackgroundArray.projectBackgroundScaleAnswer = $('#project_background_scale').val();
            }
            // Execute Form_Check
            Project_Background_Substep_One_Check(projectBackgroundArray);
        });
        $('#project_background_PRISMWMA').keyup(function(){
            if($('#project_background_PRISMWMA').prop('value') === ""){
                projectBackgroundArray.projectBackgroundPRISMWMAAnswer = null;
            }else{
                projectBackgroundArray.projectBackgroundPRISMWMAAnswer = $('#project_background_PRISMWMA').val();
            }
            // Execute Form_Check
            Project_Background_Substep_One_Check(projectBackgroundArray);
        });
        $('#project_background_conservation_target_impacted').keyup(function(){
            if($('#project_background_conservation_target_impacted').prop('value') === ""){
                projectBackgroundArray.projectBackgroundConservationTargetImpactedAnswer = null;
            }else{
                projectBackgroundArray.projectBackgroundConservationTargetImpactedAnswer = $('#project_background_conservation_target_impacted').val();
            }
            // Execute Form_Check
            Project_Background_Substep_One_Check(projectBackgroundArray);
        });
        $('#project_background_project_area_name').keyup(function(){
            if($('#project_background_project_area_name').prop('value') === ""){
                projectBackgroundArray.projectBackgroundProjectAreaNameAnswer = null;
            }else{
                projectBackgroundArray.projectBackgroundProjectAreaNameAnswer = $('#project_background_project_area_name').val();
            }
            // Execute Form_Check
            Project_Background_Substep_One_Check(projectBackgroundArray);
        });
        $('#project_background_project_area_size').keyup(function(){
            if($('#project_background_project_area_size').prop('value') === ""){
                projectBackgroundArray.projectBackgroundProjectAreaSizeAnswer = null;
            }else{
                projectBackgroundArray.projectBackgroundProjectAreaSizeAnswer = $('#project_background_project_area_size').val();
            }
            // Execute Form_Check
            Project_Background_Substep_One_Check(projectBackgroundArray);
        });
        $('#project_background_property_owners').keyup(function(){
            if($('#project_background_property_owners').prop('value') === ""){
                projectBackgroundArray.projectBackgroundPropertyOwnersAnswer = null;
            }else{
                projectBackgroundArray.projectBackgroundPropertyOwnersAnswer = $('#project_background_property_owners').val();
            }
            // Execute Form_Check
            Project_Background_Substep_One_Check(projectBackgroundArray);
        });
        $('#project_background_project_state').keyup(function(){
            if($('#project_background_project_state').prop('value') === ""){
                projectBackgroundArray.projectBackgroundProjectStateAnswer = null;
            }else{
                projectBackgroundArray.projectBackgroundProjectStateAnswer = $('#project_background_project_state').val();
            }
            // Execute Form_Check
            Project_Background_Substep_One_Check(projectBackgroundArray);
        });
        $('#project_background_project_county').keyup(function(){
            if($('#project_background_project_county').prop('value') === ""){
                projectBackgroundArray.projectBackgroundProjectCountyAnswer = null;
            }else{
                projectBackgroundArray.projectBackgroundProjectCountyAnswer = $('#project_background_project_county').val();
            }
            // Execute Form_Check
            Project_Background_Substep_One_Check(projectBackgroundArray);
        });
        $('#project_background_project_coord_x').keyup(function(){
            if($('#project_background_project_coord_x').prop('value') === ""){
                projectBackgroundArray.projectBackgroundProjectCoordXAnswer = null;
            }else{
                projectBackgroundArray.projectBackgroundProjectCoordXAnswer = $('#project_background_project_coord_x').val();
            }
            // Execute Form_Check
            Project_Background_Substep_One_Check(projectBackgroundArray);
        });
        $('#project_background_project_coord_y').keyup(function(){
            if($('#project_background_project_coord_y').prop('value') === ""){
                projectBackgroundArray.projectBackgroundProjectCoordYAnswer = null;
            }else{
                projectBackgroundArray.projectBackgroundProjectCoordYAnswer = $('#project_background_project_coord_y').val();
            }
            // Execute Form_Check
            Project_Background_Substep_One_Check(projectBackgroundArray);
        });
        $('#project_background_project_coord_system').keyup(function(){
            if($('#project_background_project_coord_system').prop('value') === ""){
                projectBackgroundArray.projectBackgroundProjectCoordSystemAnswer = null;
            }else{
                projectBackgroundArray.projectBackgroundProjectCoordSystemAnswer = $('#project_background_project_coord_system').val();
            }
            // Execute Form_Check
            Project_Background_Substep_One_Check(projectBackgroundArray);
        });
        $('#project_background_project_goal').keyup(function(){
            if($('#project_background_project_goal').prop('value') === ""){
                projectBackgroundArray.projectBackgroundProjectGoalAnswer = null;
            }else{
                projectBackgroundArray.projectBackgroundProjectGoalAnswer = $('#project_background_project_goal').val();
            }
            // Execute Form_Check
            Project_Background_Substep_One_Check(projectBackgroundArray);
        });
    }else if(currentStep === "1.2"){
        Project_Background_Substep_Two_Check(projectBackgroundArray);
        // Assign Events to content fields
        $('#project_background_number_of_years_to_complete').keyup(function(){
            if($('#project_background_number_of_years_to_complete').prop('value') === ""){
                projectBackgroundArray.projectBackgroundNumberOfYearsToCompleteAnswer = null;
            }else{
                projectBackgroundArray.projectBackgroundNumberOfYearsToCompleteAnswer = $('#project_background_number_of_years_to_complete').val();
            }
            // Execute Form_Check
            Project_Background_Substep_One_Check(projectBackgroundArray);
        });
        $('#project_background_start_date').keyup(function(){
            if($('#project_background_start_date').prop('value') === ""){
                projectBackgroundArray.projectBackgroundStartDateAnswer = null;
            }else{
                projectBackgroundArray.projectBackgroundStartDateAnswer = $('#project_background_start_date_answer').val();
            }
            // Execute Form_Check
            Project_Background_Substep_One_Check(projectBackgroundArray);
        });
        $('#project_background_end_date').keyup(function(){
            if($('#project_background_end_date').prop('value') === ""){
                projectBackgroundArray.projectBackgroundEndDateAnswer = null;
            }else{
                projectBackgroundArray.projectBackgroundEndDateAnswer = $('#project_background_end_date').val();
            }
            // Execute Form_Check
            Project_Background_Substep_One_Check(projectBackgroundArray);
        });
        $('#project_background_ongoing_project').keyup(function(){
            if($('#project_background_ongoing_project').prop('value') === ""){
                projectBackgroundArray.projectBackgroundOngoingProjectAnswer = null;
            }else{
                projectBackgroundArray.projectBackgroundOngoingProjectAnswer = $('#project_background_ongoing_project').val();
            }
            // Execute Form_Check
            Project_Background_Substep_One_Check(projectBackgroundArray);
        });
        $('#project_background_control_required').keyup(function(){
            if($('#project_background_control_required').prop('value') === ""){
                projectBackgroundArray.projectBackgroundControlRequiredAnswer = null;
            }else{
                projectBackgroundArray.projectBackgroundControlRequiredAnswer = $('#project_background_control_required').val();
            }
            // Execute Form_Check
            Project_Background_Substep_One_Check(projectBackgroundArray);
        });
    }else if(currentStep === "1.3"){
        Project_Background_Substep_Three_Check(projectBackgroundArray);
        // Assign Events to content fields
        $('#project_background_gross_invaded_area').keyup(function(){
            if($('#project_background_gross_invaded_area').prop('value') === ""){
                projectBackgroundArray.projectBackgroundGrossInvadedAreaAnswer = null;
            }else{
                projectBackgroundArray.projectBackgroundGrossInvadedAreaAnswer = $('#project_background_gross_invaded_area').val();
            }
            // Execute Form_Check
            Project_Background_Substep_One_Check(projectBackgroundArray);
        });
        $('#project_background_net_invaded_area').keyup(function(){
            if($('#project_background_net_invaded_area').prop('value') === ""){
                projectBackgroundArray.projectBackgroundNetInvadedAreaAnswer = null;
            }else{
                projectBackgroundArray.projectBackgroundNetInvadedAreaAnswer = $('#project_background_net_invaded_area').val();
            }
            // Execute Form_Check
            Project_Background_Substep_One_Check(projectBackgroundArray);
        });
        $('#project_background_number_of_occurances').keyup(function(){
            if($('#project_background_number_of_occurances').prop('value') === ""){
                projectBackgroundArray.projectBackgroundNumberOfOccurancesAnswer = null;
            }else{
                projectBackgroundArray.projectBackgroundNumberOfOccurancesAnswer = $('#project_background_number_of_occurances').val();
            }
            // Execute Form_Check
            Project_Background_Substep_One_Check(projectBackgroundArray);
        });
    }else if(currentStep === "1.4"){
        Project_Background_Substep_Four_Check(projectBackgroundArray);
        // Assign Events to content fields
        $('#project_background_imap_share_results').keyup(function(){
            if($('#project_background_imap_share_results').prop('value') === ""){
                projectBackgroundArray.projectBackgroundImapShareResultsAnswer = null;
            }else{
                projectBackgroundArray.projectBackgroundImapShareResultsAnswer = $('#project_background_imap_share_results').val();
            }
            // Execute Form_Check
            Project_Background_Substep_One_Check(projectBackgroundArray);
        });
        $('#project_background_imap_account').keyup(function(){
            if($('#project_background_imap_account').prop('value') === ""){
                projectBackgroundArray.projectBackgroundImapAccountAnswer = null;
            }else{
                projectBackgroundArray.projectBackgroundImapAccountAnswer = $('#project_background_imap_account').val();
            }
            // Execute Form_Check
            Project_Background_Substep_One_Check(projectBackgroundArray);
        });
    }

    // Assign Events to Nav Buttons
    if(currentStep === "1.1"){
        $('#content_nav_forward').click(function(){
            if($('#content_nav_forward').hasClass('content_nav_base_active')){
                Project_Background_Substep_One_Save();
                Check_Available_Steps(cookieData, completedSteps, "1.2");
            }
        });
        $('#content_nav_back').click(function(){
        });
        $('#content_step_project_background_substep_one').click(function(){
        });
        $('#content_step_project_background_substep_two').click(function(){
            if($('#content_step_project_background_substep_two').hasClass('content_substep_available')){
                Project_Background_Substep_One_Save();
                Check_Available_Steps(cookieData, completedSteps, "1.2");
            }
        });
        $('#content_step_project_background_substep_three').click(function(){
            if($('#content_step_project_background_substep_three').hasClass('content_substep_available')){
                Project_Background_Substep_One_Save();
                Check_Available_Steps(cookieData, completedSteps, "1.3");
            }
        });
        $('#content_step_project_background_substep_four').click(function(){
            if($('#content_step_project_background_substep_four').hasClass('content_substep_available')){
                Project_Background_Substep_One_Save();
                Check_Available_Steps(cookieData, completedSteps, "1.4");
            }
        });
        $('#content_progress_bar_project_background').click(function(){
        });
        $('#content_progress_bar_strategy_selection').click(function(){
            if($('#content_progress_bar_strategy_selection').hasClass('progress_bar_available')){
                Project_Background_Substep_One_Save();
                Check_Available_Steps(cookieData, completedSteps, "2.1");
            }
        });
        $('#content_progress_bar_eradication').click(function(){
            if($('#content_progress_bar_eradication').hasClass('progress_bar_available')){
                Project_Background_Substep_One_Save();
                Check_Available_Steps(cookieData, completedSteps, "3.1");
            }
        });
        $('#content_progress_bar_containment').click(function(){
            if($('#content_progress_bar_containment').hasClass('progress_bar_available')){
                Project_Background_Substep_One_Save();
                Check_Available_Steps(cookieData, completedSteps, "4.1");
            }
        });
        $('#content_progress_bar_suppression').click(function(){
            if($('#content_progress_bar_supression').hasClass('progress_bar_available')){
                Project_Background_Substep_One_Save();
                Check_Available_Steps(cookieData, completedSteps, "5.1");
            }
        });
        $('#content_progress_bar_recommendation_summary').click(function(){
            if($('#content_progress_bar_recommendation_summary').hasClass('progress_bar_available')){
                Project_Background_Substep_One_Save();
                Check_Available_Steps(cookieData, completedSteps, "6.1");
            }
        });
    }else if(currentStep === "1.2"){
        $('#content_nav_forward').click(function(){
            if($('#content_nav_forward').hasClass('content_nav_base_active')){
                Project_Background_Substep_Two_Save();
                Check_Available_Steps(cookieData, completedSteps, "1.3");
            }
        });
        $('#content_nav_back').click(function(){
            if($('#content_nav_back').hasClass('content_nav_base_active')){
                Project_Background_Substep_Two_Save();
                Check_Available_Steps(cookieData, completedSteps, "1.1");
            }
        });
        $('#content_step_project_background_substep_one').click(function(){
            if($('#content_step_project_background_substep_one').hasClass('content_substep_available')){
                Project_Background_Substep_Two_Save();
                Check_Available_Steps(cookieData, completedSteps, "1.1");
            }
        });
        $('#content_step_project_background_substep_two').click(function(){
        });
        $('#content_step_project_background_substep_three').click(function(){
            if($('#content_step_project_background_substep_three').hasClass('content_substep_available')){
                Project_Background_Substep_Two_Save();
                Check_Available_Steps(cookieData, completedSteps, "1.3");
            }
        });
        $('#content_step_project_background_substep_four').click(function(){
            if($('#content_step_project_background_substep_four').hasClass('content_substep_available')){
                Project_Background_Substep_Two_Save();
                Check_Available_Steps(cookieData, completedSteps, "1.4");
            }
        });
        $('#content_progress_bar_project_background').click(function(){
        });
        $('#content_progress_bar_strategy_selection').click(function(){
            if($('#content_progress_bar_strategy_selection').hasClass('progress_bar_available')){
                Project_Background_Substep_Two_Save();
                Check_Available_Steps(cookieData, completedSteps, "2.1");
            }
        });
        $('#content_progress_bar_eradication').click(function(){
            if($('#content_progress_bar_eradication').hasClass('progress_bar_available')){
                Project_Background_Substep_Two_Save();
                Check_Available_Steps(cookieData, completedSteps, "3.1");
            }
        });
        $('#content_progress_bar_containment').click(function(){
            if($('#content_progress_bar_containment').hasClass('progress_bar_available')){
                Project_Background_Substep_Two_Save();
                Check_Available_Steps(cookieData, completedSteps, "4.1");
            }
        });
        $('#content_progress_bar_suppression').click(function(){
            if($('#content_progress_bar_supression').hasClass('progress_bar_available')){
                Project_Background_Substep_Two_Save();
                Check_Available_Steps(cookieData, completedSteps, "5.1");
            }
        });
        $('#content_progress_bar_recommendation_summary').click(function(){
            if($('#content_progress_bar_recommendation_summary').hasClass('progress_bar_available')){
                Project_Background_Substep_Two_Save();
                Check_Available_Steps(cookieData, completedSteps, "6.1");
            }
        });
    }else if(currentStep === "1.3"){
        $('#content_nav_forward').click(function(){
            if($('#content_nav_forward').hasClass('content_nav_base_active')){
                Project_Background_Substep_Three_Save();
                Check_Available_Steps(cookieData, completedSteps, "1.4");
            }
        });
        $('#content_nav_back').click(function(){
            if($('#content_nav_back').hasClass('content_nav_base_active')){
                Project_Background_Substep_Three_Save();
                Check_Available_Steps(cookieData, completedSteps, "1.2");
            }
        });
        $('#content_step_project_background_substep_one').click(function(){
            if($('#content_step_project_background_substep_one').hasClass('content_substep_available')){
                Project_Background_Substep_Three_Save();
                Check_Available_Steps(cookieData, completedSteps, "1.1");
            }
        });
        $('#content_step_project_background_substep_two').click(function(){
            if($('#content_step_project_background_substep_two').hasClass('content_substep_available')){
                Project_Background_Substep_Three_Save();
                Check_Available_Steps(cookieData, completedSteps, "1.2");
            }
        });
        $('#content_step_project_background_substep_three').click(function(){
        });
        $('#content_step_project_background_substep_four').click(function(){
            if($('#content_step_project_background_substep_four').hasClass('content_substep_available')){
                Project_Background_Substep_Three_Save();
                Check_Available_Steps(cookieData, completedSteps, "1.4");
            }
        });
        $('#content_progress_bar_project_background').click(function(){
        });
        $('#content_progress_bar_strategy_selection').click(function(){
            if($('#content_progress_bar_strategy_selection').hasClass('progress_bar_available')){
                Project_Background_Substep_Three_Save();
                Check_Available_Steps(cookieData, completedSteps, "2.1");
            }
        });
        $('#content_progress_bar_eradication').click(function(){
            if($('#content_progress_bar_eradication').hasClass('progress_bar_available')){
                Project_Background_Substep_Three_Save();
                Check_Available_Steps(cookieData, completedSteps, "3.1");
            }
        });
        $('#content_progress_bar_containment').click(function(){
            if($('#content_progress_bar_containment').hasClass('progress_bar_available')){
                Project_Background_Substep_Three_Save();
                Check_Available_Steps(cookieData, completedSteps, "4.1");
            }
        });
        $('#content_progress_bar_suppression').click(function(){
            if($('#content_progress_bar_supression').hasClass('progress_bar_available')){
                Project_Background_Substep_Three_Save();
                Check_Available_Steps(cookieData, completedSteps, "5.1");
            }
        });
        $('#content_progress_bar_recommendation_summary').click(function(){
            if($('#content_progress_bar_recommendation_summary').hasClass('progress_bar_available')){
                Project_Background_Substep_Three_Save();
                Check_Available_Steps(cookieData, completedSteps, "6.1");
            }
        });
    }else if(currentStep === "1.4"){
        $('#content_nav_forward').click(function(){
            if($('#content_nav_forward').hasClass('content_nav_base_active')){
                Project_Background_Substep_Four_Save();
                Check_Available_Steps(cookieData, completedSteps, "2.1");
            }
        });
        $('#content_nav_back').click(function(){
            if($('#content_nav_back').hasClass('content_nav_base_active')){
                Project_Background_Substep_Four_Save();
                Check_Available_Steps(cookieData, completedSteps, "1.3");
            }
        });
        $('#content_step_project_background_substep_one').click(function(){
            if($('#content_step_project_background_substep_one').hasClass('content_substep_available')){
                Project_Background_Substep_Four_Save();
                Check_Available_Steps(cookieData, completedSteps, "1.1");
            }
        });
        $('#content_step_project_background_substep_two').click(function(){
            if($('#content_step_project_background_substep_two').hasClass('content_substep_available')){
                Project_Background_Substep_Four_Save();
                Check_Available_Steps(cookieData, completedSteps, "1.2");
            }
        });
        $('#content_step_project_background_substep_three').click(function(){
            if($('#content_step_project_background_substep_three').hasClass('content_substep_available')){
                Project_Background_Substep_Four_Save();
                Check_Available_Steps(cookieData, completedSteps, "1.3");
            }
        });
        $('#content_step_project_background_substep_four').click(function(){
        });
        $('#content_progress_bar_project_background').click(function(){
        });
        $('#content_progress_bar_strategy_selection').click(function(){
            if($('#content_progress_bar_strategy_selection').hasClass('progress_bar_available')){
                Project_Background_Substep_Four_Save();
                Check_Available_Steps(cookieData, completedSteps, "2.1");
            }
        });
        $('#content_progress_bar_eradication').click(function(){
            if($('#content_progress_bar_eradication').hasClass('progress_bar_available')){
                Project_Background_Substep_Four_Save();
                Check_Available_Steps(cookieData, completedSteps, "3.1");
            }
        });
        $('#content_progress_bar_containment').click(function(){
            if($('#content_progress_bar_containment').hasClass('progress_bar_available')){
                Project_Background_Substep_Four_Save();
                Check_Available_Steps(cookieData, completedSteps, "4.1");
            }
        });
        $('#content_progress_bar_suppression').click(function(){
            if($('#content_progress_bar_supression').hasClass('progress_bar_available')){
                Project_Background_Substep_Four_Save();
                Check_Available_Steps(cookieData, completedSteps, "5.1");
            }
        });
        $('#content_progress_bar_recommendation_summary').click(function(){
            if($('#content_progress_bar_recommendation_summary').hasClass('progress_bar_available')){
                Project_Background_Substep_Four_Save();
                Check_Available_Steps(cookieData, completedSteps, "6.1");
            }
        });
    }
};

/***********************************************\
 * Step(2) - Strategy Selection                *
 * ------------------------------------------- *
 * cookieData (array of saved data)            *
 * completedSteps (array of completed step #'s *
 * currentStep (integer)                       *
\***********************************************/
function JSON_Cookie_Step_Strategy_Selection(cookieData, completedSteps, currentStep){
};

/***********************************************\
 * Step(3) - Eradication                       *
 * ------------------------------------------- *
 * cookieData (array of saved data)            *
 * completedSteps (array of completed step #'s *
 * currentStep (integer)                       *
\***********************************************/
function JSON_Cookie_Step_Eradication(cookieData, completedSteps, currentStep){
};

/***********************************************\
 * Step(4) - Containment                       *
 * ------------------------------------------- *
 * cookieData (array of saved data)            *
 * completedSteps (array of completed step #'s *
 * currentStep (integer)                       *
\***********************************************/
function JSON_Cookie_Step_Containment(cookieData, completedSteps, currentStep){
};

/***********************************************\
 * Step(5) - Suppression                       *
 * ------------------------------------------- *
 * cookieData (array of saved data)            *
 * completedSteps (array of completed step #'s *
 * currentStep (integer)                       *
\***********************************************/
function JSON_Cookie_Step_Suppression(cookieData, completedSteps, currentStep){
};

/***********************************************\
 * Step(6) - Recommendation Summary            *
 * ------------------------------------------- *
 * cookieData (array of saved data)            *
 * completedSteps (array of completed step #'s *
 * currentStep (integer)                       *
\***********************************************/
function JSON_Cookie_Step_Recommendation_Summary(cookieData, completedSteps, currentStep){
};
