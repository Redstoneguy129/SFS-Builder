import { Component } from "react";
import { Link } from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <div className="w-screen h-screen bg-home-texture bg-cover">
                <div className="flex w-screen h-screen items-center justify-center">
                    <div className="flex justify-center flex-col w-48 gap-y-2">
                        <Link to={'/blueprint'} className="flex justify-center bg-gray-800 hover:bg-gray-700 text-white py-2 rounded-md">Create Blueprint</Link>
                        <Link to={'/solar'} className="flex justify-center bg-gray-800 hover:bg-gray-700 text-white py-2 rounded-md">Create Solar System</Link>
                        <Link to={'/settings'} className="flex justify-center bg-gray-800 hover:bg-gray-700 text-white py-2 rounded-md">Settings</Link>
                        <button className="bg-gray-800 hover:bg-gray-700 text-white py-2 rounded-md">Exit</button>
                    </div>
                </div>
            </div>
        );
    }
}