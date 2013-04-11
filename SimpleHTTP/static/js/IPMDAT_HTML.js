/***********************************************\
 * Create_Div                                  *
 * ------------------------------------------- *
 *  container                                  *
 *  id                                         *
 *  classes (array)                            *
\***********************************************/
function Create_Div(divArray){
    /*
    divArray = {
        mainContainer: 'two_part_assessors',
        mainID: 'project_background_assessors',
        containerClasses: ['content_step_question_container_scheme', 'two_part_question_line'],
        labelClasses: ['content_step_question_label_scheme'],
        labelText: 'Assessor(s) Name:',
        required: true,
        contentClasses: [content_step_question_content_scheme],
        inputType: 'text',
        inputClasses: ['content_step_question_text_input_scheme']
    };
    */
    // Variables 
    var tempBuild = "",
        containerClassesLength = divArray.containerClasses.length,
        labelClassesLength = divArray.labelClasses.length,
        contentClassesLength = divArray.contentClasses.length,
        inputClassesLength = divArray.inputClasses.length,
        compiledContainerClasses = "",
        compiledLabelClasses = "",
        compiledContentClasses = "",
        compiledInputClasses = "";
    
    // Compile Classes
    for(var i=0; i<containerClassesLength; i++){
        compiledContainerClasses += (divArray.containerClasses[i] + " ");
    }
    for(var i=0; i<labelClassesLength; i++){
        compiledLabelClasses += (divArray.labelClasses[i] + " ");
    }
    for(var i=0; i<contentClassesLength; i++){
        compiledContentClasses += (divArray.contentClasses[i] + " ");
    }
    for(var i=0; i<inputClassesLength; i++){
        compiledInputClasses += (divArray.inputClasses[i] + " ");
    }

    // Container
    tempBuild += ("<div id='" + divArray.mainID + "_container' ");
    tempBuild += ("class='" + compiledContainerClasses + "'>");
    // Label
    tempBuild += ("<div id='" + divArray.mainID + "_label' ");
    tempBuild += ("class='" + compiledLabelClasses + "'>");
    tempBuild += (divArray.labelText + "</div>");
    // Required
    if(divArray.required === true){
        tempBuild += ("<div class='content_required_field'>(*)</div>");
    }
    // Content
    tempBuild += ("<div id='" + divArray.mainID + "_content' ");
    tempBuild += ("class='" + compiledContentClasses + "'>");
    // Input
    if(divArray.changeDiv === "textarea"){
        tempBuild += ("<textarea id='" + divArray.mainID + "' ");
        tempBuild += ("class='" + compiledInputClasses + "' ");
        tempBuild += ("type='" + divArray.inputType + "'></textarea>");
        tempBuild += ("</div><div class='clear'></div></div>");
    }else{
        tempBuild += ("<input id='" + divArray.mainID + "' ");
        tempBuild += ("class='" + compiledInputClasses + "' ");
        tempBuild += ("type='" + divArray.inputType + "'></input>");
        tempBuild += ("</div><div class='clear'></div></div>");
    }

    // Append To divArray.mainContainer
    $(divArray.mainContainer).append(tempBuild);
};
/***********************************************\
 * Create_HTML                                 *
 * ------------------------------------------- *
\***********************************************/
function Create_HTML(){
    // Declare Variables
    var elementProperties = [],
        temp;

    /*******************************************\
     * project_background                      *
    \*******************************************/
    // project_background_asssessors
    temp = {
        mainContainer: '#two_part_assessors',
        mainID: 'project_background_assessors',
        containerClasses: ['content_step_question_container_scheme', 'two_part_question_line'],
        labelClasses: ['content_step_question_label_scheme'],
        labelText: 'Assessor(s) Name:',
        required: true,
        contentClasses: ['content_step_question_content_scheme'],
        inputType: 'text',
        inputClasses: ['content_step_question_text_input_scheme']
    };
    elementProperties.push(temp);
    // project_background_assessors_date
    temp = {
        mainContainer: '#two_part_assessors',
        mainID: 'project_background_assessors_date',
        containerClasses: ['content_step_question_container_scheme', 'two_part_question_line'],
        labelClasses: ['content_step_question_label_scheme'],
        labelText: 'Date:',
        required: false,
        contentClasses: ['content_step_question_content_scheme'],
        inputType: 'text',
        inputClasses: ['content_step_question_text_input_scheme']
    };
    elementProperties.push(temp);
    // project_background_scientific_name
    temp = {
        mainContainer: '#two_part_scientific_name',
        mainID: 'project_background_scientific_name',
        containerClasses: ['content_step_question_container_scheme', 'two_part_question_line'],
        labelClasses: ['content_step_question_label_scheme'],
        labelText: 'Scientific Name:',
        required: false,
        contentClasses: ['content_step_question_content_scheme'],
        inputType: 'text',
        inputClasses: ['content_step_question_text_input_scheme']
    };
    elementProperties.push(temp);
    // project_background_common_name
    temp = {
        mainContainer: '#two_part_scientific_name',
        mainID: 'project_background_common_name',
        containerClasses: ['content_step_question_container_scheme', 'two_part_question_line'],
        labelClasses: ['content_step_question_label_scheme'],
        labelText: 'Common Name:',
        required: false,
        contentClasses: ['content_step_question_content_scheme'],
        inputType: 'text',
        inputClasses: ['content_step_question_text_input_scheme']
    };
    elementProperties.push(temp);
    // project_background_scale
    temp = {
        mainContainer: '#two_part_scale_prism',
        mainID: 'project_background_scale',
        containerClasses: ['content_step_question_container_scheme', 'two_part_question_line'],
        labelClasses: ['content_step_question_label_scheme'],
        labelText: 'Scale:',
        required: false,
        contentClasses: ['content_step_question_content_scheme'],
        inputType: 'text',
        inputClasses: ['content_step_question_text_input_scheme']
    };
    elementProperties.push(temp);
    // project_background_PRISMWMA
    temp = {
        mainContainer: '#two_part_scale_prism',
        mainID: 'project_background_PRISMWMA',
        containerClasses: ['content_step_question_container_scheme', 'two_part_question_line'],
        labelClasses: ['content_step_question_label_scheme'],
        labelText: 'PRISM/WMA:',
        required: false,
        contentClasses: ['content_step_question_content_scheme'],
        inputType: 'text',
        inputClasses: ['content_step_question_text_input_scheme']
    };
    elementProperties.push(temp);
    // project_background_conservation_target_impacted
    temp = {
        mainContainer: '#one_part_conservation_target_impacted',
        mainID: 'project_background_conservation_target_impacted',
        containerClasses: ['content_step_question_container_scheme'],
        labelClasses: ['content_step_question_label_scheme'],
        labelText: 'Conservation Target Impacted:',
        required: false,
        contentClasses: ['content_step_question_content_scheme'],
        inputType: 'text',
        inputClasses: ['content_step_question_text_input_scheme']
    };
    elementProperties.push(temp);
    // project_background_project_area_name
    temp = {
        mainContainer: '#two_part_project_area',
        mainID: 'project_background_project_area_name',
        containerClasses: ['content_step_question_container_scheme', 'two_part_question_line'],
        labelClasses: ['content_step_question_label_scheme'],
        labelText: 'Project Area (site) Name:',
        required: false,
        contentClasses: ['content_step_question_content_scheme'],
        inputType: 'text',
        inputClasses: ['content_step_question_text_input_scheme']
    };
    elementProperties.push(temp);
    // project_background_project_area_size
    temp = {
        mainContainer: '#two_part_project_area',
        mainID: 'project_background_project_area_size',
        containerClasses: ['content_step_question_container_scheme', 'two_part_question_line'],
        labelClasses: ['content_step_question_label_scheme'],
        labelText: 'Size:',
        required: false,
        contentClasses: ['content_step_question_content_scheme'],
        inputType: 'text',
        inputClasses: ['content_step_question_text_input_scheme']
    };
    elementProperties.push(temp);
    // project_background_property_owners
    temp = {
        mainContainer: '#one_part_property_owners',
        mainID: 'project_background_property_owners',
        containerClasses: ['content_step_question_container_scheme'],
        labelClasses: ['content_step_question_label_scheme'],
        labelText: 'Property Owner(s):',
        required: false,
        contentClasses: ['content_step_question_content_scheme'],
        inputType: 'text',
        inputClasses: ['content_step_question_text_input_scheme']
    };
    elementProperties.push(temp);
    // project_background_project_state
    temp = {
        mainContainer: '#two_part_project_location',
        mainID: 'project_background_project_state',
        containerClasses: ['content_step_question_container_scheme', 'two_part_question_line'],
        labelClasses: ['content_step_question_label_scheme'],
        labelText: 'Project State: (Dropdownselect)',
        required: false,
        contentClasses: ['content_step_question_content_scheme'],
        inputType: 'text',
        inputClasses: ['content_step_question_text_input_scheme']
    };
    elementProperties.push(temp);
    // project_background_project_county
    temp = {
        mainContainer: '#two_part_project_location',
        mainID: 'project_background_project_county',
        containerClasses: ['content_step_question_container_scheme', 'two_part_question_line'],
        labelClasses: ['content_step_question_label_scheme'],
        labelText: 'Project County: (Dropdownselect)',
        required: false,
        contentClasses: ['content_step_question_content_scheme'],
        inputType: 'text',
        inputClasses: ['content_step_question_text_input_scheme']
    };
    elementProperties.push(temp);
    // project_background_project_coord_x
    temp = {
        mainContainer: '#two_part_project_coord',
        mainID: 'project_background_project_coord_x',
        containerClasses: ['content_step_question_container_scheme', 'two_part_question_line'],
        labelClasses: ['content_step_question_label_scheme'],
        labelText: 'Project Coordinates - X:',
        required: false,
        contentClasses: ['content_step_question_content_scheme'],
        inputType: 'text',
        inputClasses: ['content_step_question_text_input_scheme']
    };
    elementProperties.push(temp);
    // project_background_project_coord_y
    temp = {
        mainContainer: '#two_part_project_coord',
        mainID: 'project_background_project_coord_y',
        containerClasses: ['content_step_question_container_scheme', 'two_part_question_line'],
        labelClasses: ['content_step_question_label_scheme'],
        labelText: 'Y:',
        required: false,
        contentClasses: ['content_step_question_content_scheme'],
        inputType: 'text',
        inputClasses: ['content_step_question_text_input_scheme']
    };
    elementProperties.push(temp);
    // project_background_project_coord_system
    temp = {
        mainContainer: '#one_part_project_coord_system',
        mainID: 'project_background_project_coord_system',
        containerClasses: ['content_step_question_container_scheme'],
        labelClasses: ['content_step_question_label_scheme'],
        labelText: 'Coordinate System: (Dropdownselect)',
        required: false,
        contentClasses: ['content_step_question_content_scheme'],
        inputType: 'text',
        inputClasses: ['content_step_question_text_input_scheme']
    };
    elementProperties.push(temp);
    // project_background_project_goal
    temp = {
        mainContainer: '#one_part_project_goal',
        mainID: 'project_background_project_goal',
        containerClasses: ['content_step_question_container_scheme'],
        labelClasses: ['content_step_question_label_scheme'],
        labelText: 'Project Goal:',
        required: false,
        contentClasses: ['content_step_question_content_scheme'],
        inputType: 'text',
        inputClasses: ['content_step_question_text_input_scheme']
    };
    elementProperties.push(temp);
    // project_background_number_of_years_to_complete
    temp = {
        mainContainer: '#one_part_num_years',
        mainID: 'project_background_number_of_years_to_complete',
        containerClasses: ['content_step_question_container_scheme'],
        labelClasses: ['content_step_question_label_scheme'],
        labelText: 'Number of years to complete project:',
        required: true,
        contentClasses: ['content_step_question_content_scheme'],
        inputType: 'text',
        inputClasses: ['content_step_question_text_input_scheme']
    };
    elementProperties.push(temp);
    // project_background_start_date
    temp = {
        mainContainer: '#two_part_date',
        mainID: 'project_background_start_date',
        containerClasses: ['content_step_question_container_scheme', 'two_part_question_line'],
        labelClasses: ['content_step_question_label_scheme'],
        labelText: 'Start Date:',
        required: false,
        contentClasses: ['content_step_question_content_scheme'],
        inputType: 'text',
        inputClasses: ['content_step_question_text_input_scheme']
    };
    elementProperties.push(temp);
    // project_background_end_date
    temp = {
        mainContainer: '#two_part_date',
        mainID: 'project_background_end_date',
        containerClasses: ['content_step_question_container_scheme', 'two_part_question_line'],
        labelClasses: ['content_step_question_label_scheme'],
        labelText: 'End Date:',
        required: false,
        contentClasses: ['content_step_question_content_scheme'],
        inputType: 'text',
        inputClasses: ['content_step_question_text_input_scheme']
    };
    elementProperties.push(temp);
    // project_background_ongoing_project
    temp = {
        mainContainer: '#one_part_ongoing',
        mainID: 'project_background_ongoing_project',
        containerClasses: ['content_step_question_container_scheme'],
        labelClasses: ['content_step_question_label_scheme'],
        labelText: 'Ongoing Project:',
        required: false,
        contentClasses: ['content_step_question_content_scheme'],
        inputType: 'text',
        inputClasses: ['content_step_question_text_input_scheme']
    };
    elementProperties.push(temp);
    // project_background_control_required
    temp = {
        mainContainer: '#one_part_control_required',
        mainID: 'project_background_control_required',
        containerClasses: ['content_step_question_container_scheme'],
        labelClasses: ['content_step_question_label_scheme'],
        labelText: 'Control Required:',
        required: false,
        contentClasses: ['content_step_question_content_scheme'],
        inputType: 'text',
        inputClasses: ['content_step_question_text_input_scheme']
    };
    elementProperties.push(temp);
    // project_background_gross_invaded_area
    temp = {
        mainContainer: '#one_part_gross_area',
        mainID: 'project_background_gross_invaded_area',
        containerClasses: ['content_step_question_container_scheme'],
        labelClasses: ['content_step_question_label_scheme'],
        labelText: 'Gross Invaded Area:',
        required: true,
        contentClasses: ['content_step_question_content_scheme'],
        inputType: 'text',
        inputClasses: ['content_step_question_text_input_scheme']
    };
    elementProperties.push(temp);
    // project_background_net_invaded_area
    temp = {
        mainContainer: '#one_part_net_area',
        mainID: 'project_background_net_invaded_area',
        containerClasses: ['content_step_question_container_scheme'],
        labelClasses: ['content_step_question_label_scheme'],
        labelText: 'Net Invaded Area:',
        required: false,
        contentClasses: ['content_step_question_content_scheme'],
        inputType: 'text',
        inputClasses: ['content_step_question_text_input_scheme']
    };
    elementProperties.push(temp);
    // project_background_number_of_occurances
    temp = {
        mainContainer: '#one_part_num_occurances',
        mainID: 'project_background_number_of_occurances',
        containerClasses: ['content_step_question_container_scheme'],
        labelClasses: ['content_step_question_label_scheme'],
        labelText: 'Number Of Occurances:',
        required: false,
        contentClasses: ['content_step_question_content_scheme'],
        inputType: 'text',
        inputClasses: ['content_step_question_text_input_scheme']
    };
    elementProperties.push(temp);
    // project_background_imap_share_results
    temp = {
        mainContainer: '#one_part_imap_share',
        mainID: 'project_background_imap_share_results',
        containerClasses: ['content_step_question_container_scheme'],
        labelClasses: ['content_step_question_label_scheme'],
        labelText: 'Do you want to share your results on iMapInvasives?:',
        required: true,
        contentClasses: ['content_step_question_content_scheme'],
        inputType: 'text',
        inputClasses: ['content_step_question_text_input_scheme']
    };
    elementProperties.push(temp);
    // project_background_imap_account
    temp = {
        mainContainer: '#one_part_imap_account',
        mainID: 'project_background_imap_account',
        containerClasses: ['content_step_question_container_scheme'],
        labelClasses: ['content_step_question_label_scheme'],
        labelText: 'iMap Account:',
        required: false,
        contentClasses: ['content_step_question_content_scheme'],
        inputType: 'text',
        inputClasses: ['content_step_question_text_input_scheme']
    };
    elementProperties.push(temp);
    /*******************************************\
     * strategy_selection                      *
    \*******************************************/
    // strategy_selection_NYS_score
    temp = {
        mainContainer: '#one_part_NYS_score',
        mainID: 'strategy_selection_NYS_score',
        containerClasses: ['content_step_question_container_scheme'],
        labelClasses: ['content_step_question_label_scheme'],
        labelText: 'Total NYS Ecological Impact Score (Max 40):',
        required: true,
        contentClasses: ['content_step_question_content_scheme'],
        inputType: 'text',
        inputClasses: ['content_step_question_text_input_scheme']
    };
    elementProperties.push(temp);
    // strategy_selection_ecological_impact
    temp = {
        mainContainer: '#one_part_ecological_impact',
        mainID: 'strategy_selection_ecological_impact',
        containerClasses: ['content_step_question_container_scheme'],
        labelClasses: ['content_step_question_label_scheme'],
        labelText: 'Significant ecological impact:',
        required: false,
        contentClasses: ['content_step_question_content_scheme'],
        inputType: 'checkbox',
        inputClasses: ['content_step_question_text_input_scheme']
    };
    elementProperties.push(temp);
    // strategy_selection_limited_distribution
    temp = {
        mainContainer: '#one_part_limited_distribution',
        mainID: 'strategy_selection_limited_distribution',
        containerClasses: ['content_step_question_container_scheme'],
        labelClasses: ['content_step_question_label_scheme'],
        labelText: 'Ecological impact uncertain, limited state wide distribution:',
        required: false,
        contentClasses: ['content_step_question_content_scheme'],
        inputType: 'checkbox',
        inputClasses: ['content_step_question_text_input_scheme']
    };
    elementProperties.push(temp);
    // strategy_selection_widespread_distribution
    temp = {
        mainContainer: '#one_part_widespread_distribution',
        mainID: 'strategy_selection_widespread_distribution',
        containerClasses: ['content_step_question_container_scheme'],
        labelClasses: ['content_step_question_label_scheme'],
        labelText: 'Ecological impact uncertain, widespread state wide distribution:',
        required: false,
        contentClasses: ['content_step_question_content_scheme'],
        inputType: 'checkbox',
        inputClasses: ['content_step_question_text_input_scheme']
    };
    elementProperties.push(temp);
    // strategy_selection_negligible_impact
    temp = {
        mainContainer: '#one_part_negligible_impact',
        mainID: 'strategy_selection_negligible_impact',
        containerClasses: ['content_step_question_container_scheme'],
        labelClasses: ['content_step_question_label_scheme'],
        labelText: 'Negligible impact or harm:',
        required: false,
        contentClasses: ['content_step_question_content_scheme'],
        inputType: 'checkbox',
        inputClasses: ['content_step_question_text_input_scheme']
    };
    elementProperties.push(temp);
    // strategy_selection_significant_harm
    temp = {
        mainContainer: '#one_part_significant_harm',
        mainID: 'strategy_selection_significant_harm',
        containerClasses: ['content_step_question_container_scheme'],
        labelClasses: ['content_step_question_label_scheme'],
        labelText: 'Significant harm to human health, economy, or other values:',
        required: false,
        contentClasses: ['content_step_question_content_scheme'],
        inputType: 'checkbox',
        inputClasses: ['content_step_question_text_input_scheme']
    };
    elementProperties.push(temp);
    // strategy_selection_documentation
    temp = {
        mainContainer: '#one_part_documentation',
        mainID: 'strategy_selection_documentation',
        containerClasses: ['content_step_question_container_scheme'],
        labelClasses: ['content_step_question_label_scheme'],
        labelText: 'Documentation:',
        required: false,
        contentClasses: ['content_step_question_content_scheme'],
        inputType: 'checkbox',
        inputClasses: ['content_step_question_text_input_scheme'],
        changeDiv: 'textarea'
    };
    elementProperties.push(temp);


    // Create Elements
    var propertiesLength = elementProperties.length;
    for(var i=0; i<propertiesLength; i++){
        Create_Div(elementProperties[i]);
    }

    IPMDAT_Init();
};
