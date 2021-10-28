import { Menu } from "@headlessui/react";
import { ChevronDownIcon } from '@heroicons/react/solid'

export default function CategoryDropdown() {

    function CategoryDropdownItem(props: { children: React.ReactNode }) {
        const { children, ...rest } = props;
        return (
            <div className="text-center my-1 py-1 rounded-md text-white bg-black bg-opacity-30 hover:bg-opacity-40" {...rest}>{children}</div>
        );
    }

    return (
        <Menu as="div" className="py-4">
            <div>
                <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                    Category
                    <ChevronDownIcon className="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100" aria-hidden="true"/>
                </Menu.Button>
            </div>
            <Menu.Items>
                <Menu.Item as="div">
                    <CategoryDropdownItem>Basics</CategoryDropdownItem>
                </Menu.Item>
                <Menu.Item as="div">
                    <CategoryDropdownItem>6 Wide</CategoryDropdownItem>
                </Menu.Item>
                <Menu.Item as="div">
                    <CategoryDropdownItem>8 Wide</CategoryDropdownItem>
                </Menu.Item>
                <Menu.Item as="div">
                    <CategoryDropdownItem>10 Wide</CategoryDropdownItem>
                </Menu.Item>
                <Menu.Item as="div">
                    <CategoryDropdownItem>12 Wide</CategoryDropdownItem>
                </Menu.Item>
                <Menu.Item as="div">
                    <CategoryDropdownItem>Engine</CategoryDropdownItem>
                </Menu.Item>
                <Menu.Item as="div">
                    <CategoryDropdownItem>Aerodynamics</CategoryDropdownItem>
                </Menu.Item>
                <Menu.Item as="div">
                    <CategoryDropdownItem>Fairings</CategoryDropdownItem>
                </Menu.Item>
                <Menu.Item as="div">
                    <CategoryDropdownItem>Structural</CategoryDropdownItem>
                </Menu.Item>
                <Menu.Item as="div">
                    <CategoryDropdownItem>Other</CategoryDropdownItem>
                </Menu.Item>
            </Menu.Items>
        </Menu>
    );
}