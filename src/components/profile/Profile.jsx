import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

export function Profile() {
  const profile = localStorage.getItem("profile");

  return (
    <div>
        {profile ? (
            <img
                style={{ width: 40, borderRadius: 30 }}
                src={profile}
                alt="profile"
            />
        ) : (
            <AccountCircleIcon fontSize="large" />
        )}
    </div>
  );
}
