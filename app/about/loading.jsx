import React from 'react';
import { raleway } from '../font';
import Image from 'next/image';
import texture from '@/public/icons/texture.png';

export default function Loading() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white">
            <div className="relative">
                <div className="animate-pulse bg-gray-200 rounded-lg h-16 w-64 mb-8"></div>
                <Image 
                    src={texture} 
                    width={80} 
                    alt="texture" 
                    className="absolute -top-10 -left-10 opacity-30"
                />
            </div>
            
            <div className="w-24 h-24 border-t-4 border-primary rounded-full animate-spin mb-8"></div>
            
            <h2 className={`text-2xl text-gray-600 ${raleway.className} font-semibold`}>
                Loading content...
            </h2>
            
            <div className="mt-12 grid grid-cols-3 gap-4">
                {[...Array(3)].map((_, i) => (
                    <div key={i} className="animate-pulse flex space-x-4">
                        <div className="rounded-lg bg-gray-200 h-12 w-12"></div>
                        <div className="flex-1 space-y-2 py-1">
                            <div className="h-4 bg-gray-200 rounded w-36"></div>
                            <div className="h-3 bg-gray-200 rounded w-24"></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}