# GitHub Repo Details

create this React application that fetches list of repositories and their details  from GitHub and display them as 
list of clickable links. Each link redirects to the respective GitHub repository when clicked.

## Features implemented

- *Fetch Repositories*: Retrieves a list of repositories from GitHub using given endpoint.
- *Display Repo Links*: Each repository url is displayed as a clickable link using its html_url property from json response of given API
- *Link to GitHub*: Clicking on any repository name opens the repository in a new tab.

## Implementation Steps

- Created a react application
- Developed a simple UI using React-Bootstrap for displaying header with GoDaddy logo and relevant description
- Created a separate functional component called ApiService to handle API calls.Used fetch library for API call
- Processed the json response to display as list of links by accessing the html_url from json data
- Used hyperlink to display the html_urls as links so that when clicked it navigates to the relevant github repo page whih has info       about forks,issues,description of the repo
- Implement hooks like useState and useEffect to handle state management and perform API call on application loading
