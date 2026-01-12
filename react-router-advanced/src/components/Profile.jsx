import { Routes, Route, Link, Outlet } from "react-router-dom";
import ProfileDetails from './ProfileDetails';
import ProfileSettings from './ProfileSettings';

const Profile = () => {
  return (
    <div>
      <h2>Profile Page</h2>
      <nav>
        <ul>
          <li><Link to="details">Profile Details</Link></li>
          <li><Link to="settings">Profile Settings</Link></li>
        </ul>
      </nav>
      
      {/* This is where the child routes (Details/Settings) will render */}
      <Outlet /> 

      {/* Alternatively, for older router versions or specific structures, 
          you might see nested Routes defined directly here, but Outlet is cleaner */}
      <Routes>
         <Route path="details" element={<ProfileDetails />} />
         <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
};

export default Profile;
