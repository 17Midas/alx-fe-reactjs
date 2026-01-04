import React from 'react';

function UserProfile() {
  return (
    /* Container requirements applied: gray background, padding, max-width, centering, rounded corners, and shadow */
    <div className="user-profile bg-gray-100 p-8 max-w-sm mx-auto my-20 rounded-lg shadow-lg">
      
      {/* Image requirements: circular, specific size (w-36 is ~144px, h-36 is ~144px), and centered */}
      <img 
        src="https://via.placeholder.com/150" 
        alt="User" 
        className="rounded-full w-36 h-36 mx-auto"
      />
      
      {/* Heading requirements: text size, blue color, and vertical margin */}
      <h1 className="text-xl text-blue-800 my-4">John Doe</h1>
      
      {/* Paragraph requirements: gray color and base font size */}
      <p className="text-gray-600 text-base">
        Developer at Example Co. Loves to write code and explore new technologies.
      </p>
    </div>
  );
}

export default UserProfile;
