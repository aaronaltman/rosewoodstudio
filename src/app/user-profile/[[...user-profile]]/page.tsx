"use client";

import { UserProfile } from "@clerk/nextjs";

const UserProfilePage = () => (
  <UserProfile path="/user-profile" routing="path">
    <UserProfile.Page label="Custom Page" url="custom-page"></UserProfile.Page>
  </UserProfile>
);

export default UserProfilePage;
