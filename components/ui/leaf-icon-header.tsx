import { motion } from "framer-motion";

function LeafIconHeader() {
  const WaveAnimation = {
    initial: { rotate: 0 },
    animate: {
      rotate: [0, -10, 10, -10, 5, -5, 0],
      transition: { duration: 2, repeat: Infinity },
    },
  };

  return (
    <motion.div
      aria-label="Leaf emoji representing vegan lifestyle"
      role="img"
      variants={WaveAnimation}
      initial="initial"
      animate="animate"
      style={{ display: "inline-block" }}
    >
      <span aria-hidden="true" style={{ display: "inline-block" }}>
        🌿
      </span>
    </motion.div>
  );
}

export default LeafIconHeader;
