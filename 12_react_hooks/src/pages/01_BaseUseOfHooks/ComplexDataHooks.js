import React, { useState } from "react";

function ComplexDataHooks(props) {
  const [age, setAge] = useState(18);
  const [name, setName] = useState();
  const [names, setNames] = useState(["zyt", "lxy"]);
  const [info, setInfo] = useState({ name: "zyt", age: 18 });
  return (
    <>
      <h2>当前年龄: {age}</h2>
      <button onClick={() => setAge(age + 1)}>age+1</button>
      <h2>朋友列表</h2>
      <ul>
        {names.map((item, index) => (
          <li key={index}>
            {item}
            <button
              onClick={() =>
                setNames(names.splice(names.findIndex((e) => e.id === index)))
              }
            >
              -
            </button>
          </li>
        ))}
      </ul>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setNames([...names, name])}>添加朋友</button>
      <h2>添加个人信息</h2>
      <div>{info.name + "," + info.age}</div>
      <button onClick={() => setInfo({ ...info, name: "lxy" })}>
        添加个人信息
      </button>
    </>
  );
}

export default ComplexDataHooks;
