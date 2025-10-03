// import { motion, useAnimation } from 'framer-motion';
// import { useEffect } from 'react';
// import Description from './Discription';
// import { useInView } from 'react-intersection-observer';

// const ScrollAnimatedText = ({ text, delay, animateBy, direction, className }) => {
//   const controls = useAnimation();
//   const [ref, inView] = useInView({
//     threshold: 0.1,
//     triggerOnce: true,
//   });

//   useEffect(() => {
//     if (inView) {
//       controls.start('visible');
//     }
//   }, [controls, inView]);

//   const variants = {
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.5 },
//     },
//     hidden: {
//       opacity: 0,
//       y: direction === 'top' ? -20 : 20,
//     },
//   };

//   return (
//     <motion.div
//       ref={ref}
//       initial="hidden"
//       animate={controls}
//       variants={variants}
//       className={className}
//     >
//       <Description
//         text={text}
//         delay={delay}
//         animateBy={animateBy}
//         direction={direction}
//       />
//     </motion.div>
//   );
// };