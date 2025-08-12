'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { t } from '@/lib/locales';

// Animation variants for different elements
const dottedLineAnimation = {
  hidden: {
    pathLength: 0,
    opacity: 0
  },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { duration: 2 },
      opacity: { duration: 0.5 }
    }
  }
};

const iconAnimation = {
  hidden: {
    scale: 0,
    opacity: 0
  },
  visible: (custom: { scale: number; delay: number }) => ({
    scale: custom.scale,
    opacity: 1,
    transition: {
      delay: custom.delay,
      duration: 0.6
    }
  })
};

const boxAnimation = {
  hidden: {
    y: 50,
    opacity: 0
  },
  visible: (custom: { x: number; y: number; delay: number }) => ({
    x: custom.x,
    y: custom.y,
    opacity: 1,
    transition: {
      delay: custom.delay,
      duration: 0.8
    }
  })
};

const arrowAnimation = {
  hidden: {
    y: -20,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.8,
      duration: 0.6
    }
  }
};

export const ProcessFlowSVG = ({className}: {className: string}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <svg className={className} width="756" viewBox="0 0 756 765" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref}>
            <g id="GRAPHIC 2">
            <motion.path 
                id="mask_pv-line-03" 
                d="M395 268V333.63C395 338.587 398.672 342.605 403.2 342.605H488.787H591.8C596.328 342.605 600 346.624 600 351.58V450.867V634.025C600 638.981 596.328 643 591.8 643H450.862" 
                stroke="#5E8EED" 
                strokeDasharray="4 4"
                variants={dottedLineAnimation}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            />
            <motion.path 
                id="mask_tcp-line-01" 
                d="M177 437V505.315C177 510.387 180.582 514.5 185 514.5H327C331.418 514.5 335 518.613 335 523.685V592" 
                stroke="#56B0B3" 
                strokeDasharray="4 4"
                variants={dottedLineAnimation}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            />
            <motion.path 
                id="mask_pv-line-02" 
                d="M489.75 497H383.04C380.671 497 378.75 495.106 378.75 492.769V268" 
                stroke="#3B84F7" 
                strokeDasharray="4 4"
                variants={dottedLineAnimation}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            />
            <motion.path 
                id="mask_pv-line-01" 
                d="M363 268V376.034C363 380.433 359.32 384 354.781 384H269" 
                stroke="#5E8EED" 
                strokeDasharray="4 4"
                variants={dottedLineAnimation}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            />
            <motion.g id="badge--tcp">
            <motion.path 
                id="Vector" 
                d="M277 514C277 500.745 266.255 490 253 490C239.745 490 229 500.745 229 514C229 527.255 239.745 538 253 538C266.255 538 277 527.255 277 514Z" 
                fill="#101E20"
                variants={iconAnimation}
                initial="hidden"
                custom={{ scale: 1, delay: 1.2 }}
                animate={isInView ? "visible" : "hidden"}
            />
            <motion.path 
                id="Vector_2" 
                d="M276.25 514C276.25 501.159 265.841 490.75 253 490.75C240.159 490.75 229.75 501.159 229.75 514C229.75 526.841 240.159 537.25 253 537.25C265.841 537.25 276.25 526.841 276.25 514Z" 
                stroke="#429194" 
                strokeOpacity="0.5" 
                strokeWidth="1.5"
                variants={iconAnimation}
                initial="hidden"
                custom={{ scale: 1, delay: 1.2 }}
                animate={isInView ? "visible" : "hidden"}
            />
            <motion.g id="Frame">
            <motion.path 
                id="Vector_3" 
                d="M247 510V511M251 510V511M255 510V511M259 510V511M256 522L259 519H261C261.53 519 262.039 518.789 262.414 518.414C262.789 518.039 263 517.53 263 517V508C263 507.47 262.789 506.961 262.414 506.586C262.039 506.211 261.53 506 261 506H245C244.47 506 243.961 506.211 243.586 506.586C243.211 506.961 243 507.47 243 508V517C243 517.53 243.211 518.039 243.586 518.414C243.961 518.789 244.47 519 245 519H247L250 522H256Z" 
                stroke="#56B0B3" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                variants={iconAnimation}
                initial="hidden"
                custom={{ scale: 1, delay: 1.2 }}
                animate={isInView ? "visible" : "hidden"}
            />
            </motion.g>
            </motion.g>
            <motion.g id="Frame 823">
            <motion.rect 
                x="211.5" 
                y="681.5" 
                width="246" 
                height="72" 
                rx="7.5" 
                fill="#13111C"
                variants={boxAnimation}
                initial="hidden"
                custom={{ x: 0, y: 0, delay: 0.4 }}
                animate={isInView ? "visible" : "hidden"}
            />
            <motion.rect 
                x="211.5" 
                y="681.5" 
                width="246" 
                height="72" 
                rx="7.5" 
                stroke="#33323E"
                variants={boxAnimation}
                initial="hidden"
                custom={{ x: 0, y: 0, delay: 0.4 }}
                animate={isInView ? "visible" : "hidden"}
            />
            <motion.g 
                id="Frame 844"
                variants={boxAnimation}
                initial="hidden"
                custom={{ x: 0, y: 0, delay: 0.4 }}
                animate={isInView ? "visible" : "hidden"}
            >
            <text fill="#807F8C" xmlSpace="preserve" style={{whiteSpace: 'pre'}} className="font-sora text-xs" letterSpacing="0em"><tspan x="229" y="721.58">{t.content.processFlow.recommendation.text1} </tspan><tspan x="229" y="736.58">{t.content.processFlow.recommendation.text2}</tspan></text>
            </motion.g>
            </motion.g>
            <motion.g id="Group 787">
            <mask id="mask0_34_485" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="151" y="148" width="12" height="163">
            <g id="Frame 843">
            <motion.path 
                id="Vector 276" 
                d="M152 149L157 154L162 149" 
                stroke="#3B84F7" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                variants={arrowAnimation}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            />
            <motion.path 
                id="Vector 277" 
                d="M152 161L157 166L162 161" 
                stroke="#3B84F7" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                variants={arrowAnimation}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            />
            <motion.path 
                id="Vector 289" 
                d="M152 173L157 178L162 173" 
                stroke="#3B84F7" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                variants={arrowAnimation}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            />
            <motion.path 
                id="Vector 290" 
                d="M152 185L157 190L162 185" 
                stroke="#3B84F7" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                variants={arrowAnimation}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            />
            <motion.path 
                id="Vector 280" 
                d="M152 197L157 202L162 197" 
                stroke="#3B84F7" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                variants={arrowAnimation}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            />
            <motion.path 
                id="Vector 281" 
                d="M152 209L157 214L162 209" 
                stroke="#3B84F7" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                variants={arrowAnimation}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            />
            <motion.path 
                id="Vector 282" 
                d="M152 221L157 226L162 221" 
                stroke="#3B84F7" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                variants={arrowAnimation}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            />
            <motion.path 
                id="Vector 283" 
                d="M152 233L157 238L162 233" 
                stroke="#3B84F7" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                variants={arrowAnimation}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            />
            <motion.path 
                id="Vector 284" 
                d="M152 245L157 250L162 245" 
                stroke="#3B84F7" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                variants={arrowAnimation}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            />
            <motion.path 
                id="Vector 285" 
                d="M152 257L157 262L162 257" 
                stroke="#3B84F7" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                variants={arrowAnimation}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            />
            <motion.path 
                id="Vector 286" 
                d="M152 269L157 274L162 269" 
                stroke="#3B84F7" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                variants={arrowAnimation}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            />
            <motion.path 
                id="Vector 287" 
                d="M152 281L157 286L162 281" 
                stroke="#3B84F7" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                variants={arrowAnimation}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            />
            <motion.path 
                id="Vector 278" 
                d="M152 293L157 298L162 293" 
                stroke="#3B84F7" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                variants={arrowAnimation}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            />
            <motion.path 
                id="Vector 279" 
                d="M152 305L157 310L162 305" 
                stroke="#3B84F7" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                variants={arrowAnimation}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            />
            </g>
            </mask>
            <g mask="url(#mask0_34_485)">
            <rect id="Rectangle 4477" x="150" y="147" width="14" height="179" fill="url(#paint0_linear_34_485)"/>
            </g>
            </motion.g>
            <motion.g id="Group 788">
            <mask id="mask1_34_485" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="594" y="145" width="12" height="163">
            <g id="Frame 843_2">
            <motion.path 
                id="Vector 276_2" 
                d="M595 146L600 151L605 146" 
                stroke="#3B84F7" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                variants={arrowAnimation}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            />
            <motion.path 
                id="Vector 277_2" 
                d="M595 158L600 163L605 158" 
                stroke="#3B84F7" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                variants={arrowAnimation}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            />
            <motion.path 
                id="Vector 289_2" 
                d="M595 170L600 175L605 170" 
                stroke="#3B84F7" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                variants={arrowAnimation}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            />
            <motion.path 
                id="Vector 290_2" 
                d="M595 182L600 187L605 182" 
                stroke="#3B84F7" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                variants={arrowAnimation}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            />
            <motion.path 
                id="Vector 280_2" 
                d="M595 194L600 199L605 194" 
                stroke="#3B84F7" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                variants={arrowAnimation}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            />
            <motion.path 
                id="Vector 281_2" 
                d="M595 206L600 211L605 206" 
                stroke="#3B84F7" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                variants={arrowAnimation}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            />
            <motion.path 
                id="Vector 282_2" 
                d="M595 218L600 223L605 218" 
                stroke="#3B84F7" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                variants={arrowAnimation}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            />
            <motion.path 
                id="Vector 283_2" 
                d="M595 230L600 235L605 230" 
                stroke="#3B84F7" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                variants={arrowAnimation}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            />
            <motion.path 
                id="Vector 284_2" 
                d="M595 242L600 247L605 242" 
                stroke="#3B84F7" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                variants={arrowAnimation}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            />
            <motion.path 
                id="Vector 285_2" 
                d="M595 254L600 259L605 254" 
                stroke="#3B84F7" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                variants={arrowAnimation}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            />
            <motion.path 
                id="Vector 286_2" 
                d="M595 266L600 271L605 266" 
                stroke="#3B84F7" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                variants={arrowAnimation}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            />
            <motion.path 
                id="Vector 287_2" 
                d="M595 278L600 283L605 278" 
                stroke="#3B84F7" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                variants={arrowAnimation}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            />
            <motion.path 
                id="Vector 278_2" 
                d="M595 290L600 295L605 290" 
                stroke="#3B84F7" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                variants={arrowAnimation}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            />
            <motion.path 
                id="Vector 279_2" 
                d="M595 302L600 307L605 302" 
                stroke="#3B84F7" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                variants={arrowAnimation}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            />
            </g>
            </mask>
            <g mask="url(#mask1_34_485)">
            <rect id="Rectangle 4477_2" x="593" y="144" width="14" height="179" fill="url(#paint1_linear_34_485)"/>
            </g>
            </motion.g>
            <motion.g id="Group 786">
            <mask id="mask2_34_485" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="372" y="114" width="12" height="31">
            <g id="Frame 843_3">
            <motion.path 
                id="Vector 276_3" 
                d="M373 115L378 120L383 115" 
                stroke="#3B84F7" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                variants={arrowAnimation}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            />
            <motion.path 
                id="Vector 277_3" 
                d="M373 127L378 132L383 127" 
                stroke="#3B84F7" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                variants={arrowAnimation}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            />
            <motion.path 
                id="Vector 280_3" 
                d="M373 139L378 144L383 139" 
                stroke="#3B84F7" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                variants={arrowAnimation}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            />
            </g>
            </mask>
            <g mask="url(#mask2_34_485)">
            <rect id="Rectangle 4477_3" x="371" y="113" width="14" height="142" fill="url(#paint2_linear_34_485)"/>
            </g>
            </motion.g>
            <motion.g id="Frame 818">
            <motion.rect 
                x="267.5" 
                y="158.5" 
                width="222" 
                height="110" 
                rx="7.5" 
                fill="#181622"
                variants={boxAnimation}
                initial="hidden"
                custom={{ x: 0, y: 0, delay: 0.6 }}
                animate={isInView ? "visible" : "hidden"}
            />
            <motion.rect 
                x="267.5" 
                y="158.5" 
                width="222" 
                height="110" 
                rx="7.5" 
                stroke="#33323E"
                variants={boxAnimation}
                initial="hidden"
                custom={{ x: 0, y: 0, delay: 0.6 }}
                animate={isInView ? "visible" : "hidden"}
            />
            <motion.g 
                id="Frame 734"
                variants={boxAnimation}
                initial="hidden"
                custom={{ x: 0, y: 0, delay: 0.6 }}
                animate={isInView ? "visible" : "hidden"}
            >
            <g id="Ellipse 246" filter="url(#filter0_d_34_485)">
            <circle cx="292" cy="185" r="7" fill="#33323E"/>
            <circle cx="292" cy="185" r="7.5" stroke="#5B596E"/>
            </g>
            <text fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} className="font-sora text-sm font-semibold" letterSpacing="0em"><tspan x="313" y="189.76">{t.content.processFlow.steps.roleIdentification.title}</tspan></text>
            </motion.g>
            <motion.text 
                fill="#807F8C" 
                xmlSpace="preserve" 
                style={{whiteSpace: 'pre'}} 
                className="font-sora text-xs" 
                letterSpacing="0em"
                variants={boxAnimation}
                initial="hidden"
                custom={{ x: 0, y: 0, delay: 0.6 }}
                animate={isInView ? "visible" : "hidden"}
            >
                <tspan x="285" y="217.58">{t.content.processFlow.steps.roleIdentification.description.line1} </tspan>
                <tspan x="285" y="232.58">{t.content.processFlow.steps.roleIdentification.description.line2} </tspan>
                <tspan x="285" y="247.58">{t.content.processFlow.steps.roleIdentification.description.line3}</tspan>
            </motion.text>
            </motion.g>
            <motion.g id="Frame 819">
            <motion.rect 
                x="46.5" 
                y="326.5" 
                width="222" 
                height="110" 
                rx="7.5" 
                fill="#181622"
                variants={boxAnimation}
                initial="hidden"
                custom={{ x: 0, y: 0, delay: 1.0 }}
                animate={isInView ? "visible" : "hidden"}
            />
            <motion.rect 
                x="46.5" 
                y="326.5" 
                width="222" 
                height="110" 
                rx="7.5" 
                stroke="#33323E"
                variants={boxAnimation}
                initial="hidden"
                custom={{ x: 0, y: 0, delay: 1.0 }}
                animate={isInView ? "visible" : "hidden"}
            />
            <motion.g 
                id="Frame 734_2"
                variants={boxAnimation}
                initial="hidden"
                custom={{ x: 0, y: 0, delay: 1.0 }}
                animate={isInView ? "visible" : "hidden"}
            >
            <g id="Ellipse 246_2" filter="url(#filter1_d_34_485)">
            <circle cx="71" cy="353" r="7" fill="#33323E"/>
            <circle cx="71" cy="353" r="7.5" stroke="#5B596E"/>
            </g>
            <text fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} className="font-sora text-sm font-semibold" letterSpacing="0em"><tspan x="92" y="357.76">{t.content.processFlow.steps.initialAnalysis.title}</tspan></text>
            </motion.g>
            <motion.text 
                fill="#807F8C" 
                xmlSpace="preserve" 
                style={{whiteSpace: 'pre'}} 
                className="font-sora text-xs" 
                letterSpacing="0em"
                variants={boxAnimation}
                initial="hidden"
                custom={{ x: 0, y: 0, delay: 1.0 }}
                animate={isInView ? "visible" : "hidden"}
            >
                <tspan x="64" y="385.58">{t.content.processFlow.steps.initialAnalysis.description.line1} </tspan>
                <tspan x="64" y="400.58">{t.content.processFlow.steps.initialAnalysis.description.line2} </tspan>
                <tspan x="64" y="415.58">{t.content.processFlow.steps.initialAnalysis.description.line3}</tspan>
            </motion.text>
            </motion.g>
            <motion.g id="Frame 820">
            <motion.rect 
                x="488.5" 
                y="300.5" 
                width="222" 
                height="110" 
                rx="7.5" 
                fill="#181622"
                variants={boxAnimation}
                initial="hidden"
                custom={{ x: 0, y: 0, delay: 1.4 }}
                animate={isInView ? "visible" : "hidden"}
            />
            <motion.rect 
                x="488.5" 
                y="300.5" 
                width="222" 
                height="110" 
                rx="7.5" 
                stroke="#33323E"
                variants={boxAnimation}
                initial="hidden"
                custom={{ x: 0, y: 0, delay: 1.4 }}
                animate={isInView ? "visible" : "hidden"}
            />
            <motion.g 
                id="Frame 734_3"
                variants={boxAnimation}
                initial="hidden"
                custom={{ x: 0, y: 0, delay: 1.4 }}
                animate={isInView ? "visible" : "hidden"}
            >
            <g id="Ellipse 246_3" filter="url(#filter2_d_34_485)">
            <circle cx="513" cy="327" r="7" fill="#33323E"/>
            <circle cx="513" cy="327" r="7.5" stroke="#5B596E"/>
            </g>
            <text fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} className="font-sora text-sm font-semibold" letterSpacing="0em"><tspan x="534" y="331.76">{t.content.processFlow.steps.workflowMapping.title}</tspan></text>
            </motion.g>
            <motion.text 
                fill="#807F8C" 
                xmlSpace="preserve" 
                style={{whiteSpace: 'pre'}} 
                className="font-sora text-xs" 
                letterSpacing="0em"
                variants={boxAnimation}
                initial="hidden"
                custom={{ x: 0, y: 0, delay: 1.4 }}
                animate={isInView ? "visible" : "hidden"}
            >
                <tspan x="506" y="359.58">{t.content.processFlow.steps.workflowMapping.description.line1} </tspan>
                <tspan x="506" y="374.58">{t.content.processFlow.steps.workflowMapping.description.line2} </tspan>
                <tspan x="506" y="389.58">{t.content.processFlow.steps.workflowMapping.description.line3}</tspan>
            </motion.text>
            </motion.g>
            <motion.g id="Frame 821">
            <motion.rect 
                x="488.5" 
                y="442.5" 
                width="222" 
                height="110" 
                rx="7.5" 
                fill="#181622"
                variants={boxAnimation}
                initial="hidden"
                custom={{ x: 0, y: 0, delay: 1.8 }}
                animate={isInView ? "visible" : "hidden"}
            />
            <motion.rect 
                x="488.5" 
                y="442.5" 
                width="222" 
                height="110" 
                rx="7.5" 
                stroke="#33323E"
                variants={boxAnimation}
                initial="hidden"
                custom={{ x: 0, y: 0, delay: 1.8 }}
                animate={isInView ? "visible" : "hidden"}
            />
            <motion.g 
                id="Frame 734_4"
                variants={boxAnimation}
                initial="hidden"
                custom={{ x: 0, y: 0, delay: 1.8 }}
                animate={isInView ? "visible" : "hidden"}
            >
            <g id="Ellipse 246_4" filter="url(#filter3_d_34_485)">
            <circle cx="513" cy="469" r="7" fill="#33323E"/>
            <circle cx="513" cy="469" r="7.5" stroke="#5B596E"/>
            </g>
            <text fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} className="font-sora text-sm font-semibold" letterSpacing="0em"><tspan x="534" y="473.76">{t.content.processFlow.steps.bottlenecksHurdles.title}</tspan></text>
            </motion.g>
            <motion.text 
                fill="#807F8C" 
                xmlSpace="preserve" 
                style={{whiteSpace: 'pre'}} 
                className="font-sora text-xs" 
                letterSpacing="0em"
                variants={boxAnimation}
                initial="hidden"
                custom={{ x: 0, y: 0, delay: 1.8 }}
                animate={isInView ? "visible" : "hidden"}
            >
                <tspan x="506" y="501.58">{t.content.processFlow.steps.bottlenecksHurdles.description.line1} </tspan>
                <tspan x="506" y="516.58">{t.content.processFlow.steps.bottlenecksHurdles.description.line2} </tspan>
                <tspan x="506" y="531.58">{t.content.processFlow.steps.bottlenecksHurdles.description.line3}</tspan>
            </motion.text>
            </motion.g>
            <motion.g id="Frame 822">
            <motion.rect 
                x="211.5" 
                y="584.5" 
                width="246" 
                height="110" 
                rx="7.5" 
                fill="#181622"
                variants={boxAnimation}
                initial="hidden"
                custom={{ x: 0, y: 0, delay: 2.2 }}
                animate={isInView ? "visible" : "hidden"}
            />
            <motion.rect 
                x="211.5" 
                y="584.5" 
                width="246" 
                height="110" 
                rx="7.5" 
                stroke="#33323E"
                variants={boxAnimation}
                initial="hidden"
                custom={{ x: 0, y: 0, delay: 2.2 }}
                animate={isInView ? "visible" : "hidden"}
            />
            <motion.g 
                id="Frame 734_5"
                variants={boxAnimation}
                initial="hidden"
                custom={{ x: 0, y: 0, delay: 2.2 }}
                animate={isInView ? "visible" : "hidden"}
            >
            <g id="Icon / Check circle">
            <g id="Ellipse 246_5" filter="url(#filter4_d_34_485)">
            <circle cx="236.006" cy="611.002" r="7" fill="#33323E"/>
            <circle cx="236.006" cy="611.002" r="7.5" stroke="#5B596E"/>
            </g>
            <g id="Group 790">
            <path id="Vector_3_2" d="M243.001 610.358V611.003C242.999 612.512 242.511 613.981 241.608 615.19C240.703 616.399 239.433 617.283 237.986 617.712C236.538 618.14 234.991 618.088 233.574 617.565C232.158 617.043 230.949 616.075 230.127 614.808C229.306 613.542 228.916 612.044 229.015 610.538C229.115 609.031 229.698 607.597 230.679 606.449C231.66 605.303 232.984 604.503 234.457 604.17C235.93 603.837 237.47 603.989 238.849 604.604" stroke="#35FFA1" strokeWidth="1.1625" strokeLinecap="round" strokeLinejoin="round"/>
            <path id="Vector_4" d="M243.001 605.402L236.001 612.41L233.9 610.309" stroke="#35FFA1" strokeWidth="1.1625" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            </g>
            <text fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} className="font-sora text-sm font-semibold" letterSpacing="0em"><tspan x="257.006" y="615.76">{t.content.processFlow.steps.analysisReport.title}</tspan></text>
            </motion.g>
            <motion.g 
                id="Detaillierter Bericht mit allen Rollen, Workflows, Problemen und Optimierungsvorschl&#195;&#164;gen."
                variants={boxAnimation}
                initial="hidden"
                custom={{ x: 0, y: 0, delay: 2.2 }}
                animate={isInView ? "visible" : "hidden"}
            >
            <text fill="#807F8C" xmlSpace="preserve" style={{whiteSpace: 'pre'}} className="font-sora text-xs" letterSpacing="0em"><tspan x="229" y="643.58">{t.content.processFlow.steps.analysisReport.description.line1} </tspan><tspan x="229" y="658.58">{t.content.processFlow.steps.analysisReport.description.line2} </tspan><tspan x="392.266" y="673.58">.</tspan></text>
            <text fill="#807F8C" xmlSpace="preserve" style={{whiteSpace: 'pre'}} className="font-sora text-xs font-bold" letterSpacing="0em"><tspan x="229" y="673.58">{t.content.processFlow.steps.analysisReport.description.line3}</tspan></text>
            </motion.g>
            </motion.g>
            <motion.g 
                id="Group 782"
                variants={iconAnimation}
                initial="hidden"
                custom={{ scale: 1, delay: 2.6 }}
                animate={isInView ? "visible" : "hidden"}
            >
            <circle id="Ellipse 263" cx="378" cy="77" r="25.5" fill="#181622" stroke="#3B84F7"/>
            <g id="Frame 751">
            <g id="Group 780">
            <circle id="Ellipse 65" cx="375.601" cy="74.6012" r="9.60115" stroke="#3B84F7" strokeWidth="2"/>
            <path id="Vector 109" d="M390 89L385.199 84.1995" stroke="#3B84F7" strokeWidth="2" strokeLinecap="round"/>
            </g>
            </g>
            </motion.g>
            <motion.g 
                id="Group 789"
                variants={iconAnimation}
                initial="hidden"
                custom={{ scale: 1, delay: 2.8 }}
                animate={isInView ? "visible" : "hidden"}
            >
            <circle id="Ellipse 263_2" cx="378" cy="343" r="25.5" fill="#181622" stroke="#3B84F7"/>
            <g id="Frame_2">
            <path id="Vector_2_2" d="M374.333 342.667L376.999 345.333L382.333 340M389 344.001C389 350.667 384.333 354.001 378.787 355.934C378.495 356.032 378.18 356.028 377.893 355.921C372.333 354.001 367.666 350.667 367.666 344.001V334.666C367.666 334.313 367.807 333.974 368.056 333.723C368.306 333.473 368.646 333.333 368.999 333.333C371.666 333.333 374.999 331.732 377.319 329.706C377.602 329.465 377.962 329.332 378.333 329.332C378.704 329.332 379.063 329.465 379.347 329.706C381.68 331.746 385 333.333 387.667 333.333C388.02 333.333 388.36 333.473 388.61 333.723C388.859 333.974 389 334.313 389 334.666V344.001Z" stroke="#5E8EED" strokeWidth="1.5"/>
            </g>
            </motion.g>
            <motion.g 
                id="Group 784"
                variants={iconAnimation}
                initial="hidden"
                custom={{ scale: 1, delay: 3.0 }}
                animate={isInView ? "visible" : "hidden"}
            >
            <circle id="Ellipse 263_3" cx="600" cy="109" r="25.5" fill="#181622" stroke="#3B84F7"/>
            <g id="Frame 751_2">
            <g id="Group 780_2">
            <circle id="Ellipse 65_2" cx="597.601" cy="106.601" r="9.60115" stroke="#3B84F7" strokeWidth="2"/>
            <path id="Vector 109_2" d="M612 121L607.199 116.199" stroke="#3B84F7" strokeWidth="2" strokeLinecap="round"/>
            </g>
            </g>
            </motion.g>
            <motion.g 
                id="Group 783"
                variants={iconAnimation}
                initial="hidden"
                custom={{ scale: 1, delay: 3.2 }}
                animate={isInView ? "visible" : "hidden"}
            >
            <circle id="Ellipse 263_4" cx="156" cy="109" r="25.5" fill="#181622" stroke="#3B84F7"/>
            <g id="Frame 751_3">
            <g id="Group 780_3">
            <circle id="Ellipse 65_3" cx="153.601" cy="106.601" r="9.60115" stroke="#3B84F7" strokeWidth="2"/>
            <path id="Vector 109_3" d="M168 121L163.199 116.199" stroke="#3B84F7" strokeWidth="2" strokeLinecap="round"/>
            </g>
            </g>
            </motion.g>
            </g>
            <defs>
            <filter id="filter0_d_34_485" x="264" y="157" width="56" height="56" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="10"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.580769 0 0 0 0 0.580769 0 0 0 0 0.580769 0 0 0 0.5 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_34_485"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_34_485" result="shape"/>
            </filter>
            <filter id="filter1_d_34_485" x="43" y="325" width="56" height="56" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="10"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.580769 0 0 0 0 0.580769 0 0 0 0 0.580769 0 0 0 0.5 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_34_485"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_34_485" result="shape"/>
            </filter>
            <filter id="filter2_d_34_485" x="485" y="299" width="56" height="56" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="10"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.580769 0 0 0 0 0.580769 0 0 0 0 0.580769 0 0 0 0.5 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_34_485"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_34_485" result="shape"/>
            </filter>
            <filter id="filter3_d_34_485" x="485" y="441" width="56" height="56" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="10"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.580769 0 0 0 0 0.580769 0 0 0 0 0.580769 0 0 0 0.5 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_34_485"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_34_485" result="shape"/>
            </filter>
            <filter id="filter4_d_34_485" x="208.006" y="583.002" width="56" height="56" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="10"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.239216 0 0 0 0 1 0 0 0 0 0.631373 0 0 0 0.5 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_34_485"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_34_485" result="shape"/>
            </filter>
            <linearGradient id="paint0_linear_34_485" x1="157" y1="147" x2="157" y2="326" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3B84F7" stopOpacity="0.5"/>
            <stop offset="0.179486" stopColor="#3B84F7"/>
            <stop offset="0.213655" stopColor="#3B84F7" stopOpacity="0.1"/>
            <stop offset="1" stopColor="#3B84F7" stopOpacity="0.3"/>
            </linearGradient>
            <linearGradient id="paint1_linear_34_485" x1="600" y1="144" x2="600" y2="323" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3B84F7" stopOpacity="0.5"/>
            <stop offset="0.179486" stopColor="#3B84F7"/>
            <stop offset="0.213655" stopColor="#3B84F7" stopOpacity="0.1"/>
            <stop offset="1" stopColor="#3B84F7" stopOpacity="0.3"/>
            </linearGradient>
            <linearGradient id="paint2_linear_34_485" x1="378" y1="113" x2="378" y2="255" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3B84F7"/>
            <stop offset="0.264423" stopColor="#3B84F7"/>
            <stop offset="0.329658" stopColor="#3B84F7" stopOpacity="0.4"/>
            <stop offset="0.581731" stopColor="#3B84F7" stopOpacity="0.2"/>
            <stop offset="1" stopColor="#3B84F7" stopOpacity="0.2"/>
            </linearGradient>
            </defs>
        </svg>
    );
}

