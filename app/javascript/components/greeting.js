import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMessage } from "../redux/messageSlice";

export default function Greeting() {
  const dispatch = useDispatch();
  const { message } = useSelector((store) => store.message);

  useEffect(() => {
    dispatch(fetchMessage());
  }, [dispatch]);

  return (
    <div>
      <h1>Greetings</h1>
      <p>{message[0].greeting}</p>
      <button onClick={() => dispatch(fetchMessage())}>New Greeting</button>
    </div>
  );
};
