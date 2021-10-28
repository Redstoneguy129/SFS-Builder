import { Component } from "react";
import { Link, LinkProps } from 'react-router-dom';

function LinkButton(props: ({ children: React.ReactNode } & LinkProps)) {
    const { children, to } = props;
    return (
        <Link to={to} className="flex justify-center bg-gray-800 hover:bg-gray-700 text-white py-2 rounded-md">{children}</Link>
    );
}

export default class Home extends Component {
    render() {
        return (
            <div className="w-screen h-screen bg-home-texture bg-cover">
                <div className="flex w-screen h-screen items-center justify-center">
                    <div className="flex justify-center flex-col w-48 gap-y-2">
                        <LinkButton to={'/blueprint'}>Create Blueprint</LinkButton>
                        <LinkButton to={'/solar'}>Create Solar System</LinkButton>
                        <LinkButton to={'/settings'}>Settings</LinkButton>
                        <button className="bg-gray-800 hover:bg-gray-700 text-white py-2 rounded-md">Exit</button>
                    </div>
                </div>
            </div>
        );
    }
}