// import React from "react";

import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* left */}
        <div className="flex-1">
          <Link to="/" className="font-bold dark:text-white text-4xl">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              Adarsh's
            </span>
            Blog
          </Link>

          <p className="text-sm mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            magni libero nam ipsam, tempore velit reprehenderit perferendis
            temporibus totam atque obcaecati possimus repellendus! Molestias
            modi ipsa esse repellat, quisquam distinctio!
          </p>
        </div>
        {/* right */}
        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div>
              <Label value="User Name" />
              <TextInput
                type="text"
                placeholder="Ex. @SamAltman123"
                id="username"
              />
            </div>

            <div>
              <Label value="Email" />
              <TextInput
                type="email"
                placeholder="Ex. SamAltman@1234"
                id="email"
              />
            </div>

            <div>
              <Label value="Password" />
              <TextInput type="password" placeholder="********" id="password" />
            </div>
            <Button gradientDuoTone="purpleToPink" type="submit">
              Sign Up
            </Button>
          </form>

          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to="/sign-in" className="text-blue-500">
              SignIn
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
