'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Waves, Volleyball, Crown, Wind } from 'lucide-react';

const Sports = () => {
  const sports = [
    {
      title: 'Swimming',
      level: 'Expert',
      description: 'Competitive swimmer with years of dedicated training and high-level performance.',
      icon: Waves,
      color: 'text-blue-500',
      bg: 'bg-blue-500/10',
    },
    {
      title: 'Volleyball',
      level: 'Expertise',
      description: 'Skilled volleyball player with a strong understanding of team dynamics and strategy.',
      icon: Volleyball,
      color: 'text-yellow-500',
      bg: 'bg-yellow-500/10',
    },
    {
      title: 'Chess',
      level: 'Enthusiast',
      description: 'Passionate chess player who enjoys strategic thinking and mental challenges.',
      icon: Crown,
      color: 'text-purple-500',
      bg: 'bg-purple-500/10',
    },
    {
      title: 'Badminton',
      level: 'Enthusiast',
      description: 'Enjoy playing badminton for fitness and agility, always up for a quick match.',
      icon: Wind,
      color: 'text-green-500',
      bg: 'bg-green-500/10',
    },
  ];

  return (
    <div className="mx-auto w-full">
      <div className="mb-8">
        <h2 className="text-foreground text-3xl font-semibold md:text-4xl">
          My Sporting & Hobbies
        </h2>
        <p className="mt-4 text-muted-foreground">
          Beyond development, I am deeply committed to sports and strategic games. 
          Here are the areas where I excel and find my passion.
        </p>
      </div>
      
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {sports.map((sport, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card p-6 transition-all hover:shadow-lg"
          >
            <div className={`mb-4 inline-flex rounded-xl ${sport.bg} p-3`}>
              <sport.icon className={`h-6 w-6 ${sport.color}`} />
            </div>
            
            <h3 className="mb-1 text-lg font-semibold">{sport.title}</h3>
            <span className="mb-3 inline-block rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">
              {sport.level}
            </span>
            
            <p className="text-sm text-muted-foreground">
              {sport.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Sports;