import React, { useState } from "react";
import { addList } from "../redux/listSlice";
import { addCard } from "../redux/listSlice";
import { useDispatch } from "react-redux";
function AddNew({ type,parentid }) {
  const dispatch = useDispatch();
  const [inputVal, setInputVal] = useState("");
  const [isFormVisible, setFormVisible] = useState(false);
  const submitHandler = (e) => {
    e.preventDefault();
    if (type) {
      dispatch(addCard({ id: Math.random(), title: inputVal,parentId:parentid}))
    } else {
      dispatch(addList({ id: Math.random(), title: inputVal }));
    }
    setInputVal("");
    hideForm();
  };
  const openForm = () => {
    setFormVisible(true);
  };
  const hideForm = () => {
    setFormVisible(false);
  };
  return (
    <div>
      <button onClick={openForm}> + Add {type ? "a card" :"a list"}</button>
      {isFormVisible && (
        <form onSubmit={submitHandler} className="mt-3">
          <input
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder={type ? "Enter Card Name":"Enter List Name"}
          />
          <div className="mt-3">
            <button onClick={hideForm} className="mr-3">
              Cancel
            </button>
            <button onClick={submitHandler} className="px-3 py-1 bg-blue-500">
              Save
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default AddNew;
