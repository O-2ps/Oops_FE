'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname, useSearchParams } from 'next/navigation';
import React from 'react';

export default function TransitionProvider({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const direction = searchParams.get('dir') || 'next';

    const variants = {
        enter: (dir: string) => ({
            x: dir === 'next' ? '100%' : '-100%',
            opacity: 0
        }),
        center: {
            x: 0,
            opacity: 1
        },
        exit: (dir: string) => ({
            x: dir === 'next' ? '-100%' : '100%',
            opacity: 0
        })
    };

    return (
        <AnimatePresence mode="wait" initial={false} custom={direction}>
            <motion.div
                key={pathname}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                }}
                style={{ width: '100%', height: '100%' }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
}
