import { useEffect } from "react";
import { useState } from "react";
import Card from "../components/Card";
import Input from "../components/Input";
import "./App.css";

function App() {
  const [lists, setLists] = useState([]);
  const [editStatus, setEditStatus] = useState(null);
  const [data, setData] = useState({
    title: "",
    description: "",
  });

  const getData = () => {
    const data = JSON.parse(localStorage.getItem("todo"));
    setLists(data || []);
  };

  useEffect(() => {
    getData();
  }, []);

  const onDelete = async (_id) => {
    const updatedData = lists.filter((e) => e._id !== _id);
    setLists(updatedData);
    localStorage.setItem("todo", JSON.stringify(updatedData));
  };

  const onEdit = async () => {
    if (editStatus && data.title) {
      const updatedData = lists.map((e) =>
        e._id === editStatus ? { ...e, ...data } : e
      );
      setLists(updatedData);
      localStorage.setItem("todo", JSON.stringify(updatedData));
      setData({
        title: "",
        description: "",
      });
    }
  };

  return (
    <section className="w-full h-screen flex items-center justify-center bg-[#efeef5]">
      <div className="relative w-[40rem] bg-white shadow-xl h-96 rounded-xl -mt-32">
        <header className="border-b border-gray-300">
          <ul className="px-6">
            <li className="border-b-[3px] inline-block border-violet-700 px-2 py-4">
              <span className="font-semibold flex gap-2 items-center text-xl">
                Todo
                <span className="bg-gray-200 rounded-full w-6 h-6 text-sm text-gray-600 flex items-center justify-center">
                  {lists.length}
                </span>
              </span>
            </li>
          </ul>
        </header>
        <main className="w-full h-[calc(24rem-64px)]">
          <section className="overflow-auto custom-scroll h-full">
            {lists.map((list) => (
              <Card
                data={list}
                onDelete={onDelete}
                key={list._id}
                setData={setData}
                setEditStatus={setEditStatus}
              />
            ))}
          </section>
        </main>
        <Input
          data={data}
          lists={lists}
          setData={setData}
          getData={getData}
          onEdit={onEdit}
          editStatus={editStatus}
          setEditStatus={setEditStatus}
        />
      </div>
    </section>
  );
}

export default App;
