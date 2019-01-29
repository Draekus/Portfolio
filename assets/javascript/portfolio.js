// Import the JSON object containing all of the portfolio projects
// const projects = require("./projects");

// Loop over the array of projects in order to extract the data out of each item
for (let i = 0; i < projects.length; i++) {
    // Create all neccesary html elements and their classes
    let wrapper = $("<div>").addClass("row portfolio-item-wrapper");
    let textColumn = $("<div>").addClass("col-md-8");
    let title = $("<h3>").addClass("portfolio-item-title");
    let description = $("<p>").addClass("portfolio-item-description");
    let imgColumn = $("<div>").addClass("col-md-2");
    let link = $("<a>").attr("href", projects[i].link).attr("target", "_blank");
    let image = $("<img>").addClass("portfolio-item-img");
    // Insert data from projects into their corresponding elements
    title.text(projects[i].title);
    description.text(projects[i].description);
    link.html(`
    <img class="portfolio-item-img" src="${projects[i].image}" alt="Sorry this image could not be displayed.">
    `);
    // Append all items to the wrapper then append the wrapper to the DOM
    imgColumn.append(link);
    textColumn.append(title);
    textColumn.append(description);
    wrapper.append(textColumn);
    wrapper.append(imgColumn);
    $("#portfolio-wrapper").append(wrapper);
}