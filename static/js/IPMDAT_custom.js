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
        if(completedSteps[i] === "1"){
            if(stepNumber === "projectBackground"){
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
                cookieArray.projectBackgroundNumberOfYearsToComplete = cookieData.projectBackgroundNumberOfYearsToComplete;
                cookieArray.projectBackgroundStartDate = cookieData.projectBackgroundStartDate;
                cookieArray.projectBackgroundEndDate = cookieData.projectBackgroundEndDate;
                cookieArray.projectBackgroundOngoingProject = cookieData.projectBackgroundOngoingProject;
                cookieArray.projectBackgroundControlRequired = cookieData.projectBackgroundControlRequired;
                cookieArray.projectBackgroundGrossInvadedArea = cookieData.projectBackgroundGrossInvadedArea;
                cookieArray.projectBackgroundNetInvadedArea = cookieData.projectBackgroundNetInvadedArea;
                cookieArray.projectBackgroundNumberOfOccurances = cookieData.projectBackgroundNumberOfOccurances;
                cookieArray.projectBackgroundImapShareResults = cookieData.projectBackgroundImapShareResults;
                cookieArray.projectBackgroundImapAccount = cookieData.projectBackgroundImapAccount;
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
                cookieArray.projectBackgroundNumberOfYearsToComplete = savedData.projectBackgroundNumberOfYearsToComplete;
                cookieArray.projectBackgroundStartDate = savedData.projectBackgroundStartDate;
                cookieArray.projectBackgroundEndDate = savedData.projectBackgroundEndDate;
                cookieArray.projectBackgroundOngoingProject = savedData.projectBackgroundOngoingProject;
                cookieArray.projectBackgroundControlRequired = savedData.projectBackgroundControlRequired;
                cookieArray.projectBackgroundGrossInvadedArea = savedData.projectBackgroundGrossInvadedArea;
                cookieArray.projectBackgroundNetInvadedArea = savedData.projectBackgroundNetInvadedArea;
                cookieArray.projectBackgroundNumberOfOccurances = savedData.projectBackgroundNumberOfOccurances;
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
    $('#content_progress_bar_strategy_selection').unbind('click');
    $('#content_progress_bar_eradication').unbind('click');
    $('#content_progress_bar_containment').unbind('click');
    $('#content_progress_bar_suppression').unbind('click');
    $('#content_progress_bar_recommendation_summary').unbind('click');

    // Control Step Progress
    for(var i=0; i<completedSteps.length; i++){
        if(completedSteps[i] === "1"){
            // PROJECT BACKGROUND (STEP 1)
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
    if(currentStep === "projectBackground"){
        // Clear Questions
        // TODO: UPDATE HERE
        // Progress Bars
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
        JSON_Cookie_Step_Project_Background(cookieData, completedSteps, currentStep);
    } else if(currentStep === "strategySelection"){
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
        currentStep = "projectBackground",
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

    // Fire off the initial step - (Project Background)
};

/***********************************************\
 * Step(1) - Project Background                *
 * ------------------------------------------- *
 * cookieData (array of saved data)            *
 * completedSteps (array of completed step #'s *
 * currentStep (integer)                       *
\***********************************************/
function JSON_Cookie_Step_Project_Background(cookieData, completedSteps, currentStep){
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
