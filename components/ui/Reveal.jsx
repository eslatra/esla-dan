import { motion, useReducedMotion } from "framer-motion";

const Reveal = ({ children, className, delay = 0.08, y = 18, ...props }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      {...props}
      className={className}
      initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.9,
        delay: shouldReduceMotion ? 0 : delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
