"use client";
import React from "react";

const ProfileForm = ({ user }: any) => {
  const updateUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const body = {
      name: formData.get("name"),
      bio: formData.get("bio"),
      age: formData.get("age"),
      image: formData.get("image"),
      email: formData.get("email"),
    };

    const res = await fetch("/api/users", {
      method: "PUT",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });

    return res.json();
  };

  return (
    <div>
      <h2>Edit Your Profile</h2>
      <form onSubmit={updateUser}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" defaultValue={user?.name ?? ""} />
        <label htmlFor="bio">Bio</label>
        <textarea
          name="bio"
          cols={30}
          rows={10}
          defaultValue={user?.bio ?? ""}
        ></textarea>

        <label htmlFor="age">Age</label>
        <input type="text" name="age" defaultValue={user?.age ?? 0} />

        <label htmlFor="image">Profile Image URL</label>
        <input type="text" name="image" defaultValue={user?.image ?? ""} />

        <label htmlFor="emailAddress">Email address</label>
        <input type="text" name="email" defaultValue={user?.email ?? ""} />

        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default ProfileForm;
