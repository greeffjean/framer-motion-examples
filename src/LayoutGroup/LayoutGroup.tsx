import { FC, useState } from "react";
import styles from "./LayoutGroup.module.css";
import { motion } from "framer-motion";

const items = [
    { title: "Item One", desccription: "Cillum voluptate dolor reprehenderit irure non et ut minim est eu quis deserunt reprehenderit consequat." },
    { title: "Item Two", desccription: "Cillum voluptate dolor reprehenderit irure non et ut minim est eu quis deserunt reprehenderit consequat." },
    { title: "Item Three", desccription: "Cillum voluptate dolor reprehenderit irure non et ut minim est eu quis deserunt reprehenderit consequat." }]

type TabProps = {
    activeTab: number;
    idx: number;
    title: string;
    onClick: (idx: number) => void;
};


const Tab: FC<TabProps> = ({ activeTab, idx, title, onClick }) => {
    const active = activeTab === idx;
    return (
        <div>
            <motion.button onClick={() => onClick(idx)}>{title}</motion.button>
            {active ? <motion.div
                layoutId="underline"
                style={{ width: '100%', height: '3px', backgroundColor: 'coral' }}></motion.div> : null}
        </div>
    )
};

const LayoutGroupComponent = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleUpdate = (idx: number) => setActiveTab(idx);

    return (
        <div className={styles.wrapper}>
            {items.map((item, index) => <Tab onClick={handleUpdate} {...item} idx={index} activeTab={activeTab} />)}
        </div>
    )
};
export { LayoutGroupComponent };