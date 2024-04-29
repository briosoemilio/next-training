const posts = [
  {
    title: "Introduction to JavaScript",
    slug: "introduction-to-javascript",
    content:
      "JavaScript is a high-level programming language commonly used for building web applications. It is known for its versatility and ability to create dynamic and interactive content on web pages.",
  },
  {
    title: "Working with Arrays in JavaScript",
    slug: "working-with-arrays-in-javascript",
    content:
      "Arrays are used to store multiple values in a single variable. In JavaScript, arrays can hold elements of different data types and can be manipulated using various methods such as push(), pop(), shift(), and unshift().",
  },
  {
    title: "Understanding Object-Oriented Programming in JavaScript",
    slug: "object-oriented-programming-in-javascript",
    content:
      "JavaScript supports object-oriented programming (OOP) principles such as encapsulation, inheritance, and polymorphism. Objects in JavaScript are collections of key-value pairs and can have properties and methods.",
  },
];

import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export const GET = async () => {
  const session = await getServerSession();
  return NextResponse.json(posts);
};
