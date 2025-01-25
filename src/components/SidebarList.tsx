import React from 'react';
interface SidebarListProps {
    items: { name: string; icon: string }[];
    onItemClick: (item: { name: string; icon: string }) => void;
}

const SidebarList: React.FC<SidebarListProps> = ({ items, onItemClick }) => {
    return (
        <div className="mt-6 bg-white space-y-2">
            <ul className="space-y-2">
            {items.map((item, index) => (
                <li className="block px-4 py-2 hover:bg-blue-500 hover:text-white border-custom-color rounded-[13.88px] border-[2.31px] p-[13.88px] pt-[13.88px] pr-[18.51px] pb-[13.88px] pl-[18.51px]" key={index} onClick={() => onItemClick(item)}>
                {item.icon} {item.name}
                </li>
            ))}
            </ul>
        </div>
    );
};

export default SidebarList;