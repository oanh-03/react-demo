import React from "react";
export default function LoginForm(props) {
  return (
    <form>
      <div>
        <label>Username</label>
        <input type="text" />
      </div>
      <div>
        <label>Pass</label>
        <input type="password" />
      </div>
      <div>
        <button onClick={props.hi}>Login</button>
      </div>
    </form>
  );
}
