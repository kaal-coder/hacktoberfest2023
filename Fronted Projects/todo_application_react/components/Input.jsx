import { v4 as uuidv4 } from "uuid";

const Input = ({ getData, lists, data, setData, onEdit, editStatus }) => {
  const onSubmit = async () => {
    if (data.title) {
      const updatedData = [...lists, { _id: uuidv4(), ...data }];
      setLists(updatedData);
      localStorage.setItem("todo", JSON.stringify(updatedData));
      setData({
        title: "",
        description: "",
      });
    }
  };

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <section className="absolute bottom-30 -mt-1 left-1/2 -translate-x-1/2 p-4 shadow-xl w-[44rem] bg-white border border-gray-300 rounded-xl">
      <main>
        <input
          value={data.title}
          onChange={onChange}
          name="title"
          type="text"
          className="outline-none text-md p-2 w-full"
          placeholder="Task name here..."
        />
        <textarea
          value={data.description}
          onChange={onChange}
          name="description"
          className="outline-none text-md p-2 w-full"
          placeholder="Description"
        />
      </main>
      <footer className="flex items-center mt-4 justify-end">
        <div className="flex items-center gap-4">
          {editStatus ? (
            <button
              onClick={onEdit}
              className="text-sm px-4 py-2 bg-violet-700 hover:bg-violet-600 transition duration-150 text-white rounded-lg"
            >
              Update task
            </button>
          ) : (
            <button
              onClick={onSubmit}
              className="text-sm px-4 py-2 bg-violet-700 hover:bg-violet-600 transition duration-150 text-white rounded-lg"
            >
              Add task
            </button>
          )}
        </div>
      </footer>
    </section>
  );
};

export default Input;
