import { Component } from "react";
import CategoryDropdown from "../components/blueprint/CategoryDropdown";


export default class Blueprint extends Component {
    render() {
        return (
            <div className="bg-blue-500 w-screen h-screen grid grid-rows-3 grid-flow-col">
                {/* This is for the part picker */}
                <div className="flex justify-center row-span-2 border-b-4 border-black">
                    <CategoryDropdown/>
                </div>
                {/* This is for the part editor */}
                <div className="col-span-1">
                    <div className="flex justify-center items-center h-full">
                        <h1 className="text-white font-bold text-center">Please Select a Part</h1>
                    </div>
                </div>
                {/* This is for the display canvas */}
                <div className="row-span-3 col-span-4 bg-white border-black border-r-4 border-l-4">
                    
                </div>
                {/* This is for the parts list display on canvas */}
                <div className="row-span-3">
                    
                </div>
            </div>
        );
    }
}