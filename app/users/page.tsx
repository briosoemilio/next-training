import { prisma } from "@/lib/prisma";
import React from "react";
import styles from './page.module.css';
import UserCard from "@/components/UserCard";

const Users = async () => {
  const users = await prisma.user.findMany();

  return (
    <div className={styles.grid}>
      {users.map((user) => {
        return <UserCard key={user.id} {...user} />;
      })}
    </div>
  );
};

export default Users;
