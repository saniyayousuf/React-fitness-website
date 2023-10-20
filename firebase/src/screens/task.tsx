import { useState } from "react";
import BAButton from "../component/BAButton";
import BAInput from "../component/BAInput";
import { fbAdd } from "../config/firebasemethods";

export default function Task() {
    const [taskList, SetTaskList] = useState([])
    const [model, setModel] = useState<any>({});

    const fillModel = (key: string, val: any) => {
        model[key] = val;
        setModel({ ...model });
    }

    const addTask = () => {
        console.log(model);
        fbAdd('tasks', model).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err)

        })

    }


    return <>
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-10">
            <div className=" container">
                <h1 className="text-3xl text-white">Task</h1>
            </div>
        </div>
        <div className="grid grid-cols-4">
            <div className="p-10">
                <div>
                    <div className="py-2 ">
                        <BAInput
                            value={model.task}
                            onChange={(e: any) => fillModel('task', e.target.value)}
                            label={"Task"} />
                    </div>
                    <div className="py-2 ">
                        <BAInput
                            value={model.Assignee}
                            onChange={(e: any) => fillModel('Assignee', e.target.value)}
                            label={"Assignee"} />
                    </div>
                    <div className="py-2 ">
                        <BAButton label={"Add"} onClick={addTask()} />
                    </div>
                </div>
            </div>
            <div className="p-10 col-span-3">

            </div>
        </div>

    </>
}