import { motion, useScroll } from "framer-motion";
import styles from "./Scroll.module.css";
import { faker } from "@faker-js/faker";
import { useEffect } from "react";


const ScrollExampleOne = () => {
    const { scrollYProgress } = useScroll();

    useEffect(() => {
        console.log(scrollYProgress)
    }, [scrollYProgress]);

    return <section>
        {Array.from(Array(3).keys()).map(
            () => <div className={styles.slide}>
                <motion.h1
                    initial={{ opacity: 0, y: 100, scale: 0.8 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                        delay: .3
                    }}>{faker.animal.bird()}</motion.h1></div>)}
    </section>
};

export { ScrollExampleOne };