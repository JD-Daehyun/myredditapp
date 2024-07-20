# Re-Reacting Reddit: Portfolio Project

## Overview

This project is a re-creation of Reddit from scratch, aimed at showcasing my front-end development skills. The following sections detail the tools and technologies used, design decisions made, and features implemented in the project.

## Technologies Used


### TailwindCSS

For the visual styling of the application, I utilized TailwindCSS. This CSS framework allowed for rapid and flexible UI development, enabling me to easily manage styling across different components and responsive design.

### Context for State Management

For overall state management, I opted to use the Context. Given the nature of this assignment, which primarily involved accessing APIs and displaying data on the website, I found Context to be more straightforward and intuitive compared to React-Redux. The Context simplified the process of updating and accessing data across various components without the boilerplate often associated with Redux.

### React-Redux for Liked Reddits

However, for managing the state of liked reddits, I used React-Redux. In this scenario, Redux was more appropriate due to its robust state management capabilities and the need for consistent state updates across different components. Actions and reducers in Redux made it easier to manage the addition and removal of liked reddits.

### React Icons and React Spinners

To enhance the visual appeal and user experience, I incorporated React-Icons for various icons throughout the application and React-Spinners for loading indicators. These libraries provided a wide range of customizable components that seamlessly integrated with the design.

### Responsive Design with useState and useEffect

I implemented responsive design by switching the subreddit list layout from a column to a row when the window size is reduced. This was achieved using the useState hook to track the window width and the useEffect hook to update the state whenever the window is resized.
```javascript
const [windowWidth, setWindowWidth] = useState(window.innerWidth);

useEffect(() => {
  const handleResize = () => setWindowWidth(window.innerWidth);
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);
```

## Features

1. **Responsive Design**: The application adapts to both mobile and desktop views, ensuring a seamless user experience across devices.
2. **Like/Unlike Reddits**: Users can like and unlike reddits, with the state managed by Redux.
3. **View Liked Reddits**: Users can view a list of their liked reddits by clicking the "My Liked Reddit" button.
4. **Search Functionality**: Users can search for any term across all subreddits.
5. **Subreddit Navigation**: Users can navigate to specific subreddits by clicking on them.
6. **Subreddit-Specific Search**: Users can search within a specific subreddit.
7. **View Comments**: Users can click on any reddit post to view its comments.
8. **Home Navigation**: Users can return to the homepage by clicking on the logo.
9. **Remove Subreddit Selection**: Users can deselect a subreddit by clicking the "X" mark.


## Conclusion

Re-creating Reddit for this portfolio project allowed me to delve deeper into front-end development, from ideation to creation. It provided valuable experience in using modern web technologies and libraries, implementing responsive design, and managing state efficiently. This project not only showcases my technical skills but also my ability to build a functional and visually appealing web application.